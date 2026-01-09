// ================================
// ERROR HANDLING V JAVASCRIPTU
// ================================
 
// Úloha 90 – ReferenceError
// Vytvoř funkci checkReference(), která se pokusí přistoupit k neexistující proměnné.
// Zachyť chybu pomocí try/catch a vypiš err.name a err.message do konzole a UI.
// Tip: použij neexistující proměnnou např. nonExistentVar
// ------------------------------
function checkReference() {
    try {
        nonExistentVar;
    } catch (err) {
        console.log(err.name, err.message);
        document.getElementById('output90').innerHTML = err.name + ': ' + err.message;
    }

}
document.getElementById("run90").addEventListener("click", checkReference)
function runTask90() {
    checkReference();


}
 
// Úloha 91 – TypeError
// Funkce callFunction(param) očekává parametr typu function.
// Pokud dostane jiný typ, vyhodí TypeError.
// Zachyť chybu try/catch a vypiš err.name a err.message.
// ------------------------------
function callFunction(param) {
    try {
        param();
    } catch (err) {
        console.log(err.name, err.message);
    }
}

 
// Úloha 92 – RangeError
// Funkce createArray(size) vytvoří pole délky size.
// Pokud je size mimo rozsah (např. > 10000), vyhodí RangeError.
// Zachyť chybu a zobraz uživatelsky přívětivou zprávu.
// ------------------------------
function createArray(size) {
    // tvůj kód zde
}

 
// Úloha 93 – SyntaxError (eval)
// Funkce evaluateCode(code) použije eval(code).
// Zachyť případnou SyntaxError a vypiš err.message a err.stack.
// ------------------------------
function evaluateCode(code) {
    // tvůj kód zde
}
 
// Úloha 94 – URIError
// Funkce decode(uri) volá decodeURIComponent(uri).
// Pokud je neplatný URI string, zachytí URIError a vypíše zprávu.
// ------------------------------
function decode(uri) {
    // tvůj kód zde
}
 
// Úloha 95 – Throw vlastní Error
// Funkce validateAge(age) vrátí chybu, pokud age < 0 nebo není číslo.
// Použij throw new Error("Invalid age").
// Zachyť chybu a zobraz uživateli.
// ------------------------------
function validateAge(age) {
    // tvůj kód zde
}
 
// Úloha 96 – Chyby v Promise
// Vytvoř Promise, která náhodně buď resolve() nebo reject() s chybou.
// Použij .catch() a .finally(), vypiš výsledky do konzole.
// ------------------------------
function randomPromise() {
    // tvůj kód zde
}
 
// Úloha 97 – Chyby v async/await
// Funkce fetchData(url) – fetch na URL.
// Pokud fetch failne nebo server vrátí HTTP error, vyhodit vlastní chybu pomocí throw new Error().
// Zachytit chybu try/catch.
// ------------------------------
async function fetchData(url) {
    // tvůj kód zde
}
 
// Úloha 98 – Chyby ve Fetch + HTTP statusy
// Funkce getJson(url) – fetch + res.ok check.
// Pokud res.ok === false, vyhodit vlastní error s textem `HTTP Error: ${res.status}`.
// ------------------------------
async function getJson(url) {
    // tvůj kód zde
}
 
// Úloha 99 – Centralizovaný Error Handler
// Funkce handleError(err) – vypíše console.error(err) a zároveň zobrazí text uživateli.
// Připojit handler ke všem předchozím úlohám (volitelné).
// ------------------------------
function handleError(err) {
    // tvůj kód zde
}
 
// Bonus:
// - Silent Errors: ukázka chyby, která se tichounce ignoruje (např. promise bez catch)
// - Eval deprecated: zachytit starší eval error
// - Logging stacktrace: zobrazit err.stack pro debugging, ale nikdy ne na produkci
 
 

 