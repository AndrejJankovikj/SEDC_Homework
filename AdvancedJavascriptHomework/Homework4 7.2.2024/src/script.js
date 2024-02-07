console.log("Hello");
function Academy(name, start, end) {
    this.name = name;
    this.start = start;
    this.end = end;
    this.students = [];
    this.subjects = [];
    this.numberOfClasses = function () {
        return this.subjects.length * 10;
    };
    this.printStudents = function () {
        console.log("Students in", this.name + ":");
        this.students.forEach(student => console.log(student.firstName, student.lastName));
    };
    this.printSubjects = function () {
        console.log("Subjects in", this.name + ":");
        this.subjects.forEach(subject => console.log(subject.title));
    };
}

function Subject(title, isElective, academy) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = academy;
    this.students = [];
    this.overrideClasses = function (newNumberOfClasses) {
        if (newNumberOfClasses >= 3) {
            this.numberOfClasses = newNumberOfClasses;
        } else {
            console.error("Number of classes must be at least 3");
        }
    };
}

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = function (academy) {
        this.academy = academy;
        academy.students.push(this);
    };
    this.startSubject = function (subject) {
        if (this.academy === null || !this.academy.subjects.includes(subject)) {
            console.error("Cannot start subject. Student either doesn't have an academy or subject doesn't exist in the academy.");
            return;
        }
        if (this.currentSubject !== null) {
            this.completedSubjects.push(this.currentSubject);
        }
        this.currentSubject = subject;
        subject.students.push(this);
    };
}

const academy = new Academy("Code Academy", new Date(2024, 0, 1), new Date(2024, 11, 31));
const mathSubject = new Subject("Math", false, academy);
const physicsSubject = new Subject("Physics", true, academy);
const student1 = new Student("John", "Doe", 20);
const student2 = new Student("Jane", "Smith", 22);

academy.subjects.push(mathSubject, physicsSubject);
student1.startAcademy(academy);
student2.startAcademy(academy);
student1.startSubject(mathSubject);
student2.startSubject(physicsSubject);

academy.printStudents();
academy.printSubjects();
