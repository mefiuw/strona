const wyloguj = document.querySelector("button.logout");
wyloguj.addEventListener("click", () => {
    console.log("wylogowano");
});
let input = document.querySelector('.textarea')
const newEl = document.createElement("p");
let tekstt = document.querySelector(".textarea")

const srodek = document.querySelector("p").addEventListener("keypress", (e) => {
    if (e.key === "Enter")

        tekstt.innerHTML += tekstt + input;





    else {
        false;
    }

});