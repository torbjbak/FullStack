const app = Vue.createApp({
    data() {
        return {
            answer:             0,
            result:             '',
            writing:            '',
            writeArray:         ['', '', ''],
            argCounter:         0,
            hasPoint:           false,
            results:            ['', '', '', '', '', '', '', '', '', '']
        }
    },
    
    methods: {
        digit(number) {
            if(this.argCounter%2 == 1) {
                this.argCounter++;
            }
            this.writeArray[this.argCounter] += number;
            this.writing = this.writeArray.join(' ');
        },
        operator(operator) {
            if(this.argCounter%2 == 0) {
                if(this.writeArray[this.argCounter] == '') {
                    this.writeArray[this.argCounter] += '0';
                }
                this.argCounter++;
                this.hasPoint = false;
            }
            this.writeArray[this.argCounter] = operator;
            this.writing = this.writeArray.join(' ');
        },
        pi() {
            if(this.argCounter%2 == 1) {
                this.argCounter++;
            }
            this.writeArray[this.argCounter] = '3.14159';
            this.hasPoint = true;
            this.writing = this.writeArray.join(' ');
        },
        ans() {
            if(this.argCounter%2 == 1) {
                this.argCounter++;
            }
            this.writeArray[this.argCounter] = this.result;
            this.hasPoint = true;
            this.writing = this.writeArray.join(' ');
        },
        point() {
            if(!this.hasPoint) {
                if(this.argCounter%2 == 0) {
                    if(this.writeArray[this.argCounter] == '') {
                        this.writeArray[this.argCounter] += '0';
                    }
                    this.writeArray[this.argCounter] += ('.'); 
                } else {
                    this.argCounter++;
                    this.writeArray[this.argCounter] = ('0.'); 
                }
                this.hasPoint = true;
                this.writing = this.writeArray.join(' ');
            }
        },
        del() {
            this.writeArray[this.argCounter] = '';
            this.writing = this.writeArray.join(' ');
        },
        clear() {
            this.writeArray = ['', '', '']
            this.writing = '';
            this.argCounter = 0;
        },
        equals() {
            if(this.argCounter < 2) {
                this.result = this.writeArray[0];
            } else {
                this.result = this.calculate(this.writeArray);
            }
            for(var i = 9; i > 0; i--) {
                this.results[i] = this.results[i-1]
            }
            this.results[0] = this.writing +' = '+ this.result;
            this.clear();
        },
        calculate(args) {
            let arg1 = parseFloat(args[0]);
            let arg2 = parseFloat(args[2]);
            let op = args [1];
            switch(op) {
                case '+':
                    return (arg1 + arg2).toFixed(2).toString();
                case '-':
                    return (arg1 - arg2).toFixed(2).toString();
                case '*':
                    return (arg1 * arg2).toFixed(2).toString();
                case '/':
                    return (arg1 / arg2).toFixed(2).toString();
                default:
                    return 'Error?';
            }
        }
    }
})  
