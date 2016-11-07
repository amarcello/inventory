/*CORE*/
import { Component }    from '@angular/core';

/*MODELS AND SERVICES*/
import { InventoryItem }        from '../../models/inventory-item';
import { InventoryService }     from '../../services/inventory.service';

@Component({
    selector: 'cart',
    templateUrl: 'cart.component.html',
    styleUrls: [ 'cart.component.scss' ]
})

export class CartComponent {

    cart: InventoryItem[] = [];

    get cartTotal(): number {
        let i: any, sum: number = 0;
        for(i in this.cart) { sum = sum + this.cart[i].qty; }
        return sum;
    }

    constructor(private inventoryService: InventoryService){
        this.cart = this.inventoryService.cart || []; //get Inventory object or return empty if there's any item
    }

    //retrieve the inventory item info from the Inventory object to cross data with the Cart object
    getDetails(id: number) {
        let item = this.inventoryService.getInventoryItem(id, 'inventory', true);
        return item['obj'];
    }

    // process the add/remove item from/to cart through the Inventory service
    updateCart(id: number, qty: any, op: string) {
        this.inventoryService.updateCart(id, qty, op);
    }

}
