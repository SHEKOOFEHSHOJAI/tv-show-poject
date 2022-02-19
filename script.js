
const continer=document.querySelector("#container")
const moviSelect = document.querySelector("#movi-select");



fetch("./script.json").then((res) =>  res.json())
.then((ar)=>{
    
    ar.forEach(element => {
      //div
      let div = document.createElement("div");
      div.style.boxShadow = "12px 4px 13px 1px rgba(0, 0, 255, .2)";
      div.style.width = "30%";
      
      div.style.marginTop = "20px";
      div.style.overflow = "hidden";

      //img

      let img = document.createElement("img");
      img.src = element.image.medium;
      console.log(img);

      // name ,season,number
      let nam = (document.createElement("p").textContent = element.name);
      let p = (document.createElement(
        "p"
      ).textContent = `0${element.season}_0${element.number}`);

      //url
      console.log(element.url);
      let ohg = element.url;
      let url = document.createElement("a");
      url.textContent = "move information";
      url.setAttribute("href", ohg);
      // let article=document.createElement("article").textContent=`${url}`
      // url.href = element.url;

      //summery.textContent=`jjjjjjjj${o}`
      let summery = (document.createElement(
        "section"
      ).innerHTML = `${element.summary}`);

      // div.style.backgroundColor="green";
      div.append(img, nam, p, url, summery);

      continer.append(div);

      //selection

      const option = document.createElement("option");
      option.textContent = `${element.name}-S${element.season}E ${element.number}`;
      
      //${element.name}+${element.season} +${element.number}
      moviSelect.append(option);
    });
})
// .catch((err)=>console.log(err))
 


