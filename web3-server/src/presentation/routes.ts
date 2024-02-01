import { Router } from 'express';
import { TokenRoutes } from './tokens/routes';

export class AppRoutes {

    static get routes(): Router {
     
        const router = Router();
        

        router.use('/api/tokens', TokenRoutes.routes );        

        return router;
    }
}