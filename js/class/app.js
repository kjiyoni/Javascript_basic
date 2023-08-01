// 모듈 (23.06.27)
import { Student } from "./Student.js";
import { HighStudent } from "./HighStudent.js";

let student = new Student(10, '김지연', 90, 80, 50);
console.log(student.toString());


let highStudent = new HighStudent(10, '김지연', 90, 80, 70, 30);
console.log(highStudent.toString());

