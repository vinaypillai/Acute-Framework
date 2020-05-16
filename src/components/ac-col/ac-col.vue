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
            "xl-cols":{
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
            "xl-offset":{
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
                let colClass=[];
                if(this.cols==-1 && this.xsCols==-1 && this.smCols==-1 && this.mdCols==-1 && this.lgCols==-1 && this.xlCols==-1){
                    colClass.push('col-'+1);
                }else{
                    colClass.push((this.cols !=-1) ? 'col-'+this.cols : '');
                    colClass.push((this.xsCols !=-1) ? 'col-xs-'+this.xsCols : '');
                    colClass.push((this.smCols !=-1) ? 'col-sm-'+this.smCols : '');
                    colClass.push((this.mdCols !=-1) ? 'col-md-'+this.mdCols : '');
                    colClass.push((this.lgCols !=-1) ? 'col-lg-'+this.lgCols : '');
                    colClass.push((this.xlCols !=-1) ? 'col-xl-'+this.xlCols : '');
                }
                colClass.push((this.offset !=-1) ? 'col-offset-'+this.offset : '');
                colClass.push((this.xsOffset !=-1) ? 'col-offset-xs-'+this.xsOffset : '');
                colClass.push((this.smOffset !=-1) ? 'col-offset-sm-'+this.smOffset : '');
                colClass.push((this.mdOffset !=-1) ? 'col-offset-md-'+this.mdOffset : '');
                colClass.push((this.lgOffset !=-1) ? 'col-offset-lg-'+this.lgOffset : '');
                colClass.push((this.xlOffset !=-1) ? 'col-offset-xl-'+this.xlOffset : '');
                return colClass
            }
        },
        mounted(){
        }
    }
</script>