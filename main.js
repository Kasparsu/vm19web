import Vue from 'vue/dist/vue.common.js';

import App from './App.vue';

require('bulma');

Vue.component('app', App);



let app = new Vue({
    el: '#app'
});