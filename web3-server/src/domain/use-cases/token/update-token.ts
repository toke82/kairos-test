import { UpdateTokenDto } from "../../dtos";
import { TokenEntity } from "../../entities/token.entity";
import { TokenRepository } from "../../repositories/token.repository";


export interface UpdateTokenUseCase {
    execute( dto: UpdateTokenDto ): Promise<TokenEntity>
}

export class UpdateToken implements UpdateTokenUseCase {

    constructor(
        private readonly repository: TokenRepository,
    ) {}

    execute(dto: UpdateTokenDto): Promise<TokenEntity> {
        return this.repository.updateById(dto);
    }
}