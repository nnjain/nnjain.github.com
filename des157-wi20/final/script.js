// (function() {
//     "use strict";
//     var computerVoices =["Samantha", "Tom", "Q"];


//     function speakEmail(){
    
//     var selectedEmail = emails[getRandomInt(0, emails.length-1)];
//     var utterance = new SpeechSynthesisUtterance(selectedEmail);
//     var voices = window.speechSynthesis.getVoices();
    
//     utterance.volume = 0.15;
//     utterance.voice = voices.filter(function(voice) { return voice.name == computerVoices[getRandomInt(0,7)]; })[0];
    
//     window.speechSynthesis.speak(utterance);
    
//     checkIfSpeaking();
    
//     }
    
//     function checkIfSpeaking(){
    
//     setTimeout( function(){
    
//     if(speechSynthesis.speaking){
//     console.log("speaking");
//     checkIfSpeaking();
//     }
//     else {
//     console.log("done");
//     setTimeout(speakEmail, 2000);
//     }
    
//     }, 3000);
    
//     }
    
//     createBox();
//     speakEmail();
// })();