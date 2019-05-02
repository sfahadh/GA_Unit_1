## Object Manipulation

Copy the following code into your console.

```js
var clubs =  [
    {
        name: 'Yearbook',
        students: [
            { first: 'Joe', last: 'Lakin' },
            { first: 'Evalyn', last: 'Bradtke' },
            { first: 'Samuel', last: 'Black' }
        ],
        teacher: 'James Friar'
    },
    {
        name: 'Jazz Band',
        students: [
            { first: 'Douglas', last: 'Wisoky' },
            { first: 'Cora', last: 'Thompson' },
            { first: 'Samuel', last: 'Ziemann' },
            { first: 'Alana', last: 'Cortez'}
        ],
        teacher: 'Luther Richards'
    },
    {
        name: 'Swim Team',
        students: [
            { first: 'Cora', last: 'Thompson' },
            { first: 'Samuel', last: 'Black' },
            { first: 'Alana', last: 'Cortez'},
            { first: 'Joe', last: 'Lakin' }
        ],
        teacher: 'Carol Darby'
    }
];
```

For the following exercises, start from the `clubs` variable.

1. Read and console log the following:  
    * the array that contains all the student club data
    * the number of clubs  
    * the object that contains all of the information for the second club   
    * the teacher of the first club  
    * the array of students in the second team  
    * the last name of the second student on the third team  

1. Create an object literal representing a student with your name, and assign it to a variable.

1. Add yourself to one of the clubs as a student member.  Add a comment saying which club you're joining.

1. Create an object literal representing a new club, and assign it to a variable. Make sure it has values for name, students, and teacher.

    * Add your new club to the array of clubs.  
    * Add yourself as a student in the new club.  

1. Update Samuel Black's first name to Sam everywhere it occurs.

1. Oops, the school is losing extracurricular funding.  Remove one of the clubs from the array. Add a comment to say which club has been defunded.
