class Person{
    constructor(name='Anonymous',age=0){
        this.name = name
        this.age = age
    }
    getGreeting(){
        return `Hi am ${this.name}` //es6 functionality
    }

    getDescription(){
        return  `${this.name} is ${this.age} year(s) old`
    }
}
class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major = major

    }
    hasMajor(){
        return !!this.major
    }

    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()){
            description += ` his/her major is ${this.major}`
        }
        return description;
        
    }

}

class Traveler extends  Person{
    constructor(name,age,location){
        super(name,age);
        this.location = location 
    }

    hasLocation(){
        return !!this.location
    }
    getGreeting(){
        let greeting = super.getGreeting()

        if(this.hasLocation()){
            greeting += ` i come from ${this.location}`
        }
        return greeting
    }
}



const novak = new Traveler('kelvin onkundi',50,'computer Science')
console.log(novak.getGreeting())
