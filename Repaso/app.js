class Inventario{
    constructor(){
        this.inicio=null;
    }

    Agregar(nuevo){
        if (this.inicio===null){
            this.inicio=nuevo}
            else{
                let x=this.inicio
                 while(x.sig!=null){
                 x=x.sig}
                 x.sig=nuevo}
     }
}