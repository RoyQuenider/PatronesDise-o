"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IComponent_1 = require("./IComponent");
var Auto = /** @class */ (function () {
    function Auto(marca, precio) {
        this.Marca = marca;
        this.Precio = precio;
    }
    Auto.prototype.precio = function () {
        return this.Precio;
    };
    Auto.prototype.descripcion = function () {
        return "El auto es de la marca " + this.Marca + " y cuesta " + this.Precio;
    };
    return Auto;
}());
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.Main = function () {
        var Camaro = new Auto("Camaro", 40000);
        //Mostramos la informacion de la clase
        console.log(Camaro.descripcion());
        //Decoramos el Auto
        var Camaro1 = new IComponent_1.EquipoSondo(Camaro);
        console.log(Camaro1.descripcion());
        console.log(Camaro1.MusicaActual());
        var Camaro2 = new IComponent_1.LunasPolarizada(Camaro1);
        console.log(Camaro2.descripcion());
        console.log(Camaro2.EstadoLuna(false));
    };
    return Main;
}());
Main.Main();
