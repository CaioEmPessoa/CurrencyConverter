var converterBtn = document.getElementById("submit")
var currencyOptions = Array.from(document.getElementById("moedaInicial").options).map(option => option.innerHTML);

function checkCurrency() {
    var moedaInicial = document.getElementById("moedaInicial");
    var moedaFinal = document.getElementById("moedaFinal");
    
    if (moedaInicial.value == moedaFinal.value) {
        index = currencyOptions.indexOf(moedaFinal.value)

        if (index == currencyOptions.length-1){
            index = 0
        }

        moedaFinal.options.selectedIndex = index+1
    }
}

function convertCurrency() {
    var moedaInicial = document.getElementById("moedaInicial");
    var moedaFinal = document.getElementById("moedaFinal");

    fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_gPydHfkn2QKi1ZLPlpSzeL84F0BviRtvwlWigCMS")
    .then(response => response.json())
}

converterBtn.onclick = convertCurrency