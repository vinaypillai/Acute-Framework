<template>
    <button :class="toggleClass" @click="click">
        <span></span>
        <span></span>
        <span></span>
    </button>
</template>
<script type="text/javascript">
    export default{
        props:{
            type:{
                type:String,
                default:"menu",
                validator:(val)=>{
                    let toggleTypes = ["menu","input"];
                    return toggleTypes.includes(val);
                }
            },
            callback:{
                type:Function,
                default:()=>{}
            },
            state:{
                type:Function,
                required:true
            }
        },
        methods:{
            click(){
                this.callback();
            }
        },
        data(){
            return {
            }
        },
        computed:{
            toggleClass(){
                let toggleClass = ["toggle"];
                toggleClass.push("toggle--"+this.type);
                toggleClass.push("toggle--"+((this.state())?"on": "off"));
                return toggleClass;
            }
        }
    }
</script>
<style lang="scss" scoped>
    @use "toggle.scss"
</style>