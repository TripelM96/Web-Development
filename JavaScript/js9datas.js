let today=new Date();
console.log(today); // Thu Sep 11 2025 19:38:09 GMT+0100 (Western European Summer Time)

let now=Date.now();
console.log(now); // 1757616016211
// múmero de milisegundos desde a Epoch (1 de Janeiro de 1970 às 00:00:00)

let date1 = new Date(1757616076626);
console.log(date1); // Thu Sep 11 2025 19:41:16 GMT+0100 (Western European Summer Time)

let date2 = new Date(-1757616076626);
console.log(date2); // Wed Apr 22 1914 05:18:43 GMT+0000 (Western European Summer Time)

// let date3="2025-09-11"; // para o computador, isto é uma string
let date3 = new Date("2025-09-11");
console.log(date3); // Thu Sep 11 2025 01:00:00 GMT+0100 (Western European Summer Time)

let date4 = new Date(2025,9,11,22,30,45);
console.log(date4); // Sat Oct 11 2025 22:30:45 GMT+0100 (Western European Summer Time)

console.log(date3.toLocaleDateString()); // 9/11/2025 - para computadores configurados para língua inglesa - para computadores configurados para língua portuguesa aparece 11/09/2025
console.log(date3.toLocaleDateString('de')); // 11.9.2025 
console.log(date3.toLocaleDateString('pt')); // 11/09/2025
console.log(date3.toLocaleDateString('en-uk')); // 11/09/2025

console.log(date3.toISOString()); // 2025-09-11T00:00:00.000Z
console.log(date3.toDateString()); // Thu Sep 11 2025

function textMonth(month) {
    let listMonths=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    return listMonths[month];
}
function fullTextDate(givenDate) {
    let day=date3.getDate();
    console.log(day); // 11 (dia do Mês)
    let month=date3.getMonth();
    // let monthText;
    // if (month===0) {
    //     monthText="Janeiro";
    // } else 
    // switch (month) {
    //     case 0:
    //         monthText="Janeiro";
    // }
    // let listMonths=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    // let monthText=listMonths[month];
    let monthText=textMonth(month);
    console.log(month); // 8 (0 based - é sempre menos 1 unidade do que o mês real)
    let year=date3.getFullYear();
    console.log(year); // 2025
    let weekDay=date3.getDay();
    let listWeekdays=["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];
    let weekDayText=listWeekdays[weekDay];
    console.log(weekDay); // 4 - Thursday (0 - based - 0 - Sunday)
    // Formato de output da data: Quinta-feira, 11 de Setembro de 2025

    return `${weekDayText}, ${day} de ${monthText} de ${year}`;
}
console.log(fullTextDate(new Date("2025-09-11"))); // Quinta-feira , 11 de Setembro de 2025

let weekDayFulltext=new Intl.DateTimeFormat("pt", { weekday: 'long'}).format(date3);
console.log(weekDayFulltext); // quinta-feira
console.log(weekDayFulltext.charAt(0).toLocaleUpperCase()+weekDayFulltext.slice(1)); // Quinta-feira
let monthFulltext=new Intl.DateTimeFormat("pt", { month: 'long'}).format(date3);
console.log(monthFulltext); // setembro

let fullTextDate2=new Intl.DateTimeFormat("pt", { dateStyle: 'full', timeZone: 'Europe/Lisbon'}).format(date3);
console.log(fullTextDate2); // quinta-feira, 11 de Setembro de 2025

let date5 = new Date("2025-02-31");
console.log(date5); // Mon Mar 03 2025 00:00:00 GMT+0000 (Western European Standard Time)
let date6 = new Date("2025-09-41");
console.log(date6); // Invalid Date
console.log(typeof date6); // Object
let date7 = new Date("2025-13-11");
console.log(date7); // Invalid Date
let date8 = new Date("20025-12-11");
console.log(date8); // Thu Dec 11 20025 00:00:00 GMT+0000 (Western European Standard Time)
let date9 = new Date("2025/12-11");
console.log(date9); // Thu Dec 11 2025 00:00:00 GMT+0000 (Western European Standard Time)
let date10 = new Date("teste");
console.log(date10); // Invalid Date

function isLeapYear(year) {
    // validar se year é um número
    return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
}

function testDateValidity(dateToTest) {
    console.log("------------------------");
    let dateToTestConverted=new Date(dateToTest);
    // console.log(dateToTestConverted);
    if (dateToTestConverted.toString().toUpperCase()==="Invalid Date".toUpperCase()) {
        console.log(`A data ${dateToTest} é inválida`);
    } else {
        // A data tem o formato correcto

        let textDate=dateToTestConverted.toISOString().slice(0,10); // para extrair apenas a data - ex: 2025-09-11
        // console.log("Data convertida para string: "+textDate);
        if (dateToTest!==textDate) {
            let month=Number(dateToTest.slice(5,7));
            // console.log("Mês="+month);
            let day;
            switch (month) {
                case 2:
                    // se o mês for fevereiro não pode ter mais de 28/29 - ver se o ano é bissexto
                    let year=Number(dateToTest.slice(0,4));
                    day=Number(dateToTest.slice(8));
                    if (isLeapYear(year)) {
                        if (day>29) {
                            console.log(`A data ${dateToTest} é inválida`);
                        } else {
                            console.log(`A data ${dateToTest} é Válida`);
                        }
                    } else {
                        if (day>28) {
                            console.log(`A data ${dateToTest} é inválida`);
                        } else {
                            console.log(`A data ${dateToTest} é Válida`);
                        }
                    }
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    // se o mês for Abril, Junho, Setembro ou Novembro não pode ter mais de 30 dias
                    // console.log("Outros meses");
                    day=Number(dateToTest.slice(8));
                    // console.log("Dia: "+day);
                    if (day>30) {
                        console.log(`A data ${dateToTest} é inválida`);
                    } else {
                        console.log(`A data ${dateToTest} é Válida`);
                    }
                    break;
            }
        } else {
            console.log(`A data ${dateToTest} é Válida`);
        }
    }
}
testDateValidity("2025-02-45"); // Inválida - A data é inválida
testDateValidity("2025-11-09"); // Válida - A data é Válida!
testDateValidity("2024-02-29"); // Válida - A data é Válida!
testDateValidity("2025-02-29"); // Inválida - A data é inválida
testDateValidity("2025-09-31"); // Inválida - A data é inválida
testDateValidity("2025-09-30"); // Válida - A data é Válida!
