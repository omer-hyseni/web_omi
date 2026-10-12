function shuma(numri1,numri2,numri3){
    var rezultati= numri1 + numri2 + numri3
    console.log=(rezultati)
}

shuma(111,222,333)

var car={
    name:"Mercedes";
    color:"red";
    get getKilometrs(){
        return this.kilometeres
    }

}

console.log(car.getKilometers)
car.setKilometers=100;

console.log(car.getKilometers)

var computer=new Object()
    computer.name="lenovo";
    computer.RAM="16gb";


    function Computer (name,CPU,RAM){
        this.name=name;
        this.CPU=CPU;
        this.RAM=RAM;
    }

var computerr1=new Computer("Macbook","M1 8-CORE","8GB")
var computer2=new Computer("Lenovo","intel","16GB")