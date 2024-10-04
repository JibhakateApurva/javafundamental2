function totalValue() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    console.log(`The Total cart value is ${total}`);
    return total;
}

totalValue(10,20,30)