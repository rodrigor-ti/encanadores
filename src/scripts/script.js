const form = document.querySelector(".fale-conosco-form")
const mascara = document.querySelector(".background-form")

function mostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    form.style.visibility = "visible"
    mascara.style.visibility = "visible"
}

function esconderForm() {
    form.style.left = "-300px"
    form.style.transform = "0"
    form.style.visibility = "hidden"
    mascara.style.visibility = "hidden"
}

function mostrarFormFaleConosco() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    form.style.visibility = "visible"
    mascara.style.visibility = "visible"
}