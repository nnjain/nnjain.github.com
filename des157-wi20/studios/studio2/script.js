'use strict';

var desktop = document.querySelector('#basic');
var phone = document.querySelector('#phone');
var airp = document.querySelector('#airp');
var tumbler= document.querySelector('#tumbler');

var airphov = document.querySelector('#airphov');
var phnhov = document.querySelector('#phnhov');
var tumbhov = document.querySelector('#tumbhov');

var arclose = document.querySelector('#arclose');
var pnclose = document.querySelector('#pnclose');
var trclose = document.querySelector('#trclose');

var pnpic = document.querySelector('#pnpic');
var arpic = document.querySelector('#arpic');
var trpic = document.querySelector('#trpic');

var pnpic2 = document.querySelector('#pnpic2');
var arpic2 = document.querySelector('#arpic2');
var trpic2 = document.querySelector('#trpic2');


//img hover for buttons

airp.addEventListener('mouseover',function(){
  arpic.src='images/airpodso.png';
})

airp.addEventListener('mouseout',function(){
  arpic.src='images/airpodss.png';
})

phone.addEventListener('mouseover',function(){
  pnpic.src='images/phoneo.png';
})

phone.addEventListener('mouseout',function(){
  pnpic.src='images/phones.png';
})

tumbler.addEventListener('mouseover',function(){
  trpic.src='images/tumblero.png';
})

tumbler.addEventListener('mouseout',function(){
  trpic.src='images/tumblers.png';
})

//overlay behavior

airp.addEventListener('click',function(){
  airphov.style.left='50%';
  basic.style.marginLeft='100%';
})

phone.addEventListener('click',function(){
  phnhov.style.left='50%';
  basic.style.marginLeft='100%';
})

tumbler.addEventListener('click',function(){
  tumbhov.style.left='50%';
  basic.style.marginLeft='100%';
})

//desktop close behavior

arclose.addEventListener('click',function(){
  airphov.style.left='-50%';
  basic.style.marginLeft='0';
})

pnclose.addEventListener('click',function(){
  phnhov.style.left='-50%';
  basic.style.marginLeft='0';
})

trclose.addEventListener('click',function(){
  tumbhov.style.left='-50%';
  basic.style.marginLeft='0';
})

//img hover for overlays

pnpic2.addEventListener('mouseover',function(){
  pnpic2.src='images/phoneo.png';
})

pnpic2.addEventListener('mouseout',function(){
  pnpic2.src='images/phones.png';
})

arpic2.addEventListener('mouseover',function(){
  arpic2.src='images/airpodso.png';
})

arpic2.addEventListener('mouseout',function(){
  arpic2.src='images/airpodss.png';
})

trpic2.addEventListener('mouseover',function(){
  trpic2.src='images/tumblero.png';
})

trpic2.addEventListener('mouseout',function(){
  trpic2.src='images/tumblers.png';
})
