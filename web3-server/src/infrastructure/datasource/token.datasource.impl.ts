import { prisma } from "../../data/postgres";
import { CreateTokenDto, CustomError, TokenDatasource, TokenEntity, UpdateTokenDto } from "../../domain";


export class TokenDatasourceImpl implements TokenDatasource {

    async create(createTokenDto: CreateTokenDto): Promise<TokenEntity> {
        const token = await prisma.token.create({
            data: createTokenDto!
        });

        return TokenEntity.fromObject( token );
    }

    async getAll(): Promise<TokenEntity[]> {
        const tokens = await prisma.token.findMany()
        
        return tokens.map( token => TokenEntity.fromObject(token) );
    }

    async getAllPrices(): Promise<TokenEntity[]> {
        const tokens = await prisma.token.findMany();

        const tokens_n = tokens.map( token => token.name).toString();
 
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${tokens_n}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
            .then( res => res.json() )
            .catch(err => console.log('Solicitud fallida', err));
        return response;
    }   


    async findById(id: number): Promise<TokenEntity> {
        const token = await prisma.token.findFirst({
            where: { id }
        });

        if ( !token ) throw new CustomError(`Token with id ${ id } not found`, 404);
        return TokenEntity.fromObject(token);
    }

    async updateById(updateTokenDto: UpdateTokenDto): Promise<TokenEntity> {
        await this.findById( updateTokenDto.id );

        const updatedToken = await prisma.token.update({
            where: { id: updateTokenDto.id },
            data: updateTokenDto!.values
        });
        return TokenEntity.fromObject(updatedToken);
    }

    async deleteById(id: number): Promise<TokenEntity> {
        await this.findById( id );
        const deteled = await prisma.token.delete({
            where: { id }
        });

        return TokenEntity.fromObject( deteled );
    }

}