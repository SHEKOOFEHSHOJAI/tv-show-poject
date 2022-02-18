
const continer=document.querySelector("#container")



fetch("./script.json").then((res) =>  res.json())
.then((ar)=>{
    
    ar.forEach(element => {

    //    console.log(element);
       let div= document.createElement("div")
       
        let img=document.createElement("img")
         img.src = element.image.medium;
         console.log(img);
        div.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, .2)";
         div.style.width="30%"
         div.style.height = "100%";
         div.style.marginTop="20px"
        
        let nam=document.createElement('p').textContent=element.name
         let p = (document.createElement("p").textContent = `0${element.season}_0${element.number}`);
         
           let url = document.createElement("a");
          url.href = element.url;
        // let summery = (document.createElement( "section").textContent = `${element.summary}`);
          console.log(url);
         
        
           

         p.display="inline-block"
        // div.style.backgroundColor="green";
        div.append(img, nam, p,url);
       
        continer.append(div)
        
        
    });
}).catch((err)=>console.log(err))
 


