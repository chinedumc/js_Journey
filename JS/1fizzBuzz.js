for (i = 1; i <= 100; i++) {
	if (i % 3 == 0 && i % 5 != 0) {
		console.log(i, "Fizz");
	} else if (i % 3 != 0 && i % 5 == 0) {
		console.log(i, "Buzz");
	} else if (i % 3 == 0 && i % 5 == 0) {
		console.log(i, "FizzBuzz");
	} else {
		console.log(i);
	}
}



let name = 'John'
name = 'Mike'
const otherName = 'Doe'
const thirdName = {
	[name]: 'Sam'
}

thirdName[otherName] = 'Dre'

console.log(thirdName)

const students = [
	{name: 'John',
	 school: 'FGC'	
},
{name: 'Johnny',
school: 'FGC'
},
{name: 'Sam',
school: 'FGCA'
},
{name: 'Jen',
school: 'FGC'
},
{name: 'Jude',
school: 'FGCA'
},
{name: 'Jade',
school: 'EGC'
},
{name: 'Sus',
school: 'EGC'
}
]

const studentSets = [...new Set(students.map((student) => {
	return student.school
}))]

const fgcaStudents = students.find((person) => {
	return person.school ==='FGCA'})
console.log(fgcaStudents)
