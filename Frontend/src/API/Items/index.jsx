export const statusItems = {
    get: [
        { number: 3, type: ' Comida  ' },
        { number: 2, type: ' Higiene  ' },
        { number: 1, type: ' Ropa  ' },
        { number: 6, type: ' Total ' },
    ],
    sortDesc() {
        return this.get.slice().sort((a, b) => b.number - a.number);
    },
    get sorted() {
        return this.sortDesc();
    },
};

export  const boxItems = {
    get : [
        {
            backgroundFondo :  "#E9F7EF",
            backgroundProgr : '#48C9B0',
            Product : "Dog chow",
            Section : "Purina",
            Units : 5,
            UnitsL :12,
            get Quantitylot() {return (this.Units /this.UnitsL) * 100} ,
            Lote : 1,
            Type : "Perro"
        },
        {
            backgroundFondo :  "#E9F7EF",
            backgroundProgr : '#48C9B0',
            Product : "Dog chow",
            Section : "Purina",
            Units : 5,
            UnitsL :12,
            get Quantitylot() {return (this.Units /this.UnitsL) * 100} ,
            Lote : 1,
            Type : "Perro"
        },
        {
            backgroundFondo :  "#D4E6F1",
            backgroundProgr : '#5DADE2',
            Product : "IKIPETS SHAMPOO",
            Section : "Higiene",
            Units : 15,
            UnitsL : 20,
            get Quantitylot() {return (this.Units /this.UnitsL) * 100} ,
            Lote : 1,
            Type : "Gato"
        },
        {
            backgroundFondo :  "#FEF9E7",
            backgroundProgr : '#48C9B0',
            Product : "Pillama",
            Section : "Gato",
            Units : 1,
            UnitsL : 3,
            get Quantitylot() {return (this.Units /this.UnitsL) * 100} ,
            Lote : 1,
            Type : "Ropa"
        },
        {
            backgroundFondo :  "#E9F7EF",
            backgroundProgr : '#48C9B0',
            Product : "Dog chow",
            Section : "Purina",
            Units : 5,
            UnitsL :12,
            get Quantitylot() {return (this.Units /this.UnitsL) * 100} ,
            Lote : 1,
            Type : "Perro"
        },
        {
            backgroundFondo :  "#D4E6F1",
            backgroundProgr : '#5DADE2',
            Product : "IKIPETS SHAMPOO",
            Section : "Higiene",
            Units : 15,
            UnitsL : 20,
            get Quantitylot() {return (this.Units /this.UnitsL) * 100} ,
            Lote : 1,
            Type : "Gato"
        },
    ]
};
  

