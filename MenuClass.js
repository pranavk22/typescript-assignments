"use strict";
exports.__esModule = true;
exports.MenuClass = void 0;
var MenuClass = /** @class */ (function () {
    function MenuClass() {
    }
    MenuClass.prototype.createMenu = function () {
        console.log("Menu created");
    };
    MenuClass.prototype.editMenu = function () {
        console.log("Menu edited");
    };
    MenuClass.prototype.deleteMenu = function () {
        console.log("Menu deleted");
    };
    return MenuClass;
}());
exports.MenuClass = MenuClass;
