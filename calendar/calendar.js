function calendarBig(year) {
    for (var m = 0; m <= 11; m++) {

        var D = new Date(year, [m], 1),  //получаем первое число данного месяца

            Dlast = new Date(D.getFullYear(), D.getMonth() + 1, 0).getDate(), //количество дней в месяце

            DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(), // получаем последний день на неделе

            DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(), // получаем первый день на неделе

            calendar = '<tr>';

        if (DNfirst != 0) {
            for (var i = 1; i < DNfirst; i++) calendar += '<td>';

        } else {
            for (var i = 0; i < 6; i++) calendar += '<td>';
        }



        for (var i = 1; i <= Dlast; i++) {



            //*****************************     отрисовка по сменам     **************************** 

            let year = 2020;

            if (D.getFullYear() == year && (D.getMonth() == 0 || D.getMonth() == 2 || D.getMonth() == 7) && i % 3 == 2 ||
                (D.getFullYear() == year && (D.getMonth() == 1 || D.getMonth() == 3 || D.getMonth() == 4 || D.getMonth() == 8 || D.getMonth() == 9)) && i % 3 == 1 ||
                (D.getFullYear() == year && (D.getMonth() == 5 || D.getMonth() == 6 || D.getMonth() == 10 || D.getMonth() == 11)) && i % 3 == 0) {

                calendar += `<td class="smena_1" id="${D.getFullYear()} ${D.getMonth()} ${i}">` + i;

            }
            else {
                if (D.getFullYear() == year && (D.getMonth() == 0 || D.getMonth() == 2 || D.getMonth() == 7) && i % 3 == 0 ||
                    (D.getFullYear() == year && (D.getMonth() == 1 || D.getMonth() == 3 || D.getMonth() == 4 || D.getMonth() == 8 || D.getMonth() == 9)) && i % 3 == 2 ||
                    (D.getFullYear() == year && (D.getMonth() == 5 || D.getMonth() == 6 || D.getMonth() == 10 || D.getMonth() == 11)) && i % 3 == 1) {

                    calendar += `<td class="smena_2" id="${D.getFullYear()} ${D.getMonth()} ${i}">` + i;


                }
                else {
                    if (D.getFullYear() == year && (D.getMonth() == 0 || D.getMonth() == 2 || D.getMonth() == 7) && i % 3 == 1 ||
                        (D.getFullYear() == year && (D.getMonth() == 1 || D.getMonth() == 3 || D.getMonth() == 4 || D.getMonth() == 8 || D.getMonth() == 9)) && i % 3 == 0 ||
                        (D.getFullYear() == year && (D.getMonth() == 5 || D.getMonth() == 6 || D.getMonth() == 10 || D.getMonth() == 11)) && i % 3 == 2) {

                        calendar += `<td class="smena_3" id="${D.getFullYear()} ${D.getMonth()} ${i}">` + i;

                    }
                    else {
                        calendar += '<td class="smena_0">' + i;
                    }
                }
            }
            if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
                calendar += '<tr>';
            }
        }

        if (DNlast != 0) {
            for (var i = DNlast; i < 7; i++) calendar += '<td>';

        }

        document.querySelector('#calendarBig table[data-m="' + [m] + '"] tbody').innerHTML = calendar;
        document.querySelector('#calendarBig > thead td:nth-child(2)').innerHTML = 'Календарь на <br> ' + year + ' год';

    }

}

calendarBig(new Date().getFullYear());

let xd = document.querySelectorAll("td");
let xxDD = new Date();
XXX = `${xxDD.getFullYear()} ${xxDD.getMonth()} ${xxDD.getDate()}`;


for (let i = 0; i < xd.length; i++) {
    if (xd[i].id == XXX) {

        xd[i].style.color = "rgb(0,0,0)";
        xd[i].style.border = "solid 1px rgb(0,0,0)";
        xd[i].style.boxShadow = "2px 2px 3px rgb(0,0,0)";
    }
}

let xMes = document.querySelectorAll('table');
console.log(xMes[1]);
console.log(xxDD.getMonth());



for (let i = 0; i < xMes.length; i++) {
    if (xMes[i].getAttribute('data-m') == xxDD.getMonth()) {
        console.log(i);
        xMes[i].style.boxShadow = "3px 3px 8px grey";
        xMes[i].tHead.style.color = "blue";
        // xMes[i].tHead.style.fontSize = "20px";
        xMes[i].tHead.style.textShadow = "1px 1px 1px rgb(0,0,0)";


    }

    // xMes[i].onclick = function () {
    //     console.log(xMes[i]);
    //     this.style.fontSize = "30px";
    // }

}
