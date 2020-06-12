
const btn = document.getElementById("btn");
const result = document.getElementById("result"); 

// audio setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log("You can speak now!!");
}

// taking transcript from 2 dimensional array
recognition.onresult = function(event) {
    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById('result').innerHTML = text;
    readMe(text);
}

// getting voice 
function readMe(text) {
   var speech = new SpeechSynthesisUtterance();
   speech.text = text;
   speech.pitch = '15';
   speech.rate = '4';

   // my condtions 
    if(text.includes('time'))
    speech.text = 'It Is ' + new Date().getHours() + ' ' + new Date().getMinutes() + ' right now ';
    else if(text.includes('my birthday'))
    speech.text = 'Your Birthday Is On 12 December ';
   
 // output
    window.speechSynthesis.speak(speech);

}
