function activeChess() {
    document.getElementById("body").className = "sfgaeChessPage";
    document.getElementById("maPage").className = "hide";
    document.getElementById("sfgaeChessPage").className = "show";
    alert("You have found the box!");
}

function coverImgCheck(coverNum) {
    document.getElementById("cover" + coverNum).classList.add("imgCoverOnclick");
    // document.querySelector("#coverImage").disabled = true;
    //document.getElementById("coverImage").classList.add("hide");
    checkCoverNum(coverNum)
}

function showNum(num) {
    document.getElementById("coverQuetionNum").innerHTML = num;
    document.getElementById("coverQuetionNum").className = "coverQuestionNum";
}

function checkCoverNum(coverNum) {
    switch(coverNum) {
        case 2:
            showNum("4");
            break;
        case 1:
            showNum("8");
            break;
        case 3:
            showNum("5");
            break;
        case 4:
            showNum("6");
            break;
        case 5:
            showNum("7");
    }
}