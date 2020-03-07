document.querySelector('#shcala').oninput=()=>{
let mmBak=document. querySelector('#shcala').value;
let lBak=document. querySelector('#shcala').value*0.69;

document.querySelector('#mmBak').innerHTML=mmBak;
mmBak= document.querySelector('#mmBak');
mmBak.insertAdjacentHTML('beforeEnd','  мм.');

document.querySelector('#lBak').innerHTML=lBak.toFixed(3);
lBak= document.querySelector('#lBak');
lBak.insertAdjacentHTML('beforeEnd','  л.');
//document.getElementById("out").innerHTML = resultat.toFixed(3);//запускает функцию по клику на полученый элемент и округляет число знаков после точки
	//resultat = document.getElementById("out");
	//resultat.insertAdjacentHTML('beforeEnd',' л.');

}
