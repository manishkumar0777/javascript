const person = {
    name : 'jordan',
    greet : function(){console.log('hello!..' + this.name)},
}

person.greet();

//what will hapen if 
const greet = person.greet

greet(); //will print hello but at the place of name there will be undefined


//this fucntion with new way
const friend = {
    name : 'david',
}
friend.greet = person.greet;
friend.greet();


// this have alternatives like bind() call() and apply()

//bind():***********
const sick = person.greet.bind({name : 'this is bound Object'});
sick();

//call and apply
person.greet.call({name : 'manish'});
person.greet.apply({name : 'Praveen'});


//arrow notation**********
const newPerson = {
    name : 'newPerson',
    greet : () => {console.log('hi..' + this.name)},
}

newPerson.greet(); // the output will be undefined


