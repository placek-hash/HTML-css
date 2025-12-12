/* -----------------------------------------------------------
 * Úloha 70: Validace e-mailu
 * Napiš regulární výraz pro validaci e-mailové adresy.
 * Implementuj funkci validateEmail(email), která vrátí true/false
 * podle toho, zda je e-mail validní.
 *
 * Procvičuje: základní regex, escapování teček, testování pomocí test()
 * ----------------------------------------------------------- */

function validateEmail(email) {
    
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
 
document.getElementById("run70").addEventListener("click", function() {
    const email = document.getElementById("Input70").value;
    const output = document.getElementById("Output70");
 
    if (validateEmail(email)) {
        output.textContent = "E-mail je platný!";
        output.classList.remove("bg-red-200");
        output.classList.add("bg-green-200");
    } else {
        output.textContent = "E-mail není platný!";
        output.classList.remove("bg-green-200");
        output.classList.add("bg-red-200");
    }
});

/* -----------------------------------------------------------
 * Úloha 71: Hledání čísel v textu
 * Vytvoř regulární výraz, který najde všechna čísla v textu.
 * Implementuj funkci findNumbers(text), která vrátí pole čísel.
 *
 * Procvičuje: kvantifikátory +, globální modifikátor g, match()
 * ----------------------------------------------------------- */

function findNumbers(text) {
    const regex = /\d+/g;
    const matches = text.match(regex);
    return matches ? matches.map(Number) : [];
}

document.getElementById("run71").addEventListener("click", function() {
    const text = document.getElementById("Input71").value;
    const output = document.getElementById("Output71");
    const numbers = findNumbers(text);
    output.textContent = numbers.length > 0 ? numbers.join(", ") : "Žádná čísla nenalezena";
});


/* -----------------------------------------------------------
 * Úloha 72: Formátování data
 * Napiš regex, který zachytí datum ve formátu DD.MM.YYYY a převede
 * ho pomocí replace() na formát YYYY-MM-DD.
 *
 * Procvičuje: skupiny (), backreference $1-$3, replace()
 * ----------------------------------------------------------- */

function formatDate(date) {
    const regex = /(\d{2})\.(\d{2})\.(\d{4})/;
    return date.replace(regex, '$3-$2-$1');
}

document.getElementById("run72").addEventListener("click", function() {
    const date = document.getElementById("dateInput").value;
    const output = document.getElementById("Output72");
    const formatted = formatDate(date);
    output.textContent = formatted;
});


/* -----------------------------------------------------------
 * Úloha 73: Validace hesla
 * Napiš regex, který ověří, že heslo obsahuje:
 * - min. 8 znaků
 * - velké písmeno
 * - malé písmeno
 * - číslici
 * - speciální znak
 *
 * Procvičuje: lookaheads, kombinace skupin, komplexní validace
 * ----------------------------------------------------------- */

function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:<>?[\]\\;'".,/~\-`])[A-Za-z\d!@#$%^&*()_+{}|:<>?[\]\\;'".,/~\-`]{8,}$/;
    return regex.test(password);
}

document.getElementById("run73").addEventListener("click", function() {
    const password = document.getElementById("passwordInput").value;
    const output = document.getElementById("Output73");
    const isValid = validatePassword(password);
    output.textContent = isValid ? "Heslo je platné!" : "Heslo není platné!";
    output.classList.toggle("bg-red-200", !isValid);
    output.classList.toggle("bg-green-200", isValid);
});


/* -----------------------------------------------------------
 * Úloha 74: Extrakce HTML tagů
 * Pomocí regexu vyber všechny HTML tagy včetně jejich obsahu.
 * Implementuj funkci extractTags(html), která vrátí pole tagů.
 *
 * Procvičuje: nežravé kvantifikátory *?, globální match
 * ----------------------------------------------------------- */

function extractTags(html) {
    const regex = /<[^>]*>.*?<\/[^>]*>/g;
    return html.match(regex) || [];
}

document.getElementById("run74").addEventListener("click", function() {
    const html = document.getElementById("htmlInput").value;
    const output = document.getElementById("Output74");
    const tags = extractTags(html);
    output.textContent = tags.length > 0 ? tags.join(", ") : "Žádné tagy nenalezeny";
});


/* -----------------------------------------------------------
 * Úloha 75: Čištění textu
 * Vytvoř dva regexy:
 * 1. pro nahrazení vícenásobných mezer jednou
 * 2. pro odstranění speciálních znaků
 *
 * Implementuj funkci cleanText(text).
 *
 * Procvičuje: skupiny znaků [], řetězení replace()
 * ----------------------------------------------------------- */

function cleanText(text) {
    const regex1 = /\s+/g;
    const regex2 = /[^\w\s]/g;
    return text.replace(regex1, ' ').replace(regex2, '');
}

document.getElementById("run75").addEventListener("click", function() {
    const text = document.getElementById("cleanInput").value;
    const output = document.getElementById("Output75");
    const cleaned = cleanText(text);
    output.textContent = cleaned;
});


/* -----------------------------------------------------------
 * Úloha 76: Parsování CSV
 * Pomocí regexu rozparsuj CSV s hodnotami v uvozovkách.
 * Cílem je vrátit strukturovaná data.
 *
 * Procvičuje: matchování textu s ohledem na uvozovky, skupiny (), g
 * ----------------------------------------------------------- */

function parseCSV(csvText) {
    const lines = csvText.split('\n');
    const result = [];
    for (const line of lines) {
        const regex = /"([^"]*)"|[^,]+/g;
        const row = [];
        let match;
        while ((match = regex.exec(line)) !== null) {
            row.push(match[1] || match[0]);
        }
        result.push(row);
    }
    return result;
}

document.getElementById("run76").addEventListener("click", function() {
    const csv = document.getElementById("csvInput").value;
    const output = document.getElementById("Output76");
    const parsed = parseCSV(csv);
    output.textContent = JSON.stringify(parsed, null, 2);
});


/* -----------------------------------------------------------
 * Úloha 77: Validace kreditní karty
 * Napiš regex pro validaci čísel kreditních karet (Visa, MasterCard).
 * Ignoruj mezery ve vstupu.
 *
 * Procvičuje: alternativy, různé délky, escapování mezer
 * ----------------------------------------------------------- */

function validateCreditCard(cardNumber) {
    const regex = /tvůj_regex_zde/;
    return regex.test(cardNumber.replace(/\s/g, ''));
}


/* -----------------------------------------------------------
 * Úloha 78: Minifikace CSS
 * Implementuj funkci minifyCSS(css), která:
 * 1. odstraní CSS komentáře
 * 2. odstraní zbytečné mezery
 *
 * Procvičuje: použití regexu pro odstranění bloků, whitespace cleanup
 * ----------------------------------------------------------- */

function minifyCSS(css) {
    const regex1 = /tvůj_regex_zde/; 
    const regex2 = /tvůj_regex_zde/;
    return css.replace(regex1, '').replace(regex2, ' ');
}


/* -----------------------------------------------------------
 * Úloha 79: Analyzátor logů
 * Pomocí regexu extrahuj logy ve formátu:
 * [TIMESTAMP] LEVEL: MESSAGE
 *
 * Cílem je získat timestamp, úroveň a zprávu.
 *
 * Procvičuje: skupiny (), kapturní skupiny, match()
 * ----------------------------------------------------------- */

function parseLogs(logText) {
    const regex = /tvůj_regex_zde/;
    return logText.match(regex);
}


/* -----------------------------------------------------------
 * Úloha 80: Jednoduchý template engine
 * Napiš regex, který najde {{promenne}} a nahradí je hodnotami
 * z objektu data.
 *
 * Procvičuje: zachytávací skupiny, callback v replace()
 * ----------------------------------------------------------- */

function renderTemplate(template, data) {
    const regex = /tvůj_regex_zde/g;
    return template.replace(regex, (match, key) => data[key] || '');
}


/* -----------------------------------------------------------
 * Úloha 81: Validace českého telefonního čísla
 * Podporované formáty:
 * - +420 123 456 789
 * - 123 456 789
 * - 604123456
 *
 * Procvičuje: nepovinný prefix, alternativy, čištění whitespace
 * ----------------------------------------------------------- */

function validateCzechPhone(phone) {
    const regex = /tvůj_regex_zde/;
    return regex.test(phone.replace(/\s/g, ''));
}


/* -----------------------------------------------------------
 * Úloha 82: Rozdělení camelCase na slova
 * Napiš regex, který rozdělí camelCase text na slova.
 * Např. "camelCaseText" → "camel Case Text"
 *
 * Procvičuje: lookahead/lookbehind nebo skupiny, replace()
 * ----------------------------------------------------------- */

function camelCaseToWords(camelCase) {
    const regex = /tvůj_regex_zde/;
    return camelCase.replace(regex, ' $1').trim();
}


// TEST
console.log(validateEmail("test@example.com")); 
console.log(findNumbers("Mám 3 jablka a 15 hrušek"));
console.log(formatDate("25.12.2023"));
console.log(validatePassword("SilnéHeslo123!"));
console.log(extractTags('<div>Test</div><p>Ahoj</p>'));
console.log(cleanText("  Příliš    žluťoučký  kůň!  "));
console.log(validateCreditCard("4111 1111 1111 1111"));
console.log(minifyCSS("body { color: red; }"));
console.log(parseLogs(`[2023-01-01 10:00:00] INFO: Start`));
console.log(renderTemplate("Ahoj {{name}}", { name: "Petr" }));
console.log(validateCzechPhone("+420 604 123 456"));
console.log(camelCaseToWords("camelCaseText"));