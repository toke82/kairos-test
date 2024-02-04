export class CreateTokenDto {

    private constructor(
        public readonly name: string,
        public readonly symbol: string,
    ){}

    static create( props: {[key: string]: any} ): [string?, CreateTokenDto?] {

        const { name, symbol } = props;

        if ( !name || name.length === 0 ) return ['Name property is required', undefined];
        if ( !symbol || symbol.length === 0 ) return ['Symbol property is required', undefined];

        return [undefined, new CreateTokenDto(name, symbol)];
    }
}