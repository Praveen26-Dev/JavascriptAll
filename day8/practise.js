let company = {
    name:"Apple",
    foundationYear:1976,
    poductList:[
        {name:"Iphone",year:2007},{name:"Ipad",year:2010}
    ],
    foundedBy:["Steve Jobs","Steve Wozniak"],
     ceo:"Steve Jobs",
    toString:function(){
      return `<strong>name:</strong>${company.name}<br>
               <strong>Foundation Year:</strong>${company.foundationYear}<br>
               <strong>Founders:</strong>${company.foundedBy.join(",")}<br>
               `;
    }

}
document.write("<h3>Company details<h3>")
document.write(company);

