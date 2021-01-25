import {Auto} from './Auto';
import readline from 'readline-sync';

interface ISujeto{
  Peticion():void;
}
class Variables{
  public static Usuario:string = "Paty"
  public static Clave:string = "12345"
}

class ProxyFree implements ISujeto{
  private MyAuto:Auto = new Auto;

  Peticion(): void {
     this.MyAuto = new Auto
     console.log(this.MyAuto.InfoFree())
  }

}
class ProxyPay implements ISujeto{
  private MyAuto:Auto = null;
  private Pase:boolean = false;
  private Usuario:string="";
  private Contra:string="";


  Peticion(): void {
     if(!this.Pase){
       console.log("********Autentificate***************")
        this.Usuario =  readline.question("Usuario: ")
        this.Contra =  readline.question("Clave: ")
     }
     if(this.Contra === Variables.Clave && this.Usuario === Variables.Usuario){
       this.Pase = true
       this.MyAuto = new Auto();
       console.log(this.MyAuto.InfoPay())
     }else{
       console.log("Usuario o Clave Incorrecta")
     }
  }
}
export{
  ISujeto,
  ProxyFree,
  ProxyPay
}
