const add = function(a,b){
    console.log(arguments)
    return a +b ;
}

console.log(add(54,60))

const user = {
    "name":"onkundi",
    "cities":["nairobi","New York","Dublin"],
    printPlacesLived(){
       return this.cities.map((city) => this.name + "has lived in " + city)
    }
}

const multplier = {
    numbers:[1,45,6,65,4],
    multiplyBy:2,
    multply(){
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}
console.log(multplier.multply())