"use strict";
var Implemetacion1 = /** @class */ (function () {
    function Implemetacion1() {
    }
    Implemetacion1.prototype.Listar = function (product) {
        product.forEach(function (prod) {
            console.log(prod.CodigoProducto);
        });
    };
    Implemetacion1.prototype.MostrarPrecio = function (product) {
        var costo = 0;
        product.forEach(function (prod) {
            costo += prod.PrecioProducto;
        });
        console.log("Costo Producto : " + costo);
    };
    return Implemetacion1;
}());
var Implemetacion2 = /** @class */ (function () {
    function Implemetacion2() {
    }
    Implemetacion2.prototype.Listar = function (product) {
        product.forEach(function (prod) {
            console.log("Codigo: " + prod.CodigoProducto + "  Precio:" + prod.PrecioProducto);
        });
    };
    Implemetacion2.prototype.MostrarPrecio = function (product) {
        var costo = 0;
        //A B C
        var CostoA = 0, CostoB = 0, CostoC = 0;
        product.forEach(function (prod) {
            if (prod.CodigoProducto.charAt(0) === 'A') {
                CostoA += prod.PrecioProducto;
            }
            if (prod.CodigoProducto.charAt(0) === 'B') {
                CostoB += prod.PrecioProducto;
            }
            if (prod.CodigoProducto.charAt(0) === 'C') {
                CostoC += prod.PrecioProducto;
            }
        });
        console.log("Costos A : " + CostoA);
        console.log("Costos B : " + CostoB);
        console.log("Costos C : " + CostoC);
    };
    return Implemetacion2;
}());
var CAbstract = /** @class */ (function () {
    function CAbstract(param1, param2) {
        this.Implementacion = new Implemetacion1();
        if (typeof param1 == 'number') {
            if (param1 == 1)
                this.Implementacion = new Implemetacion1();
            if (param1 == 2)
                this.Implementacion = new Implemetacion2();
            // if(param1 ==3) this.Implementacion = new Implemetacion1
        }
        else {
            this.Implementacion = param1;
        }
        this.ListaProducto = param2;
    }
    CAbstract.prototype.Listar = function () {
        this.Implementacion.Listar(this.ListaProducto);
    };
    CAbstract.prototype.MostrarPrecio = function () {
        this.Implementacion.MostrarPrecio(this.ListaProducto);
    };
    return CAbstract;
}());
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.Main = function () {
        var prod1 = { CodigoProducto: "A1Y45", PrecioProducto: 25 };
        var prod2 = { CodigoProducto: "B1D45", PrecioProducto: 30 };
        var prod3 = { CodigoProducto: "B1Y45", PrecioProducto: 40 };
        var prod4 = { CodigoProducto: "C1E45", PrecioProducto: 15 };
        var prod5 = { CodigoProducto: "C1G45", PrecioProducto: 10 };
        var ListaProducto = [];
        ListaProducto.push(prod1);
        ListaProducto.push(prod2);
        ListaProducto.push(prod3);
        ListaProducto.push(prod4);
        ListaProducto.push(prod5);
        var Operacion = new CAbstract(new Implemetacion2(), ListaProducto);
        Operacion.Listar();
        Operacion.MostrarPrecio();
    };
    return Main;
}());
Main.Main();
