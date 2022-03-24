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
    else if (text == "What's your name") {
        speech.text = "My name is Rakibul";
    }
    else if (text == "what's your profession") {
        speech.text = "I am a web developer";
    }
    else {
        speech.text = "Please try again";
    }

    document.getElementById("response").innerText = speech.text;
    window.speechSynthesis.speak(speech);
}