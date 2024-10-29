/*Defino las variables para los objetos que quiero asociar 
a los precios, al tipo de moneda y el ID del HTML*/

const basePrices = { basic: 0, pro: 25, premium: 60 };
const currencySymbols = { usd: "$", gbp: "£", eur: "€" };
const currencySelector = document.getElementById("currency-selector");

/*Hago la solicitud a la API, en la que 
se encuentran los cambios de moneda*/

    fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json")
        .then(response => {
            if (response.ok) { 
                return response.json().then(rates=>{
                    console.log(rates)
//Creo una función para actualizar los precios según la moneda que seleccione
        function updatePrices() {
            const selectedCurrency = currencySelector.value;
            const exchangeRate = rates[selectedCurrency] || 1;
            const currencySymbol = currencySymbols[selectedCurrency];


// Para actualizar los precios de cada plan...
        ["basic", "pro", "premium"].forEach(plan => {
            const price = basePrices[plan] * exchangeRate;
            console.log([plan])
            console.log(exchangeRate)
            document.querySelector(`.${plan}__price`).textContent = 
                price === 0 ? `${currencySymbol}0` : `${currencySymbol}${price.toFixed(2)}`;
            });
        }

// Agrego el listener para obtener las tasas de cambio
    currencySelector.addEventListener("change", updatePrices);
                })
            } else {
                throw new Error("Something really terrible is about to happen");
            }
            
        });


