interface IEstrategia{
    Operacion(num1:number,num2:number):number
}
class Suma implements IEstrategia{
    Operacion(num1: number, num2: number): number {
        return num1+num2
    }
}
class Resta implements IEstrategia{
    Operacion(num1: number, num2: number): number {
        return num1-num2
    }
}
class Multi implements IEstrategia{
    Operacion(num1: number, num2: number): number {
        return num1*num2
    }
}