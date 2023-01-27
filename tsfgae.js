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
    document.getElementById("coverQuestionNumCover").className = "show";
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

function backToMain() {
    document.getElementById("sfgaeChessPage").className ="hide";
    document.getElementById("maPage").className = "show";
    document.getElementById("body").className = "map";
   // for (let i = 0; i < 5; i++) {
     //   document.getElementById("cover" + i).classList.add("coverImg");
    //  }
    document.getElementById("cover1").classList.add("coverImg");
    document.getElementById("cover2").classList.add("coverImg");
    document.getElementById("cover3").classList.add("coverImg");
    document.getElementById("cover4").classList.add("coverImg");
    document.getElementById("cover5").classList.add("coverImg");
    document.getElementById("coverQuestionNum").innerHTML = " ";
}