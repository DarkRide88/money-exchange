// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let money = {};    
    error = {
        error:"You are rich, my friend! We don't have so much coins for exchange",
    }
    let ost;
    flagH = true;
    flagQ = true;
    flagD = true;
    flagN = true;
    flagP = true;
    if(currency > 10000){
        return error;
    }
    if(currency/50 > 0){
        money.H = Math.floor(currency/50)
        ost = currency - money.H*50;         
    } else {
        flagH = false
    }


    if(flagH == false && currency/25 > 0 ){
        money.Q = Math.floor(currency/25)
        ost = currency - money.Q*25;      
    } else if (ost && ost/25 > 0) {
        money.Q = Math.floor(ost/25)
        ost = ost - money.Q*25;       
    } else {
        flagQ == false;
    }

    if(flagQ == false && flagH == false && currency/10 > 0){
        money.D = Math.floor(currency/10)
        ost = currency - money.Q*10;
        
    } else if(ost &&  ost/10 > 0){
        money.D = Math.floor(ost/10)
        ost = ost - money.D*10;       
    } else {
        flagQ == false; 
    }


    if(flagQ == false && flagH == false && flagD == false && currency/5 > 0){
        money.N = Math.floor(currency/5)
        ost = currency - money.N*5;
        
    } else if(ost &&  ost/5 > 0){
        money.N = Math.floor(ost/5)
        ost = ost - money.N*5;
       
    } else {
        flagN = false 
    }


    if(flagQ == false && flagH == false && flagD == false  && flagN == false  && currency/1 > 0){
        money.P = Math.floor(currency/1)
        ost = currency - money.P*1;
        alert(ost)  
    } else if(ost && ost/1>0){
        money.P = Math.floor(ost/1)
        ost = ost - money.P*1;
        flagN = false
    }
    for(val in money){
        if(money[val] == '0'){
            delete money[val]
        }
    }
  
    return money;
}

