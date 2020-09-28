import { Router } from 'express'
import firstRouter from './first.routes';

const routes = Router();

routes.use('/firstroute', firstRouter)

export default routes;
