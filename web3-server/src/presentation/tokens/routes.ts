import { Router } from "express";
import { TokensController } from "./controller";
import { TokenDatasourceImpl } from "../../infrastructure/datasource/token.datasource.impl";
import { TokenRepositoryImpl } from "../../infrastructure/repositories/token.repository.impl";



export class TokenRoutes {

    static get routes(): Router {
     
        const router = Router();

        const datasource = new TokenDatasourceImpl();
        const tokenRepository = new TokenRepositoryImpl(datasource);
        const tokenController = new TokensController(tokenRepository);

        router.get('/', tokenController.getTokens );
        router.get('/price', tokenController.getPriceTokens );
        router.get('/:id', tokenController.getTokensById );
        router.post('/', tokenController.createToken );        
        router.put('/:id', tokenController.updateToken );
        router.delete('/:id', tokenController.deleteToken );

        return router;
    }
}