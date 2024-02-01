import { CreateTokenDto } from "../../dtos";
import { TokenEntity } from "../../entities/token.entity";
import { TokenRepository } from "../../repositories/token.repository";


export interface CreateTokenUseCase {
    execute( dto: CreateTokenDto ): Promise<TokenEntity>
}

export class CreateToken implements CreateTokenUseCase {

    constructor(
        private readonly repository: TokenRepository,
    ) {}

    execute(dto: CreateTokenDto): Promise<TokenEntity> {
        return this.repository.create(dto);
    }
}