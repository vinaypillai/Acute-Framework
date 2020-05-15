<template>
    <button :class="buttonClass">
        <slot></slot>
    </button>
</template>
<script type="text/javascript">
    import "./button.scss";
    export default{
        data(){
            return{
            }
        },
        props:{
            variant:{
                type:String,
                default:"primary",
                validator:(value)=>{
                    let buttonVariants=['primary','secondary','success','danger','hazard','white','grey','turquoise','emerald','peterriver','amethyst','wetasphalt','greensea','nephritis','belizehole','wisteria','midnightblue','sunflower','carrot','alizarin','clouds','concrete','orange','pumpkin','pomegranate','silver','asbestos'];
                    return buttonVariants.includes(value);
                }
            },
            outline:{
                type:Boolean,
                default:false
            },
            block:{
                type:Boolean,
                default:false
            },
            pill:{
                type:Boolean,
                default:false
            },
            round:{
                type:Boolean,
                default:false
            },
            toggle:{
                type:Boolean,
                default:false
            }
        },
        computed:{
            buttonClass(){    
                let buttonClass = ["button"];
                let buttonVariant = "button--"+this.variant+"--";
                buttonVariant += (this.outline) ? "outline" : "solid";
                buttonClass.push(buttonVariant)
                buttonClass.push((this.block) ? "button--block" : "");
                buttonClass.push((this.pill) ? " button--pill" : "");
                buttonClass.push((this.round) ? " button--round" : "");
                return buttonClass;
            }
        },
        mounted(){
        }
    }
</script>