import { Request, Response } from "express";
import { CreateTokenDto, UpdateTokenDto } from "../../domain/dtos";
import { CreateToken, CustomError, DeleteToken, GetToken, GetTokens, GetPriceTokens, TokenRepository, UpdateToken } from "../../domain";



export class TokensController {

    //* DI
    constructor(
        private readonly tokenRepository: TokenRepository
    ) {}

    private handleError = ( res: Response, error: unknown ) => {
        if ( error instanceof CustomError ) {
            res.status(error.statusCode).json({ error: error.message });
            return;
        }

        // grabas log
        res.status(500).json({ error: 'Internal server error - check logs' });
    }

    public getTokens = (req:Request, res:Response) => {

        new GetTokens( this.tokenRepository )
            .execute()
            .then( tokens => res.json(tokens ))
            .catch( error => this.handleError(res, error) );
    }

    public getPriceTokens = (req:Request, res:Response) => {

        new GetPriceTokens( this.tokenRepository )
            .execute()
            .then( tokens => res.json(tokens ))
            .catch( error => this.handleError(res, error) );
    }

    public getTokensById = (req:Request, res:Response) => {
        const id = +req.params.id;

        new GetToken( this.tokenRepository )
            .execute( id )
            .then( token => res.json(token))
            .catch( error => this.handleError(res, error) );
    }

    public createToken = (req:Request, res:Response) => {
        const [error, createTokenDto] = CreateTokenDto.create(req.body);
        if (error) return res.status(400).json({ error });

        new CreateToken( this.tokenRepository )
            .execute( createTokenDto! )
            .then( token => res.status(201).json(token))
            .catch( error => this.handleError(res, error) );
    }

    public updateToken = (req:Request, res:Response) => {
        const id = +req.params.id;
        const [error, updateTokenDto] = UpdateTokenDto.create({...req.body, id});
        if ( error ) return res.status(400).json({ error });

        new UpdateToken( this.tokenRepository )
            .execute( updateTokenDto! )
            .then( token => res.json(token))
            .catch( error => this.handleError(res, error) );
       
    }

    public deleteToken = (req:Request, res:Response) => {
        const id = +req.params.id;

        new DeleteToken( this.tokenRepository )
            .execute( id )
            .then( token => res.json(token))
            .catch( error => this.handleError(res, error) );
    }
}