/**
* Arrays grouped by key without use for / while / forEach by Mateo Guzmán
*/

// Initialize data
let data = [
   { amount: 300, date: "5/5/2016" },
   { amount: 300, date: "6/5/2016" },
   { amount: 10000, date: "5/5/2016" },
   { amount: 20000, date: "5/5/2016" }
];


/**
* Group by function
* @data required
* @key required
* @dataGrouped returned 
*/
groupBy = (data, key) => {
    return data.reduce((dataGrouped, x) => {
        (dataGrouped[x[key]] = dataGrouped[x[key]] || []).push(x);
        return dataGrouped;
    }, {})
};

// call functions with different keys
groupBy(data, "date");
groupBy(data, "amount");