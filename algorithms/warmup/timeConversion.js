function timeConversion(s) {
    let newDate = s.split(':');
    
    if(newDate[2].substr(2) == 'PM' && newDate[0] < 12) {
        newDate[0] = parseInt(newDate[0]) + 12;
    }else if(newDate[2].substr(2) == 'AM' && newDate[0] == 12) {
        newDate[0] = "00";
    }
    
    return newDate.join(':').replace('PM', '').replace('AM', '');
}