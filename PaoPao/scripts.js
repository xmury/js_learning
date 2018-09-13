var area = [[]];
var arr = ['red', 'blue', 'green' , 'white' , 'brown' , 'gray' , 'orange' , ""];
function genArea(){
    var xMax = document.getElementById('x').value;
    var yMax = document.getElementById('y').value;
    var size = '60px';
    console.log(area);
    document.write(`<style> .area { width: 800px; height: 600px; } </style>`)
    document.write("<div class='area'>");
    var x = 0; var y = 0;
    for (; y <= yMax; y++ ){
        area[x] = [];
        // console.log(area[x]);
        document.write("<div='column'>");
        for (; x <= xMax; x++ ){
            var min = 0; var max = arr.length;
            var rand = min - 0.5 + Math.random() * (max - min + 1); rand = Math.round(rand);            
            // console.log(area + " | " + rand);
            area[x] = rand;
            document.write("<div='box'>");
            document.write(`<button class='btn' onclick='click()' style=' width:${size}; height:${size}; background:${arr[rand]};'> </button>`);
        }
        x = 0;
    }

    document.write("</div>");
}

function click(){
    console.log("click");
}