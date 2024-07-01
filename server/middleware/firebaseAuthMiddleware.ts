import admin from 'firebase-admin';
import { initializeApp } from 'firebase-admin/app';
import type {
  Request as ExpressRequest,
  Response,
  NextFunction,
} from 'express';
import { getServiceAccountEnv } from '@utils/environment';
import log4js from 'log4js';

getServiceAccountEnv();

const { getLogger } = log4js;
const logger = getLogger('[USER AUTH]');

/**
 * The developer must create a new private key via the Firebase console
 * then create a local .env.service-account file with the following properties
 */
const serviceAccount = {
  projectId: process.env.PROJECT_ID,
  privateKey: process.env.PRIVATE_KEY,
  clientEmail: process.env.CLIENT_EMAIL,
};

initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

interface CustomRequest extends ExpressRequest {
  user?: {
    userId: string;
  };
}

const isAuthorized = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction,
) => {
  const idToken = req.headers.authorization;
  logger.debug('AUTH REQUEST HEADER: ', idToken);
  logger.debug('REQ.HEADERS: ', req.headers);

  /**
   * If the idToken is valid, the verifyIdToken() method will return a decoded token object.
   * This object contains the user's information, such as their uid and email address.
   */
  try {
    const verification = await admin.auth().verifyIdToken(idToken as string);
    logger.info("User's ID Token successfully verified!");

    req.user = {
      userId: verification.uid,
    };

    next();
  } catch (err) {
    logger.error(err);
    res.status(401).send('Failed to authenticate the user.');
  }
};

export default isAuthorized;