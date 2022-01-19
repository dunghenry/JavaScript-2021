// !Object Constructor

function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User("Trần", "Dũng", "Avatar");
var user = new User("Phạm", "Tài", "Avatar");

console.log(author.constructor===User);
// !Xem lại bản thiết kế xem có đúng ko

author.title = "Chia sẻ dạo tại F8";
user.comment = "Liệu có khóa asp.net không anh😄";
// Thêm key cho author và user


User.prototype.className = "F8";

User.prototype.getClassName = function(){
    return this.className;
}

console.log(author.className);
console.log(author.getClassName());
console.log(user.getClassName());


console.log(author);
console.log(user);
console.log(author.getName());
console.log(user.getName());






