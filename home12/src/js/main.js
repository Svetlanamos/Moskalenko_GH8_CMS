function plus () {
  var p1, p2, result

  p1 = document.getElementById('n1').value
  p1 = parseInt(p1)

  p2 = document.getElementById('n2').value
  p2 = parseInt(p2)

  result = p1 + p2

  document.getElementById('res').innerHTML = result
}

function minus () {
  var p1, p2, result

  p1 = document.getElementById('n1').value
  p1 = parseInt(p1)

  p2 = document.getElementById('n2').value
  p2 = parseInt(p2)

  result = p1 - p2

  document.getElementById('res').innerHTML = result
}

function multip () {
  var p1, p2, result

  p1 = document.getElementById('n1').value
  p1 = parseInt(p1)

  p2 = document.getElementById('n2').value
  p2 = parseInt(p2)

  result = p1 * p2

  document.getElementById('res').innerHTML = result
}

function division () {
  var p1, p2, result

  p1 = document.getElementById('n1').value
  p1 = parseInt(p1)

  p2 = document.getElementById('n2').value
  p2 = parseInt(p2)

  result = p1 / p2
  result = parseFloat(result.toFixed(3))

  document.getElementById('res').innerHTML = result
}

function sqrFun () {
  var p1, p2, result, i

  p1 = document.getElementById('n1').value
  p1 = parseInt(p1)

  p2 = document.getElementById('n2').value
  p2 = parseInt(p2)

  result = 1
  for (i = 1; i <= p2; i++) {
    result = result * p1
  }

  document.getElementById('res').innerHTML = result
}

function sinFun () {
  var p1, p2, result

  p1 = document.getElementById('n1').value
  p1 = parseInt(p1)

  p2 = document.getElementById('n2').value

  result = Math.sin(p1)

  document.getElementById('res').innerHTML = result
}

function cosFun () {
  var p1, p2, result

  p1 = document.getElementById('n1').value
  p1 = parseInt(p1)

  p2 = document.getElementById('n2').value

  result = Math.cos(p1)

  document.getElementById('res').innerHTML = result
}
function sqrtFun () {
  var p1, p2, result

  p1 = document.getElementById('n1').value
  p1 = parseInt(p1)

  p2 = document.getElementById('n2').value

  result = Math.sqrt(p1)

  document.getElementById('res').innerHTML = result
}

function factorialFun () {
  var p1, p2, result

  p1 = document.getElementById('n1').value
  p1 = parseInt(p1)

  p2 = document.getElementById('n2').value

  result = factorial(p1)

  document.getElementById('res').innerHTML = result
}

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}
