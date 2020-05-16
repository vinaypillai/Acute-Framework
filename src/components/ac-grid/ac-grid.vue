<template>
    <div :class="gridClass" :style="styleObj">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
    export default{
        props:{
            "cols":{
                type:[Number,String],
                default:-1,
                validator:(value)=>{
                    return value==-1 || parseFloat(value)<=12 && parseFloat(value)>0;
                }
            },
            "xs-cols":{
                type:[Number,String],
                default:-1,
                validator:(value)=>{
                    return value==-1 || parseFloat(value)<=12 && parseFloat(value)>0;
                }
            },
            "sm-cols":{
                type:[Number,String],
                default:-1,
                validator:(value)=>{
                    return value==-1 ||  parseFloat(value)<=12 && parseFloat(value)>0;
                }
            },
            "md-cols":{
                type:[Number,String],
                default:-1,
                validator:(value)=>{
                    return value==-1 || parseFloat(value)<=12 && parseFloat(value)>0;
                }
            },
            "lg-cols":{
                type:[Number,String],
                default:-1,
                validator:(value)=>{
                    return value==-1 || parseFloat(value)<=12 && parseFloat(value)>0;
                }
            },
            "xl-cols":{
                type:[Number,String],
                default:-1,
                validator:(value)=>{
                    return value==-1 || parseFloat(value)<=12 && parseFloat(value)>0;
                }
            },
            "align-h":{
                type:String,
                default:"initial",
                validator:(value)=>{
                    let justify = ["flex-start","flex-end","center","space-between","space-around","initial","inherit"];
                    return justify.includes(value);
                }
            },
            "align-v":{
                type:String,
                default:"initial",
                validator:(value)=>{
                    let align = ["stretch","center","flex-start","flex-end","baseline","initial","inherit"];
                    return align.includes(value);
                }
            },
        },
        data(){
            return {
            }
        },
        computed:{
            gridClass(){
                let gridClass = [];
                if(this.cols==-1 && this.xsCols==-1 && this.smCols==-1 && this.mdCols==-1 && this.lgCols==-1 && this.xlCols==-1){
                    gridClass.push('grid-'+12);
                }else{
                    gridClass.push((this.cols !=-1) ? 'grid-'+this.cols : '');
                    gridClass.push((this.xsCols !=-1) ? 'grid-xs-'+this.xsCols : '');
                    gridClass.push((this.smCols !=-1) ? 'grid-sm-'+this.smCols : '');
                    gridClass.push((this.mdCols !=-1) ? 'grid-md-'+this.mdCols : '');
                    gridClass.push((this.lgCols !=-1) ? 'grid-lg-'+this.lgCols : '');
                    gridClass.push((this.xlCols !=-1) ? 'grid-xl-'+this.xlCols : '');
                }
                return gridClass
            },
            styleObj(){
                return {
                    "--align-h":this.alignH,
                    "--align-v":this.alignV
                }
            }
        },
    }
</script>
<style lang="scss" scoped>
    @use "grid"
</style>