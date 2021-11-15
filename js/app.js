var Counter = new Vue({
    el: "#count",
    data: {
        image: {
            src: "https://vuejs.org//images/logo.svg",
            style: {
                width: "50px",
                height: "50px",
                border: "0px"
            }
        },
        count: 0,
        click: 0,
        exponent: 2
    },
    methods: {
        increment() {
            this.count++;
            this.click++;
           
        },
        decrement() {
            if (this.count > 0) this.count--;
            this.click++;
           
        },
        reset() {
            this.count = 0;
            this.click = 0;
            this.exponent = 2;   
        },
        validExponent(){
            if (this.exponent <0 || this.exponent>=100){
                this.exponent=2;
            }
        },

    },
    computed: {
        exponentCount() {
            return Math.pow(this.count, this.exponent);
        },       
    }
})