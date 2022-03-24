const recognition = new webkitSpeechRecognition();

recognition.onresult = function (event) {
    const text = event.results[0][0].transcript;
    document.getElementById("question").innerText = text;

    read(text);
}

function read(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if (text == "hello") {
        speech.text = "hello";
    }
    else if (text == "who are you") {
        speech.text = "I am Rakibul";
    }
    else if (text == "what's your profession") {
        speech.text = "I am a web developer";
    }
    else if (text == "madan") {
        speech.text = "tui madan"
    }
    else {
        speech.text = "please try again";
    }

    document.getElementById("response").innerText = speech.text;
    window.speechSynthesis.speak(speech);
}