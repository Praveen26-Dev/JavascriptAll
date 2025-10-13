function t(){
    let container=document.getElementById('body')
    let an = container.classList.toggle('wrapper')
    if(an==true){
        document.getElementById('btn').innerHTML="Light"
        
    }
    else{
        let btn=document.getElementById('btn')
        btn.innerHTML="Dark"
    }
}