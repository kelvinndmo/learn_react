const isAdult = (age) => {
    if(age > 18){
        return true
    }
}

const canDrink = (age) => {
    if(age > 21){
        return true
    }
}

const isSenior = (age) => {
    if(age > 65){
        return true
    }
}

export {canDrink, isAdult, isSenior as default}