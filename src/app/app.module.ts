import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }                       from '@angular/http';

/*ROUTING*/
import { AppRoutingModule }                 from './app-routing.module';

/*SERVICES AND COMPONENTS*/
import { InventoryService }                 from './services/inventory.service';
import { AppComponent }                     from './app.component';
import { CartComponent }                    from './components/cart/cart.component';
import { InventoryComponent }               from './components/inventory/inventory.component';
import { InventoryAddFormComponent }        from './components/inventory/add-form/add-form.component';
import { InventoryItemComponent }           from './components/inventory/item/item.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        CartComponent,
        InventoryComponent,
        InventoryAddFormComponent,
        InventoryItemComponent
    ],
    providers: [ InventoryService ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
