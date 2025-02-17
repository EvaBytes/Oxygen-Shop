const basePrices = { basic: 0, pro: 25, premium: 60 };
const currencySymbols = { usd: "$", gbp: "£", eur: "€" };
const currencySelector = document.getElementById("currency-selector");

fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json")
  .then(response => {
    if (response.ok) { 
      return response.json().then(rates => {
        console.log(rates);

        function updatePrices() {
          const selectedCurrency = currencySelector.value;
          const exchangeRate = rates.usd[selectedCurrency];
          const currencySymbol = currencySymbols[selectedCurrency];

          ["basic", "pro", "premium"].forEach(plan => {
            const price = Math.round(basePrices[plan] * exchangeRate);
            document.querySelector(`.${plan}__price`).textContent = `${currencySymbol}${price}`;
          });
        }
        currencySelector.addEventListener("change", updatePrices);
        updatePrices();
      });
    } else {
      throw new Error("Something really terrible is about to happen");
    }
  })
  .catch(error => console.error("Error fetching currency data:", error));
