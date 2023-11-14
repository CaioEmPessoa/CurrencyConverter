var converterBtn = document.getElementById("submit");
var currencyOptions = Array.from(document.getElementById("moedaInicial").options).map(option => option.innerHTML);
var moedaInicial;
var moedaFinal;

var currencyCodes = {
    "Real":"BRL",
    "Dolar":"USD",
    "Euro": "EUR",
    "Libra":"GBP"
}

function checkCurrency() {
    moedaInicial = document.getElementById("moedaInicial");
    moedaFinal = document.getElementById("moedaFinal");
    
    if (moedaInicial.value == moedaFinal.value) {
        index = currencyOptions.indexOf(moedaFinal.value);

        if (index == currencyOptions.length-1){
            index = 0;
        }

        moedaFinal.options.selectedIndex = index+1;
    }
}

function convertCurrency() {
    var dinheiroInicial = document.getElementById("dinheiroInicial").value;
    var resultadoValorFinal = document.getElementById("valorFinal");
    var dinheiroFinal;
    var valorMoedaFinal;

    moedaInicial = currencyCodes[document.getElementById("moedaInicial").value];
    moedaFinal = currencyCodes[document.getElementById("moedaFinal").value];

    var request = `https://api.currencyapi.com/v3/latest?apikey=cur_live_gPydHfkn2QKi1ZLPlpSzeL84F0BviRtvwlWigCMS&base_currency=${moedaInicial}`;
    fetch(request)
    .then(response => response.json())
    .then(function(data){
        data = data["data"]
        valorMoedaFinal = data[moedaFinal]["value"];
        dinheiroFinal = Math.round(dinheiroInicial*valorMoedaFinal);
        resultadoValorFinal.innerHTML = `${moedaInicial} ${dinheiroInicial} valem ${moedaFinal} ${dinheiroFinal}`
    })
}

converterBtn.onclick = convertCurrency