import axios from 'axios';
import { baseUrl } from '../constants';
import { validateApiKeys } from '../util/validators';
import { handleError } from '../util/errorResponse';

export default function downloadEntityByToken(apiKey, secretApiKey, body) {
  validateApiKeys(apiKey, secretApiKey);

  let url = `${baseUrl}/storage/share/${body.token}`;

  var config = {
    method: 'get',
    url: url,
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        if (response.status !== 200) {
          reject(
            new Error(
              `unknown server response while authenticating: ${response}`,
            ),
          );
        }
        resolve({
          result: response.data,
        });
      })
      .catch(function (error) {
        const formattedError = handleError(error);
        reject(formattedError);
      });
  });
}
