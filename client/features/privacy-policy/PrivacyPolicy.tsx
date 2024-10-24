import React from 'react';
import useDocumentTitle from '@hooks/useDocumentTitle';
import { Box, Typography, Link, List, ListItem, Divider } from '@mui/material';
import styles from '@styles/PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  const lastUpdatedDate = 'April 29, 2024';
  const contactEmail = 'info@linkta.io';
  const socialMediaServices = ['Google', 'Github'];

  useDocumentTitle('Privacy Policy');

  return (
    <Box className={styles['privacy-policy-container']}>
      <Box
        component='section'
        className={styles['section-body']}
      >
        <Typography
          variant='h5'
          className={styles['section-header']}
        >
          Privacy Policy
        </Typography>
        <Typography className={styles['section-paragraph']}>
          Last updated: {lastUpdatedDate}
        </Typography>
        <Typography className={styles['section-paragraph']}>
          This Privacy Policy describes Our policies and procedures on the
          collection, use, and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.
        </Typography>
        <Typography className={styles['section-paragraph']}>
          We use Your Personal data to provide and improve the Service. By using
          the Service, You agree to the collection and use of information in
          accordance with this Privacy Policy. This Privacy Policy has been
          created with the help of the{' '}
          <Link
            href='https://www.privacypolicies.com/privacy-policy-generator/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Opens Privacy Policy Generator in a new tab'
            className={styles['link-text']}
          >
            Privacy Policy Generator
          </Link>
          .
        </Typography>
      </Box>

      <Divider className={styles['divider']} />

      <Box
        component='section'
        className={styles['section-body']}
      >
        <Typography
          variant='h6'
          className={styles['section-header']}
        >
          Interpretation and Definitions
        </Typography>
        <Typography
          variant='h6'
          className={styles['section-subheader']}
        >
          Interpretation
        </Typography>
        <Typography className={styles['section-paragraph']}>
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </Typography>
        <Typography
          variant='h6'
          className={styles['section-subheader']}
        >
          Definitions
        </Typography>
        <Typography className={styles['section-paragraph']}>
          For the purposes of this Privacy Policy:
        </Typography>

        <List className={styles.list}>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>Account:</strong> means a unique account created for You
              to access our Service or parts of our Service.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>Affiliate:</strong> means an entity that controls, is
              controlled by, or is under common control with a party, where
              &quot;control&quot; means ownership of 50% or more of the shares,
              equity interest or other securities entitled to vote for election
              of directors or other managing authority.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>Company:</strong> (referred to as either &quot;the
              Company&quot;, &quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot;
              in this Agreement) refers to Linkta L.L.C.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>Cookies:</strong> are small files that are placed on Your
              computer, mobile device, or any other device by a website,
              containing the details of Your browsing history on that website
              among its many uses.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>Country:</strong> refers to Washington, United States.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>Device:</strong> means any device that can access the
              Service such as a computer, a cellphone, or a digital tablet.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>Personal Data:</strong> is any information that relates to
              an identified or identifiable individual.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>Service:</strong> refers to the Website.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>Service Provider:</strong> means any natural or legal
              person who processes the data on behalf of the Company. It refers
              to third-party companies or individuals employed by the Company to
              facilitate the Service, to provide the Service on behalf of the
              Company, to perform services related to the Service, or to assist
              the Company in analyzing how the Service is used.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>Third-party Social Media Service:</strong> refers to any
              website or any social network website through which a User can log
              in or create an account to use the Service.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>Usage Data:</strong> refers to data collected
              automatically, either generated by the use of the Service or from
              the Service infrastructure itself (for example, the duration of a
              page visit).
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>Website:</strong> refers to Linkta, accessible from{' '}
              <Link
                href='http://linkta.io'
                rel='external nofollow noopener noreferrer'
                target='_blank'
                aria-label="Visit Linkta's official website"
                className={styles['link-text']}
              >
                linkta.io
              </Link>
              .
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>You:</strong> means the individual accessing or using the
              Service, or the company, or other legal entity on behalf of which
              such individual is accessing or using the Service, as applicable.
            </Typography>
          </ListItem>
        </List>
      </Box>

      <Divider className={styles['divider']} />

      <Box
        component='section'
        className={styles['section-body']}
      >
        <Typography
          variant='h6'
          className={styles['section-header']}
        >
          Collecting and Using Your Personal Data
        </Typography>
        <Typography
          variant='h6'
          className={styles['section-tertiary-header']}
        >
          Personal Data
        </Typography>
        <Typography className={styles['section-paragraph']}>
          While using Our Service, We may ask You to provide Us with certain
          personally identifiable information that can be used to contact or
          identify You. Personally identifiable information may include, but is
          not limited to:
        </Typography>

        <List className={styles.list}>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>Email address</Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>First name and last name</Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>Usage Data</Typography>
          </ListItem>
        </List>

        <Typography
          variant='h6'
          className={styles['section-tertiary-header']}
        >
          Usage Data
        </Typography>
        <Typography className={styles['section-paragraph']}>
          Usage Data is collected automatically when using the Service. Usage
          Data may include information such as Your Device&apos;s Internet
          Protocol address (e.g. IP address), browser type, browser version, the
          pages of our Service that You visit, the time and date of Your visit,
          the time spent on those pages, unique device identifiers and other
          diagnostic data.
        </Typography>
        <Typography className={styles['section-paragraph']}>
          When You access the Service by or through a mobile device, We may
          collect certain information automatically, including, but not limited
          to, the type of mobile device You use, Your mobile device unique ID,
          the IP address of Your mobile device, Your mobile operating system,
          the type of mobile Internet browser You use, unique device identifiers
          and other diagnostic data.
        </Typography>
        <Typography className={styles['section-paragraph']}>
          We may also collect information that Your browser sends whenever You
          visit our Service or when You access the Service by or through a
          mobile device.
        </Typography>
      </Box>

      <Divider className={styles['divider']} />

      <Box
        component='section'
        className={styles['section-body']}
      >
        <Typography
          variant='h6'
          className={styles['section-tertiary-header']}
        >
          Information from Third-Party Social Media Services
        </Typography>
        <Typography className={styles['section-paragraph']}>
          The Company allows You to create an account and log in to use the
          Service through the following Third-party Social Media Services:
        </Typography>

        <List className={styles.list}>
          {socialMediaServices.map((service, index) => (
            <ListItem
              className={styles['list-item']}
              key={index}
            >
              <Typography variant='body1'>{service}</Typography>
            </ListItem>
          ))}
        </List>

        <Typography className={styles['section-paragraph']}>
          If You decide to register through or otherwise grant us access to a
          Third-Party Social Media Service, We may collect Personal data that is
          already associated with Your Third-Party Social Media Service&apos;s
          account, such as Your name, Your email address, Your activities or
          Your contact list associated with that account.
        </Typography>
        <Typography className={styles['section-paragraph']}>
          You may also have the option of sharing additional information with
          the Company through Your Third-Party Social Media Service&apos;s
          account. If You choose to provide such information and Personal Data,
          during registration or otherwise, You are giving the Company
          permission to use, share, and store it in a manner consistent with
          this Privacy Policy.
        </Typography>
      </Box>

      <Divider className={styles['divider']} />

      <Box
        component='section'
        className={styles['section-body']}
      >
        <Typography
          variant='h6'
          className={styles['section-tertiary-header']}
        >
          Tracking Technologies and Cookies
        </Typography>
        <Typography className={styles['section-paragraph']}>
          We use Cookies and similar tracking technologies to track the activity
          on Our Service and store certain information. Tracking technologies
          used are beacons, tags, and scripts to collect and track information
          and to improve and analyze Our Service. The technologies We use may
          include:
        </Typography>

        <List className={styles.list}>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>Cookies or Browser Cookies:</strong> A cookie is a small
              file placed on Your Device. You can instruct Your browser to
              refuse all Cookies or to indicate when a Cookie is being sent.
              However, if You do not accept Cookies, You may not be able to use
              some parts of our Service. Unless you have adjusted Your browser
              setting so that it will refuse Cookies, our Service may use
              Cookies.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>Web Beacons:</strong> Certain sections of our Service and
              our emails may contain small electronic files known as web beacons
              (also referred to as clear gifs, pixel tags, and single-pixel
              gifs) that permit the Company, for example, to count users who
              have visited those pages or opened an email and for other related
              website statistics (for example, recording the popularity of a
              certain section and verifying system and server integrity).
            </Typography>
          </ListItem>
        </List>
      </Box>

      <Divider className={styles['divider']} />
      <Box
        component='section'
        className={styles['section-body']}
      >
        <Typography className={styles['section-paragraph']}>
          Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies.
          Persistent Cookies remain on Your personal computer or mobile device
          when You go offline, while Session Cookies are deleted as soon as You
          close Your web browser. Learn more about cookies on the{' '}
          <Link
            href='https://www.privacypolicies.com/blog/privacy-policy-template/#Use_Of_Cookies_Log_Files_And_Tracking'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Learn more about cookies on the Privacy Policies website'
            className={styles['link-text']}
          >
            Privacy Policies website
          </Link>{' '}
          article.
        </Typography>
        <Typography className={styles['section-paragraph']}>
          We use both Session and Persistent Cookies for the purposes set out
          below:
        </Typography>

        <List className={styles['list']}>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>Necessary / Essential Cookies</strong>
            </Typography>
            <Typography className={styles['section-paragraph']}>
              Type: Session Cookies
            </Typography>
            <Typography className={styles['section-paragraph']}>
              Administered by: Us
            </Typography>
            <Typography className={styles['section-paragraph']}>
              Purpose: These Cookies are essential to provide You with services
              available through the Website and to enable You to use some of its
              features. They help to authenticate users and prevent fraudulent
              use of user accounts. Without these Cookies, the services that You
              have asked for cannot be provided, and We only use these Cookies
              to provide You with those services.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>Cookies Policy / Notice Acceptance Cookies</strong>
            </Typography>
            <Typography className={styles['section-paragraph']}>
              Type: Persistent Cookies
            </Typography>
            <Typography className={styles['section-paragraph']}>
              Administered by: Us
            </Typography>
            <Typography className={styles['section-paragraph']}>
              Purpose: These Cookies identify if users have accepted the use of
              cookies on the Website.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>Functionality Cookies</strong>
            </Typography>
            <Typography className={styles['section-paragraph']}>
              Type: Persistent Cookies
            </Typography>
            <Typography className={styles['section-paragraph']}>
              Administered by: Us
            </Typography>
            <Typography className={styles['section-paragraph']}>
              Purpose: These Cookies allow us to remember choices You make when
              You use the Website, such as remembering your login details or
              language preference. The purpose of these Cookies is to provide
              You with a more personal experience and to avoid You having to
              re-enter your preferences every time You use the Website.
            </Typography>
          </ListItem>
        </List>

        <Typography className={styles['section-paragraph']}>
          For more information about the cookies we use and your choices
          regarding cookies, please visit our Cookies Policy or the Cookies
          section of our Privacy Policy.
        </Typography>

        <Typography
          variant='h6'
          className={styles['section-subheader']}
        >
          Use of Your Personal Data
        </Typography>

        <Typography className={styles['section-paragraph']}>
          The Company may use Personal Data for the following purposes:
        </Typography>

        <List className={styles['list']}>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>To provide and maintain our Service</strong>, including to
              monitor the usage of our Service.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>To manage Your Account:</strong> to manage Your
              registration as a user of the Service. The Personal Data You
              provide can give You access to different functionalities of the
              Service that are available to You as a registered user.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>For the performance of a contract:</strong> the
              development, compliance, and undertaking of the purchase contract
              for the products, items, or services You have purchased or of any
              other contract with Us through the Service.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>To contact You:</strong> To contact You by email,
              telephone calls, SMS, or other equivalent forms of electronic
              communication, such as a mobile application&apos;s push
              notifications regarding updates or informative communications
              related to the functionalities, products, or contracted services,
              including the security updates, when necessary or reasonable for
              their implementation.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>To provide You</strong> with news, special offers, and
              general information about other goods, services, and events which
              we offer that are similar to those that you have already purchased
              or enquired about unless You have opted not to receive such
              information.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>To manage Your requests:</strong> To attend and manage
              Your requests to Us.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>For business transfers:</strong> We may use Your
              information to evaluate or conduct a merger, divestiture,
              restructuring, reorganization, dissolution, or other sale or
              transfer of some or all of Our assets, whether as a going concern
              or as part of bankruptcy, liquidation, or similar proceeding, in
              which Personal Data held by Us about our Service users is among
              the assets transferred.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>For other purposes:</strong> We may use Your information
              for other purposes, such as data analysis, identifying usage
              trends, determining the effectiveness of our promotional campaigns
              and to evaluate and improve our Service, products, services,
              marketing, and your experience.
            </Typography>
          </ListItem>
        </List>

        <Typography className={styles['section-paragraph']}>
          We may share Your personal information in the following situations:
        </Typography>

        <List className={styles['list']}>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>With Service Providers:</strong> We may share Your
              personal information with Service Providers to monitor and analyze
              the use of our Service, to contact You.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>For business transfers:</strong> We may share or transfer
              Your personal information in connection with, or during
              negotiations of, any merger, sale of Company assets, financing, or
              acquisition of all or a portion of Our business to another
              company.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>With Affiliates:</strong> We may share Your information
              with Our affiliates, in which case we will require those
              affiliates to honor this Privacy Policy. Affiliates include Our
              parent company and any other subsidiaries, joint venture partners,
              or other companies that We control or that are under common
              control with Us.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>With business partners:</strong> We may share Your
              information with Our business partners to offer You certain
              products, services, or promotions.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>With other users:</strong> When You share personal
              information or otherwise interact in the public areas with other
              users, such information may be viewed by all users and may be
              publicly distributed outside. If You interact with other users or
              register through a Third-Party Social Media Service, Your contacts
              on the Third-Party Social Media Service may see Your name,
              profile, pictures, and description of Your activity. Similarly,
              other users will be able to view descriptions of Your activity,
              communicate with You, and view Your profile.
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              <strong>With Your consent:</strong> We may disclose Your personal
              information for any other purpose with Your consent.
            </Typography>
          </ListItem>
        </List>

        <Typography
          variant='h6'
          className={styles['section-subheader']}
        >
          Retention of Your Personal Data
        </Typography>
        <Typography className={styles['section-paragraph']}>
          The Company will retain Your Personal Data only for as long as is
          necessary for the purposes set out in this Privacy Policy. We will
          retain and use Your Personal Data to the extent necessary to comply
          with our legal obligations (for example, if we are required to retain
          your data to comply with applicable laws), resolve disputes, and
          enforce our legal agreements and policies.
        </Typography>
        <Typography className={styles['section-paragraph']}>
          The Company will also retain Usage Data for internal analysis
          purposes. Usage Data is generally retained for a shorter period of
          time, except when this data is used to strengthen the security or to
          improve the functionality of Our Service, or We are legally obligated
          to retain this data for longer time periods.
        </Typography>
        <Typography
          variant='h6'
          className={styles['section-subheader']}
        >
          Transfer of Your Personal Data
        </Typography>
        <Typography className={styles['section-paragraph']}>
          Your information, including Personal Data, is processed at the
          Company&apos;s operating offices and in any other places where the
          parties involved in the processing are located. It means that this
          information may be transferred to — and maintained on — computers
          located outside of Your state, province, country, or other
          governmental jurisdiction where the data protection laws may differ
          from those from Your jurisdiction.
        </Typography>
        <Typography className={styles['section-paragraph']}>
          Your consent to this Privacy Policy followed by Your submission of
          such information represents Your agreement to that transfer.
        </Typography>
        <Typography className={styles['section-paragraph']}>
          The Company will take all steps reasonably necessary to ensure that
          Your data is treated securely and in accordance with this Privacy
          Policy and no transfer of Your Personal Data will take place to an
          organization or a country unless there are adequate controls in place
          including the security of Your data and other personal information.
        </Typography>
        <Typography
          variant='h6'
          className={styles['section-subheader']}
        >
          Delete Your Personal Data
        </Typography>
        <Typography className={styles['section-paragraph']}>
          You have the right to delete or request that We assist in deleting the
          Personal Data that We have collected about You.
        </Typography>
        <Typography className={styles['section-paragraph']}>
          Our Service may give You the ability to delete certain information
          about You from within the Service.
        </Typography>
        <Typography className={styles['section-paragraph']}>
          You may update, amend, or delete Your information at any time by
          signing in to Your Account, if you have one, and visiting the account
          settings section that allows you to manage Your personal information.
          You may also contact Us to request access to, correct, or delete any
          personal information that You have provided to Us.
        </Typography>
        <Typography className={styles['section-paragraph']}>
          Please note, however, that We may need to retain certain information
          when we have a legal obligation or lawful basis to do so.
        </Typography>
      </Box>
      <Divider className={styles['divider']} />
      <Box
        component='section'
        className={styles['section-body']}
      >
        <Typography
          variant='h6'
          className={styles['section-subheader']}
        >
          Disclosure of Your Personal Data
        </Typography>
        <Typography
          variant='h6'
          className={styles['section-tertiary-header']}
        >
          Business Transactions
        </Typography>
        <Typography className={styles['section-paragraph']}>
          If the Company is involved in a merger, acquisition or asset sale,
          Your Personal Data may be transferred. We will provide notice before
          Your Personal Data is transferred and becomes subject to a different
          Privacy Policy.
        </Typography>

        <Typography
          variant='h6'
          className={styles['section-tertiary-header']}
        >
          Law Enforcement
        </Typography>
        <Typography className={styles['section-paragraph']}>
          Under certain circumstances, the Company may be required to disclose
          Your Personal Data if required to do so by law or in response to valid
          requests by public authorities (e.g., a court or a government agency).
        </Typography>

        <Typography
          variant='h6'
          className={styles['section-tertiary-header']}
        >
          Other Legal Requirements
        </Typography>
        <Typography className={styles['section-paragraph']}>
          The Company may disclose Your Personal Data in the good faith belief
          that such action is necessary to:
        </Typography>

        <List className={styles['list']}>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              Comply with a legal obligation
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              Protect and defend the rights or property of the Company
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              Prevent or investigate possible wrongdoing in connection with the
              Service
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              Protect the personal safety of Users of the Service or the public
            </Typography>
          </ListItem>
          <ListItem className={styles['list-item']}>
            <Typography variant='body1'>
              Protect against legal liability
            </Typography>
          </ListItem>
        </List>

        <Typography
          variant='h6'
          className={styles['section-subheader']}
        >
          Security of Your Personal Data
        </Typography>
        <Typography className={styles['section-paragraph']}>
          The security of Your Personal Data is important to Us, but remember
          that no method of transmission over the Internet, or method of
          electronic storage is 100% secure. While We strive to use commercially
          acceptable means to protect Your Personal Data, We cannot guarantee
          its absolute security.
        </Typography>
      </Box>

      <Divider className={styles['divider']} />

      <Box
        component='section'
        className={styles['section-body']}
      >
        <Typography
          variant='h6'
          className={styles['section-header']}
        >
          Children&apos;s Privacy
        </Typography>
        <Typography className={styles['section-paragraph']}>
          Our Service does not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from anyone
          under the age of 13. If You are a parent or guardian and You are aware
          that Your child has provided Us with Personal Data, please contact Us.
          If We become aware that We have collected Personal Data from anyone
          under the age of 13 without verification of parental consent, We take
          steps to remove that information from Our servers.
        </Typography>
        <Typography className={styles['section-paragraph']}>
          If We need to rely on consent as a legal basis for processing Your
          information and Your country requires consent from a parent, We may
          require Your parent&apos;s consent before We collect and use that
          information.
        </Typography>
      </Box>

      <Divider className={styles['divider']} />

      <Box
        component='section'
        className={styles['section-body']}
      >
        <Typography
          variant='h6'
          className={styles['section-header']}
        >
          Links to Other Websites
        </Typography>
        <Typography className={styles['section-paragraph']}>
          Our Service may contain links to other websites that are not operated
          by Us. If You click on a third-party link, You will be directed to
          that third party&apos;s site. We strongly advise You to review the
          Privacy Policy of every site You visit.
        </Typography>
        <Typography className={styles['section-paragraph']}>
          We have no control over and assume no responsibility for the content,
          privacy policies, or practices of any third-party sites or services.
        </Typography>
      </Box>

      <Divider className={styles['divider']} />

      <Box
        component='aside'
        className={styles['section-body']}
      >
        <Typography
          variant='h6'
          className={styles['section-header']}
        >
          Changes to this Privacy Policy
        </Typography>
        <Typography className={styles['section-paragraph']}>
          We may update Our Privacy Policy from time to time. We will notify You
          of any changes by posting the new Privacy Policy on this page.
        </Typography>
        <Typography className={styles['section-paragraph']}>
          We will let You know via email and/or a prominent notice on Our
          Service, prior to the change becoming effective and update the
          &quot;Last updated&quot; date at the top of this Privacy Policy.
        </Typography>
        <Typography className={styles['section-paragraph']}>
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </Typography>
      </Box>

      <Box
        component='aside'
        className={styles['section-body']}
      >
        <Typography
          variant='h6'
          className={styles['section-header']}
        >
          Contact Us
        </Typography>
        <Typography className={styles['section-paragraph']}>
          If you have any questions about this Privacy Policy, You can contact
          us by email at{' '}
          <Link
            href={`mailto:${contactEmail}`}
            aria-label={`Email us at ${contactEmail}`}
            className={styles['link-text']}
          >
            {contactEmail}
          </Link>
          .
        </Typography>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
