interface IProducto{
    CodigoProducto:string
    PrecioProducto:number
}

interface IBrigde<T>{
    Listar(product:Array<T>):void
    MostrarPrecio(product:Array<T>):void
}

class Implemetacion1<T extends IProducto> implements IBrigde<T>{

    Listar(product: T[]): void {
        product.forEach(prod =>{
            console.log(prod.CodigoProducto)
        })
    }
    MostrarPrecio(product: T[]): void {
        let costo = 0
        product.forEach(prod =>{
        costo+= prod.PrecioProducto
        })
        console.log(`Costo Producto : ${costo}`)
    }

}
class Implemetacion2<T extends IProducto> implements IBrigde<T>{

    Listar(product: T[]): void {
        product.forEach(prod =>{
            console.log(`Codigo: ${prod.CodigoProducto}  Precio:${prod.PrecioProducto}`)
        })
    }
    MostrarPrecio(product: T[]): void {
        let costo = 0
       //A B C
        let CostoA=0, CostoB =0, CostoC =0

        product.forEach(prod =>{
            if(prod.CodigoProducto.charAt(0) === 'A'){
                CostoA += prod.PrecioProducto
            }
            if(prod.CodigoProducto.charAt(0) === 'B'){
                CostoB += prod.PrecioProducto
            }
            if(prod.CodigoProducto.charAt(0) === 'C'){
                CostoC += prod.PrecioProducto
            }
        })
        console.log(`Costos A : ${CostoA}`)
        console.log(`Costos B : ${CostoB}`)
        console.log(`Costos C : ${CostoC}`)
    }

}

class CAbstract<T extends IProducto> implements IBrigde<T>{

    private Implementacion:IBrigde<T> =new Implemetacion1() 
    private ListaProducto: Array<T>

    constructor(nume:number, ListaProducto:Array<T>);
    constructor(Implementacion:IBrigde<T>, ListaProducto:Array<T>);
    constructor(param1:number|Object, param2:Array<T>){
        if(typeof param1 == 'number'){
            if(param1 ==1) this.Implementacion = new Implemetacion1()
            if(param1 ==2) this.Implementacion = new Implemetacion2()
            // if(param1 ==3) this.Implementacion = new Implemetacion1
        }else{
            this.Implementacion = <IBrigde<T>>param1;
        }
        this.ListaProducto = param2
    }
    

    Listar(): void {
        this.Implementacion.Listar(this.ListaProducto);
    }
    MostrarPrecio(): void {
        this.Implementacion.MostrarPrecio(this.ListaProducto)
    }

}

class Main{
    public static Main():void{
        const prod1:IProducto = {CodigoProducto: "A1Y45",PrecioProducto:25}
        const prod2:IProducto = {CodigoProducto: "B1D45",PrecioProducto:30}
        const prod3:IProducto = {CodigoProducto: "B1Y45",PrecioProducto:40}
        const prod4:IProducto = {CodigoProducto: "C1E45",PrecioProducto:15}
        const prod5:IProducto = {CodigoProducto: "C1G45",PrecioProducto:10}

        let ListaProducto:IProducto[] = []

        ListaProducto.push(prod1)
        ListaProducto.push(prod2)
        ListaProducto.push(prod3)
        ListaProducto.push(prod4)
        ListaProducto.push(prod5)

        let Operacion = new CAbstract<IProducto>(new Implemetacion2(), ListaProducto);
        Operacion.Listar()
        Operacion.MostrarPrecio()
    }
}

Main.Main()