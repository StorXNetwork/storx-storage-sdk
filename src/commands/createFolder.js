import axios from 'axios';
import { baseUrl } from '../constants';
import { validateApiKeys } from '../util/validators';
import { handleError } from '../util/errorResponse';
import qs from 'query-string';

export default function createFolder(apiKey, secretApiKey, body) {
  validateApiKeys(apiKey, secretApiKey);

  var data = qs.stringify({
    folderName: body.folderName,
    parentFolderId: body.parentFolderId,
    teamId: body.teamId || '',
  });

  var config = {
    method: 'post',
    url: `${baseUrl}/storage/folder`,
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
