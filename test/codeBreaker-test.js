var codeBreaker = require('../codeBreaker.js');
var assert = require('assert');


var cb = codeBreaker;


it('probar assert true', function(){
  assert.ok(true,true);
});

it('pasar los 4 numeros exactos', function(){
  var res = cb.result(1234);
  assert.equal(res,'XXXX');
});

it("pasar 1 _ y 3 x's", function() {
  var res = cb.result(7234);
  assert.equal(res,'XXX');
})

it("pasar 4_", function() {
  var res = cb.result(4321);
  assert.equal(res,'____');
})

it("pasar 4 equivocados", function() {
  var res = cb.result(5678);
  assert.equal(res,'');
})

it("pasar 4 equivocados", function() {
  var res = cb.result(5678);
  assert.equal(res,'');
})

it("pasar 2_ y 2 x's", function() {
  var res = cb.result(1243);
  assert.equal(res,'XX__');
})

it("pasar 2_ y 2 x's con los equivocados primero", function() {
  var res = cb.result(2134);
  assert.equal(res,'XX__');
})

it("digitos repetidos", function() {
  var res = cb.result(1123);
  assert.equal(res,'error, numeros repetidos');
})

it("Unicamente 4 caracteres", function() {
  var res = cb.result(18237);
  assert.equal(res,'error, debe ser de 4 caracteres');
})

it("Numero ingresado esta nulo", function() {
  var res = cb.result();
  assert.equal(res,'error, ingrese un numero');
})

it("El número ingresado tiene letras", function() {
  var res = cb.result('1a2b');
  assert.equal(res,'error, el número contiene letras');
})
