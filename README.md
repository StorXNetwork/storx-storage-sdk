# StorX Storage Node SDK

StorX SDK to access all storage based APIs

## Installation

```
npm install --save storx-storage-sdk
```

## Setup

```javascript
const StorxStorage = require('storx-storage-sdk');
const storxStorageFunctions = StorxStorage();
```

You can get the Access Key for the sdk and APIs from StorX's dev console.
Quickly test that you can connect to the API with the following call:

```javascript
storxStorageFunctions
  .welcome({
    apiAccessKey: '<apiAccessKey>',
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
```

## API functions

### Get Folder By ID

```javascript
storxStorageFunctions
  .getFolderById({
    folderId: '<folderId>', // string
    apiAccessKey: '<apiAccessKey>',
    teamId: '<teamId>', // string (optional)
  })
  .then(result => {
    console.log(result); // Folder details
  })
  .catch(err => {
    console.log(err);
  });
```

### Create Folder

```javascript
storxStorageFunctions
  .createFolder({
    folderName: '<folderName>',   // string
    parentFolderId: '<parentFolderId>',  // string
    apiAccessKey: '<apiAccessKey>',
  })
  .then(result => {
    console.log(result);
  .catch(err => {
    console.log(err);
  });
```

### Update Folder Metadata

```javascript
storxStorageFunctions
  .updateFolderMetadata({
    folderId: '<folderId>', // string
    metadata: '<metadata>', // object
    apiAccessKey: '<apiAccessKey>',
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
```

### Delete Folder

```javascript
storxStorageFunctions
  .deleteFolder({
    folderId: '<folderId>', // string
    apiAccessKey: '<apiAccessKey>',
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
```

### Move Folder

```javascript
storxStorageFunctions
  .moveFolder({
    folderId: '<folderId>', // string
    destination: '<destinationId>', // string
    apiAccessKey: '<apiAccessKey>',
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
```

### Create File

```javascript
storxStorageFunctions
  .createFile({
    file : {
      fileId: '<file Id>',
      bucket: '<bucket Id>',
      size: '<file size>',
      folder_id: '<folder Id>',
      name: '<file Name>'
    },
    apiAccessKey: '<apiAccessKey>',
  })
  .then(result => {
    console.log(result);
  .catch(err => {
    console.log(err);
  });
```

### Upload File to Folder

```javascript
storxStorageFunctions
  .uploadFileToFolder({
    data: '<file>', // file object
    folderId: '<folderId>', // string
    mnemonic: '<account mnemonic paraphrase>', // string
    apiAccessKey: '<apiAccessKey>',
  })
  .then(result => {
    console.log(result);
  .catch(err => {
    console.log(err);
  });
```

#### Here data will be form data with file key name as `xfile`

### Update File Metadata

```javascript
storxStorageFunctions
  .updateFileMetadata({
    fileId: '<fileId>', // string
    metadata: '<metadata>', // object
    apiAccessKey: '<apiAccessKey>',
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
```

### Move File

```javascript
storxStorageFunctions
  .moveFile({
    fileId: '<fileId>', // string
    destination: '<destinationId>',
    apiAccessKey: '<apiAccessKey>',
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
```

### Delete File from Folder

```javascript
storxStorageFunctions
  .deleteFileFromFolder({
    fileId: '<fileId>', // string
    folderId: '<folderId>', // string
    apiAccessKey: '<apiAccessKey>',
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
```

### Delete File from Bucket

```javascript
storxStorageFunctions
  .deleteFileFromBucket({
    fileId: '<fileId>', // string
    bucketId: '<bucketId>', // string
    apiAccessKey: '<apiAccessKey>',
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
```

### Create Share Token

```javascript
storxStorageFunctions
  .generateShareToken({
    isFolder: '<isFolder>', // boolean
    itemId: '<itemId>', // string
    mnemonic: '<mnemonic>', // string
    views: '<views>', // integer
    apiAccessKey: '<apiAccessKey>',
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
```

### Download File

```javascript
storxStorageFunctions
  .getFileById({
    fileId: '<fileId>', // string
    mnemonic: '<mnemonic>', // string
    apiAccessKey: '<apiAccessKey>',
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
```

### Download Entity by Share Token

```javascript
storxStorageFunctions
  .downloadEntityByToken({
    token: '<token>', // string
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
```

# Dev Installation

### Step 1 : Clone the repository.

### Step 2 : Go to the project where you want to use this package.

### Step 3 : npm install 'path of the cloned repository' and you should be able to access all functions in your project.

### Step 4 : Once you make any changes in the repo, run 'npm run build'. This will update the functions you changed and also update the package in your project.
