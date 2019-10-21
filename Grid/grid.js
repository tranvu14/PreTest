

function createArr(row, col) {
    var a = [];
    for (let i = 0; i < row; i++) {
        let tmp = [];
        for (let j = 0; j < col; j++) {
            tmp.push(Math.floor(Math.random() * 1000)+1);
        }
        a.push(tmp);
    }
    return a;
}

function createBoard(a, row, col) {
	var board = document.querySelector("#board");
	board.innerHTML="";
    var thead = document.createElement("thead");
    thead.classList.add('fixed-thead');
    var trhead = document.createElement("tr");
    for (let j = 0; j < col; j++) {
        var tdhead = document.createElement("td");
        tdhead.addEventListener('click', function() {
            sortArr(a, j);
        });
        tdhead.innerHTML = j + 1;
        tdhead.setAttribute("id", j);
        trhead.appendChild(tdhead);
    }
    thead.appendChild(trhead);
    board.appendChild(thead);
    for (let i = 0; i < row; i++) {
        var tr = document.createElement("tr");
        tr.setAttribute("id", `${i}`);
        for (let j = 0; j < col; j++) {
            var td = document.createElement("td");
            td.innerHTML = a[i][j];
            td.setAttribute("id", `${i}${j}`);
            tr.appendChild(td);
        }
        board.appendChild(tr);
    }
}

function create() {
    const row = document.querySelector("#row").value;
    const col = document.querySelector("#col").value;
  
    var a = createArr(row, col);

    createBoard(a, row, col);
}

function sortArr(arr, i) {
    const row = document.querySelector("#row").value;
    const col = document.querySelector("#col").value;
    const sorts = arr.sort(function(a, b) {
        return a[i] > b[i] ? 1 : -1;
    });
    console.log(sorts);
    createBoard(sorts, row, col);
}
