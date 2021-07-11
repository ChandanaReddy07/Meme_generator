// async function helo(username){
//     const res=await fetch(`https://meme-api.herokuapp.com/gimme/10`)
//     //await directly delvers data from url means no then statement
//     const data=await res.json()
//     return data
//    // console.log(res)
// }


//var y=document.querySelector(".but")

 function refreshPage(){
  window.location.reload();
} 
var imgs=document.querySelector(".images")
var x=async function(){



  fetch('https://meme-api.herokuapp.com/gimme/8')
  .then(res=> res.json())
  .then( data => data.memes.forEach(element => {

    let z=document.createElement("div")
    z.className="image1"
    z.innerHTML=`<img src=${element.url}
     alt=" "/>  <a class="but1" href=${element.url} download>Preview</a>` 
    imgs.appendChild(z)
      
  }) )
  .catch(err=>console.log(err))
   
  //  imgs.appendChild(z)

}

x()
