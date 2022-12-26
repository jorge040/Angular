class PilaEnteros
{
    private vec:number[]=[];

    insertar(x: number) {
        this.vec.push(x);
    }

    extraer() {
       if (this.vec.length>0)
         return this.vec.pop();
       else
         return null; 
    }
}

class PilaStrings
{
    private vec:string[]=[];

    insertar(x: string) {
        this.vec.push(x);
    }

    extraer() {
       if (this.vec.length>0)
         return this.vec.pop();
       else
         return null; 
    }
}

let pila1=new PilaEnteros();
pila1.insertar(20);
pila1.insertar(43);
pila1.insertar(1);
console.log(pila1.extraer());

let pila2=new PilaStrings();
pila2.insertar('juan');
pila2.insertar('ana');
pila2.insertar('luis');
console.log(pila2.extraer());

class PilaGenerica<T>{
    private vec:T[]=[];
  
    insertar(x: T) {
        this.vec.push(x);
    }
  
    extraer() {
       if (this.vec.length>0)
         return this.vec.pop();
       else
         return null; 
    }
  }
  
  let pila3:PilaGenerica<number>;
  pila3=new PilaGenerica<number>();
  pila3.insertar(20);
  pila3.insertar(42);
  pila3.insertar(1);
  console.log(pila3.extraer());
  
  let pila4:PilaGenerica<string>;
  pila4=new PilaGenerica<string>();
  pila4.insertar('juan');
  pila4.insertar('ana');
  pila4.insertar('luis');
  console.log(pila4.extraer());

  class PilaGenerica<T>{
    private vec:T[]=[];
  
    insertar(x: T) {
        this.vec.push(x);
    }
  
    extraer() {
       if (this.vec.length>0)
         return this.vec.pop();
       else
         return null; 
    }
  }
  
  class Persona {
    constructor(public nombre:string, public edad:number) { }
  }
  
  let pila5:PilaGenerica<Persona>;
  pila5=new PilaGenerica<Persona>();
  pila5.insertar(new Persona('pedro', 33));
  pila5.insertar(new Persona('maria', 33));
  pila5.insertar(new Persona('marcos', 33));
  console.log(pila5.extraer());