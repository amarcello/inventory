/*CORE*/
import { Component }                            from '@angular/core';
import { FormGroup, FormBuilder, Validators }   from '@angular/forms';

/*MODELS AND SERVICES*/
import { InventoryItem }                        from '../../../models/inventory-item';
import { InventoryService }                     from '../../../services/inventory.service';

@Component({
    selector: 'add-item',
    templateUrl: 'add-form.component.html'
})

export class InventoryAddFormComponent {

    addItem : FormGroup;
    inventory: InventoryItem[] = [];

    constructor(
        private builder: FormBuilder,
        private inventoryService: InventoryService
    ){
        this.addItem = builder.group({
            'name' : [null, Validators.compose([
                Validators.required, //Product Title is required
                Validators.minLength(2) //Product Title should have at least 2 characters
            ])],
            'qty'   : [null, Validators.compose([
                Validators.required, //Stock Quantity is required
                Validators.pattern('^[1-9][0-9]*$') //Stock Quantity value should be greater than zero
            ])],
            'price' : [null, Validators.compose([
                Validators.required, //Item Price is required
                Validators.pattern('^[+-]?[0-9]+(\.[0-9][0-9])?$') //Item Price should match a valid US dollar currency number without thousands separator
            ])]
        })

    }

    addForm(item: any): void {
        item.name = item.name.trim();
        if (!item.name) { return; }
        this.inventoryService.addInventoryItem(item); //add new item to the Inventory object
        this.addItem.reset(); //reset the new item model
    }
}
