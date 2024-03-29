
const tempBox = document.getElementById("tempBox");
const toCelsus = document.getElementById("toCelsus");
const toFarenheit = document.getElementById("toFarenheit");
const risultato = document.getElementById("risultato");
let temp;


function convertire() {
    if (toCelsus.checked) {
        temp = Number(tempBox.value);         /* converte il valore(numeri inserito dal utente) in numero */
        temp = temp * 9 / 5 + 32;                           /* la formula della 
                                                              conversione da celsi  a Fahrenheit */
        risultato.textContent = temp + " ℉ ";

    } else if (toFarenheit.checked) {
        temp = Number(tempBox.value);
        temp = (temp - 32) * (5 / 9);           /* la formula della 
                                                conversione da Fahrenheit a Celsi */
        risultato.textContent = temp + " °C";
    } else {
        risultato.textContent = "Seleziona una opzione";
    }
}
