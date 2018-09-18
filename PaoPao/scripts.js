var area = []; var plan = [[]];
var arr = ['', 'red', 'blue', 'green' , '#806b2a' , 'brown' , '#cc6c5c' , 'orange'];
var button1 = []; var button2 = []; var xMax = 0; var yMax = 0;

function genArea(){ // Создание и вывод поля
    xMax = document.getElementById('x').value;
    yMax = document.getElementById('y').value;
    var widthBox = `${100/xMax}%`;
    var heightBox = `${100/yMax}%`;

    // GenArea
    for (var x = 1; x <= xMax; x++ ){ area[x] = []; }

    var div_area = document.createElement('div');
    div_area.classList = 'area';
    
    var x = 1; var y = 1;
    for (; y <= yMax; y++ ){
        plan[x] = [];
        for (; x <= xMax; x++ ){
            var min = 1; var max = arr.length-1;
            var rand = min - 0.5 + Math.random() * (max - min + 1); rand = Math.round(rand);            
            
            area[x][y] = rand;

            div_area.innerHTML += `<button class='btn' 
            onclick="clicker([${x},${y}])" id = '${x}:${y}'
            style=' width: ${widthBox}; height: ${heightBox}; 
            background:${arr[rand]};'>${x}:${y}</button>`;
        }
        x = 1;
    }
    space.appendChild(div_area);
}

function clicker(val){  // Обработка нажатия на кнопку
    if (button1[0] == undefined) { button1 = val }  
    else if (button2[0] == undefined) { 
        button2 = val 
        // Вызов сталкера
        // Удалить кнопку если true и проверить поле на пустоту
        // Очистить button1 и button2
        // Ничего не делать если false
        button1 = [];
        button2 = [];
        console.log("Full");
    }


    // "Удаление" кнопки
    var obj = document.getElementById(`${val[0]}:${val[1]}`); 
    obj.innerHTML = "."; obj.style.background = "white";  obj.style.color = "white";    
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