function activeChess() {
    document.getElementById("body").className = "sfgaeChessPage";
    document.getElementById("maPage").className = "hide";
    document.getElementById("sfgaeChessPage").className = "show";
    alert("You have found the box!");
}

function coverImgCheck(coverNum) {
    document.getElementById("cover" + coverNum).classList.add("imgCoverOnclick");
    // document.querySelector("#coverImage").disabled = true;
    document.getElementById("coverImage").classList.add("hide");
    checkCoverNum(coverNum)
}

function checkCoverNum(coverNum) {
    if (coverNum == 2) {
        document.getElementById("coverQuetionNum").innerHTML("4");
    }
    else if(coverNum == 1) {
        document.getElementById("coverQuetionNum").innerHTML("5");
    }
    else if(coverNum == 3) {
        document.getElementById("coverQuetionNum").innerHTML("6");
    }
    else if(coverNum == 4) {
        document.getElementById("coverQuetionNum").innerHTML("7");
    }
    else if(coverNum == 5) {
        document.getElementById("coverQuetionNum").innerHTML("8");
    }
}