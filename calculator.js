document.getElementById("convertButton").addEventListener("click", calculateCurrencyConversion);

function calculateCurrencyConversion() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;

    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    var exchangeRate = getExchangeRate(fromCurrency, toCurrency);
    var result = inputValue * exchangeRate;

    document.getElementById("result").innerHTML = "Result: " + result.toFixed(2) + " " + toCurrency;
}

function getExchangeRate(fromCurrency, toCurrency) {
    var exchangeRates = {
        "USD": { "EUR": 0.85, "RM": 4.15, "SGD": 1.35 },
        "EUR": { "USD": 1.18, "RM": 4.89, "SGD": 1.58 },
        "RM": { "USD": 0.24, "EUR": 0.20, "SGD": 0.32 },
        "SGD": { "USD": 0.74, "EUR": 0.63, "RM": 3.10 },
    };

    // Retrieve the exchange rate based on the selected currencies
    return exchangeRates[fromCurrency][toCurrency] || 1;
}
