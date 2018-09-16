var area = [[]]; var plan = [[]];
var arr = ['', 'red', 'blue', 'green' , '#806b2a' , 'brown' , '#cc6c5c' , 'orange'];
var button1 = []; var button2 = [];
function genArea(){ // Создание и вывод поля
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

function clicker(val){  // Обработка нажатия на кнопку
    console.log(val);
    if (button1[0] == undefined) { button1 = val }  
    else if (button2[0] == undefined) { 
        button2 = val 
        // Вызов сталкера
        // Удалить кнопку если true и проверить поле на пустоту
        // Очистить button1 и button2
        // Ничего не делать если false
        console.log("Full");
    }


    // "Удаление" кнопки
    var obj = document.getElementById(`${val[0]}:${val[1]}`); 
    obj.value = "-"; obj.style.background = "white";
    area[val[0]][val[1]] = 0
}

function testArea(){    // Проверка поля на пустоту
    for (; y <= yMax; y++ ){
        for (; x <= xMax; x++ ){
            if (area[x][y] != 0) {
                return false;
            }
        }
    }
    return true;
}