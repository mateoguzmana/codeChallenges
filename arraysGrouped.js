/**
* Arrays grouped by key by Mateo Guzmán
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
    let dataGrouped = [];
    
    for(let i in data) {
        
        if(dataGrouped[data[i][key]] == undefined) {
            
            for(let x in data) {
                
                if(data[i][key] == data[x][key]) {
                    
                    if(dataGrouped[data[i][key]]) {
                        dataGrouped[data[i][key]].push(data[x]);
                    } else {
                        dataGrouped[data[i][key]] = [];
                        dataGrouped[data[i][key]].push(data[x]);
                    }
                    
                }
                
            } 
            
        }
        
    }
    
    return dataGrouped;
};

// call functions with different keys
groupBy(data, "date");
groupBy(data, "amount");