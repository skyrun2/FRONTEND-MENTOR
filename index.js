 import file from "./rest-countries-api-with-color-theme-switcher-master/data.json" assert {type: "json"}
console.log(file);
function mode() {
    let mode = document.getElementById('mode')
    let  body = document.getElementById('body')
    mode.addEventListener('click' ,function(e){
        body.classList.toggle('dm')
        console.log(body.classList);
    })

}
mode()
let countries = document.getElementById('countries')
let loadingScreen = document.getElementById('ls')
console.time('one')
let countriesString = ""
for (let i = 0; i < file.length; i++) {
    countriesString +=
            `<div class="country">
                <img class="c-flag" src="${file[i].flag}" alt="">
                <div class="desc">
                    <h2 class="c-name">${file[i].name}</h2>
                    <p class="c-population"><span class="bold">Population:</span> ${file[i].population}</p>
                    <p class="c-region"><span class="bold">Region:</span>${file[i].region}</p>
                    <p class="c-capital"><span class="bold">Capital:</span>${file[i].capital}</p>
                </div>
            </div>`
}
countries.innerHTML = countriesString
 console.timeEnd('one')
 loadingScreen.style.display = 'none'
 countries.style.display ='grid'


