import { TokenEntity } from "../../entities/token.entity";
import { TokenRepository } from "../../repositories/token.repository";


export interface DeleteTokenUseCase {
    execute( id: number ): Promise<TokenEntity>
}

export class DeleteToken implements DeleteTokenUseCase {

    constructor(
        private readonly repository: TokenRepository,
    ) {}

    execute(id: number ): Promise<TokenEntity> {
        return this.repository.deleteById(id);
    }
}