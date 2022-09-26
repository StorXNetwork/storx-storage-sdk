import axios from 'axios';
import { baseUrl } from '../constants';
import { validateApiKeys } from '../util/validators';
import { handleError } from '../util/errorResponse';

export default function getFolderById(apiKey, secretApiKey, body) {
  validateApiKeys(apiKey, secretApiKey);

  let url = `${baseUrl}/storage/folder/${body.folderId}`;

  if (body.teamId) {
    url = url + `/${body.teamId}`;
  }

  var config = {
    method: 'get',
    url: url,
    headers: {
      'x-api-access-key': body.apiAccessKey,
    },
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
