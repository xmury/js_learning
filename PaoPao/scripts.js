var area = [[]]; var plan = [[]];
var arr = ['red', 'blue', 'green' , 'white' , 'brown' , 'gray' , 'orange' , ""];

function genArea(){
    var xMax = document.getElementById('x').value;
    var yMax = document.getElementById('y').value;
    var size = '60px';
    console.log(area);
    document.write(`<style> .area { width: 800px; height: 600px; } </style>`)
    document.write("<div class='area'>");
    var div_area = document.createElement('div' , 'class area');
    div_area.innerHTML = "<strong>Ура!</strong> Вы прочитали это важное сообщение.";
    // var x = 0; var y = 0;
    // for (; y <= yMax; y++ ){
    //     area[x] = []; plan[x] = [];
    //     for (; x <= xMax; x++ ){
    //         var min = 0; var max = arr.length;
    //         var rand = min - 0.5 + Math.random() * (max - min + 1); rand = Math.round(rand);            
    //         area[x] = rand;
    //         // document.write(`<button class='btn' onclick='click()' style=' width:${size}; height:${size}; background:${arr[rand]};'> </button>`);
    //     }
    //     x = 0;
    // }
    space.appendChild(div_area);
    // document.write("</div>");
}

function click(){
    console.log("click");
}