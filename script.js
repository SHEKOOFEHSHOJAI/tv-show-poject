const continer = document.querySelector("#container");
const moviSelect = document.querySelector("#movi-select");

fetch("./script.json")
  .then((res) => res.json())
  .then((ar) => {
    ar.forEach((element) => {
      //div
      let div = document.createElement("div");
      div.style.boxShadow = "12px 4px 13px 1px rgba(0, 0, 255, .2)";
      div.style.width = "30%";
       
      div.style.marginTop = "20px";
      div.style.overflow = "hidden";

      //img

      let img = document.createElement("img");
      img.src = element.image.medium;
      

      // name ,season,number

      let nam = document.createElement("h6");
      nam.textContent = element.name;

      const season = element.season;
      let number = element.number;
      let nu = `${number}`;
      let st = `${season}`;

      if (st < 10) {
        st = `0${season}`;
      }
      if (nu < 10) {
        nu = `0${number}`;
      }
     //shomar fasl
      let p = document.createElement("h5")
      p.textContent = `S${st}_E${nu}`;
      // .textContent =`S${st}_E${nu}`;

      //url

      let ohg = element.url;
      let url = document.createElement("a");
      url.textContent = "move information";
      url.setAttribute("href", ohg);

      //summery
      let summery = document.createElement("p" ) 
       summery.innerHTML=`${element.summary}`
      // .innerHTML = `${element.summary}`);
       
     

      //append

      div.append(img, nam, p, summery, url);

      continer.append(div);

      //selection

      

      const option = document.createElement("option");
      option.textContent = `${element.name}-S${st}E${nu}`;
      option.value = `${element.name}-S${st}E${nu}`;
      option
      // console.log(option);

      //${element.name}+${element.season} +${element.number}
      return moviSelect.append(option);
    });
  });

////////input


//serch
const serchInput = document.querySelector("#serch");

serchInput.addEventListener("keyup", (e) => {
  //value input
  const showValue = e.target.value;
  //all div
  const allDiv = document.querySelectorAll("div");
  
  //itrate to all div

  for (const iterator of allDiv) {
    console.log(iterator);
    //name apison
    const viowShow = iterator.querySelector("h6").textContent;
    // console.log(viowShow);
   // if name apison !inclues inputvalue
    if (!viowShow.includes(showValue)) {
      iterator.style.display = "none";
    } else {
      iterator.style.display = "initial";
    }
  }



  ///////////کد نوع دوم


});

// serch select
//shomreh fasl
const option = document.getElementsByTagName("option");
// console.log(option);
const select = document.getElementById("movi-select");

select.addEventListener("change",(e)=>{

 
  for (const iterator of option) {
    //parent is select
    console.log(e.target.value);
      const allDiv = document.querySelectorAll("div");
     

    for (const diva of allDiv) {
      //  console.log(diva.textContent.slice(5));
    
       diva.style.display = "block";

       if (e.target.value !== "all") {
         if (e.target.value !== diva.textContent) {
           // console.log(op);
           diva.style.display = "none";
           console.log("nooooooooooooooooo");
         }
         
       }
      //  console.log("errrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
    }
    
 }
})


// .catch((err)=>console.log(err))
