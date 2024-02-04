import { CreateTokenDto, UpdateTokenDto } from "../dtos";
import { TokenEntity } from "../entities/token.entity";


export abstract class TokenRepository {

    abstract create( createTokenDto: CreateTokenDto): Promise<TokenEntity>;

    //todo: paginacion
    abstract getAll(): Promise<TokenEntity[]>;
    abstract getAllPrices(): Promise<TokenEntity[]>;

    abstract findById( id: number ): Promise<TokenEntity>;
    abstract updateById( updateTokenDto: UpdateTokenDto ): Promise<TokenEntity>;
    abstract deleteById( id: number ): Promise<TokenEntity>;

}