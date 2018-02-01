/*CORE*/
import { Component }  from '@angular/core';
import { Router }     from '@angular/router';

@Component({
    selector: 'inventory-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    pageTitle       : string;                   //The title of the current page;
    projectTitle    : string = 'My Inventory';  //The project's title;

    constructor(private router: Router){

        this.router.events.subscribe((val) => {
            this.pageTitle = (this.router.url.includes('cart')) ? 'Shopping Basket' : 'All Products';
        });
    }
}
