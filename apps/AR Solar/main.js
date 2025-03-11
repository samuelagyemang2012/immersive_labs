document.addEventListener('DOMContentLoaded', function () {

  // Vars
  var player = new Audio();
  const audioBase = 'audios/'
  const sceneEl = document.querySelector('a-scene')
  const title = document.getElementById('title')
  const planetText = document.getElementById('planet_text')
  let arSystem;

  // Targets
  const sunModel = document.querySelector('#sun_model')
  const mercuryModel = document.querySelector('#mercuryModel');

  // const examplePlane = document.querySelector('#example-plane');
  // const examplePlane = document.querySelector('#example-plane');
  // const examplePlane = document.querySelector('#example-plane');
  // const examplePlane = document.querySelector('#example-plane');
  // const examplePlane = document.querySelector('#example-plane');
  // const examplePlane = document.querySelector('#example-plane');

  // Add events
  sceneEl.addEventListener('loaded', function () {
    arSystem = sceneEl.systems['mindar-image-system'];
  })

  sceneEl.addEventListener('arReady', (event) => {
    console.log('AR is ready')
  })

  sceneEl.addEventListener('arError', (event) => {
    console.log('AR failed to start');
  })
  // --------------------------------------------------------------

  function onTargetFound(target) {
    var targetTitle = planetData[target.id].title
    var targetContent = planetData[target.id].text
    var targetSound = planetData[target.id].audio

    //Set title and content
    title.innerHTML = targetTitle
    planetText.innerHTML = targetContent

    //set sound 
    var model = document.querySelector('#' + planetData[target.id].click_id)
    model.addEventListener('click', () => {
      player.src = audioBase + targetSound;
      player.play()
    })
  }

  
  // detect target found
  sunModel.addEventListener('targetFound', () => {
    onTargetFound(sunModel)
  })

  mercuryModel.addEventListener('targetFound', () => {
    onTargetFound(mercuryModel)
  })



  // --------------------------------------------------------------------------------------




  // detect target lost
  // exampleTarget.addEventListener("targetLost", event => {
  //   console.log("target lost");
  // });
  // detect click event
  // sunTarget.addEventListener("click", event => {
  //   console.log("sun clicked");
  // });
})
