/*CORE*/
import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

/*COMPONENTS*/
import { CartComponent }            from './components/cart/cart.component';
import { InventoryComponent }       from './components/inventory/inventory.component';
import { InventoryItemComponent }   from './components/inventory/item/item.component';

/*ROUTES*/
const routes: Routes = [
    { path: 'cart',     component: CartComponent },
    { path: 'item/:id', component: InventoryItemComponent },
    { path: 'list',     component: InventoryComponent },
    { path: 'list/add', component: InventoryComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
