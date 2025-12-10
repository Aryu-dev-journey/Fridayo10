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

  //-----------------------------------------------------------//
  //         user Commands speakingout component               //
  //-----------------------------------------------------------//
  recognition.onresult = function (event) {
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    transcript = transcript.toLowerCase()
    console.log(`user commands : ${transcript}`);

    if (transcript.includes("hello friday")) {
      speakOutResponse("yes boss");
    }
    if (transcript.includes("how are you friday")){
      speakOutResponse("i am fine boss")
    }
  };
  //----------------------------------------------------------

  recognition.continuous = true;

  recognition.onend = function () {
    console.log("voice search deactivated");
  };

  deactivated.addEventListener("click", () => {
    recognition.stop();
  });

  //----------------------------ai read out---------------------//

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
