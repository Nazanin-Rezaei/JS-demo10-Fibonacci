/* I tried writing the code for the Fibonacci Sequence  : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ...
where every number is the sum of the two previous ones.
I create a function where I can call it by writing the code:
fibonacciGenerator(n)    , where n is the number of items in the sequence. */

/* solution */

function fibonacciGenerator (n) {

    var output=[];
    if (n===1){
      output=[0];
    }
    else if (n===2){
      output=[0,1];

    }
    else{
      output=[0, 1];
      for (var i=2; i < n; i++){
      output.push(output[output.length-2]+output[output.length-1]);
    }

    }
    return output;

}

output = fibonacciGenerator(50);
console.log(output)
