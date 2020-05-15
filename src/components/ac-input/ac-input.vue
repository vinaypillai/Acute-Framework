<template>
    <div>

        <label v-if="label.length>0" :for="inputId">{{label}}</label>
        <div v-if="type=='number'" class="input--number">
            <input :type="type" :name="name" :id="inputId"
        ref="input" :placeholder="placeholder" :value="value" v-on:input="updateValue()">
            <div class="incrementButton"></div>
            <div class="decrementButton"></div>
        </div>
        <div v-else-if="type=='image'">
            <input :type="type" :name="name" :id="inputId"
        ref="input" :placeholder="placeholder" :src="value" v-on:input="updateValue()">
        </div>
        <div v-else-if="type=='file'">
            <input :type="type" :name="name" :id="inputId"
        ref="input" :placeholder="placeholder" v-on:input="updateValue()">
        </div>
        <div v-else>
            <input :type="type" :name="name" :id="inputId"
        ref="input" :placeholder="placeholder" :value="value" v-on:input="updateValue()">
        </div>
    </div>
</template>
<script type="text/javascript">
    import "./input.scss"
    export default{
        props:{
            "type":{
                "type":String,
                "default":"text",
                validator:(val)=>{
                    let validTypes=["button","checkbox","color","date",
                    "datetime-local","email","file","hidden",
                    "image","month","number","password","radio","range",
                    "reset","search","submit","tel","text","url","week"]
                    return validTypes.includes(val);
                }
            },
            "name":{
                "type":String,
            },
            "placeholder":{
                "type":String,
            },
            "value":{
                "type":String,
            },
            "label":{
                "type":String,
                "default":""
            }
        },
        data(){
            return {
                inputId:"",
                textInputs:["email","password","search","tel","text","url"],
                buttonInputs:["button","reset","submit"],
            }
        },
        methods:{
            updateValue(){
                if(this.$refs['input']){
                    this.$emit('input',this.$refs['input'].value)
                }
            },
            alterInputValue(modifier){
                console.log(modifier)
            },
        },
        mounted(){
            this.inputId = this.$uuid.v4();
        }
    }
</script>