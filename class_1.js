class PersegiPanjang {
    constructor(p, l){
        /**
         * properti/atribut dari sebuah objek
         * didefinisikan di dalam method constructor
         */
        this.panjang = p
        this.lebar = l
    }

    luas = () => {
        return this.panjang * this.lebar
    }

    keliling = () => {
        return 2 * (this.panjang + this.lebar)
    }
}

let tanah = new PersegiPanjang(10,50)
console.log("Luas Tanah = " + tanah.luas());
console.log("Keliling Tanah = " + tanah.keliling());
