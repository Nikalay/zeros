module.exports = function zeros(expression) {
  var result = 1
  var ExprArr = expression.split('*')
  ExprArr.forEach(function(elem){
    if(elem.match(/[!]/g).length == 2){
      result = BigInt(result) * BigInt(doubleFakt(elem))
    }else{
      result = BigInt(result) * BigInt(oneFakt(elem))
    }
  })
  var num = String(result).match(/0{0,}$/g)

  if(String(num).length == 0){
    return String(num).length
  }else{
    return String(num).length-1
  }
}


function doubleFakt(n){
  var result = 1;
  if(Number.parseInt(n)%2 == 0){
    for(var j = 2; j <= Number.parseInt(n); j += 2){
      result = BigInt(result) * BigInt(j);
    }
  }else{
    for(var j = 1; j <= Number.parseInt(n); j += 2){
      result = BigInt(result) * BigInt(j);
    }
  }
  return BigInt(result);
}


function oneFakt(n){
  var result = 1;
  for(var j = 1; j <= Number.parseInt(n); j++){
    result = BigInt(result) * BigInt(j);
  }
  return BigInt(result);
}
