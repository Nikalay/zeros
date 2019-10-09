module.exports = function zeros(expression) {
  // your solution
  //функция вычисления двойного факториала для четных и нечетных
  function doubleFakt(n){
	var result = 1;

	if(expression%2 == 0){
		for(var j = 2; j <= expression; j=j+2){

			result = result * j;
		}
		return result;
	} else{
		for(var j = 1; j <= expression; j=j+2){

		result = result * j;
		}
		return result;
		}
	}
	//функция вычисления  факториала
	function oneFakt(expression){
		var result = 1;
		for(var j = 1; j <= n; j++){
			result = result * j;
		}
		return result;
	}
}
