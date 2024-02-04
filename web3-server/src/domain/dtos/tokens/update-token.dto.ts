

export class UpdateTokenDto {

    private constructor(
        public readonly id: number,
        public readonly name?: string,
        public readonly symbol?: string,
    ){}

    get values() {
        const returnObj: {[key: string]: any} = {};


        if ( this.name ) returnObj.name = this.name;
        if ( this.symbol ) returnObj.symbol = this.symbol;

        return returnObj;
    }

    static create( props: {[key: string]: any} ): [string?, UpdateTokenDto?] {

        const { id, name, symbol } = props;


        if ( !id || isNaN( Number(id)) ) {
            return ['id must be a valid number'];
        }


        return [undefined, new UpdateTokenDto(id, name, symbol)];
    }
}