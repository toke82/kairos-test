import { TokenEntity } from "../../entities/token.entity";
import { TokenRepository } from "../../repositories/token.repository";


export interface GetPriceTokensUseCase {
    execute(): Promise<TokenEntity[]>
}

export class GetPriceTokens implements GetPriceTokensUseCase {

    constructor(
        private readonly repository: TokenRepository,
    ) {}

    execute(): Promise<TokenEntity[]> {
        return this.repository.getAllPrices();
    }
}