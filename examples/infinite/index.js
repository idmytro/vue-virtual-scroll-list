import Vue from 'vue'
import InfiniteDemo from './infinite.vue'

Vue.config.debug = true
Vue.config.devtools = true
Vue.config.productionTip = true

new Vue({
    el: '#app',
    template: '<InfiniteDemo />',
    components: { InfiniteDemo }
})
