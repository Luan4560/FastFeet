import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import ProviderController from './app/controllers/ProviderController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/users', ProviderController.index);
routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);

routes.put('/users', ProviderController.update);
routes.post('/recipients', RecipientController.store);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
