class Parent {
    constructor(greeting) {
        this.greeting = greeting;
    }

    // method
    parentSay() {
        console.log(`${this.greeting} this is the parent class`);
    }
}

// child class
// extends mempunyai sifat mewarisi anaknya 
class Child extends Parent {
    constructor(greeting, name) {
        super(greeting);
        this.name = name;
    }

    // method childSay
    childSay() {
        console.log(`${this.greeting}, ${this.name} this is the child class`);
    }
}

// instantiate di parent
let parent1 = new Parent("Hai");
parent1.parentSay();

// child
let child1 = new Child("Hello", "Mark");
child1.childSay();

// latihan parent namanya vehicle, child1 : car, child2: motorcycle.
class Parents {
    constructor(brand) {
        this.brand = brand;
    }
    Vehicle() {
        console.log(`Kendaraan ini bermerk ${this.brand}`);
    }
}

class Childs extends Parents {
    constructor(brand, kecepatan, brandKecepatan) {
        super(brand);
        this.kecepatan = kecepatan;
        this.brandKecepatan = brandKecepatan;
    }

    Car() {
        console.log(`Kendaraan ini bermerk ${this.brand} dengan memiliki kecepatan ${this.kecepatan} dan kendaraan ini  bermerk dan berkecepatan ${this.brandKecepatan}`);
    }

    Motorcycle() {
        console.log(`Kendaraan ini bermerk ${this.brand} dengan memiliki kecepatan ${this.kecepatan} dan kendaraan ini  bermerk dan berkecepatan ${this.brandKecepatan}`);
    }
}

let vechile = new Parents("Honda");
vechile.Vehicle();

let car = new Childs("Honda", "30 km/jam", "Honda 30 km/jam");
car.Car();

let motorcycle = new Childs("Honda", "10 km/jam", "Honda 10 km/jam");
motorcycle.Motorcycle();

// class Latihan adalah sebuah Parent Class
class Latihan {
    constructor(nama, umur, nilai) {
        this.nama=nama;
        this.umur=umur;
        this._batasNilai=nilai;
    }

    // getter
    get batasNilai(){
        return this._batasNilai;
    }

    //setter
    set batasNilai(nilai){
        if(nilai > 100 || nilai < 0){
            console.log("Data yang dimasukkan diluar batas yang telah ditentukan");
        } else {
            console.log(`Nilainya adalah ${this.Nilai()}`);
        }
    }

    // ini adalah sebuah method Nilai()
    Nilai(){
        if(this._batasNilai >= 90 && this._batasNilai <= 100){
            console.log(`Nilai nya adalah : ${this._batasNilai} maka gradenya adalah A`);
        } else if (this._batasNilai >= 80 && this._batasNilai <= 89) {
            console.log(`Nilai nya adalah : ${this._batasNilai} maka gradenya adalah B`);
        } else if (this._batasNilai >= 70 && this._batasNilai <= 79) {
            console.log(`Nilai nya adalah : ${this._batasNilai} maka gradenya adalah C`);
        } else if (this._batasNilai >= 60 && this._batasNilai <= 69) {
            console.log(`Nilai nya adalah : ${this._batasNilai} maka gradenya adalah D`);
        } else if (this._batasNilai < 60){
            console.log(`Nilai nya adalah : ${this._batasNilai} maka gradenya adalah E`);
        } else{
            console.log(`${this.batasNilai}`);
        }
    }
}

// let data = new Latihan("Tasya", 25, -10);
// console.log(`Nama : ${data.nama}, Umur : ${data.umur}, Nilainya : ${data.batasNilai}`);
// data.batasNilai=Pelatihan.batasNilai;

// ini adalah sebuah child class yaitu class Pelatihan, dan parent classnya adalah Latihan.
class Pelatihan extends Latihan {
    constructor(nama, umur, pelatihan, nilai) {
        super(nama, umur, nilai);
        this.pelatihan=pelatihan;
    }

    namaProgram(){
        if(this.pelatihan == "Pemprograman Website"){
            console.log("Nama program pelatihan yang diikuti adalah Pemprograman Website");
        } else {
            console.log("Nama program pelatihan yang diikuti adalah Design Website");
        }
    }
}




let pelatihan = new Pelatihan("Tasya", 25, "Pemprograman Website", 100);
console.log(`Nama : ${pelatihan.nama}, Umur : ${pelatihan.umur}, Pelatihan: ${pelatihan.pelatihan}, Nilainya : ${pelatihan.batasNilai}`);
pelatihan.namaProgram();
pelatihan.Nilai();
pelatihan.batasNilai=pelatihan.batasNilai;