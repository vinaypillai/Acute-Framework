<template>
    <div>
        <ac-grid cols="5">
            <ac-col cols="3" offset="1">
                <div>
                    <ac-button v-for="color in colors" :key="color" :variant="color">{{color}}</ac-button>
                </div>
                <div>
                    <ac-button v-for="color in colors" :key="color" :variant="color" outline>{{color}}</ac-button>
                </div>
            </ac-col>
        </ac-grid>
    </div>
</template>
<script type="text/javascript">
    import acGrid from "@/components/ac-grid/ac-grid.vue"
    import acCol from "@/components/ac-col/ac-col.vue"
    import acButton from "@/components/ac-button/ac-button.vue"
    export default {
        data(){
            return{
                colors:['primary','secondary','success','danger','hazard','white','grey','turquoise','emerald','peterriver','amethyst','wetasphalt','greensea','nephritis','belizehole','wisteria','midnightblue','sunflower','carrot','alizarin','clouds','concrete','orange','pumpkin','pomegranate','silver','asbestos']
            }
        },
        components:{
            "ac-grid":acGrid,
            "ac-col":acCol,
            "ac-button":acButton,
        }
    }
</script>
