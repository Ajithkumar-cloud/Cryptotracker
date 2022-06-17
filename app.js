const form=document.querySelector('#searchForm');
const t=document.querySelector('#tab');
form.addEventListener('submit',(e)=>{
   e.preventDefault();

   const ctype= form.elements.coinType.value;

   fetchPrice(ctype);
   
});


const fetchPrice= async(ctype) =>{
   const r= await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`);
   const price =r.data.coin.price;
   const volume=r.data.coin.volume;
   const change=r.data.coin.priceChange1d;
   const base =r.data.coin.name;
   const target='USD';

   document.getElementById("bs").innerHTML=base;
   document.getElementById("pr").innerHTML=price;
   document.getElementById("tr").iinerHTML=target;
    document.getElementById("demo").innerHTML=volume;
    document.getElementById("ch").innerHTML=change;
    



  };   

    
