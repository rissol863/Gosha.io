let btn = document.querySelector(".theme")
let vic = document.querySelector(".vic img")
let click = false
let text = document.querySelectorAll(".vic span")



let body = document.querySelector("body")

let logo = document.querySelector("nav h2")


let one_text_h2 = document.querySelector(".one_text h2")

let one_text_p = document.querySelector(".one_text p")

let one_text_a = document.querySelector(".one_text a")

let one_text_hero = document.querySelector(".h")

let slide_two_h2 = document.querySelector(".two_text h2")

let slide_two_p = document.querySelector(".two_text p")

let slide_two_a = document.querySelector(".two_text a")

let slide_free_h2 = document.querySelector(".slide_free h2")

let slide_free_p = document.querySelector(".slide_free p")


let slide_free_st_left = document.querySelector(".btn_left")


let slide_free_st_right = document.querySelector(".btn_right")

let slide_free_a = document.querySelector(".btn_free")


btn.onclick = () => {
    click = !click
    if (click == true) {
        slide_free_st_left.src = "img/st_b.png"
        slide_free_st_right.src = "img/st_b.png"
        slide_free_a.style.backgroundColor = "black"
        slide_free_a.style.color = "white"
        
        slide_free_p.style.color = "#000"
        slide_free_h2.style.color = "#000"
        slide_two_p.style.color = "#000"
        slide_two_h2.style.color = "#000"
        one_text_h2.style.color = "#000"
        one_text_p.style.color = "#000"
        one_text_a.style.color = "#fff"
        one_text_hero.style.color = "#000"
        slide_two_a.style.color = "#fff"
        slide_two_a.style.backgroundColor = "black"


        body.style.backgroundColor = "white"
        vic.src = "img/v_b.png"
        text.forEach(element => {
            element.style.color = "#ff0000"


        });

        btn.src = "img/mun.png"

        logo.style.color = "black"




    }
    else {
        slide_free_a.style.backgroundColor = "white"
        slide_free_a.style.color = "black"
        slide_free_st_left.src = "img/st.png"
        slide_free_st_right.src = "img/st.png"
        slide_free_p.style.color = "#fff"
        slide_free_h2.style.color = "#fff"
        slide_two_p.style.color = "#fff"
        slide_two_h2.style.color = "#fff"
        one_text_h2.style.color = "#fff"
        one_text_p.style.color = "#fff"
        one_text_a.style.color = "#000"
        one_text_a.style.backgroundColor = "#fff"
        one_text_hero.style.color = "#fff"



        body.style.backgroundColor = "black"
        vic.src = "img/v_w.png"
        text.forEach(element => {
            element.style.color = "#52ff26"


        });

        btn.src = "img/sun.png"

        logo.style.color = "white"

    
    }
}
