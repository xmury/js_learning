function rsaGen(){
    document.getElementById('private').value = 10;
  }

function text_to_num(text){
  text = text.toLowerCase;
  var newText = "";
  for (var i = 0; text.length -1 > i; i++){
   switch (text[i]) {
      case 'a': newText += "01"; break; 
      case 'b': newText += "02"; break;
      case 'c': newText += "03"; break;
      case 'd': newText += "04"; break;
      case 'i': newText += "05"; break;
      case 'f': newText += "06"; break;
      case 'g': newText += "07"; break;
      case 'h': newText += "08"; break;
      case 'i': newText += "09"; break;
      case 'j': newText += "10"; break;
      case 'k': newText += "11"; break;
      case 'l': newText += "12"; break;
      case 'm': newText += "13"; break;
      case 'n': newText += "14"; break;
      case 'o': newText += "15"; break;
      case 'p': newText += "16"; break;
      case 'q': newText += "17"; break;
      case 'r': newText += "18"; break;
      case 's': newText += "19"; break;
      case 't': newText += "20"; break;
      case 'u': newText += "21"; break;
      case 'v': newText += "22"; break;
      case 'w': newText += "23"; break;
      case 'x': newText += "24"; break;
      case 'y': newText += "25"; break;
      case 'z': newText += "26"; break;
      break;
   
     default:
       break;
   }
  }
}

function Generation(){
  while (true) {
    // gen simple nums
    var rand = randomvareger(2, 29)
    var p = rand[0]; var q = rand[1];
    console.log("p/q Два простых числа: " + p + " | " + q);
    // произведение
    var mod = rand[0] * rand[1];
    console.log("mod Произведение: " + mod);
    var f = funEyler(p , q);
    console.log("f Функция Эйлера: " + f);
    // open exponent
    var e = 3;
    console.log("e Открытая экспонента: " + e);
    // sicret  exponent
    var d = secretExp();
    if (d == false) { 
      console.log("----------------------------");
      continue; 
    }
    else { 
      console.log("d Секретная экспонента : " + d);
      document.write("<div>");
      document.write("Произведение: " + mod         + "<br>");
      document.write("Функция Эйлера: " + f         + "<br>");
      document.write("Открытая экспонента: " + e    + "<br>");
      document.write("Секретная экспонента : " + d  + "<br>");
      document.write("</div>");
      break; 
    }
  }

  function randomvareger(min, max) {
  var f;
  while (true){
    f = 0;
    var r1 = min - 0.5 + Math.random() * (max - min + 1); r1 = Math.round(r1);
    var r2 = min - 0.5 + Math.random() * (max - min + 1); r2 = Math.round(r2);
    
    if (r1 == r2) { continue; }
    for(var i = 2; r1 > i; i++){ if (r1 % i == 0){ f++; break } }
    for(var i = 2; r2 > i; i++){ if (r2 % i == 0){ f++; break } }
    if (f == 0) { break; }
  }
  var rand = [r1 , r2];
  return rand;
}
function funEyler(p , q){ return (p -1) * (q - 1); }
function secretExp(){ 
  var t; var mas = [];
  for(var i = 1; ; i++){
    t = i * e % f
    if (t == 1){ mas.push(i); }

    if (i > 1000){
      if (mod.length > 1 || i < 1000000){ break; }
    }
  }
  // console.log(mas);
  if (mas.length > 0){ 
    var i = 0 - 0.5 + Math.random() * ((mas.length-1) - 0 + 1); i = Math.round(i);
    return mas[i]; 
  }
  else { return false; }
}
}

// Step 2 |