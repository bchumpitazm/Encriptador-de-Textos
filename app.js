const ingresartexto = document.getElementById("ingresartexto");
const botonencriptar = document.getElementById("botonencriptar");
const botondesencriptar = document.getElementById("botondesencriptar");
const botoncopiar = document.getElementById("botoncopiar");
const mensajefinal = document.getElementById("mensajefinal");
const right = document.getElementById("right");
const muñeco =document.getElementById("muñeco");

//e - enter
//o - ober
//i - imes
//a - ai
//u - ufat

let reemplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]


ingresartexto
botonencriptar
botondesencriptar
botoncopiar
mensajefinal




const remplace = (nuevovalor) => {
    mensajefinal.innerHTML = nuevovalor;
    muñeco.style.display = "none";
    texto_informativo.style.display ="none";
    botoncopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajefinal.classList.add("ajustar");
    ingresartexto.value= "";
}


botonencriptar.addEventListener("click", () => {
    const texto = ingresartexto.value.toLowerCase()
    function encriptar(newtext) {
        for(let i = 0; i < reemplazar.length; i++){
            if (newtext.includes(reemplazar[i][0])) {
                newtext =newtext.replaceAll(reemplazar[i][0], reemplazar[i][1]);
            };
        };
        return newtext
    };
    /*const textoencriptado = encriptar(texto);*/
    remplace(encriptar(texto));

});


botondesencriptar.addEventListener("click", () => {
    const texto = ingresartexto.value.toLowerCase()
    function desencriptar(newtext) {
        for(let i = 0; i < reemplazar.length; i++){
            if (newtext.includes(reemplazar[i][1])) {
                newtext = newtext.replaceAll(reemplazar[i][1], reemplazar[i][0]);
            };
        } // Corregir el uso de dos puntos por punto y coma
        return newtext;
    };
    /*const textodesencriptado = desencriptar(texto);*/
    remplace(desencriptar(texto));

});



botoncopiar.addEventListener("click", () => {
    let texto =mensajefinal;
    texto.select();
    document.execCommand('copy')
    mensajefinal.innerHTML = "";
    if (window.innerWidth >= 770) {
        muñeco.style.display = "block";
    }
    texto_informativo.style.display ="block";
    botoncopiar.style.display = "none";
    right.classList.remove("ajustar");
    mensajefinal.classList.remove("ajustar");
    ingresartexto.focus();
});