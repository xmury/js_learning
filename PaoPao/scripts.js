var area = [[]]; var plan = [[]];
var arr = ['', 'red', 'blue', 'green' , '#806b2a' , 'brown' , '#cc6c5c' , 'orange'];

function genArea(){
    var xMax = document.getElementById('x').value;
    var yMax = document.getElementById('y').value;
    var widthBox = `${100/xMax}%`;
    var heightBox = `${100/yMax}%`;
    console.log(area);
    var div_area = document.createElement('div');
    div_area.classList = 'area';
    
    var x = 1; var y = 1;
    for (; y <= yMax; y++ ){
        area[x] = []; plan[x] = [];
        for (; x <= xMax; x++ ){
            var min = 1; var max = arr.length-1;
            var rand = min - 0.5 + Math.random() * (max - min + 1); rand = Math.round(rand);            
            area[x] = rand;
            div_area.innerHTML += `<button class='btn' 
            onclick="clicker([${x},${y}])" id = '${x}:${y}'
            style=' width: ${widthBox}; height: ${heightBox}; 
            background:${arr[rand]};'>${x}:${y}</button>`;
        }
        // div_area.innerHTML += `</div>`
        
        x = 1;
    }
    space.appendChild(div_area);
}

function clicker(val){
    var obj = document.getElementById(`${val[0]}:${val[1]}`); 
    obj.value = "-"; obj.style.background = "white";
    area[val[0]][val[1]] = 0
}