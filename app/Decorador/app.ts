import {Icomponent,EquipoSondo,LunasPolarizada} from "./IComponent"

class Auto implements Icomponent{
  private Marca:string
  private Precio:number


  constructor(marca:string, precio:number){
    this.Marca = marca
    this.Precio = precio
  }

  precio(): number {
    return this.Precio
  }
  descripcion(): string {
    return `El auto es de la marca ${this.Marca} y cuesta ${this.Precio}`
  }

}

class Main{
  public static Main():void{
    let Camaro:Auto = new Auto("Camaro",40000)
    //Mostramos la informacion de la clase
    console.log(Camaro.descripcion())

    //Decoramos el Auto
    const Camaro1 = new EquipoSondo(Camaro)
    console.log(Camaro1.descripcion())
    console.log(Camaro1.MusicaActual())

    const Camaro2 =  new LunasPolarizada(Camaro1)
    console.log(Camaro2.descripcion())
    console.log( Camaro2.EstadoLuna(false))


  }
}
Main.Main()
