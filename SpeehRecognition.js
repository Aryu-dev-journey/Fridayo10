//-------------------------------------------------------------//
//                       speech recognition                    //
//-------------------------------------------------------------//
document.addEventListener("DOMContentLoaded", () => {
  //control buttons for voice recognition
  const activated = document.getElementById("StartBtn");
  const deactivated = document.getElementById("StopBtn");
  const SpeakOut = document.getElementById("SpeakBtn");

  //main recognition func
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  recognition.onstart = function () {
    console.log("voice search activated");
  };

  activated.addEventListener("click", () => {
    recognition.start();
  });

  recognition.continuous = true;

  recognition.onend = function () {
    console.log("voice search deactivated");
  };

  deactivated.addEventListener("click", () => {
    recognition.stop();
  });

  //--------------------------------read out---------------------//

  function speakOutResponse(message) {
    const speech = new SpeechSynthesisUtterance();
    // different voices==============================
    const allVoiceOptions = speechSynthesis.getVoices();
    speech.text = message;
    //=====================================
    speech.voice = allVoiceOptions[1];
    ///====================================
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    console.log("Speaking");
  }
  SpeakOut.addEventListener("click", () => {
    speakOutResponse("hello and welcome to my site");
  });
});

// window.onload = function (){
//   speakOutResponse("    ")
// }
