var image = document.getElementById("image");
console.log(image);
function myFunctionOff(){
    console.log("Bạn vừa click");
    image.src = "https://chiemtaimobile.vn/images/detailed/26/bong-den-led-thong-minh-ezviz-lb1__4_.jpg";
}
function myFunctionOn(){
    console.log("Bạn vừa click");
    image.src ="https://rangdong.com.vn/uploads/product/LED/LED_Bulb/LED-A45-Y-1W/LED-A45-Y-1W.jpg";
}
// Khi click vào off thì ảnh giữ nguyên còn khi click vào on thì thay ảnh khác là đèn sáng.Ta chỉ set src lại mà thôi