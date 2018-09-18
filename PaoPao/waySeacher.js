function stalker(way , start){
    x = start[0]; y = start[1];
    muving = []; test = true;

    while (test){
        way[0] == 'x' ? x++ : y++; // Сдиг по маршруту
        console.log(`coor : ${x}:${y} | ${area[x][y]}`)
        // Проверка на пустоту ячейки
        if (area[x][y] != 0) { return muving; }
        else { muving.push([x,y]); }      

        // Выделение
        var obj = document.getElementById(`${x}:${y}`); 
        obj.innerHTML = "."; obj.style.background = "white";  obj.style.color = "white";    

        // Проверка границ
        if(way[1] == 0) { way[0] == 'x' ? test = x != 0 : y != 0; } // Убывание
        else if (way[1] == 1) { way[0] == 'x' ? test = x != xMax+1 : y != yMax+1; } // Возрастание
    }
    
    return muving;
}