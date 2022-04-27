import axios from 'axios';
import { baseUrl } from '../constants';
import { validateApiKeys } from '../util/validators';
import { handleError } from '../util/errorResponse';
import qs from 'query-string';

export default function updateFolderMetadata(apiKey, secretApiKey, body) {
  validateApiKeys(apiKey, secretApiKey);

  var data = qs.stringify({
    metadata: body.metadata,
  });

  var config = {
    method: 'post',
    url: `${baseUrl}/storage/folder/${body.folderId}/meta`,
    data: data,
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
