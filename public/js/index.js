window.onload = function(){
    //JavaScript del Index
    let container = document.querySelector('.container');
    let subtitulo = document.querySelector('.subtitulo');
    let destacado = document.querySelectorAll('p');
    let fondo = document.querySelector('body');
    let enlace = document.querySelector('a');
    container.style.display = 'block';
    let nombre = prompt('Ingrese su nombre');
    console.log(nombre);
    if(nombre !=''){
        subtitulo.innerHTML += nombre;
    }else{
        subtitulo.innerHTML += 'INVITADO';
    }
        
    subtitulo.style.textTransform = 'uppercase';
    /* let confirmar = confirm('Desea colocar un fondo de pantalla ') */
    /* if(confirmar){
        fondo.classList.add('fondo');
        enlace.style.color = '#E51B3E';
    } */
    console.log(destacado);
    for(let i = 0 ; i < destacado.length; i++){
        if(i % 2 == 0){
            destacado[i].classList.add('destacadoPar');
        }else{
            destacado[i].classList.add('destacadoImpar');
        }
    }

    //index menu
    let logoDH = document.querySelector('.logoDH');
    let menu = document.querySelector('#menu');

    logoDH.addEventListener('click',function(){
        menu.classList.toggle('mostrar')
    })
    
    //mouseout interpreta que salis del elemento #menu cuando entras a un li
    /* menu.addEventListener('mouseout',function(){
       menu.classList.remove('mostrar');
    }) */
    
    //punto 3 mouseover en logo de digital, mostrando el fondo
    logoDH.addEventListener('mouseover',function(){
        fondo.classList.add('fondo');
        enlace.style.color = '#E51B3E';
    });
    logoDH.addEventListener('mouseout',function(){
        fondo.classList.remove('fondo');
    })
    

    
}