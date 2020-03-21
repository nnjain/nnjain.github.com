(function() {
    'use strict'; 
        window.onscroll = function() {myFunction()};

        var navbar = document.getElementById("nav1");
    
        var sticky = navbar.offsetTop;
        
        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }

        const navLinks = document.querySelectorAll('nav ul li a');
    
        navLinks.forEach(function(eachLink){
            eachLink.addEventListener('click',smoothScroll);
        });
    
        function smoothScroll(event){
        event.preventDefault();
    
        const targetID = event.target.getAttribute('href');
        const targetAnchor = document.querySelector(targetID);
    
        const originalTop = Math.floor(targetAnchor.getBoundingClientRect().top)-200;
        window.scrollBy({top:originalTop, left:0, behavior:'smooth'});
        console.log (originalTop);
        }
    
        window.addEventListener('load', function(){
            const posts = document.querySelectorAll('section');
            const postTops = [];
            let lastpost = posts.length - 1;
            let pagetop;
            let counter = 0;
            let prevCounter = 0;
    
            posts.forEach(function(post){
                postTops.push(Math.floor(post.getBoundingClientRect().top) + window.pageYOffset)
            })
            
            //console.log(postTops);
    
            window.addEventListener ('scroll', function(){
                pagetop = window.pageYOffset +250;
                //console.log (pagetop);
            
    
                if (pagetop>postTops[counter+1]) {
                    counter++;
                    console.log (`scrolling down ${counter}`);
                } else if (counter > 0 && pagetop < postTops [counter]) {
                    counter--;
                    lastPost = posts.length - 1;
                    console.log (`scrolling up ${counter}`);
                } else if (pagetop > postTops[lastPost]) {
                    counter = lastPost;
                    lastPost++;
                    console.log (`last post: ${counter}`);
                }
    
                if (counter != prevCounter) {
                    navLinks.forEach (function(eachLink){
                        eachLink.removeAttribute ('class');
                    });
                    var thisLink = document.querySelector (`nav ul li:nth-child(${counter+1}) a `);
                    thisLink.className = 'selected';
                    prevCounter = counter;
                }
    
            });
        });
    
        let resizeID;
        window.addEventListener ('resize', function(){
            clearTimeout (resizeID);
            resizeID = setTimeout(function(){
                window.onbeforeprint = function () {
                    window.scrollTo(0,0);
                };
                window.location.reload (true);
            },500);
        });

        function fn1(){
            let rd1 = document.getElementById("rd1");
            let rd2 = document.getElementById("rd1");
            let rd3 = document.getElementById("rd1");

            if (rd1.checked==true){
                alert("The channel selected is: " +rd1.value);
            } else if (rd2.checked==true){
                alert("The channel selected is: " +rd2.value);
            } else if (rd3.checked==true){
                alert("The channel selected is: " +rd3.value);
            } else {
                alert("No channel selected");
            }
        }

        // function speakAssistant(){
        
        // // var selectedEmail = emails[getRandomInt(0, emails.length-1)];
        // // var utterance = new SpeechSynthesisUtterance(selectedEmail);
        // // var voices = window.speechSynthesis.getVoices();
        
        // // utterance.volume = 0.15;
        // // utterance.voice = voices.filter(function(voice) { return voice.name == computerVoices[getRandomInt(0,7)]; })[0];
        
        // // window.speechSynthesis.speak(utterance);
        
        // checkIfSpeaking();
    
        // }

        let computerVoices =["Samantha", "Tom", "Q"];
        let ques1 = getElementById("ques1");
        let ques2 = getElementById("ques2");
        let ques3 = getElementById("ques3");
        let ques4 = getElementById("ques4");

        ques1.addEventListener("click", function(){
            speakAssistant.preventDefault();
            var selectedText = ("It is currently clear and 15 degress in Davis. Temperatures are heading down from 15 to 9 degrees tonight");
            var utterance = new SpeechSynthesisUtterance(selectedText);
            var voices = window.speechSynthesis.getVoices();
            utterance.volume = 0.15;
            utterance.voice = voices.filter(function(voice) { return voice.name == computerVoices[i];})[0];
            window.speechSynthesis.speak(utterance);
        });

        ques2.addEventListener("click", function(){
            speakAssistant.preventDefault();
            var selectedText = ("I dind't find any appointments for today");
            var utterance = new SpeechSynthesisUtterance(selectedText);
            var voices = window.speechSynthesis.getVoices();
            utterance.volume = 0.15;
            utterance.voice = voices.filter(function(voice) { return voice.name == computerVoices[i];})[0];
            window.speechSynthesis.speak(utterance);
        });

        ques3.addEventListener("click", function(){
            speakAssistant.preventDefault();
            var selectedText = ("One option I see is Chipotle on West Blvd. Do you want that one?");
            var utterance = new SpeechSynthesisUtterance(selectedText);
            var voices = window.speechSynthesis.getVoices();
            utterance.volume = 0.15;
            utterance.voice = voices.filter(function(voice) { return voice.name == computerVoices[0]; })[0];
            window.speechSynthesis.speak(utterance);
        });

        ques4.addEventListener("click", function(){
            speakAssistant.preventDefault();
            var selectedText = ("1 mile is equal to 1.61 Kilometers");
            var utterance = new SpeechSynthesisUtterance(selectedText);
            var voices = window.speechSynthesis.getVoices();
            utterance.volume = 0.15;
            utterance.voice = voices.filter(function(voice) { return voice.name == computerVoices[0]; })[0];
            window.speechSynthesis.speak(utterance);
        });

        $('a.say1').on('click', function(speakAssistant){
            speakAssistant.preventDefault();
            var selectedText = ("Hi, I am Bali!");
            var utterance = new SpeechSynthesisUtterance(selectedText);
            var voices = window.speechSynthesis.getVoices();
            utterance.volume = 0.15;
            utterance.voice = voices.filter(function(voice) { return voice.name == computerVoices[0]; })[0];
            window.speechSynthesis.speak(utterance);

            checkIfSpeaking();
        })
        
        function checkIfSpeaking(){
        
            setTimeout( function(){
                if(speechSynthesis.speaking){
                console.log("speaking");
                checkIfSpeaking();
                }
                else {
                console.log("done");
                setTimeout(speakAssistant, 2000);
                }
            }, 3000);
        }

        // createBox();
        speakAssistant();
        
    })();