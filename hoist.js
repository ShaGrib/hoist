// console.log(hello);
// var hello = 'world';

// console.log(hello); logs undefined
// var hello = 'world';

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// var needle = 'haystack';
// test();
// function test(){
    // var needle = 'magnet';
    // console.log(needle); logs magnet
// }

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan = 'super cool';
// function print(){
    // brendan = 'only okay';
    // console.log(brendan); logs nothing as the function is never called
// }
// console.log(brendan); logs super cool

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food = 'chicken';
// console.log(food); logs chicken
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food); logs half-chicken
//     var food = 'gone';
// }

// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// mean(); errors out as function does not exist
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// console.log(genre); logs undefined
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre); logs rock
//     var genre = "r&b";
//     console.log(genre); logs r&b
// }
// console.log(genre); log disco

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// dojo = "san jose";
// console.log(dojo); logs san jose
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo); logs seattle
//     var dojo = "burbank";
//     console.log(dojo); logs burbank
// }
// console.log(dojo); logs san jose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// console.log(makeDojo("Chicago", 65)); logs { name: 'Chicago', students: 65, hiring:true }
// console.log(makeDojo("Berkeley", 0)); errors out the code due to dojo being assigned incorrectly in the else if
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
