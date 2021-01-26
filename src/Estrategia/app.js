"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Suma = /** @class */ (function () {
    function Suma() {
    }
    Suma.prototype.Operacion = function (num1, num2) {
        return num1 + num2;
    };
    return Suma;
}());
exports.Suma = Suma;
var Resta = /** @class */ (function () {
    function Resta() {
    }
    Resta.prototype.Operacion = function (num1, num2) {
        return num1 - num2;
    };
    return Resta;
}());
exports.Resta = Resta;
var Multi = /** @class */ (function () {
    function Multi() {
    }
    Multi.prototype.Operacion = function (num1, num2) {
        return num1 * num2;
    };
    return Multi;
}());
exports.Multi = Multi;
