function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//document.querySelector('.tecla_pom').onclick= playSonidoPom;

const listaDeTeclas = document.querySelectorAll('.tecla');
//listaDeTeclas[0].onclick=playSonido; funcion anonima

for(let contador=0;contador<listaDeTeclas.length ; contador++){
    const tecla=listaDeTeclas[contador];
    const instrumento=tecla.classList[1];
    console.log(contador);

    const idAudios=`#sonido_${instrumento}`;//template string
    console.log(idAudios);

    tecla.onclick=function(){ //funcion anonima
        playSonido(idAudios);
    };

    tecla.onkeydown =function(evento){
        
        if(evento.code==='Space' || evento.code==='Enter'){
            tecla.classList.add('activa');
        }
        
        console.log(evento.code==='Space' || evento.code==='Enter');
    }

    // Agregue el código necesario aquí para eliminar la clase 'activa' 
    // tan pronto como la tecla deje de ser presionada.
    //funcion Anonima

    tecla.onkeyup = function(){//cuando el usuario suelta la tecla)
        tecla.classList.remove('activa');//quita la “clase activa”
}

}
/*
let contador=0;

while(contador<9){
    const tecla=listaDeTeclas[contador];
    const instrumento=tecla.classList[1];
    console.log(instrumento);

    const idAudios=`#sonido_${instrumento}`;//template string
    console.log(idAudios);

    tecla.onclick=function(){ //funcion anonima
        playSonido(idAudios);
    };
    contador++;
    console.log('vuelta' + contador);
    
}
    */

