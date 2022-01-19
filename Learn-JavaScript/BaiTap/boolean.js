// Làm bài tập tại đây
// Chỉ sửa code tại vị trí dấu 3 chấm

function run(bookCoin, userCoin) {
    if (userCoin >= bookCoin) {
        return "Bạn có thể mua cuốn sách này!";
    } else {
        return "Bạn không thể mua cuốn sách này!";
    }
}

// Làm bài tập tại đây

function canVote(age) {
    if (age >= 18) {
        return "Đủ điều kiện bầu cử"
    } else {
        return "Không đủ điều kiện bầu cử"
    }
}

// Làm bài tập tại đây

function isCommentable(verifiedAt) {
    var result;
    
    if (verifiedAt !== "") {
        result = true;
    } else {
        result = false;
    }

    return result;
}