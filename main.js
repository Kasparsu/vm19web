import Vue from 'vue/dist/vue.common.js';

import App from './App.vue';

Vue.component('app', App);

let app = new Vue({
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