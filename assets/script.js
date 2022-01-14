
// Recebe duas classes
function mudaModo(){
    mudaClasses();
    mudaTexto();
}


// Com o auxílio do tooggle é adicionada a classe CSS 'darkModeClass no JS'
function mudaClasses(){
    button.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    section.classList.toggle(darkModeClass);
    
}


// Função responsável para mudar o texto de acordo com o modo que está ativado
function mudaTexto(){

    const lightMode = 'Light Mode';
    const darkMode =  'Dark Mode';
    const tituloDark = 'Curtiu o modo dark ? ;)';
    const tituloLight = 'Experimente o modo dark :)';


    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        h2.innerHTML = darkMode + 'ON';
        h1.innerHTML = tituloDark
        return;
    }
    
    button.innerHTML = darkMode;
    h2.innerHTML = lightMode + 'ON';
    h1.innerHTML = tituloLight;
}


// Pegando elementos HTML - manipulando o DOM
const darkModeClass = 'dark-mode';
const h2 = document.getElementById('page-title');
const button = document.getElementById('mode-selector');
const footer = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];
const h1 = document.getElementsByTagName('h1')[0];
const section = document.getElementsByTagName('section')[0];








// Adicionado o evento ao botão e chamando, a classe mudaModo
button.addEventListener('click', mudaModo);


