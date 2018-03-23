function staircase(n) {
    for(let i = 0; i < n; i++) {
        let str = "";
        for(let z = 0; z < n- 1  - i; z++) {
            str+=" ";
        }
        for(let x = 0; x <= i; x++) {
         str+="#";    
        }
        console.log(str)
    }
}