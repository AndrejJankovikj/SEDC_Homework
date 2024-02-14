class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.getFullastName = function () {
            console.log(`Person's Full name is: ${this.firstName} ${this.lastName}`);
        }
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, academyName, studentId) {
        super(firstName, lastName, age);
        this.academyName = academyName;
        this.studentId = studentId;
        this.whichAcademy = function () {
            console.log(`The student ${firstName} is studying in the ${this.academyName} `);

        }

    }
}
let student1 = (new Student(`Mario`, `Gulicovski`, 23, `Qinshift`, 2211));
let student2 = (new Student(`Marko`, `Stojanov`, 25, `SEDC`, 5662));
console.log(student1);
console.log(student2);
student1.whichAcademy()

//Create DesignStudent, CodeStudent and NetworkStudent constructor functions that inherit from Student.
class DesignStudent extends Student {
    constructor(firstName, lastName, age, academyName, studentId, studentOfTheMonth) {
        super(firstName, lastName, age, academyName, studentId)
        this.studentOfTheMonth = studentOfTheMonth
        this.attendAdobeExam = function () {
            console.log(`The student ${firstName} ${lastName} is doing an adobe exam!`);
        }
    }
}
let firstDesignStudnet = (new DesignStudent(`Petar`, `Rapet`, 22, `SEDC`, 225883, true))
console.log(firstDesignStudnet);
// hasIndividualProject - boolean
// hasGroupProject - boolean
// doProject(type) - method that accepts string. If the string is individual or group it should write that the person is working on the project of that type and set the value to true on the property of the project
class CodeStudent extends Student {
    constructor(firstName, lastName, age, academyName, studentId, hasIndividualProject, hasGroupProject) {
        super(firstName, lastName, age, academyName, studentId)
        this.hasIndividualProject = hasIndividualProject
        this.hasGroupProject = hasGroupProject
        this.doProject = function (type) {
            if (type === "individual") {
                console.log(`The Studnet ${firstName} ${lastName} is working on a ${type} project`)
                this.hasIndividualProject = true
            }
            else if (type === "group") {
                console.log(`The Studnet ${firstName} ${lastName} is working on a ${type} project`)
                this.hasGroupProject = true;

            }
            else { console.log("error"); }
        }
    }
}
let firstCodeStudent = new CodeStudent(`Ivan`, `Apostolovski`, 22, `SEAVUS`, 2222, false, false)
console.log(firstCodeStudent);
console.log(firstCodeStudent.hasGroupProject)

firstCodeStudent.doProject("group")
console.log(firstCodeStudent.hasGroupProject)
// academyPart - number
// attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!
// Note: For all students, the academyName property should be auto generated based on which Student we are creating ( design, code or network )

// Create one of each students Check all students with the Student method for checking students academy
class NetworkStudent extends Student {
    constructor(firstName, lastName, age, academyName, studentId, academyPart) {
        super(firstName, lastName, age, academyName, studentId)
        this.academyPart = academyPart
        this.attendCiscoExam = function () {
            console.log(`The student ${firstName} ${lastName} is doing a cisco exam!`)
        }
    }

}
let firstNetworkStudent = new NetworkStudent(`Andrej`, `Jankovikj`, 19, `Cupra`, 2211, 4)
console.log(firstNetworkStudent);
firstNetworkStudent.attendCiscoExam()