var data=[
{
    id:0,
    imageurl:"image/img1.jpg",
    name:"Metro",
    price:"Price: ₹1,126",
    size:"Size:2,3,4,5,6,8,10",
    sale:"Lowest Price in the year"
},

{
    id:1,
    imageurl:"image/img2.jpg",
    name:"Nike",
    price:"Price: ₹2,586",
    size:"Size:2,4,5,7,8,10",
    sale:"Hot Deal"
},

{
    id:2,
    imageurl:"image/img3.jpg",
    name:"Adidas",
    price:"Price: ₹2,476",
    size:"Size:2,3,4,5,6,8,9,10",
    sale:"Daily Saver"
},
{
    id:3,
    imageurl:"image/img4.jpg",
    name:"Bata",
    price:"Price: ₹1,084",
    size:"Size:1,3,4,5,6,8,10",
    sale:"Daily Saver"
},
{
    id:4,
    imageurl:"image/img5.jpg",
    name:"Puma",
    price:"Price: ₹1,508",
    size:"Size:1,2,3,4,5,6,8,9",
    sale:"Daily Saver"
},
{
    id:5,
    imageurl:"image/img6.jpg",
    name:"Reebok",
    price:"Price: ₹1,349",
    size:"Size:2,3,4,5,6,8,9,10",
    sale:"Hot Deal"
},
{id:6,
    imageurl:"image/metro.jpg",
    name:"Metro",
    price:"Price: ₹1,126",
    size:"Size:2,3,4,5,6,8,10",
    sale:"Lowest Price in the year"
},

{
    id:7,
    imageurl:"image/adidas1.jpg",
    name:"Adidas",
    price:"Price: ₹2,586",
    size:"Size:2,4,5,7,8,10",
    sale:"Daily Saver"
},

{
    id:8,
    imageurl:"image/reebok.jpg",
    name:"Reebok",
    price:"Price: ₹2,176",
    size:"Size:2,3,4,5,6,8,9,10",
    sale:"Hot Deal"
},
{id:9,
    imageurl:"image/puma1.jpg",
    name:"Puma",
    price:"Price: ₹1,126",
    size:"Size:2,3,4,5,6,8,10",
    sale:"Daily Saver"
},

{
    id:10,
    imageurl:"image/bata.jpg",
    name:"Bata",
    price:"Price: ₹1,286",
    size:"Size:2,4,5,7,8,10",
    sale:"Lowest Price in the year"
},

{
    id:11,
    imageurl:"image/reebok1.jpg",
    name:"Reebok",
    price:"Price: ₹2,430",
    size:"Size:2,3,4,5,6,8,9,10",
    sale:"Hot Deal"
},
{id:12,
    imageurl:"image/nike.jpg",
    name:"Nike",
    price:"Price: ₹1,326",
    size:"Size:2,3,4,5,6,8,10",
    sale:"Daily Saver"
},

{
    id:13,
    imageurl:"image/adidas.jpg",
    name:"Adidas",
    price:"Price: ₹2,386",
    size:"Size:2,4,5,7,8,10",
    sale:"Hot Deal"
},

{
    id:14,
    imageurl:"image/puma.jpg",
    name:"Puma",
    price:"Price: ₹2,273",
    size:"Size:2,3,4,5,6,8,9,10",
    sale:"Lowest Price in the year"
},
    ];

    


//section

var headersection=document.getElementById("head-secction");

var container=document.createElement("div");
container.classList.add("head-container");
headersection.appendChild(container);

var row=document.createElement("div");
row.classList.add("head-row");
container.appendChild(row);

var col=document.createElement("div");
col.classList.add("head-col");
row.appendChild(col);

var div1=document.createElement("div");
container.classList.add("div1");
col.appendChild(div1);

var content=document.createElement("div");
content.classList.add("content-1");
div1.appendChild(content);

var about=document.createElement("h1");
about.setAttribute("id","para");
//about.classList.add("para");
about.innerHTML="AMAZON";
content.appendChild(about);

var div2=document.createElement("div");
div2.classList.add("div2");
div1.appendChild(div2);

var content2=document.createElement("p");
content2.setAttribute("id","content-2");
//content2.classList.add("content-2");
content2.innerHTML="All";
div2.appendChild(content2);

var div3=document.createElement("div");
div3.classList.add("div3");
div1.appendChild(div3);

var content3=document.createElement("p");
content3.setAttribute("id","content-3");
//content2.classList.add("content-2");
content3.innerHTML="Adidas";
div3.appendChild(content3);

var div4=document.createElement("div");
div4.classList.add("div4");
div1.appendChild(div4);

var content4=document.createElement("p");
content4.setAttribute("id","content-4");
//content2.classList.add("content-2");
content4.innerHTML="Nike";
div4.appendChild(content4);

var div5=document.createElement("div");
div5.classList.add("div5");
div1.appendChild(div5);

var content5=document.createElement("p");
content5.setAttribute("id","content-5");
//content2.classList.add("content-2");
content5.innerHTML="Reebok";
div5.appendChild(content5);

var div6=document.createElement("div");
div6.classList.add("div6");
div1.appendChild(div6);

var content6=document.createElement("p");
content6.setAttribute("id","content-6");
//content2.classList.add("content-2");
content6.innerHTML="Bata";
div6.appendChild(content6);

var div7=document.createElement("div");
div7.classList.add("div7");
div1.appendChild(div7);

var content7=document.createElement("p");
content7.setAttribute("id","content-7");
//content2.classList.add("content-2");
content7.innerHTML="Puma";
div7.appendChild(content7);

var div8=document.createElement("div");
div8.classList.add("div8");
div1.appendChild(div8);

var content8=document.createElement("p");
content8.setAttribute("id","content-8");
//content2.classList.add("content-2");
content8.innerHTML="Metro";
div8.appendChild(content8);


var div11=document.createElement("div");
div11.classList.add("div11");
div1.appendChild(div11);

var div12=document.createElement("div");
div12.classList.add("div12");
div1.appendChild(div12);

var buticon=document.createElement("i");
buticon.classList.add("fa","fa-search");
buticon.setAttribute("aria-hidden","true");
div12.appendChild(buticon);

var div13=document.createElement("div");
div13.classList.add("div13");
div1.appendChild(div13);

var div14=document.createElement("div");
div14.classList.add("div14");
div1.appendChild(div14);

var buticonn=document.createElement("i");
buticonn.classList.add("fa","fa-shopping-cart");
buticonn.setAttribute("aria-hidden","true")
div14.appendChild(buticonn);


//card
var cardSection=document.getElementById("card-section");

var container=document.createElement("div-card");
container.classList.add("container-card");
cardSection.appendChild(container);


//row section

var row=document.createElement("div-card");
row.classList.add("card-row");
container.appendChild(row);

//col section

data.forEach(function(e){

var col=document.createElement("div-card");
col.classList.add("card-col");
row.appendChild(col);

//card section 

var card=document.createElement("div-card");
card.classList.add("card-card");
col.appendChild(card);

var image=document.createElement("img");
card.appendChild(image);
image.setAttribute("src",e.imageurl);


var title=document.createElement("h1")
card.appendChild(title);
title.innerHTML=e.name;

var title=document.createElement("h3")
card.appendChild(title);
title.innerHTML=e.price;

var title=document.createElement("h5")
card.appendChild(title);
title.innerHTML=e.size;

var title=document.createElement("h4")
card.appendChild(title);
title.innerHTML=e.sale;

//icons

/*var icons=document.createElement("div-icon");
icons.classList.add("card-icon");
col.appendChild(icons);*/

/*var icon=document.createElement("i");
icon.classList.add("fa","fa-heart");
icon.setAttribute("aria-hidden","true")
icons.appendChild(icon);*/




var butt=document.createElement("div");
butt.classList.add("card-btn"),
card.appendChild(butt);

var buticon=document.createElement("button");
buticon.classList.add("buticon");
//but.setAttribute("id","butn");
buticon.innerHTML="Add to cart";
butt.appendChild(buticon);

var icon=document.createElement("c");
icon.classList.add("fa","fa-bookmark-o");
icon.setAttribute("aria-hidden","true");
butt.appendChild(icon);
 
var butt=document.getElementsByClassName("btn");
var cards=document.getElementsByClassName("card-col");
var value1=document.getElementById("content-3");
var value2=document.getElementById("content-4");
var value3=document.getElementById("content-5");
var value4=document.getElementById("content-6");
var value5=document.getElementById("content-7");
var value6=document.getElementById("content-8");


value1.addEventListener("click",function(){
    data.forEach(function(e){

        if(e.name=="Adidas"){
            var a=e.id;
            console.log(a);
          cards[a].style.display="block";
        }
        else{
            var b=e.id;
            console.log(b);
          cards[b].style.display="none";
           
        }
    })
})

value2.addEventListener("click",function(){
    data.forEach(function(e){
        if(e.name=="Nike"){
            var a=e.id;
            console.log(a);
            cards[a].style.display="block";
        }
        else{
            var b=e.id;
            console.log(b);
            cards[b].style.display="none";
            //filtcard[b].style="block"
        }
    })
})

value3.addEventListener("click",function(){
    data.forEach(function(e){
        if(e.name=="Reebok"){
            var a=e.id;
            console.log(a);
            cards[a].style.display="block";
        }
        else{
            var b=e.id;
            console.log(b);
            cards[b].style.display="none";
            //filtcard[b].style="block"
        }
    })
})

value4.addEventListener("click",function(){
    data.forEach(function(e){
        if(e.name=="Bata"){
            var a=e.id;
            console.log(a);
            cards[a].style.display="block";
        }
        else{
            var b=e.id;
            console.log(b);
            cards[b].style.display="none";
            //filtcard[b].style="block"
        }
    })
})

value5.addEventListener("click",function(){
    data.forEach(function(e){
        if(e.name=="Puma"){
            var a=e.id;
            console.log(a);
            cards[a].style.display="block";
        }
        else{
            var b=e.id;
            console.log(b);
            cards[b].style.display="none";
            //filtcard[b].style="block"
        }
    })
})

value6.addEventListener("click",function(){
    data.forEach(function(e){
        if(e.name=="Metro"){
            var a=e.id;
            console.log(a);
            cards[a].style.display="block";
        }
        else{
            var b=e.id;
            console.log(b);
            cards[b].style.display="none";
            //filtcard[b].style="block"
        }
    })
})






var cart=document.getElementsByClassName("fa","fa-shopping-cart")
        for(let i=0;i<cart.length;i++){
            cart[i].addEventListener("click",function(){
                location.href="file:///C:/Users/Administrator/fabevy/web%20page/Add%20to%20cart/index.html";
            })
        }
        

        var butt=document.getElementsByClassName("card-col");
        data.forEach(function(e){
            for(let i=0;i<butt.length;i++){
                butt[i].addEventListener("click",function(){
                    var nextcard=butt[i].innerHTML;
                    localStorage.setItem("image",nextcard);
                })
            }
        })



    })





