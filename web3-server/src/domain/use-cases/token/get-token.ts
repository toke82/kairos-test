import { TokenEntity } from "../../entities/token.entity";
import { TokenRepository } from "../../repositories/token.repository";


export interface GetTokenUseCase {
    execute( id: number ): Promise<TokenEntity>
}

export class GetToken implements GetTokenUseCase {

    constructor(
        private readonly repository: TokenRepository,
    ) {}

    execute(id: number ): Promise<TokenEntity> {
        return this.repository.findById(id);
    }
}