// document.getElementById(`one`).addEventListener("mouseover", degreeProgression);
// // document.getElementById(`one`).addEventListener("mouseout", degreeStop);




// function degreeProgression() {

// 	let counter = 0;
// 	let reset = 50;

// 	const resetRun = setInterval(() => {
// 		{
// 			if (getComputedStyle(document.getElementById(`one`)).getPropertyValue('--hovered') == 1) {

// 				if (counter == reset) {
// 					counter = 0;

// 				}
// 				counter++
// 				console.log(counter)
// 				document.getElementById(`one`).style.backgroundImage = `radial-gradient(#ffffff4a 0%, rgba(255, 255, 255, 0.2) 20%, transparent 55%, rgba(0, 0, 0, 0.5) 65%), 
// 									repeating-radial-gradient(
// 									transparent ${counter - 35}%, 
// 									black ${counter - 45}%, 
// 									transparent ${counter - 50}%,
// 									black ${counter - 25}%, 
// 									transparent ${counter - 10}%),
// 									radial-gradient(#ffffff4a 0%, rgba(255, 255, 255, 0.2) 20%, transparent 55%, rgba(0, 0, 0, 0.5) 65%)`;


// 			} else if (getComputedStyle(document.getElementById(`one`)).getPropertyValue('--hovered') !== 1) {
// 				clearInterval(resetRun);
// 				degreeStop();
// 			}
// 		}

// 	}, 50);
// }

// function degreeStop() {
// 	console.log("done");
// 	document.getElementById(`one`).style.backgroundImage = 'radial-gradient(rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.75) 20%, transparent 55%, rgba(0, 0, 0, 0.5) 65%)';

// }

function barChoice() {
    if (document.getElementById('back0').checked) {
        document.getElementById('chosenOne').src = './asset/cardBack0.png';
    }
    if (document.getElementById('back1').checked) {
        document.getElementById('chosenOne').src = './asset/cardBack1.png';
    }
    if (document.getElementById('back2').checked) {
        document.getElementById('chosenOne').src = './asset/cardBack2.png';
    }
    if (document.getElementById('back3').checked) {
        document.getElementById('chosenOne').src = './asset/cardBack3.png';
    }
    if (document.getElementById('back4').checked) {
        document.getElementById('chosenOne').src = './asset/cardBack4.png';
    }
    if (document.getElementById('back5').checked) {
        document.getElementById('chosenOne').src = './asset/cardBack5.png';
    }

} deckChoice();