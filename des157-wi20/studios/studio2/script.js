'use strict';

var desktop = document.querySelector('#desktop');

var balm = document.querySelector('#balm');
var phone = document.querySelector('#phone');
var bottle = document.querySelector('#bottle');

var balmhov = document.querySelector('#balmhov');
var phonehov = document.querySelector('#phonehov');
var bottlehov = document.querySelector('#bottlehov');

var bmclose = document.querySelector('#bmclose');
var pnclose = document.querySelector('#pnclose');
var btclose = document.querySelector('#btclose');

var bmpic = document.querySelector('#bmpic');
var pnpic = document.querySelector('#pnpic');
var btpic = document.querySelector('#btpic');

var bmpic2 = document.querySelector('#bmpic2');
var pnpic2 = document.querySelector('#pnpic2');
var btpic2 = document.querySelector('#btpic2');


//img hover for buttons

balm.addEventListener('mouseover',function(){
  bmpic.src='images/balms.svg';
})

balm.addEventListener('mouseout',function(){
  bmpic.src='images/balmo.svg';
})

phone.addEventListener('mouseover',function(){
  pnpic.src='images/phones.svg';
})

phone.addEventListener('mouseout',function(){
  pnpic.src='images/phoneo.svg';
})

bottle.addEventListener('mouseover',function(){
  btpic.src='images/bottles.svg';
})

bottle.addEventListener('mouseout',function(){
  btpic.src='images/bottleo.svg';
})

//overlay behavior

balm.addEventListener('click',function(){
  balmhov.style.left='50%';
  desktop.style.marginLeft='100%';
})

phone.addEventListener('click',function(){
  phonehov.style.left='50%';
  desktop.style.marginLeft='100%';
})

bottle.addEventListener('click',function(){
  bottlehov.style.left='50%';
  desktop.style.marginLeft='100%';
})

//desktop close behavior

bmclose.addEventListener('click',function(){
  balmhov.style.left='-50%';
  desktop.style.marginLeft='0';
})

pnclose.addEventListener('click',function(){
  phonehov.style.left='-50%';
  desktop.style.marginLeft='0';
})

btclose.addEventListener('click',function(){
  bottlehov.style.left='-50%';
  desktop.style.marginLeft='0';
})

//img hover for overlays

bmpic2.addEventListener('mouseover',function(){
  bmpic2.src='images/balmx.svg';
})

bmpic2.addEventListener('mouseout',function(){
  bmpic2.src='images/balms.svg';
})

pnpic2.addEventListener('mouseover',function(){
  pnpic2.src='images/phonex.svg';
})

pnpic2.addEventListener('mouseout',function(){
  pnpic2.src='images/phones.svg';
})

btpic2.addEventListener('mouseover',function(){
  btpic2.src='images/bottlex.svg';
})

btpic2.addEventListener('mouseout',function(){
  btpic2.src='images/bottles.svg';
})
