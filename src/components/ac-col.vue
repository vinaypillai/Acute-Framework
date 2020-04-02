<template>
    <div :class="colClass">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
    export default {
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
            "offset":{
                type:[Number,String],
                default:-1,
                validator:(value)=>{
                    return value==-1 || parseFloat(value)<=12 && parseFloat(value)>0;
                }
            },
            "xs-offset":{
                type:[Number,String],
                default:-1,
                validator:(value)=>{
                    return value==-1 || parseFloat(value)<=12 && parseFloat(value)>0;
                }
            },
            "sm-offset":{
                type:[Number,String],
                default:-1,
                validator:(value)=>{
                    return value==-1 ||  parseFloat(value)<=12 && parseFloat(value)>0;
                }
            },
            "md-offset":{
                type:[Number,String],
                default:-1,
                validator:(value)=>{
                    return value==-1 || parseFloat(value)<=12 && parseFloat(value)>0;
                }
            },
            "lg-offset":{
                type:[Number,String],
                default:-1,
                validator:(value)=>{
                    return value==-1 || parseFloat(value)<=12 && parseFloat(value)>0;
                }
            },
        },
        data(){
            return {
            };
        },
        computed:{
            colClass(){
                let colClass="";
                if(this.cols==-1 && this.xsCols==-1 && this.smCols==-1 && this.mdCols==-1 && this.lgCols==-1){
                    colClass+='col-'+this.cols;
                }else{
                    colClass += (this.cols !=-1) ? 'col-'+this.cols : '';
                    colClass += (this.xsCols !=-1) ? ' col-xs-'+this.xsCols : '';
                    colClass += (this.smCols !=-1) ? ' col-sm-'+this.smCols : '';
                    colClass += (this.mdCols !=-1) ? ' col-md-'+this.mdCols : '';
                    colClass += (this.lgCols !=-1) ? ' col-lg-'+this.lgCols : '';
                }
                colClass += (this.offset !=-1) ? ' col-offset-'+this.offset : '';
                colClass += (this.xsOffset !=-1) ? ' col-offset-xs-'+this.xsOffset : '';
                colClass += (this.smOffset !=-1) ? ' col-offset-sm-'+this.smOffset : '';
                colClass += (this.mdOffset !=-1) ? ' col-offset-md-'+this.mdOffset : '';
                colClass += (this.lgOffset !=-1) ? ' col-offset-lg-'+this.lgOffset : '';
                colClass=colClass.trim();
                return colClass
            }
        },
        mounted(){
        }
    }
</script>