import axios from 'axios';
import { baseUrl } from '../constants';
import { validateApiKeys } from '../util/validators';
import { handleError } from '../util/errorResponse';
import qs from 'query-string';

export default function generateShareToken(apiKey, secretApiKey, body) {
  validateApiKeys(apiKey, secretApiKey);

  var data = qs.stringify({
    isFolder: body.isFolder,
    views: body.views,
  });

  var config = {
    method: 'post',
    url: `${baseUrl}/storage/share/file/${body.itemId}`,
    data: data,
    headers: {
      'x-api-access-key': bodu.apiAccessKey,
      'storx-mnemonic': body.mnemonic,
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
