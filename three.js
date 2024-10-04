const students = [
    {
        name : "Apurva",
        marks : 60,
    },
    {
        name : "Bhavik",
        marks : 95,
    },
    {
        name : "Bhargav",
        marks : 89,
    },
    {
        name : "Chhagan",
        marks : 82,
    },
    {
        name : "Anshika",
        marks : 99,
    },
    {
        name : "Naksh",
        marks : 97,
    },
];

const checkStudents = (name) => {
    for ( let student of students) {
        if (student.name === name) {
            return student.marks > 90 ? console.log(`congratulations ${student.name}! You have cleared the exam.`) : console.log(`Sorry! you have not cleared the exam`);
        }
    }
    console.log("Invalid User !!!")
};

checkStudents("Naksh");
checkStudents("Apurva");
checkStudents("Bhavik");