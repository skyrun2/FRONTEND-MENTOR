import file from "./rest-countries-api-with-color-theme-switcher-master/data.json" assert {type: "json"}
function mode() {
    let mode = document.getElementById('mode')
    let  body = document.getElementById('body')
    mode.addEventListener('click' ,function(e){
        body.classList.toggle('dm')
    })

}
mode()

function getQeuryParam(str) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(str);
}

const seachQuery =  getQeuryParam('country')
let countryInfo = document.getElementById('country-info')
let countryobj = {}

for (const country of file) {
    if (country.name == seachQuery) {
        countryobj = country
    }
}
console.log(countryobj)
document.title = countryobj.name
 function placement(obj) {
    let countryString =''
    console.log(obj.name);
    countryString = 
    `<div class="left">
    <div class="prev  "><a href="index.html" class="back-link  txt">Back</a></div>
    <div class="img-ctrl"><img src="${obj.flag}" class="country-flag" alt=""></div>
</div>
<div class="right">
    <h2 class="country-name txt">${obj.name}</h2>
    <div class="desc">
        <p class="nat-name   txt">Native Name: <span id="nn">${obj.nativeName}</span></p>
        <p class="popl   txt">Population: <span id="pp">${obj.population}</span></p>
        <p class="region   txt">Region: <span ids="rg">${obj.region}</span></p>
        <p class="sub-reg   txt">Sub-Region: <span id="sb-rg">${obj.subregion}</span></p>
        <p class="capital   txt">Capital: <span id="cap">${obj.capital}</span></p>
        <p class="top-lv-dom   txt">Top-Level-Domain: <span id="tp-lv-dom">${obj.topLevelDomain[0]}</span></p>
        <p class="cur   txt">Currencies: <span id="cur">${obj.currencies[0].name}</span></p>
        <p class="lang   txt">Languages <span id="lang">${obj.languages[0].name}</span></p>
    </div>
    <div class="border">
    <p class="bord-count txt  ">Border Countries</p>
    <div class="borded " id="borded">
    </div>
    </div>
    </div>`
    countryInfo.innerHTML = countryString
    let borders = document.getElementById('borded')
    let borderList = ''
    console.log(obj.borders);
    borderList = obj.borders.map((e,i,arr) =>{`<div class="count txt">${arr[i]}</div>`})
    console.log(borderList);
    borders.innerHTML = borderList
 }
 placement(countryobj)
 