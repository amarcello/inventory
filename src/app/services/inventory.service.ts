import { InventoryItem } from '../models/inventory-item';

const allInventory: any[] = [
    new InventoryItem({id: 1, name: 'MacBook', price: '1299', qty: 7}),
    new InventoryItem({id: 2, name: 'iPhone 7', price: '699', qty: 2}),
    new InventoryItem({id: 3, name: 'Apple TV', price: '199', qty: 3})
];

const myCart: any[] = [];

export class InventoryService {

    get cart(): InventoryItem[] { return myCart; }
    get inventory(): InventoryItem[] { return allInventory; };

    getIndex(id: number, source: string) {
        let collection = (source === 'cart') ? this.cart : this.inventory;
        return collection.findIndex(result => result.id === id);
    }

    getInventoryItem(id: number, source: string, include: boolean) {
        let collection = (source === 'cart') ? this.cart : this.inventory,
            index = this.getIndex(id, source),
            response = (include) ? { 'index': id, 'obj': collection[index] } : index;

        return response;
    }

    addInventoryItem(item: InventoryItem) {
        item.id = allInventory[(allInventory.length - 1)].id+1 || 1;
        allInventory.push(item);
    }

    updateCart(id: number, qty: any, op: string) {

        qty = parseInt(qty); //turn quantity string to number type

        //get the index and the related data from both Inventory and Cart being added by the user
        let indexInventory = this.getInventoryItem(id, 'inventory', true),
            indexCart = this.getInventoryItem(id, 'cart', true),
            itemNew = new InventoryItem({id: id, qty: 0});

        //if the product item isn't added on the cart, create a new item on the Cart object
        if(!indexCart['obj']) this.cart.push(itemNew);

        //update quantities of the selected item for both Cart and Inventory
        this.updateCollection('cart', ((indexCart['obj']) ? indexCart['obj'] : itemNew), qty, op);
        this.updateCollection('inventory', indexInventory['obj'], qty, op);

    }

    //update quantities of the selected item for both Cart and Inventory
    //if the item is being added to cart, decrease it's quantity from the Inventory and increase on the Cart object
    //if the item is being removed from cart, decrease it's quantity from the Cart and increase on the Inventory object
    updateCollection(source: string, item: any, qty: number, op: string) {
        switch(source) {
            case 'cart': item.qty = (op === 'del') ? item.qty - qty : item.qty + qty; break;
            case 'inventory': item.qty = (op === 'del') ? item.qty + qty : item.qty - qty; break;
        }
    }

}
