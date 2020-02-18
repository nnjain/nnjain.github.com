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
    
    //takes an array input, then constructs the madLib
    function makeMadLib(fill){
        const madlib = `Hi ${fill[0]}. I really like ${fill[1]} too since it is ${fill[2]}. Please keep in mind that  that sugar and sweet things are harmful if not rationalized .While you enjjoy  ${fil[3]} ${fill[4]}, it is important to realise that sugar can cause harmful effects like tooth decay, obesity and anxiety.`;
        
        //get madlib container
        const madlibCont = document.getElementById('madlib');
        
        //change the guts of the madlib container
        madlibCont.innerHTML = `<p>${madlib}</p>`;
        
        //change the class to visible in order to see it
        madlibCont.setAttribute("class", "visible");
        }
}());