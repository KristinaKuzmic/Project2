// const form=document.getElementById("forma");

// form.addEventListener("submit",(e) =>{
//     e.preventDefault();

//     const ime=document.getElementById("ime").value;
//     const prezime=document.getElementById("prezime").value;
//     const godina=document.getElementById("godina").value;

//     console.log(ime + " " + prezime + " " + godina);

// })

let day;
let juce;
let sutra;

switch(new Date().getDay()){
    case 0:
        day="Sunday";
        juce="Saturday";
        sutra="Monday";
        break;
    case 1:
        day="Monday";
        juce="Sunday";
        sutra="Tuesday";
        break;
    case 2:
        day="Tuesday";
        juce="Monday";
        sutra="Wednesday";
        break;
    case 3:
         day="Wednesday";
         juce="Tuesday";
         sutra="Thursday";
       break;
    case 4:
        day="Thursday";
        juce="Wednesday";
        sutra="Friday";
        break;
   case 5:
        day="Friday";
        juce="Thursday";
        sutra="Saturday";
       break;
    case 6:
        day="Saturday";
        juce="Friday";
        sutra="Sunday";
    default:
        day="Sunday";
}

console.log(day);

var date=new Date();

var dan=date.getDate();
var mesec=date.getMonth()+1;
var godina=date.getFullYear();

var datum=dan+" "+mesec+" "+godina;


console.log(datum);

// let noviDiv=document.createElement("div");
// let danP=document.createElement("p");
// let mesecP=document.createElement("p");
// let godinaP=document.createElement("p");

// let danText=document.createTextNode(dan);
// let mesecText=document.createTextNode(mesec);
// let godinaText=document.createTextNode(godina);

// danP.appendChild(danText);
// mesecP.appendChild(mesecText);
// godinaP.appendChild(godinaText);

// noviDiv.appendChild(danP);
// noviDiv.appendChild(mesecP);
// noviDiv.appendChild(godinaP);

//  sekcija.appendChild(noviDiv);

//document.getElementById("sekcija").innerHTML = datum;

document.getElementById("broj1").innerHTML = dan;
document.getElementById("broj2").innerHTML = mesec;
document.getElementById("broj3").innerHTML = godina;

document.getElementById("danas").innerHTML = day;
document.getElementById("juce").innerHTML = juce;
document.getElementById("sutra").innerHTML = sutra;


const btn=document.getElementById("dugme");


var mojaLista=document.getElementsByTagName("li");
    var i;
    for(i=0;i<mojaLista.length;i++){
        var span=document.createElement("span");
        var stxt=document.createTextNode(" ");
        span.className="close";
        span.appendChild(stxt);
        mojaLista[i].appendChild(span);
    }

btn.addEventListener("click",(e) =>{
    e.preventDefault();

    const vrednost=document.getElementById("todo").value;
    let vredLi=document.createElement("li");
    let vredText=document.createTextNode(vrednost);
    vredLi.appendChild(vredText);

    //let vredP=document.createElement("p");
    //let vredLi=document.createElement("li");
    //let vredUl=document.createElement("ul");
    //let vredDiv=document.createElement("div");
    //let vredDugme=document.createElement("button");

    
    //let vredText=document.createTextNode(vrednost);

    // vredP.appendChild(vredText);
    //vredLi.appendChild(vredText);
    //vredUl.appendChild(vredLi);
    //lista.appendChild(vredUl);

    document.getElementById("lista").appendChild(vredLi);


    var span=document.createElement("span");
    var stxt=document.createTextNode(" ");
    span.className="close";
    span.appendChild(stxt);
    vredLi.appendChild(span);
   // vredUl.appendChild(vredLi);
   // lista.appendChild(vredUl);

    document.getElementById("todo").value="";
    

    vredLi.onclick=function(){
        var proba=this;
        proba.style.color="rgb(196, 188, 188)";
    }

    span.onclick=function(){
        var proba2=this.parentElement;
        proba2.style.display="none";
    }

    //lista.appendChild(vredDugme);
   // vredDiv.appendChild(vredUl);
    //vredDiv.appendChild(vredDugme);

   // toDo.appendChild(vredDiv);

    //console.log(vrednost);

})

var lis=document.getElementsByTagName("li");
var i;
for(i=0;i<lis.length;i++){
    lis[i].onclick=function(){
        var divNovi=this;
        divNovi.style.color="rgb(196, 188, 188)";
    }
}



var cls=document.getElementsByClassName("close");
var i;
for(i=0;cls.length;i++){
    cls[i].onclick=function(){
        var divNeki=this.parentElement;
        divNeki.style.display="none";
    }
}



