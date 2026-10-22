
"use strict";

// 1. Array of student objects
let students = [
    { name: "Rahul", age: 19, course: "BSc Computer Science" },
    { name: "Priya", age: 18, course: "BSc Mathematics" },
    { name: "Aman", age: 20, course: "BCom" }
];

// Get HTML elements
const container = document.getElementById("student-container");
const message = document.getElementById("message");

// 2. Display all students using a loop
function showStudents() {
    container.innerHTML = "";

    for (let student of students) {
        const card = document.createElement("div");
        card.className = "student-card";

        const name = document.createElement("h3");
        name.textContent = student.name;

        const age = document.createElement("p");
        age.textContent = "Age: " + student.age;

        const course = document.createElement("p");
        course.textContent = "Course: " + student.course;

        card.append(name, age, course);
        container.appendChild(card);
    }

    message.textContent = students.length + " students displayed.";
}

// 3. Add a student using a callback and setTimeout
function addStudentWithCallback(callback) {
    message.textContent = "Adding student... Please wait 2 seconds.";

    setTimeout(function () {
        const newStudent = {
            name: "Neha",
            age: 19,
            course: "BSc Computer Science"
        };

        students.push(newStudent);
        callback();
    }, 2000);
}

// 4. Add a student using a Promise
function addStudentWithPromise() {
    message.textContent = "Adding student... Please wait 2 seconds.";

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            try {
                const newStudent = {
                    name: "Neha",
                    age: 19,
                    course: "BSc Computer Science"
                };

                students.push(newStudent);
                resolve();
            } catch (error) {
                reject(error);
            }
        }, 2000);
    });
}

// 5. Async/await version used by the Add Student button
async function handleAddStudent() {
    try {
        await addStudentWithPromise();
        showStudents();
        message.textContent = "Student added successfully!";
    } catch (error) {
        message.textContent = "Error adding student.";
        console.error(error);
    }
}

// 6. Button events
document.getElementById("showBtn").addEventListener("click", showStudents);

document.getElementById("addBtn").addEventListener("click", handleAddStudent);

document.getElementById("themeBtn").addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});

// Demonstrate the callback version separately.
// Uncomment the next line to test it instead of the Promise version.
// addStudentWithCallback(showStudents);
