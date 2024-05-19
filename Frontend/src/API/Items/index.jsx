export const statusItems = {
    get: [
        { number: 12, type: ' Comida  ' },
        { number: 21, type: ' Higiene  ' },
        { number: 13, type: ' Ropa  ' },
        { number: 46, type: ' Total ' },
    ],
    sortDesc() {
        return this.get.slice().sort((a, b) => b.number - a.number);
    },
    get sorted() {
        return this.sortDesc();
    },
};


export const boxItems = {
    get : [
        {
            backgroundFondo : '#282a36',
            backgroundProgr : '#48C9B0',
            Product : "Dog chow",
            Section : "Comida",
            Units : 15,
            Quantitylot : 33,
            Lote : 1,
            Type : "Purina"
        }
        ,
        {
            backgroundFondo : '#282a36',
            backgroundProgr : '#48C9B0',
            Product : "Dog chow",
            Section : "Comida",
            Units : 15,
            Quantitylot : 33,
            Lote : 2,
            Type : "Galletas"
        },
        {
            backgroundFondo : '#282a36',
            backgroundProgr : '#48C9B0',
            Product : "Dog chow",
            Section : "Comida",
            Units : 15,
            Quantitylot : 33,
            Lote : 1,
            Type : "Purina"
        }
    ]
}

