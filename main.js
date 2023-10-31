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


const align = document.getElementById('align');
const mission = document.getElementById('misson');
const comm = document.getElementById('comm');
const wants = document.getElementById('wants');
const needs = document.getElementById('needs');
const appear = document.getElementById('appear');

function barChoice() {
	if (document.getElementById('aasgard').checked) {
		align.dataset.align = 'good';
		mission.dataset.mission = 'share tech';
		comm.dataset.comm = 'good';
		wants.dataset.wants = 'will advance';
		needs.dataset.needs = 'good';
		appear.dataset.appear = 'good';
	}
	if (document.getElementById('anastasi').checked) {
		align.dataset.align = 'evil';
		mission.dataset.mission = 'enslave';
		comm.dataset.comm = 'verbal';
		wants.dataset.wants = 'attention';
		needs.dataset.needs = 'uk';
		appear.dataset.appear = 'uk';
	}
	if (document.getElementById('ash').checked) {
		align.dataset.align = 'good';
		mission.dataset.mission = 'good';
		comm.dataset.comm = 'good';
		wants.dataset.wants = 'good';
		needs.dataset.needs = 'good';
		appear.dataset.appear = 'good';
	}
	if (document.getElementById('flest').checked) {
		align.dataset.align = 'good';
		mission.dataset.mission = 'good';
		comm.dataset.comm = 'good';
		wants.dataset.wants = 'good';
		needs.dataset.needs = 'good';
		appear.dataset.appear = 'good';
	}
	if (document.getElementById('hyngr').checked) {
		align.dataset.align = 'good';
		mission.dataset.mission = 'good';
		comm.dataset.comm = 'good';
		wants.dataset.wants = 'good';
		needs.dataset.needs = 'good';
		appear.dataset.appear = 'good';
	}
	if (document.getElementById('iaata').checked) {
		align.dataset.align = 'good';
		mission.dataset.mission = 'good';
		comm.dataset.comm = 'good';
		wants.dataset.wants = 'good';
		needs.dataset.needs = 'good';
		appear.dataset.appear = 'good';
	}
	if (document.getElementById('jxenyin').checked) {
		align.dataset.align = 'good';
		mission.dataset.mission = 'good';
		comm.dataset.comm = 'good';
		wants.dataset.wants = 'good';
		needs.dataset.needs = 'good';
		appear.dataset.appear = 'good';
	}
	if (document.getElementById('perfect').checked) {
		align.dataset.align = 'good';
		mission.dataset.mission = 'good';
		comm.dataset.comm = 'good';
		wants.dataset.wants = 'good';
		needs.dataset.needs = 'good';
		appear.dataset.appear = 'good';
	}
	if (document.getElementById('narrof').checked) {
		align.dataset.align = 'good';
		mission.dataset.mission = 'good';
		comm.dataset.comm = 'good';
		wants.dataset.wants = 'good';
		needs.dataset.needs = 'good';
		appear.dataset.appear = 'good';
	}
	if (document.getElementById('tolmists').checked) {
		align.dataset.align = 'good';
		mission.dataset.mission = 'good';
		comm.dataset.comm = 'good';
		wants.dataset.wants = 'good';
		needs.dataset.needs = 'good';
		appear.dataset.appear = 'good';
	}
	if (document.getElementById('vypti').checked) {
		align.dataset.align = 'good';
		mission.dataset.mission = 'good';
		comm.dataset.comm = 'good';
		wants.dataset.wants = 'good';
		needs.dataset.needs = 'good';
		appear.dataset.appear = 'good';
	}

} deckChoice();

