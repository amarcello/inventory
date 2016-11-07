/*CORE*/
import { Component }        from '@angular/core';

/*MODELS AND SERVICES*/
import { InventoryItem }    from '../../models/inventory-item';
import { InventoryService } from '../../services/inventory.service';

@Component({
    selector: 'inventory',
    templateUrl: 'inventory.component.html',
    styleUrls: [ 'inventory.component.scss' ]
})

export class InventoryComponent {

    inventory: InventoryItem[] = [];

    private isAdding: boolean;

    constructor(private inventoryService: InventoryService) {
        this.inventory = this.inventoryService.inventory;
    }

    addForm() {
        this.isAdding = !this.isAdding; //show/hide add new product form
    }

}
