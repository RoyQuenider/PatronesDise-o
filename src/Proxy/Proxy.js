"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Auto_1 = require("./Auto");
var readline_sync_1 = __importDefault(require("readline-sync"));
var Variables = /** @class */ (function () {
    function Variables() {
    }
    Variables.Usuario = "Paty";
    Variables.Clave = "12345";
    return Variables;
}());
var ProxyFree = /** @class */ (function () {
    function ProxyFree() {
        this.MyAuto = new Auto_1.Auto;
    }
    ProxyFree.prototype.Peticion = function () {
        this.MyAuto = new Auto_1.Auto;
        console.log(this.MyAuto.InfoFree());
    };
    return ProxyFree;
}());
exports.ProxyFree = ProxyFree;
var ProxyPay = /** @class */ (function () {
    function ProxyPay() {
        this.MyAuto = null;
        this.Pase = false;
        this.Usuario = "";
        this.Contra = "";
    }
    ProxyPay.prototype.Peticion = function () {
        if (!this.Pase) {
            console.log("********Autentificate***************");
            this.Usuario = readline_sync_1.default.question("Usuario: ");
            this.Contra = readline_sync_1.default.question("Clave: ");
        }
        if (this.Contra === Variables.Clave && this.Usuario === Variables.Usuario) {
            this.Pase = true;
            this.MyAuto = new Auto_1.Auto();
            console.log(this.MyAuto.InfoPay());
        }
        else {
            console.log("Usuario o Clave Incorrecta");
        }
    };
    return ProxyPay;
}());
exports.ProxyPay = ProxyPay;
