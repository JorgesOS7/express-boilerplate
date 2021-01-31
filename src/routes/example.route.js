import { Router } from 'express';
import exampleController from '@root/controller/example';
import mid from '@mid/auth';
class exampleRoutes {

    constructor() {
        this.router = Router();
        this.createRoutes();
    }

    createRoutes() {
        this.router.use(mid);
        this.router.route('/example').get(exampleController.index);
    }
}

export default new exampleRoutes().router;