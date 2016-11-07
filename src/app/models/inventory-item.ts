export class InventoryItem {
    public id       : number;
    public name     : string;
    public price    : string;
    public qty      : number;

    public constructor(fields?: {
        id?     : number,
        name?   : string,
        price?  : string,
        qty?    : number
    }){
        if (fields) Object.assign(this, fields);
    }
}
