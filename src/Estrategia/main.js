"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var EStrategia = __importStar(require("./app"));
var readline_sync_1 = __importDefault(require("readline-sync"));
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.Main = function () {
        var num1, num2;
        var Operacion = null;
        num1 = parseInt(readline_sync_1.default.question("numberOne:"));
        num2 = parseInt(readline_sync_1.default.question("numberTwo:"));
        console.log("************ELIGA UNA OPCION************");
        var opcion = parseInt(readline_sync_1.default.question("1.Suma 2.Resta 3.Multiplicacion"));
        switch (opcion) {
            case 1:
                Operacion = new EStrategia.Suma();
                break;
            case 2:
                Operacion = new EStrategia.Resta();
                break;
            case 3:
                Operacion = new EStrategia.Multi();
                break;
        }
        console.log(Operacion.Operacion(num1, num2));
    };
    return Main;
}());
Main.Main();
