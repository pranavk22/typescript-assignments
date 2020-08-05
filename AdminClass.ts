import { RestaurantClass } from "./RestaurantClass"
import { MenuClass } from "./MenuClass";

export class AdminClass
{
    rest: RestaurantClass;
    menu: MenuClass;
    
    constructor(){
        this.rest = new RestaurantClass();
        this.menu = new MenuClass();
    }
    createRestaurant() {
        this.rest.createRestaurant();
    }
    editRestaurant() {
        this.rest.editRestaurant();
    }
    deleteRestaurant() {
        this.rest.deleteRestaurant();
    }
    createMenu() {
        this.menu.createMenu();
    }
    editMenu() {
        this.menu.editMenu();
    }
    deleteMenu() {
        this.menu.deleteMenu();
    }
}