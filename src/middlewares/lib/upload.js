import multer from 'multer';
import path from 'path';
import fs from 'fs';

const fileFilter = (req, file, callback) => {
  const allowedMimeTypes = [
    'image/jpg',
    'image/jpeg',
    'image/gif',
    'image/png',
  ];

  if (!allowedMimeTypes.includes(file.mimetype)) {
    callback(new Error('This file type is not supported !'), false);
  }
  callback(null, true);
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const rootDir = path.dirname(require.main.filename);
    console.log('require.main.filename: ', require.main.filename);

    //Create folders
    fs.mkdirSync(path.join(rootDir, '/public/uploads'), { recursive: true });
    //upload file
    callback(null, path.join(rootDir, '/public/uploads'));
  },
  filename: (req, file, callback) => {
    const extension = file.mimetype.replace('image/', '');

    if (!req.savedImages) {
      req.savedImages = [];
    }

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);

    const url = `image_${uniqueSuffix}.${extension}`;

    req.savedImages = [...req.savedImages, path.join(url)];

    callback(null, url);
  },
});

const upload = multer({ storage, fileFilter }).array('images');

export default upload;
