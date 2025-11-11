// API -> stands for Application programming interface 
// acts as communication medium 
// fetch -->
// Http Methods -->
// Promise -->
// Aysnchronous v/s Synchronous


async function accessFetch(){
    let data = await fetch('https://jsonplaceholder.typicode.com/posts')
    let res = await data.json();
    console.log(res)
    
    let result = res.map((e)=>`<tr>
      <td>${e.userId}</td>
      <td>${e.id}</td> 
      <td>${e.title}</td>  
    </tr>`).join("")

    document.querySelector("#showdata").innerHTML=result

}
accessFetch();