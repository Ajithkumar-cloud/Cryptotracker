const form=document.querySelector('#searchForm');
const res=document.querySelector('#restable');

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

document.getElementById("restable").innerHTML=
    `<tr><th>Property</th>
    <th>Value</th></tr>
    <tr><td>${base}</td>
    <td>${price} ${target}</td>
    </tr>
    <tr><td>Volume (24hrs)</td>
    <td>${volume}</td>
    </tr>
    <tr>
    <td>Change (24hrs)</td>
    <td>${change} ${target}</td>  
    </tr>`;


   };
    



   

    
