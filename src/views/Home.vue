<template>
    <div>
        <ac-nav position="right" dark class="transfer-class">
            <ul class="nav--links">
                <li><a href="home">Home</a></li>
                <li><a href="home">Home</a></li>
                <li><a href="home">Home</a></li>
                <li><a href="home">Home</a></li>
            </ul>
        </ac-nav>
        <ac-grid cols="5" align-h="center">
            <ac-col cols="3">
                <div>
                    <ac-button v-for="color in colors" :key="color" :variant="color">{{color}}</ac-button>
                </div>
                <div>
                    <ac-button v-for="color in colors" :key="color" :variant="color" outline>{{color}}</ac-button>
                </div>
                <div>
                    <ac-button v-for="color in colors" :key="color" :variant="color" block>{{color}}</ac-button>
                </div>
                <div>
                    <ac-button v-for="color in colors" :key="color" :variant="color" round>{{color}}</ac-button>
                </div>
                <div>
                    <ac-button v-for="color in colors" :key="color" :variant="color" pill>{{color}}</ac-button>
                </div>
            </ac-col>
        </ac-grid>
        <ac-grid>
            <ac-col>
                <ac-toggle :callback="()=>{$store.commit('setToggle',!$store.state.toggle)}"
                :state="()=>$store.state.toggle"></ac-toggle>
                <div>{{$store.state.toggle}}</div>
            </ac-col>
        </ac-grid>
        <ac-grid cols="6">
            <ac-col cols="3">  
                <ac-grid cols="12">
                    <ac-col cols="6">
                        <ac-dropdown :options="dropdownOptions"></ac-dropdown>
                    </ac-col>
                    <ac-col cols="6">
                        <ac-dropdown :options="dropdownOptions" dark></ac-dropdown>
                    </ac-col>
                </ac-grid>
                <ac-grid cols="12">
                    <ac-col cols="6">
                        <ac-dropdown displace :options="dropdownOptions"></ac-dropdown>
                    </ac-col>
                    <ac-col cols="6">
                        <ac-dropdown displace :options="dropdownOptions" dark></ac-dropdown>
                    </ac-col>
                </ac-grid>
            </ac-col>
        </ac-grid>
        <ac-grid cols="6">
            <ac-col cols="3" v-for="type in inputTypes" :key="type">  
                <ac-grid cols="12">
                    <ac-col cols="6">
                        <ac-input :type="type" :ref="'input'+type" v-on:input="updateInputValues(type,$event)"></ac-input>
                    </ac-col>
                    <ac-col cols="6" >
                        <div>Value:{{inputValues[type]}}</div>
                    </ac-col>
                </ac-grid>
            </ac-col>
        </ac-grid>
    </div>
</template>
<script type="text/javascript">
    export default {
        data(){
            return{
                colors:['primary','secondary','success','danger','hazard'],
                inputTypes:["button","checkbox","color","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","url","week"],
                inputValues:{},
                dropdownOptions:[
                    {text:"element 1",value:"element 1"},
                    {text:"element 2",value:"element 2"},
                    {text:"element 3",value:"element 3"},
                ]
            }

        },
        methods:{
            updateInputValues(type, value){
                this.$set(this.inputValues,type,value);
            }
        },
        mounted(){

        }
    }
</script>
