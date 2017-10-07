const guess = ['1','2','3','4'];

exports.result = function(number) {
    let resultX = '';
    let resultY = '';
    var cont = 0

    if (isNaN(number)){
      return 'error, ingrese un numero'
    }

    number = number.toString().split('');

    for (var i = 0; i < number.length; i++) {
      if(parseInt(number[i]) === NaN){
        return 'error, el número contiene letras'
      }
    }

    if (number.length !== 4){
      return 'error, debe ser de 4 caracteres'
    }



    for (let i = 0; i < number.length; i++) {
      for(let j = i+1; j<number.length-1; j++) {
        if(number[i]===number[j]){
          return "error, numeros repetidos";
        }
      }
    }

    for(let i = 0; i<guess.length; i++){
      if(guess.indexOf(number[i]) !== -1){
        if(guess[i] === number[i]){
          resultX += 'X'
        }else{
          resultY += '_'
        }
      }
    }
    return resultX+resultY;
};
