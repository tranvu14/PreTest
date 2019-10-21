const table = document.querySelectorAll("td");
table.forEach(e => e.addEventListener('click', myFunction));
var a = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
var player = true;
var count = 0;
function myFunction() {
    let tmp = this.id;
    let x = tmp.split("");
    if (player == true) {
        a[x[0]][x[1]] = 'X';
        this.innerHTML = `${a[x[0]][x[1]]}`;
        player = !player;
        count = count + 1;
    } else {
        a[x[0]][x[1]] = 'O';
        this.innerHTML = `${a[x[0]][x[1]]}`;
        player = !player;
        count = count+1;
    }
    if (checkWin(a) == true) {
    	count = 0;
        if (!player) {
            document.getElementById("noti").innerHTML = "WINNER IS X";
        } else {
            document.getElementById("noti").innerHTML = "WINNER IS O";
        }
        document.getElementById("btn").style.display = "block";
         stopPropagation();
    } 
    if(checkWin(a) == false && count == 9){
    	 document.getElementById("noti").innerHTML = "DRAW";
    	 document.getElementById("btn").style.display = "block";
    	 count = 0;
    	  stopPropagation();
    }

}

function checkWin() {
    for (let i = 0; i < 3; i++) {
        if (a[i][0] != 0 && a[i][0] == a[i][1] && a[i][0] == a[i][2]) return true;
        if (a[0][i] != 0 && a[0][i] == a[1][i] && a[0][i] == a[2][i]) return true;
    }
    if (a[0][0] != 0 && a[0][0] == a[1][1] && a[0][0] == a[2][2]) return true;
    if (a[0][2] != 0 && a[0][2] == a[1][1] && a[0][2] == a[2][0]) return true;
    return false;
}

function reset() {
    table.forEach(e => e.innerHTML = "");
    document.getElementById("noti").innerHTML = "";
    player = true;
    document.getElementById("btn").style.display = "none";
    a = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
}