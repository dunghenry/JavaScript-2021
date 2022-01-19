const iPhone7 = {
    name: 'iphone7',
    color: 'Pink',
    weight: 300,
    takePhoto(){
        console.log("Take a photo")
    },
    objChild : {
        name: 'Child Object',
        methodChild(){
            console.log(this);
        }
    }
}
//console.log(iPhone7.takePhoto());
//console.log(typeof(iPhone7));
console.log(iPhone7.objChild.methodChild());