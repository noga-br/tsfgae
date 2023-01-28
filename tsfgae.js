function activeChess() {
    document.getElementById("body").className = "sfgaeChessPage";
    document.getElementById("maPage").className = "hide";
    document.getElementById("sfgaeChessPage").className = "show";
    alert("You have found the box!");
}

function coverImgCheck(item,coverNum) {
        document.getElementById(item + coverNum).classList.add("imgCoverOnclick");
        // document.querySelector("#coverImage").disabled = true;
        //document.getElementById("coverImage").classList.add("hide");
    switch(item) {
      case "cover":
        checkCoverNum(coverNum);
        break;
      case "letter":
        checkLetterNum(coverNum);
    }
    
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

function checkLetterNum(coverNum) {
    switch(coverNum) {
        case 2:
            showLetterNum("9");
            break;
        case 1:
            showLetterNum("2");
            break;
        case 3:
            showLetterNum("3");
            break;
        case 4:
            showLetterNum("1");
            break;
        case 5:
            showLetterNum("5");
    }
}

function showNum(num) {
    document.getElementById("coverQuetionNum").innerHTML = num;
    document.getElementById("coverQuetionNum").className = "coverQuestionNum";
    document.getElementById("coverQuestionNumCover").className = "show";
}

function showLetterNum(num) {
    document.getElementById("letterQuetionNum").innerHTML = num;
    document.getElementById("letterQuetionNum").className = "coverQuestionNum";
    document.getElementById("coverQuestionNumLetter").className = "show";
}

function backToMain() {
    document.getElementById("sfgaeChessPage").className ="hide";
    document.getElementById("sfgaeLetterPage").className = "hide";
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

function activLetter() {
    alert("You have found the king's letter!");
    document.getElementById("body").className = "sfgaeLetterPage";
    document.getElementById("maPage").className = "hide";
    document.getElementById("sfgaeLetterPage").className = "show";
}