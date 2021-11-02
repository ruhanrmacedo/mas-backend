import {Router} from 'express';
import {AuthenticateController} from './controller/AuthenticateController';
import { UserController } from './controller/UserController';
import { ActivyController } from './controller/ActivyController';
import { CourseUnitController } from './controller/CourseUnitController';
import authenticated from './middlewares/authenticated';

/*interface UserRequest {
    name:string;
    email:string;
    password:string;
}
*/
const userController = new UserController()
const courseUnitController = new CourseUnitController()
const activyController = new ActivyController()
const autheticateController = new AuthenticateController()

const routes = Router();

routes.post('/user', userController.create);
routes.post('/auth', autheticateController.create);
routes.post('/activy', authenticated, activyController.create);
routes.post('/courseunit', authenticated, courseUnitController.create);
 /*
routes.get('/user', (request, response) => response.json ({
    message:'Hello World'
}))*/


export default routes;