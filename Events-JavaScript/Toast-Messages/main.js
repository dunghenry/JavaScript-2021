function toast({
    title = "",
    message = "",
    type = "info",
    duration = 3000
}) {
    const main = document.getElementById("toast");
    // console.log(main);
    if (main) {
        const toast = document.createElement("div");
        // Tạo thẻ div
        toast.onclick = function (e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };
        const icons = {
            success: "far fa-check-circle",
            warning: "far fa-check-circle",
            error: "far fa-check-circle"
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);
        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s,
    fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
        <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `;
        main.appendChild(toast);
        const timeHide = duration + 1000;
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, timeHide)
    }
}
// toast({
//     title: "Thất bại!",
//     message: "Có lỗi xảy ra, vui lòng liên hệ quản trị viên.",
//     type: "success",
//     duration: 5000,
// });
function showSuccessToast() {
    toast({
        title: "Thành công!",
        message: "Bạn đã đăng ký thành công tài khoản tại F8.",
        type: "success",
        duration: 4000,
    });
};

function showErrorToast() {
    toast({
        title: "Thất bại!",
        message: "Có lỗi xảy ra, vui lòng liên hệ quản trị viên.",
        type: "error",
        duration: 4000,
    });
};