var board = document.querySelector("#board");
var a = [];
var player = true;

function info() {
    var n = document.getElementById("size").value;
    const m = document.querySelector("#win").value;
    console.log(m);
    createBoard(n);
}

function createBoard(n) {
    board.innerHTML = "";
    for (let i = 0; i < n; i++) {
        var tr = document.createElement("tr");
        tr.setAttribute("id", `${i}`);
        for (let j = 0; j < n; j++) {
            var td = document.createElement("td");
            td.addEventListener('click', ticking);
            td.setAttribute("id", `${i}${j}`);
            tr.appendChild(td);
        }
        board.appendChild(tr);
    }
    for (let i = 0; i < n; i++) {
        let tmp = [];
        for (let j = 0; j < n; j++) {
            tmp.push(0);
        }
        a.push(tmp);
    }
    return a;
}

function ticking() {
    let tmp = this.id;
    var x = tmp.split("");
    if (player == true) {
        a[x[0]][x[1]] = 'X';
        this.innerHTML = `${a[x[0]][x[1]]}`;
        player = !player;
    } else {
        a[x[0]][x[1]] = 'O';
        this.innerHTML = `${a[x[0]][x[1]]}`;
        player = !player;
    }
    var x1 = parseInt(x[0]);
    var y1 = parseInt(x[1]);
    console.log(Win(x1, y1));
}

function Win(x, y) {
    const m = document.querySelector("#win").value;
    const n = document.getElementById("size").value;
    //hang doc
    let i =1;
    let count = 1;
    while(a[x-i][y]==a[x][y] && (x-i)>=0){
    	i++;
    	count++;
    }
    i=1;
   	while(a[x+i][y]==a[x][y] && (x+i)<=n){
   		count++;
   	}
    console.log(count);




   
}