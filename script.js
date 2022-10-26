var carsDatabase = [
 
    {
        carProducer: "Opel",
        carModel: "Astra",
        carYear: 2019,
        color: "black",
        isSaled: false,
    },
    {
        carProducer: "Mercdes",
        carModel: "Vito",
        carYear: 2013,
        color: "white",
        isSaled: true,
    },
    {
        carProducer: "Lexus",
        carModel: "GS300",
        carYear: 2015,
        color: "yellow",
        isSaled: false,
    },
    {
        carProducer: "Toyota",
        carModel: "Rav4",
        carYear: 2020,
        color: "gray",
        isSaled: false,
    },
    {
        carProducer: "Toyota",
        carModel: "Rav4",
        carYear: 2020,
        color: "gray",
        isSaled: false,
    },
 
    {
        carProducer: "Maserati",
        carModel: "Diablo",
        carYear: 2020,
        color: "gray",
        isSaled: true,
    }
];
 
console.log(carsDatabase.length);
for (let i = 0; i < carsDatabase.length; i++) {
 
 
    if (carsDatabase[i].isSaled == true) {
        console.log(carsDatabase[i]); }
}; 


