document.addEventListener("DOMContentLoaded", () => {
  const tableroPorDefecto = [
    [0, 6, 0, 0, 0, 4, 3, 0, 0],
    [5, 0, 0, 7, 0, 2, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 7, 8, 0],

    [0, 0, 0, 0, 5, 0, 8, 0, 1],
    [0, 5, 0, 3, 0, 0, 0, 0, 0],
    [0, 0, 4, 0, 7, 0, 0, 0, 0],

    [1, 3, 0, 0, 0, 7, 6, 0, 0],
    [0, 0, 7, 0, 6, 5, 0, 0, 0],
    [4, 8, 0, 0, 3, 0, 0, 0, 0],
  ];

  const tablero = document.getElementById("board");
  const celdas = document.getElementsByTagName("td");
  crearContenidoTablero(tablero);

  for (let i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener("click", function () {
      //console.log("celdas[" + i + "]" + celdas[i].innerHTML + " Tipo: " + typeof(celdas[i].innerHTML) + " - " + typeof(celdas[i]));
      for (let j = 0; j < celdas.length; j++) {
        celdas[j].style.backgroundColor = "";
      }

      if (celdas[i].innerHTML === "") {
        console.log("Aqui podras introducir un numero");
        celdas[i].style.backgroundColor = "lightgrey";
      }
    });
  }

  // Revisar el funcionamiento de esta funcion (No e conseguido que cuando clique en una
  //casilla donde ya hay un numero no me salga ningun consol.log())
  function crearContenidoTablero(tablero) {
    for (let i = 0; i < tableroPorDefecto.length; i++) {
      for (let j = 0; j < tableroPorDefecto.length; j++) {
        let filas = tablero.rows[i].cells[j];
        if (tableroPorDefecto[i][j] != 0) {
          filas.innerHTML = tableroPorDefecto[i][j];
        }
      }
    }
  }
});

/* const board = [
  [0, 6, 0, 0, 0, 4, 3, 0, 0],
  [5, 0, 0, 7, 0, 2, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 7, 8, 0],

  [0, 0, 0, 0, 5, 0, 8, 0, 1],
  [0, 5, 0, 3, 0, 0, 0, 0, 0],
  [0, 0, 4, 0, 7, 0, 0, 0, 0],

  [1, 3, 0, 0, 0, 7, 6, 0, 0],
  [0, 0, 7, 0, 6, 5, 0, 0, 0],
  [4, 8, 0, 0, 3, 0, 0, 0, 0],
];

// Función para imprimir el tablero
function printBoard(board) {
  for (let i = 0; i < 9; i++) {
    let row = "";
    for (let j = 0; j < 9; j++) {
      row += board[i][j] + " ";
    }
    console.log(row);
  }
}

// Llama a la función para imprimir el tablero
printBoard(board); */
