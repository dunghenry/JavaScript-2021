this.firstName = "Minh"
this.lastName = "Thu"

const teachers = {
    firstName: "Minh",
    lastName: "Thảo",
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(teachers.getFullName());//Minh Thảo

const getTeacherName1 = teachers.getFullName

console.log(getTeacherName1());//Minh Thu

//Dùng bin để quy định dùng method nào
const getTeacherName2 = teachers.getFullName.bind(teachers);//Minh Thảo

const student = {
    firstName: "Văn",
    lastName: "Dũng",
};
const getTeacherName3 = teachers.getFullName.bind(student);
console.log(getTeacherName3());//Văn Dũng


const mother = {
    firstName: "Nguyen",
    lastName: "Nam",
    getFullName(data1, data2) {
        console.log(data1, data2);
        return `${this.firstName} ${this.lastName}`;
    }
};
const data = mother.getFullName.bind(mother);

console.log(data("dt1", "dt2"))