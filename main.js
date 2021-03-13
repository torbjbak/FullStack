const app = Vue.createApp({
    data() {
        return {
            result: '',
            writing: String[3],
            currentNumber:  String[10],
            counter: 0,
            digit: 0,
            calculations: ['calc 1', 'calc 2', 'calc 3']
        }
    },
    
    methods: {
        addNumber(number) {
            currentNumber[digit] = number;
            digit++;
            if(counter%2 == 1) {
                counter++;
            }
        },
        addOperator(operator) {
            digit = 0;
            writing[1] = operator;
            if(counter == 0) {
                writing[0] == currentNumber.join('');
                currentNumber = [];
                counter++;
            }
        },
        clickEquasls() {
            if(counter == 2) {
                result = '7';
            }
        }
    }
})  