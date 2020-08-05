"use strict";
exports.__esModule = true;
exports.AdminClass = void 0;
var RestaurantClass_1 = require("./RestaurantClass");
var MenuClass_1 = require("./MenuClass");
var AdminClass = /** @class */ (function () {
    function AdminClass() {
        this.rest = new RestaurantClass_1.RestaurantClass();
        this.menu = new MenuClass_1.MenuClass();
    }
    AdminClass.prototype.createRestaurant = function () {
        this.rest.createRestaurant();
    };
    AdminClass.prototype.editRestaurant = function () {
        this.rest.editRestaurant();
    };
    AdminClass.prototype.deleteRestaurant = function () {
        this.rest.deleteRestaurant();
    };
    AdminClass.prototype.createMenu = function () {
        this.menu.createMenu();
    };
    AdminClass.prototype.editMenu = function () {
        this.menu.editMenu();
    };
    AdminClass.prototype.deleteMenu = function () {
        this.menu.deleteMenu();
    };
    return AdminClass;
}());
exports.AdminClass = AdminClass;
