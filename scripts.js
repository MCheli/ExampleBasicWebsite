var numberOfFaces = 5;

function generateFaces() {
    var theLeftSide = document.getElementById("leftSide");
    var theRightSide = document.getElementById("rightSide")
    var theBody = document.getElementsByTagName("body")[0];

    for(i = 0; i < numberOfFaces; i++) {
        var smiley = document.createElement("IMG");
        smiley.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
        smiley.style.top = randomLocation() + "px";
        smiley.style.left = randomLocation() + "px";

        theLeftSide.appendChild(smiley);
    }

    var leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastElementChild);

    theRightSide.appendChild(leftSideImages);


    //Event Handlers
    theLeftSide.lastChild.onclick= function nextLevel(event){
        event.stopPropagation();
        numberOfFaces += 5;

        while (theLeftSide.firstChild) {
            theLeftSide.removeChild(theLeftSide.firstChild);
        }
        while (theRightSide.firstChild) {
            theRightSide.removeChild(theRightSide.firstChild);
        }

        generateFaces();
    };

    theBody.onclick = function gameOver() {
        alert("Game Over!");
        theBody.onclick = null;
        theLeftSide.lastChild.onclick = null;
    };
}

//Helper function for generating random locations
function randomLocation(){
    var max = 400;
    var min = 0;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}