import axios from 'axios';
import { baseUrl } from '../constants';
import { validateApiKeys } from '../util/validators';
import { handleError } from '../util/errorResponse';

export default function getFileById(apiKey, secretApiKey, body) {
  validateApiKeys(apiKey, secretApiKey);

  return {
    result: {},
  };
}
