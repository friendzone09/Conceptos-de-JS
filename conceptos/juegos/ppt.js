const btnPlay = document.querySelector('#btn');
const h3User = document.querySelector('#user span');
const h3Compu = document.querySelector('#compu span');
const h1Result = document.querySelector('h1')

btnPlay.addEventListener('click', ()=>{
    const choisUser = prompt('ELige: \n piedra \n papel \n tijeras');
    choisUser.toLocaleLowerCase;
    const choises =['piedra', 'papel', 'tijeras'];

    const choiserCompu = choises[Math.floor(Math.random()*3)];
    let message = '';
    if(choisUser == choiserCompu){
        message= 'Empate `(*>﹏<*)′'
    } else if(choisUser == 'piedra' && choiserCompu == 'tijeras' ||
        choisUser == 'papel' && choiserCompu == 'piedra' ||
        choisUser == 'tijeras' && choiserCompu == 'papel'){

        message= 'Ganaste ☆*: .｡. o(≧▽≦)o .｡.:*☆';

    } else{
        message = 'Perdiste ✈️🏢🏢💥';
    }

    h3User.innerText = choisUser;
    h3Compu.innerText= choiserCompu;
    h1Result.innerText = message
});
