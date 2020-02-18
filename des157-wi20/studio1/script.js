(function(){
    "use strict";

    document.getElementById("myform").addEventListener("submit", function(event){
    event.preventDefault();
    const formData = document.querySelectorAll("input[type=text]");
    const fill = [];
    for(var i=0; i<formData.length; i++){
        fill.push(formData[i].value);
    }
  
    makeMadLib(fill);
    });

    function makeMadLib(fill){
        const madlib = `Hi ${fill[0]}. I really like ${fill[1]} too since it is ${fill[2]}. Please keep in mind that  that sugar and sweet things are harmful if not rationalized .While you enjjoy  ${fil[3]} ${fill[4]}, it is important to realise that sugar can cause harmful effects like tooth decay, obesity and anxiety.`;
       
        const madlibCont = document.getElementById('madlib');
        
        madlibCont.innerHTML = `<p>${madlib}</p>`;
        
        madlibCont.setAttribute("class", "visible");
        }
}());