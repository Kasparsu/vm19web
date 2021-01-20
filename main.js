import Vue from 'vue/dist/vue.common.js';

let App = new Vue({
    el: '#app',
    data: {
        textvalue: '',
        items: ['sai', 'leib', 'coca']
    },
    methods: {
        add(){
            if(this.textvalue !== ''){
                this.items.push(this.textvalue);
                this.textvalue = '';
            }
        }
    }
});