import axios from 'axios';
import { baseUrl } from '../constants';
import { validateApiKeys } from '../util/validators';
import { handleError } from '../util/errorResponse';

export default function deleteFileFromBucket(apiKey, secretApiKey, body) {
  validateApiKeys(apiKey, secretApiKey);

  var config = {
    method: 'delete',
    url: `${baseUrl}/storage/bucket/${body.bucketId}/file/${body.fileId}`,
    headers: {
      Authorization: body.token,
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
