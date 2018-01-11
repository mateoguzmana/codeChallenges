data = ["a", "b"];

processData = (data, operation) => {
    
        if(operation == "sum" || operation == "concat") {
            let result = operation == "sum" ? 0 : "";
            for(let i in data) {
                result += operation == "sum" ? parseInt(data[i]) : data[i];
            }
            
            return result;
        }else {
            return "Invalid operation";
        }
        
}

processData(data, "concat");