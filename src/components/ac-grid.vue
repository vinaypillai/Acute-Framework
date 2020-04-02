<template>
    <div :class="gridClass">
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
        },
        data(){
            return {
            }
        },
        computed:{
            gridClass(){
                let gridClass = "";
                if(this.cols==-1 && this.xsCols==-1 && this.smCols==-1 && this.mdCols==-1 && this.lgCols==-1){
                    gridClass='grid-'+this.cols;
                }else{
                    gridClass = (this.cols !=-1) ? ' grid-'+this.cols : '';
                    gridClass += (this.xsCols !=-1) ? ' grid-xs-'+this.xsCols : '';
                    gridClass += (this.smCols !=-1) ? ' grid-sm-'+this.smCols : '';
                    gridClass += (this.mdCols !=-1) ? ' grid-md-'+this.mdCols : '';
                    gridClass += (this.lgCols !=-1) ? ' grid-lg-'+this.lgCols : '';
                    gridClass = gridClass.trim();
                }
                return gridClass
            }
        },
        mounted(){

        }
    }
</script>
<style lang="scss" scoped>
    @use "@/assets/scss/grid/grid"
</style>