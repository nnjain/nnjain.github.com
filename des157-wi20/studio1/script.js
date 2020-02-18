(function(){
    "use strict";

    const myform = document.querySelector("form");
    event.preventDefault();

    //gets all data from form
          const formData = document.querySelectorAll("input[type=text]");
    
    //create an array to hold values from form
          const fill = [];
    
    //loops through the fields and adds the word to the array
          for(var i=0; i<formData.length; i++){
              fill.push(formData[i].value);
          }
    
    //pass the array of words the user type into the function
          makeMadLib(fill);
      });
    
    //takes an array input, then constructs the madLib
      function makeMadLib(thefiller){
          const madlib = `My ${thefiller[0]}. When we first met, you looked so ${thefiller[1]} and ${thefiller[2]}. I couldn't believe my eyes. You smelled like a ${thefiller[3]}. You walked so ${thefiller[4]}. I couldn't wait to ${thefiller[5]} you.Hi ${yname}. I really like ${noun} too since it is ${adj1}. Please keep in mind that  that sugar and sweet things are harmful if not rationalized .While you enjjoy  ${adj1} ${adverb}, it is important to realise that sugar can cause harmful effects like tooth decay, obesity and anxiety.`;
    
    //get madlib container
          const madlibCont = document.getElementById('madlib');
    
    //change the guts of the madlib container
        madlibCont.innerHTML = `<p>${madlib}</p>`;
    
    //change the class to visible in order to see it
        madlibCont.setAttribute("class", "visible");
      }
}());