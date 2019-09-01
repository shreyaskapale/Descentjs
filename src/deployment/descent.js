

var $ = function( id ) { return document.getElementById( id ); };
// STAT TOOLS


// Array Mean
// const mean = arr => arr.reduce((a,b) => a + b, 0) / arr.length;


// Array Sum
const arr_sum = arr => arr.reduce((a,b) => a + b, 0)

// 2 array sum
Array.prototype.SumTwoArray = function (arr) {

        var sum = this.map(function (num, idx) {
          return num + arr[idx];
        });

        return sum;	
    }

// 2 array product
Array.prototype.MultiplyTwoArray = function (arr) {

        var sum = this.map(function (num, idx) {
          return num * arr[idx];
        });

        return sum;
    }

// Array Comprehension Support Function 
Array.prototype.comprehend = function(xs) {
  return this.reduce((acc, f) => acc.concat(xs.map(f)), []) 
}

class LinearRegression {
    constructor(X, y) {
        this.X = X;
        this.y = y;
        this.X_mean = arr_sum(X)/X.length;
        this.y_mean = arr_sum(y)/y.length;
        this.x__xb 	= [x => x - this.X_mean].comprehend(X);
        this.y__yb 	= [x => x - this.y_mean].comprehend(y);
        this.x__xb_sqr_sum	= arr_sum([x => Math.pow(x,2)].comprehend(this.x__xb));
        this.x__xbmy__yb = arr_sum(this.x__xb.MultiplyTwoArray(this.y__yb));
        this.m = this.x__xbmy__yb/this.x__xb_sqr_sum;
        this.c = this.y_mean - (this.m*this.X_mean);
        this.y_reg = [x => (x * this.m) + this.c ].comprehend(this.X);

    }

    //methods
    LinearCoefficient(X_mean,y_mean,n,i,num,den)
    {
    	
    	X_mean = this.X_mean;
    	y_mean = this.y_mean;
    	var n = this.X_mean.length;
    	var num = 0;
    	var den = 0; 
    	var i=0;
    	var b1;
    	var b0;
    	for(i=0;i<n;i++){
    		num += (this.X[i] - X_mean) * (this.y[i]-y_mean);
    		den += (this.X[i] - X_mean) * 2;
    		alert(num);
    		b1 = num/den;
    		b0 = y_mean - (b1*X_mean);
    	    }

    	for (i = 0; i < cars.length; i++) { 
  			alert(i);
			}
    	 //    alert(b1);
    		// alert(b0);

    }



    
   test_function() {
        alert(this.x__xb);
        alert(this.x__xb_sqr_sum);
        alert(this.x__xbmy__yb);
        alert(this.m);
        alert(this.c);
        alert(this.y_reg)
       }
}

// var regressor = new LinearRegression([1,2,3,4,5],[3,4,2,4,5]);
// regressor.LinearCoefficient();
