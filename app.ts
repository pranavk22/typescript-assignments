import { AdminClass } from "./AdminClass";

let admin = new AdminClass();

// var readLineSync ;
// // = require('readline-sync')

// let userRes;
// while (userRes !== '0') {
//     console.log("Option 1")
//     console.log("Option 2")
//     console.log("Option 3")
//     userRes = readLineSync.question("Pick an option");
//     if (userRes === '1') {
//         admin.createMenu();
//     } else if (userRes === '2') {
//         admin.editMenu();
//     }
// }
admin.createMenu();
admin.editMenu();
admin.deleteMenu();
admin.createRestaurant();
admin.editRestaurant();
admin.deleteRestaurant();
