/*CORE*/
import { Component, Input }        from '@angular/core';

/*MODELS AND SERVICES*/
import { InventoryItem }            from '../../../models/inventory-item';
import { InventoryService }         from '../../../services/inventory.service';

@Component({
    selector: 'inventory-item',
    templateUrl: 'item.component.html',
    styleUrls: [ 'item.component.scss' ]
})

export class InventoryItemComponent {

    @Input() item: InventoryItem; //get data object from InventoryComponent
    private itemCart: InventoryItem = new InventoryItem(); //set new cart item from InvetoryItem object model

    constructor(private inventoryService: InventoryService){}

    // process the add/remove item from/to cart through the Inventory service
    updateCart(id: number, qty: any, op: string) {
        this.inventoryService.updateCart(id, qty, op);
    }
}
