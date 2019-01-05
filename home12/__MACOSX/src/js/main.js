function plus () {
  var p1, p2, result;

  p1 = document.getElementById('n1').value;
  p1 = parseInt(p1);

  p2 = document.getElementById('n2').value;
  p2 = parseInt(p2);

  result = p1 + p2;

  document.getElementById("res").innerHTML = result;
}
function minus() {
  var p1, p2, result;

  p1 = document.getElementById('n1').value;
  p1 = parseInt(p1);

  p2 = document.getElementById('n2').value;
  p2 = parseInt(p2);

  result = p1 - p2;

  document.getElementById("res").innerHTML = result;
}
function multip () {
  var p1, p2, result;

  p1 = document.getElementById('n1').value;
  p1 = parseInt(p1);

  p2 = document.getElementById('n2').value;
  p2 = parseInt(p2);

  result = p1 * p2;

  document.getElementById("res").innerHTML = result;
}