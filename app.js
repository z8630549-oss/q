let inp = document.getElementById("inp")
let iny = document.getElementById("iny")
let btn = document.getElementById("btn")

localStorage.setItem("na", "sanjar")
localStorage.setItem("nu", "1357908642")

btn.addEventListener("click", () => {

    if (inp.value === localStorage.getItem("na") &&
        iny.value === localStorage.getItem("nu")) {
        alert("Tugri")
    } else {
        alert(" tugri emas")
    }
})
