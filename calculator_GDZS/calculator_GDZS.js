let davlBal = document.querySelector(".inp1");
let davlIn = document.querySelector(".inp2");
let out1 = document.querySelector('.out1');
let out2 = document.querySelector('.out2');
let out3 = document.querySelector('.out3');
let buttons = document.querySelectorAll(".buttons");
let rezult = document.querySelector(".rezult");
let bDavl = 0;
let inP = 0;
let back = document.querySelector(".back");



function vvod_bDavl_t() {
    davlBal.classList.add("active");
    davlIn.classList.remove("active");

    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            davlBal.innerHTML += this.innerHTML;
            bDavl = davlBal.innerHTML;
            bDavl = Number(bDavl);

        }
    }

}

vvod_bDavl_t();

davlBal.onclick = function () {
    vvod_bDavl_t();
}

davlIn.onclick = function () {
    davlBal.classList.remove("active");
    davlIn.classList.add("active");

    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {

            davlIn.innerHTML += this.innerHTML;
            inP = davlIn.innerHTML;
            inP = Number(inP);


        }
    }
}



let W = 6.8;
let Q = 40;
let rezerv = 50;

let nepredvid = (inP / 2);


rezult.onclick = function () {


    let raschOut = ((bDavl - rezerv) / Q) * W;


    if (bDavl <= 0 || (bDavl <= 0 && inP > 0)) {

        out1.innerHTML = "введи P<span>б</span>";
        out2.innerHTML = null;
        out3.innerHTML = null;
    }


    if (bDavl > 0 && inP <= 0) {

        out1.innerHTML = (raschOut).toFixed(1);
        out1.insertAdjacentHTML('beforeEnd', ' <span>мин.</span> время выхода');
        out2.innerHTML = null;
        out3.innerHTML = null;
    }

    if (raschOut <= 0) {
        out1.innerHTML = "заправь аппарат !!!";
        out2.innerHTML = null;
        out3.innerHTML = null;
    }

    if (bDavl > 0 && inP > 0 && raschOut > 0) {
        let raschOut = ((bDavl - rezerv) / Q) * W;
        inP = Number(inP);
        nepredvid = Number(nepredvid);
        rezerv = Number(rezerv);
        let raschPout = (inP + nepredvid + rezerv);
        raschPout = Number(raschPout);
        let timeWork = ((bDavl - (inP + raschPout)) / Q) * W;
        out1.innerHTML = (raschOut).toFixed(1);
        out1.insertAdjacentHTML('beforeEnd', ' <span>мин.</span> время выхода');
        out2.innerHTML = (raschPout).toFixed(1);
        out2.insertAdjacentHTML('beforeEnd', ' <span>атм.</span> давл. выхода');
        out3.innerHTML = (timeWork).toFixed(1);
        out3.insertAdjacentHTML('beforeEnd', ' <span>мин.</span> время работы');
    }


    if (bDavl > 400) {

        out1.innerHTML = "баллон может рвануть !!!";
        out2.innerHTML = null;
        out3.innerHTML = null;
    }


}

let clean = document.querySelector(".clean");
let inps = document.querySelectorAll(".inps");
let outs = document.querySelectorAll(".outs");
clean.onclick = function () {
    for (i = 0; i < inps.length; i++) {
        inps[i].innerHTML = "";
    }
    for (i = 0; i < outs.length; i++) {
        outs[i].innerHTML = "";
    }
    bDavl = null;
    inP = null;
}

back.onclick = function () {

    if (davlBal.classList[3] == "active") {


        bDavl = String(bDavl);


        bDavl = bDavl.substring(0, bDavl.length - 1);
        davlBal.innerHTML = bDavl;
    }

    if (davlIn.classList[3] == "active") {


        inP = String(inP);
        inP = inP.substring(0, inP.length - 1);
        console.log(inP);
        davlIn.innerHTML = inP;


    }
}

