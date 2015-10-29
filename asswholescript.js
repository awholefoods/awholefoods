haha=function() {
    var t=document.querySelector("#top");
    var b=document.querySelector("#bottom");
    var a=document.querySelector("#all");
    
    var psych=document.createElement("h1");
    a.appendChild(psych);
    var tn=document.createTextNode("Psych!! We just hacked your email!!");
    psych.appendChild(tn);
    
    t.style.display="none";
    b.style.display="none";
    
}