import {Router, Request, Response, response} from 'express';

interface UserRequest {
    name:string;
    email:string;
    password:string;
}

const routes = Router();

routes.post('/user', () => console.log ('User route'))
routes.post('/activy', () => console.log ('Activy route'));
routes.post('/courseuunit', () => console.log ('Course Unit route'));
 /*
routes.get('/user', (request, response) => response.json ({
    message:'Hello World'
}))*/


export default routes;