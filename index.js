 import file from "./rest-countries-api-with-color-theme-switcher-master/data.json" assert {type: "json"}
function mode() {
    let mode = document.getElementById('mode')
    let  body = document.getElementById('body')
    mode.addEventListener('click' ,function(e){
        body.classList.toggle('dm')
    })

}
console.log(file);
mode()
let filter = document.getElementById('filter')
let continents = document.getElementById('continents')
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
 let searchInput = ''
 let searchIcon = document.getElementById('search-icon')
 let searchBar = document.getElementById('search-bar')
 
 
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
                        <a href="country.html?country=${arr[i].name}" class="q-p" id="q-p" ></a>
                </div>`
                console.log(arr[i].name)
    
    }
    countries.innerHTML = countriesString
    // let allFilter = file.filter(e)
}
console.log(placement(file));
 console.timeEnd('one')

 all.addEventListener('click',()=>{placement(allString)})
 asia.addEventListener('click',(()=>{placement(asiaString)}))
 africa.addEventListener('click',(()=>{placement(africaString)}))
 europe.addEventListener('click',(()=>{placement(europeString)}))
 ociena.addEventListener('click',(()=>{placement(oceaniaString)}))
 polar.addEventListener('click',(()=>{placement(polasString)}))
 americas.addEventListener('click',(()=>{placement(americasString)}))
 
 searchBar.addEventListener('input',(()=>{
    searchBar.value = searchBar.value.replace(/[^a-zA-Z \-]/g, '')
    searchInput = searchBar.Value
}))

searchIcon.addEventListener('click',(()=>{
    console.log(searchInput)
    console.log(searchBar.value);
    let search = file.filter(item =>item.name.toLowerCase().includes(searchBar.value.toLowerCase()))
    console.log(search);
    placement(search)
}))

searchBar.addEventListener('focus',(()=>{
    document.body.onkeydown = function(e) {
        if (e.key == "Enter" || e.code == "Enter" || e.keyCode == 13){
            let search = file.filter(item =>item.name.toLowerCase().includes(searchBar.value.toLowerCase()))
            console.log(search);
            placement(search)
        }
    }
}))