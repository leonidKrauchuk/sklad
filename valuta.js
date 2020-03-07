
let valuta_usd=document.querySelector('.valuta_usd');
let valuta_eur=document.querySelector('.valuta_eur');
let valuta_rub=document.querySelector('.valuta_rub');
let valuta_uah=document.querySelector('.valuta_uah');
 let valuta_pln=document.querySelector('.valuta_pln');
let summ_val_usd=document.querySelector('.summ_val_usd');
fetch('http://www.nbrb.by/API/ExRates/Rates?Periodicity=0')

.then(function (resp){return resp.json()})
.then(function (data){
	valuta_usd.innerHTML=data[4].Cur_Name + ' - '+data[4].Cur_OfficialRate;
	valuta_eur.innerHTML=data[5].Cur_Name + ' - '+data[5].Cur_OfficialRate;
	valuta_rub.innerHTML=data[16].Cur_Scale + '  '+data[16].Cur_Name + ' - '+data[16].Cur_OfficialRate;
	valuta_uah.innerHTML=data[2].Cur_Scale + '  '+data[2].Cur_Name + ' - '+data[2].Cur_OfficialRate;
	valuta_pln.innerHTML=data[6].Cur_Scale + '  '+data[6].Cur_Name + ' - '+data[6].Cur_OfficialRate;

	// console.log(summ_val_usd);
})
.catch(function(){
//catch anny errors
});