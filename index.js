import acGrid from "./src/components/ac-grid/ac-grid.vue"
import acCol from "./src/components/ac-col/ac-col.vue"
import acButton from "./src/components/ac-button/ac-button.vue"

export default{
    install(Vue, options){
        Vue.component("ac-grid",acGrid)
        Vue.component("ac-col",acCol)
        Vue.component("ac-button",acButton)
    }
}