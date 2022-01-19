let person = {
    id: 1,
    name: "Trần Văn Dũng",
    infor: function () {
        console.log(this.id + " - " + this.name)
    },
    fullInfor: function (city, country) {
        console.log(this.id + " - " + this.name + " - " + city + " - " + country);
    }
}
person.infor();
person.fullInfor("Ninh Bình", "Việt Nam")


person2 = {
    id: 2,
    name: "Trần Văn A"
}

//Call
person.infor.call(person2);
person.fullInfor.call(person2, "Hà Nội", "VN");

//Apply
person.infor.apply(person2);
person.fullInfor.apply(person2, ["NB", "VN"])