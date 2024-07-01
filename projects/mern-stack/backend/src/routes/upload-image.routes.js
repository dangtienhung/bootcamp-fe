import express from 'express';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { HTTP_STATUS } from '../common/http-status.common.js';
import cloudinary from '../configs/cloudinary.config.js';

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'marathon-fe',
  },
});

const parser = multer({ storage: storage });

router.post('/image/upload', parser.array('images', 2), async (req, res) => {
  const files = req.files;

  if (!Array.isArray(files)) {
    return res.status(HTTP_STATUS.BAD_REQUEST).send({ message: 'File is not correct' });
  }

  // upload files to cloudinary
  const uploadPromises = files.map((file) => cloudinary.uploader.upload(file.path));
  // wait for all files to be uploaded
  const results = await Promise.all(uploadPromises);
  // return the uploaded files
  const uploadedFiles = results.map((result) => ({
    url: result.secure_url,
    public_id: result.public_id,
  }));
  return res.status(HTTP_STATUS.OK).send({ urls: uploadedFiles });
});

router.delete('/images/:public_id', async (req, res) => {
  const publicId = req.params.public_id;
  if (!publicId) {
    return res.status(HTTP_STATUS.BAD_REQUEST).send({ message: 'Public id is not correct' });
  }
  const result = await cloudinary.uploader.destroy(publicId);
  if (result.result !== 'ok') {
    return res.status(HTTP_STATUS.BAD_REQUEST).send({ message: 'Delete image is not correct', urls: result });
  }
  return res.status(HTTP_STATUS.OK).send({ message: 'Delete image successfully' });
});

export default router;
