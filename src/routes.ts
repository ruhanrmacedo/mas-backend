import {Router} from 'express';
import {UserController} from './controller/UserController';
import { ActivyController } from './controller/ActivyController';
import {CourseUnitController} from './controller/CourseUnitController';
import {AuthenticateController} from './controller/AuthenticateController';
import authenticated from './middlewares/authenticated';

const userController = new UserController()
const courseUnitController = new CourseUnitController()
const activyController = new ActivyController()
const autheticateController = new AuthenticateController()

const routes = Router();

routes.post('/auth', autheticateController.create);

routes.get('/user', authenticated, userController.show);
routes.get('/activy', authenticated, activyController.show);
routes.get('/courseunit', authenticated, courseUnitController.show);

routes.post('/user', userController.create);
routes.post('/activy', authenticated, activyController.create);
routes.post('/courseunit', authenticated, courseUnitController.create);

export default routes;