import axios from 'axios';
import { baseUrl } from '../constants';
import { validateApiKeys } from '../util/validators';
import { handleError } from '../util/errorResponse';
import qs from 'query-string';

export default function uploadFileToFolder(apiKey, secretApiKey, body) {
  validateApiKeys(apiKey, secretApiKey);

  var data = body.data;
  var config = {
    method: 'post',
    url: `${baseUrl}/storage/folder/${body.folderId}/upload`,
    data: data,
    headers: {
      'x-api-access-key': body.apiAccessKey,
      'storx-mnemonic': body.mnemonic,
    },
  };

  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        if (response.status > 399) {
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
