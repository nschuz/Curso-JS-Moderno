const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click' , ejecutarSpeechAPI);


function ejecutarSpeechAPI(){
    const SpeechRecognition=webkitSpeechRecognition;
    const reconigtion = new SpeechRecognition();

    reconigtion.start();

    reconigtion.onstart= function () {
        salida.classList.add('mostrar');
        salida.textContent='Escuchandoo...';
    };

    reconigtion.onspeechend= function (){
        salida.textContent='se dejo de grabar';
        reconigtion.stop();
    };

    reconigtion.onresult= function(e){
        console.log(e.results[0][0]);
        const {confidence , transcript} = e.results[0][0];
        const speech = document.createElement('p');

        speech.innerHTML=`Ggabando ${transcript}`;

        salida.appendChild(speech);

    }
}