

export class TokenEntity {

    constructor(
        public id: number,
        public name: string,
        public symbol: string,
        current_price?: number,
        market_cap?: number,
        total_volume?: number,
        market_cap_change_percentage_24h?: number,
        last_updated_at?: Date|null,
    ){}



    public static fromObject( object: {[key: string]: any} ): TokenEntity {
        const { 
            id, 
            name, 
            symbol, 
            current_price, 
            market_cap,
            total_volume, 
            market_cap_change_percentage_24h, 
            last_updated_at 
        } = object;

        if ( !id ) throw 'Id is required';
        if ( !name ) throw 'name is required';
        if ( !symbol ) throw 'symbol is required';


        return new TokenEntity(
            id, 
            name, 
            symbol, 
            current_price, 
            market_cap, 
            total_volume,
            market_cap_change_percentage_24h,
            last_updated_at
        )
    }
     
}