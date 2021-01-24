export interface Icomponent{
   precio():number
   descripcion():string
}

export class EquipoSondo implements Icomponent{
  private MyComponent:Icomponent
  constructor( component:Icomponent ){
    this.MyComponent = component
  }
  precio(): number {
    return this.MyComponent.precio() + 200
  }
  descripcion(): string {
    return `${this.MyComponent.descripcion()} Se implemento un equipo de sonido`
  }

  MusicaActual():string{
    return "Esta sonando Dual Lipa"
  }
}

export class LunasPolarizada implements Icomponent{
  private MyComponent:Icomponent
  constructor( component:Icomponent ){
    this.MyComponent = component
  }
  precio(): number {
    return this.MyComponent.precio() + 500
  }
  descripcion(): string {
    return `${this.MyComponent.descripcion()} Se adiciono las lunas plarizas`
  }

  EstadoLuna(estado:boolean):string{
    if(estado)
      return "Las lunas estan activas"
    else
      return "Las lunas no estan activas"
  }
}
