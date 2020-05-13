import acGrid from "./src/components/ac-grid/ac-grid.vue"
import acCol from "./src/components/ac-col/ac-col.vue"
import acButton from "./src/components/ac-button/ac-button.vue"
import acNav from "./src/components/ac-nav/ac-nav.vue"
import acToggle from "./src/components/ac-toggle/ac-toggle.vue"
import acInput from "./src/components/ac-input/ac-input.vue"
import acDropdown from "./src/components/ac-dropdown/ac-dropdown.vue"
import UUID from 'vue-uuid';

export default{
    install(Vue){
        Vue.use(UUID);
        Vue.component("ac-grid",acGrid);
        Vue.component("ac-col",acCol);
        Vue.component("ac-button",acButton);
        Vue.component("ac-nav",acNav);
        Vue.component("ac-toggle",acToggle);
        Vue.component("ac-input",acInput);
        Vue.component("ac-dropdown",acDropdown);
    }
}