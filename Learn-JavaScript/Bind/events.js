const teachers = {
    firstName: "Minh",
    lastName: "Thảo",
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    },
};
let btn = document.getElementById('btn');
btn.onclick = teachers.getFullName.bind(teachers);