
function getStudents(classroom) {
    const {hasTeachingAssitant, classList} = classroom;

    let teacher, asistant, students;

    if (hasTeachingAssitant) {
        [teacher, asistant, ...students] = classList;
    } else {
        [teacher, ...students] = classList;
    }

    return students;
}

const firstClassroom = {
    hasTeachingAssitant: true,
    classList: [
        "Teacher",
        "Teacher Asistant",
        "Student 1",
        "Student 2",
        "Student 3"
    ]
}

console.log('firstClassroom', firstClassroom);
console.log('firstClassroom students', getStudents(firstClassroom));

const secondClassroom = {
    hasTeachingAssitant: false,
    classList: [
        "Teacher",
        "Student 1",
        "Student 2",
        "Student 3"
    ]
}

console.log('secondClassroom', secondClassroom);
console.log('secondClassroom students', getStudents(secondClassroom));