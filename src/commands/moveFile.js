import axios from 'axios';
import { baseUrl } from '../constants';
import { validateApiKeys } from '../util/validators';
import { handleError } from '../util/errorResponse';
import qs from 'query-string';

export default function moveFile(apiKey, secretApiKey, body) {
  validateApiKeys(apiKey, secretApiKey);

  var data = qs.stringify({
    fileId: body.fileId,
    destination: body.destination,
  });

  let url = `${baseUrl}/storage/moveFile`;

  var config = {
    method: 'post',
    url: url,
    data: data,
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
