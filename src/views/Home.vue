<template>
    <div class="content">
        <ac-grid>
            <ac-col cols="6">
                <ac-nav position="top" dark class="transfer-class asd">
                    <ul class="nav--links">
                        <li><a href="home">Home</a></li>
                        <li><a href="home">Home</a></li>
                        <li><a href="home">Home</a></li>
                        <li><a href="home">Home</a></li>
                    </ul>
                </ac-nav>
            </ac-col>
        </ac-grid>
        <ac-grid cols="1" sm-cols="2" md-cols="3" lg-cols="6" xl-cols="12">
            <ac-col cols="1"><div class="col-display">.col-1</div></ac-col>
            <ac-col cols="1"><div class="col-display">.col-1</div></ac-col>
            <ac-col cols="1"><div class="col-display">.col-1</div></ac-col>
            <ac-col cols="1"><div class="col-display">.col-1</div></ac-col>
            <ac-col cols="1"><div class="col-display">.col-1</div></ac-col>
            <ac-col cols="1"><div class="col-display">.col-1</div></ac-col>
            <ac-col cols="1"><div class="col-display">.col-1</div></ac-col>
            <ac-col cols="1"><div class="col-display">.col-1</div></ac-col>
            <ac-col cols="1"><div class="col-display">.col-1</div></ac-col>
            <ac-col cols="1"><div class="col-display">.col-1</div></ac-col>
            <ac-col cols="1"><div class="col-display">.col-1</div></ac-col>
            <ac-col cols="1"><div class="col-display">.col-1</div></ac-col>
        </ac-grid>
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
                <div>
                    <ac-button v-for="color in colors" :key="color" :variant="color" pill block>{{color}}</ac-button>
                </div>
                <div>
                    <ac-button v-for="color in colors" :key="color" :variant="color" pill round block>{{color}}</ac-button>
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
            <ac-col cols="6">  
                <ac-grid cols="12">
                    <ac-col cols="3">
                        <ac-dropdown :options="dropdownOptions" v-model="dropdown1"></ac-dropdown>
                    </ac-col>
                    <ac-col cols="3">
                        <div>{{dropdown1}}</div>
                    </ac-col>
                    <ac-col cols="3">
                        <ac-dropdown :options="dropdownOptions" dark v-model="dropdown2"></ac-dropdown>
                    </ac-col>
                    <ac-col cols="3">
                        <div>{{dropdown2}}</div>
                    </ac-col>
                </ac-grid>
                <ac-grid cols="12">
                    <ac-col cols="3">
                        <ac-dropdown displace :options="dropdownOptions" v-model="dropdown3"></ac-dropdown>
                    </ac-col>
                    <ac-col cols="3">
                        <div>{{dropdown3}}</div>
                    </ac-col>
                    <ac-col cols="3">
                        <ac-dropdown displace :options="dropdownOptions" dark v-model="dropdown4"></ac-dropdown>
                    </ac-col>
                    <ac-col cols="3">
                        <div>{{dropdown4}}</div>
                    </ac-col>
                </ac-grid>
            </ac-col>
        </ac-grid>
        <ac-grid cols="6">
            <ac-col cols="3" v-for="type in inputTypes" :key="type">  
                <ac-grid cols="12">
                    <ac-col cols="6">
                        <ac-input :type="type" :ref="'input'+type" v-on:input="updateInputValues(type,$event)" :value="type"></ac-input>
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
                    {text:"element 4",value:"element 4"},
                ],
                dropdown1:"element 1",
                dropdown2:"element 2",
                dropdown3:"element 3",
                dropdown4:"element 4",
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
<style lang="scss" scoped>
    .col-display{
        border-radius:5px;
        border:solid 1px #893535;
        background-color: #89353599;
        text-align: center;
        color: #FFF;
        padding: 2%;

    }
    .content .nav.transfer-class{
        background-color: #4d7587;
        /*height: 100px;*/
    }
</style>
