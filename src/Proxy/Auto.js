"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auto = /** @class */ (function () {
    function Auto() {
        this.Marca = "Camaro";
        this.Costo = 5000;
        this.Seguro = false;
        this.Nuevo = false;
    }
    Auto.prototype.InfoFree = function () {
        return "El auto es de marca " + this.Marca + " y Cuesta " + this.Costo;
    };
    Auto.prototype.InfoPay = function () {
        var Seguro = (this.Seguro) ? "tiene Seguro" : "No tiene seguro";
        return this.InfoFree() + ", " + Seguro + " y es nuevo:" + this.Nuevo;
    };
    return Auto;
}());
exports.Auto = Auto;
