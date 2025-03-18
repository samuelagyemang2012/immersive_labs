document.addEventListener('DOMContentLoaded', function () {

  // Vars
  var player = new Audio();
  const audioBase = 'audios/'
  const sceneEl = document.querySelector('a-scene')
  const title = document.getElementById('title')
  const planetText = document.getElementById('planet_text')
  let arSystem;

  // Targets
  const sun_model = document.querySelector('#sun_model')
  const mercury_model = document.querySelector('#mercury_model');
  const venus_model = document.querySelector('#venus_model');
  const earth_model = document.querySelector('#earth_model');
  const mars_model = document.querySelector('#mars_model');
  const jupiter_model = document.querySelector('#jupiter_model');
  const saturn_model = document.querySelector('#saturn_model');
  const uranus_model = document.querySelector('#uranus_model');
  const neptune_model = document.querySelector('#neptune_model');

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
    // console.log(planetData[target.id])
    var targetTitle = planetData[target.id].title
    var targetContent = planetData[target.id].text
    var targetSound = planetData[target.id].audio

    //Set title and content
    title.innerHTML = targetTitle
    planetText.innerHTML = targetContent

    //set sound 
    var model = document.querySelector('#' + planetData[target.id].click_id)
    model.addEventListener('click', () => {
      // console.log(targetTitle)
      title.innerHTML = targetTitle
      planetText.innerHTML = targetContent
      player.src = audioBase + targetSound
      player.play()
    })
  }

  
  // detect target found
  sun_model.addEventListener('targetFound', () => {
    onTargetFound(sun_model)
  })

  mercury_model.addEventListener('targetFound', () => {
    onTargetFound(mercury_model)
  })

  venus_model.addEventListener('targetFound', () => {
    onTargetFound(venus_model)
  })

  earth_model.addEventListener('targetFound', () => {
    onTargetFound(earth_model)
  })

  mars_model.addEventListener('targetFound', () => {
    onTargetFound(mars_model)
  })

  jupiter_model.addEventListener('targetFound', () => {
    onTargetFound(jupiter_model)
  })

  saturn_model.addEventListener('targetFound', () => {
    onTargetFound(saturn_model)
  })

  uranus_model.addEventListener('targetFound', () => {
    onTargetFound(uranus_model)
  })

  neptune_model.addEventListener('targetFound', () => {
    onTargetFound(neptune_model)
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
