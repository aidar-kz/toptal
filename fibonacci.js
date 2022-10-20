const yourself = {
    fibonacci : function(n) {
        if (n === 0) {
            return 0;
        } else if (n === 1) {
            return 1;
        } else {
            return this.fibonacci(n - 1) + this.fibonacci(n - 2);
        }
    }
};

// Fast fibonacci
const fibo = {
    fibonacci : function(n) {
        if (n === 0) {
            return 0;
        } else if (n === 1) {
            return 1;
        } else {
            let a = 0;
            let b = 1;
            let c = 0;
            for (let i = 2; i <= n; i++) {
                c = a + b;
                a = b;
                b = c;
            }
            return c;
        }
    }
}

console.time('timer')
const result = fibo.fibonacci(2000);
console.timeEnd('timer')
console.log(result)