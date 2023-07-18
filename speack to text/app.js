const SpeechRecognitionService = 
    window.SpeechRecognition || window.webkitSpeechRecognition;
const recognitionService = new SpeechRecognitionService();

const startBtn = document.querySelector(".btn-start");
const textLog = document.querySelector(".text-log");

const languages = {
    English: "en-US",
    Romanian: "ro-RO"
};

startBtn.addEventListener("click", () => {
    recognitionService.languages = determineLanguage();
    recognitionService.continuous = true;

    recognitionService.onresult = handleResult;

    if (startBtn.classList.contains("btn-pulsating")) {
        stopRecording();
    } else {
        startRecording();
    }
});

function determineLanguage() {
    const selected = document.querySelector("#language").value;
    switch (selected) {
        case "english":
            return languages.English;
        case "romanian":
            return languages.Romanian;
        default:
            throw new Error("Language not suported");   
    }
}

function handleResult(event){
    const results = [];
    for (const result of event.results) {
        results.push(`${result[0].transcript}`);
    }
    textLog.innerHTML += results.at(-1);
}

function stopRecording() {
    recognitionService.stop();
    startBtn.classList.remove("btn-pulsating");
    textLog.innerHTML += "<br />";
}

function startRecording() {
    recognitionService.start();
    startBtn.classList.add("btn-pulsating");
}