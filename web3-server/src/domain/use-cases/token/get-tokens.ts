import { TokenEntity } from "../../entities/token.entity";
import { TokenRepository } from "../../repositories/token.repository";


export interface GetTokensUseCase {
    execute(): Promise<TokenEntity[]>
}

export class GetTokens implements GetTokensUseCase {

    constructor(
        private readonly repository: TokenRepository,
    ) {}

    execute(): Promise<TokenEntity[]> {
        return this.repository.getAll();
    }
}