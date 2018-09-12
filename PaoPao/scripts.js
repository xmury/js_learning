var area = [];
var arr = ['red'];
function genArea(){
    var xMax = document.getElementById('x').value;
    var yMax = document.getElementById('y').value;
    // console.log(x + "|" + y);
    document.write("<div class='area'>");
    for (var y = 1; y <= yMax; y++ ){
        document.write("<div='column'>");
        for (var x = 1; x <= xMax; x++ ){
            var min = 0; var max = arr.lenht
			var rand = min - 0.5 + Math.random() * (max - min + 1); rand = Math.round(rand);            
            area[x][y] = rand;
            document.write("<div='row'>");
            document.write('<button class="btn" onclick="click()"> ' + val + ' </button>');
            document.write("</div>");
        }
        document.write("</div>");
    }

}

function click(){
    console.log("click");
}