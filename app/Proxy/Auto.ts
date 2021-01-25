export	class Auto{
  private Marca:string;
  private Costo:number;
  private Seguro:boolean;
  private Nuevo:boolean;

  public constructor() {
    this.Marca = "Camaro"
    this.Costo = 5000;
    this.Seguro = false;
    this.Nuevo = false;

  }

  public InfoFree():string{
    return `El auto es de marca ${this.Marca} y Cuesta ${this.Costo}`
  }

  public InfoPay():string{
    let Seguro = (this.Seguro)? "tiene Seguro":"No tiene seguro";
    return `${this.InfoFree()}, ${Seguro} y es nuevo:${this.Nuevo}`

  }

}
