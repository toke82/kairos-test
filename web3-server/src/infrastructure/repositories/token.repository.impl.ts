import { CreateTokenDto, TokenDatasource, TokenEntity, TokenRepository, UpdateTokenDto } from "../../domain";


export class TokenRepositoryImpl implements TokenRepository {

    constructor(
        private readonly datasource: TokenDatasource,
    ) {}

    create(createTokenDto: CreateTokenDto): Promise<TokenEntity> {
        return this.datasource.create(createTokenDto);
    }

    getAll(): Promise<TokenEntity[]> {
        return this.datasource.getAll();
    }

    getAllPrices(): Promise<TokenEntity[]> {
        return this.datasource.getAllPrices();
    }

    findById(id: number): Promise<TokenEntity> {
        return this.datasource.findById( id );
    }

    updateById(updateTokenDto: UpdateTokenDto): Promise<TokenEntity> {
        return this.datasource.updateById( updateTokenDto );
    }
    
    deleteById(id: number): Promise<TokenEntity> {
        return this.datasource.deleteById( id );
    }

}