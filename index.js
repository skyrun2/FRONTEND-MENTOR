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
let filter = document.getElementById('filter')
let continents = document.getElementById('continents')
// function dropDown(){
//     if (continents.style.display = `none`) {
//         filter.addEventListener('mouseover', ()=>{
//             continents.style.display = `flex`
//             console.log('1');})
//     }
//     if (continents.style.display = `flex`) {
//         filter.addEventListener('click', ()=>{continents.style.display = `none`
//         console.log('2')})
//     }
// }
// dropDown()
let countries = document.getElementById('countries')
let asia = document.getElementById('asia')
let africa = document.getElementById('africa')
let ociena = document.getElementById('ociena')
let americas = document.getElementById('americas')
let polar = document.getElementById('polar')
let europe = document.getElementById('europe')
let all = document.getElementById('all')
console.log(africa,asia,ociena,polar,americas,europe, all);
console.time('one')
let allString = file
 let asiaString = file.filter(item=> item.region == 'Asia')
 let africaString = file.filter(item=> item.region == 'Africa')
 let americasString = file.filter(item=> item.region == 'Americas')
 let polasString = file.filter(item=> item.region == 'Polar')
 let europeString = file.filter(item=> item.region == 'Europe')
 let oceaniaString = file.filter(item=> item.region == 'Oceania')

 console.log(allString, asiaString, africaString, americasString, polasString,europeString, oceaniaString)
function placement(arr) {
    let countriesString = ""
    for (let i = 0; i <arr.length; i++) {
        countriesString +=
                `<div class="country">
                    <img class="c-flag" src="${arr[i].flag}" alt="">
                    <div class="desc">
                        <h2 class="c-name">${arr[i].name}</h2>
                        <p class="c-population"><span class="bold">Population:</span> ${arr[i].population}</p>
                        <p class="c-region"><span class="bold">Region:</span>${arr[i].region}</p>
                        <p class="c-capital"><span class="bold">Capital:</span>${arr[i].capital}</p>
                    </div>
                </div>`
    
    }
    countries.innerHTML = countriesString
    // let allFilter = file.filter(e)
}
console.log(placement(file));
 console.timeEnd('one')

 all.addEventListener('click',()=>{placement(allString)})
 asia.addEventListener('click',(()=>{placement(asiaString)}))
 africa.addEventListener('click',(()=>{placement(africaString)}))
 europe.addEventListener('click',(()=>{placement(europe)}))
 ociena.addEventListener('click',(()=>{placement(oceaniaString)}))
 polar.addEventListener('click',(()=>{placement(polasString)}))
 


 