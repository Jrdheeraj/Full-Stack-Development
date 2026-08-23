let a = [];
console.log(a);

let b = [1, 2, 3];
console.log(b);

const students = ['John', 'Jane', 'Jack'];
console.log(students);

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

students[1] = 'stark';

console.log(students);

console.log('length of the students array: ' + students.length);

console.log('index based length of the students array: ' + (students.length - 1));

console.log('name of the student at the last index: ' + students[students.length - 1]);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.push(6);
console.log(numbers);

numbers.push(7, 8, 9);
console.log(numbers);

numbers.pop();
console.log(numbers);

const removedElement = numbers.pop();
console.log('removed Element: ' + removedElement);
console.log(numbers);

const firstElement = numbers.shift();
console.log('Removed first Element: ' + firstElement);
console.log(numbers);

const addedElement =numbers.unshift(1);
console.log('Added first Element: ' + addedElement);
console.log(numbers);

/*splice*/
/*array.splice(start, deleteCount, item1, item2, ...)*/
const values = [1, 2, 3, 4, 5];
values.splice(2, 1); // removes the element at index 2
console.log(values);

values.splice(1, 0, 6); // adds 6 at index 1
console.log(values);

values.splice(3, 1, 7); // replaces the element at index 3 with 7
console.log(values);

/*forEach*/
const numbers1 = [1, 2, 3, 4, 5];
numbers.forEach(function(numbers1){
    console.log(numbers1 * 55)
});

numbers1.forEach(numbers1 =>{
    console.log(numbers1 * 5)
});

const students1 = [
    { name: "Dheeraj", marks: 85 },
    { name: "Rahul", marks: 35 },
    { name: "Arun", marks: 75 },
    { name: "Kiran", marks: 25 }
];

students1.forEach(student => {
        console.log(student.name);
    });

const passedStudents = students1.filter(student => student.marks >= 50);
console.log(passedStudents);

const names = passedStudents.map(student => student.name);
console.log(names);


const prices = [500, 1000, 250, 750];
const total = prices.reduce(sum, price => {
    return sum + price;
}, 0);
console.log(total);