let midPic = new XMLHttpRequest();


let dropJSONdiv = document.querySelector(".dropJSON-Div");

midPic.open("GET", "../private/shared/slide.json", true);

midPic.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        let myJSON = JSON.parse(this.responseText);
        let txt = document.createElement("P");

//Loop through and display the contents of slide.json file
        for(x in myJSON){

            dropJSON = document.createElement("div");
            dropJSON.setAttribute('id', 'dropJSON');
            let images = myJSON[x].images;
            let desc = myJSON[x].description;
            txt.appendChild(document.createTextNode(desc));
            
            dropJSON.appendChild(document.createElement("IMG")).src=images;
            dropJSON.appendChild(document.createElement("P")).innerHTML = desc;

            dropJSONdiv.appendChild(dropJSON);
        }
      }
}
midPic.send();


//Loop through and display the contents of bannerPic.json
let bannerPics = new XMLHttpRequest();
let bannerDiv = document.querySelector("#bannerDiv");

bannerPics.open("GET", "../private/shared/bannerPics.json", true);

bannerPics.onreadystatechange = function (){
    if(this.readyState == 4 && this.status == 200){
        let theBanners = JSON.parse(this.responseText);
        let lenOf = theBanners.pic.length;

        let img = document.createElement("img");
        let para = document.createElement("p");
        bannerDiv.appendChild(img).src="../images/willow.jpg";
        bannerDiv.appendChild(para).innerHTML = "The willow image was the one I used at the buttom of the page and created box-shadow to make it look nicer";

        let i = 0;
        let clearInterval = setInterval(function (){
            if(i == lenOf) i = 0;

                bannerDiv.appendChild(img).src=theBanners.pic[i].image;
                bannerDiv.appendChild(para).innerHTML = theBanners.pic[i].descrip;
                i++;
        }, 3000);
    }
}

bannerPics.send();