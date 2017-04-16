function tablero() {
  var filas = parseInt(10);
  var columnas = parseInt(10);
  var num = 1;
  var tabla = $("<table class='board'></table>").appendTo(".container");
  for (var i = filas - 1; i >= 0; i--) {
    var rows = $("<tr></tr>").appendTo(tabla);
    for (var j = 0; j < columnas; j++) {
      rows.append("<td class='posicion'>" + num + "</td>");
      $(".posicion").attr("class", num);
      num++;
    }
  }
} tablero();