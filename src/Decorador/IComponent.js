"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EquipoSondo = /** @class */ (function () {
    function EquipoSondo(component) {
        this.MyComponent = component;
    }
    EquipoSondo.prototype.precio = function () {
        return this.MyComponent.precio() + 200;
    };
    EquipoSondo.prototype.descripcion = function () {
        return this.MyComponent.descripcion() + " Se implemento un equipo de sonido";
    };
    EquipoSondo.prototype.MusicaActual = function () {
        return "Esta sonando Dual Lipa";
    };
    return EquipoSondo;
}());
exports.EquipoSondo = EquipoSondo;
var LunasPolarizada = /** @class */ (function () {
    function LunasPolarizada(component) {
        this.MyComponent = component;
    }
    LunasPolarizada.prototype.precio = function () {
        return this.MyComponent.precio() + 500;
    };
    LunasPolarizada.prototype.descripcion = function () {
        return this.MyComponent.descripcion() + " Se adiciono las lunas plarizas";
    };
    LunasPolarizada.prototype.EstadoLuna = function (estado) {
        if (estado)
            return "Las lunas estan activas";
        else
            return "Las lunas no estan activas";
    };
    return LunasPolarizada;
}());
exports.LunasPolarizada = LunasPolarizada;
