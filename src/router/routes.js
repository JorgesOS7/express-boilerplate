import { Router } from 'express';
import exampleRoutes from '@root/routes/example.route';


const baseRouter = Router();

baseRouter.get('/', (req, res) => {
    res.send({statusAPI: 'UP'})
});

baseRouter.use([
    
    exampleRoutes
]);

export default baseRouter;