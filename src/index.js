// Mock Functions
import welcome from '../src/commands/welcome';

// Real Functions
import getFolderById from '../src/commands/getFolderById';
import createFolder from '../src/commands/createFolder';
import updateFolderMetadata from '../src/commands/updateFolderMetadata';
import deleteFolder from '../src/commands/deleteFolder';
import uploadFileToFolder from '../src/commands/uploadFileToFolder';
import moveFolder from '../src/commands/moveFolder';
import createFile from '../src/commands/createFile';
import getFileById from '../src/commands/getFileById';
import updateFileMetadata from '../src/commands/updateFileMetadata';
import moveFile from '../src/commands/moveFile';
import deleteFileFromFolder from '../src/commands/deleteFileFromFolder';
import deleteFileFromBucket from '../src/commands/deleteFileFromBucket';
import generateShareToken from '../src/commands/generateShareToken';
import downloadEntityByToken from '../src/commands/downloadEntityByToken';

export default function nodeClient(apiKey = 'n/a', secretApiKey = 'n/a') {
  let client = {};

  // Mock Functions
  client.welcome = function (body) {
    return welcome(apiKey, secretApiKey, body);
  };

  // Real Functions
  client.getFolderById = function (body) {
    return getFolderById(apiKey, secretApiKey, body);
  };
  client.createFolder = function (body) {
    return createFolder(apiKey, secretApiKey, body);
  };
  client.updateFolderMetadata = function (body) {
    return updateFolderMetadata(apiKey, secretApiKey, body);
  };
  client.deleteFolder = function (body) {
    return deleteFolder(apiKey, secretApiKey, body);
  };
  client.uploadFileToFolder = function (body) {
    return uploadFileToFolder(apiKey, secretApiKey, body);
  };
  client.moveFolder = function (body) {
    return moveFolder(apiKey, secretApiKey, body);
  };
  client.createFile = function (body) {
    return createFile(apiKey, secretApiKey, body);
  };
  client.getFileById = function (body) {
    return getFileById(apiKey, secretApiKey, body);
  };
  client.updateFileMetadata = function (body) {
    return updateFileMetadata(apiKey, secretApiKey, body);
  };
  client.moveFile = function (body) {
    return moveFile(apiKey, secretApiKey, body);
  };
  client.deleteFileFromFolder = function (body) {
    return deleteFileFromFolder(apiKey, secretApiKey, body);
  };
  client.deleteFileFromBucket = function (body) {
    return deleteFileFromBucket(apiKey, secretApiKey, body);
  };
  client.generateShareToken = function (body) {
    return generateShareToken(apiKey, secretApiKey, body);
  };
  client.downloadEntityByToken = function (body) {
    return downloadEntityByToken(apiKey, secretApiKey, body);
  };
  return client;
}
