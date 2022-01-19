// Làm bài tập tại đây

function run(socialType, isVerified) {
    var result;
    if (socialType === "google" || socialType === "facebook") {
        result = true;
    }
    if (socialType === "email") {
        if (isVerified === true) {
            result = true;
        }
    }

    return result;
}

function votableCheck(isAuthenticated, role) {
    var result;
    if (isAuthenticated === true) {
        result = true;
        if (role === "admin") {
            role === "admin";
        } else if (role === "member") {
            role = "member";
        } else {
            result = false;
        }
    } else {
        result = false;
    }
    return result;
}