
/*  
            Hello, object
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.

            Check for emptiness
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

            Sum object properties
We have an object storing salaries of our team:


            Multiply numeric property values by 2

Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
*/

let house = {
    windows: 10,
    doors: 3,
    roof: 1,
};

house.owner = 'john';
house['surname'] = 'Smith';
house.owner = 'Pete';

delete house.owner;

let sample = {}
function isEmpty(obj){    
    for (let key in obj){
        return false;
    }
    return true
}

console.log(isEmpty(house));

let salaries = {
    john: 100,
    Ann: 160,
    Pete: 130
}

function getSum(obj){
    let total = 0;
    for (let key in obj){        
        total = total + obj[key];
    }
    return total;
}

console.log(getSum(salaries))

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiNum(obj){
    for (let key in obj){
        if( (typeof obj[key]) === 'number' ){
            obj[key] = obj[key] * 2;
        }
    }
    return console.table(obj)
};

multiNum(menu);