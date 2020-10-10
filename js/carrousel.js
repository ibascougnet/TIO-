document.addEventListener("DOMContentLoaded", function (){
    "Use Srtict";
    //1. Almacenar todo elementos "li", botones inferiores, dentro de la galeria en un arrglo "buttom"
    let buttom = document.querySelectorAll(".carrousel ul li")
    //2. Obtener los "button" laterales de la galeria con clase "next_butom"
    let nextButtom = document.getElementsByClassName("js-next_butom")
    window.setInterval(function(){
        changeImg(0, 1)
    }, 3000)
    //3. Asignar un evento a cada elemento del array "button" que llame a la funcion "changeImg"
    //con primer parametro igual a su indice en el arreglo
    for (let i = 0; i < buttom.length; i++){
        buttom[i].addEventListener("click", ()=> {
            changeImg (i, 0);
        })
    }
    //4.a Asignar al "button" lateral izquierdo evento "click"
    //Que llame a la función "changeImg" con segundoparametro igual a -1
    nextButtom[0].addEventListener("click", ()=> {
        changeImg(0, -1)
    })
    //4.b Asignar al "button" lateral derecho evento "click"
    //Que llame a la función "changeImg" con segundoparametro igual a -1
    nextButtom[1].addEventListener("click", ()=> {
        changeImg(0, 1)
    })
    function changeImg (n, m) {
        //5. Obtener todos los "figure" y almacenarlos en el array "imgClass"
        let imgClass = document.querySelectorAll(".carrousel div figure")
        //6. Recorrer el array "imgClass"
        for (let index = 0 ; index < imgClass.length ; index++) {
            //6.a Encontrar a los elementos con clase "actived", 
            //que es la que permite mostrarlo,y quitarse
            if (imgClass[index].className == "actived" ) {
                imgClass[index].classList.toggle("actived")
                buttom[index].classList.toggle("li-btn")
                if (m == 0) {
                    //6.b Mostrar el elemnto del array "imgClass" con idice igual al parametro "n"
                    //que es pasado por los botones inferiores de la galeria
                    imgClass[n].classList.add("actived")
                    buttom[n].classList.add("li-btn")
                }
                else {
                    //6.c Cuando el parametro "m" de los botones laterales sea distinto de "0"
                    //Añadir al elemento anterior o posterior la clase "actived"
                    if ((index + m ) > imgClass.length-1) {
                        //Cuando la suma sea mayor al ultimo indice del arrglo, cambiar a 0 el idice
                        imgClass[0].classList.add("actived")
                        buttom[0].classList.add("li-btn")
                    }
                    else if ((index + m) < 0) {
                        //Cuando la suma sea menor al primer indice del arrglo, cambiar al ultimo idice
                        imgClass[imgClass.length-1].classList.add("actived")
                        buttom[buttom.length-1].classList.add("li-btn")
                    }
                    else {
                        imgClass[(index + m)].classList.add("actived");
                        buttom[(index + m)].classList.add("li-btn");
                    }
                }
                break;
            }
        }
    }
});