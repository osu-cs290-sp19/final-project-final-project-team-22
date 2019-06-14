function $(str) {
 return document.getElementById(str);
}
function send() {
 var word = $('txt').value;
 var span = document.createElement('span');
 var top = parseInt(Math.random() * 500) - 20;
 var color = "black";
 span.style.position = 'absolute';
 span.style.top = top + "px";
 span.style.color = color;
 span.style.left = '1920px';
 span.style.fontSize = '30px';
 span.style.whiteSpace = 'nowrap';
 var nub = (Math.random() * 100) + 1;
 span.setAttribute('speed', nub);
 span.speed = nub;
 span.innerHTML = word;
 $('box').appendChild(span);
 $('txt').value = "";
}
setInterval(move, 200);
function move() {
 var spanArray = $('box').children;
 for (var i = 0; i < spanArray.length; i++) {
  spanArray[i].style.left =
   parseInt(spanArray[i].style.left) - spanArray[i].speed + '10px';
 }
}
