import * as Proxy from './Proxy'

class Main{
  public static Main():void{
    let MyAuto:Proxy.ISujeto =  new Proxy.ProxyPay()
    MyAuto.Peticion()
  }
}
Main.Main()
