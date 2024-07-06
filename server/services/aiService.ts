import { startGeneration } from '@/models/GeminiModel';
import type { Content } from '@google/generative-ai';
import { createError } from '@/middleware/errorHandling';
import log4js from 'log4js';

const logger = log4js.getLogger('[AI Service]');

/**
 * Creates AI service to interact with generative AI models.
 * @returns {object} AI service with methods to generate responses.
 */
const createAIService = () => {
  /**
   * Generates the initial response from the AI model based on user input.
   */
  const generateInitialResponse = async (
    userInput: string,
  ): Promise<string> => {
    const history: Content[] = [];
    try {
      logger.debug('Starting to generate initial response', userInput);

      if (!userInput) {
        logger.error('Invalid user input');
        throw new Error('Invalid user input');
      }

      const response = await startGeneration(history, userInput);
      logger.debug('Generated initial response successfully', response);

      return response;
    } catch (error) {
      logger.error('Error generating response from AI', error);
      const methodError = createError(
        'generateInitialResponse',
        'AIService',
        'Error generating response from AI.',
        error,
      );
      throw methodError;
    }
  };

  return { generateInitialResponse };
};

export default createAIService;
