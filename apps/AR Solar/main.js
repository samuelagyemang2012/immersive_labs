document.addEventListener("DOMContentLoaded", function() {

    // Vars
	const sceneEl = document.querySelector('a-scene');
    const infoButton = document.querySelector("#info_button");
	let arSystem;

    // Targets
    const sun_model = document.querySelector('#sun_model');
    // const examplePlane = document.querySelector('#example-plane');
    // const examplePlane = document.querySelector('#example-plane');
    // const examplePlane = document.querySelector('#example-plane');
    // const examplePlane = document.querySelector('#example-plane');
    // const examplePlane = document.querySelector('#example-plane');
    // const examplePlane = document.querySelector('#example-plane');

    // Add events
	sceneEl.addEventListener('loaded', function () {
	  arSystem = sceneEl.systems["mindar-image-system"];
	});

    sceneEl.addEventListener("arReady", (event) => {
        console.log("MindAR is ready");
    });

    sceneEl.addEventListener("arError", (event) => {
        console.log("MindAR failed to start");
    });
    // --------------------------------------------------------------

    // Event for info button
    infoButton.addEventListener('click', () => {
        Play(audioPath+audios[0]);
    });
    // ---------------------------------------------------------------

    // detect target found
      sun_model.addEventListener("targetFound", event => {
        infoButton.style.visibility = "visible"
        console.log("sun card found");
      });
      // --------------------------------------------------------------------------------------


	

	// detect target lost
	// exampleTarget.addEventListener("targetLost", event => {
	//   console.log("target lost");
	// });
	// detect click event
	sunTarget.addEventListener("click", event => {
	  console.log("sun clicked");
	});
});
    