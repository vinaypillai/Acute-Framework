<template>
    <div ref="navWrapper">
        <nav :class="navClasses" ref="nav">
            <slot></slot>
        </nav>
    </div>
</template>
<script type="text/javascript">
    export default{
        props:{
            position: {
                type:String,
                default:"top",
                validator:(val)=>{
                    let positions = ["top","left","right"];
                    return positions.includes(val);
                }
            },
            dark:{
                type:Boolean,
                default:false
            },
            transparent:{
                type:Boolean,
                default:false
            },
            sticky:{
                type:Boolean,
                default:false
            },
            fixed:{
                type:Boolean,
                default:false
            },
            hidden:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return {
                navTopScrolled:false,
                class:[],
                classesSet:false,
            }
        },
        computed:{
            navClasses(){
                let navClasses = this.class;
                navClasses.push("nav")
                if(this.dark){
                    navClasses.push("nav--dark");
                }
                if(this.position=="left" || this.position=="right"){
                    navClasses.push("nav--side");
                    navClasses.push("nav--side--"+this.position);
                    navClasses.push((this.hidden)? "nav--side--hidden" : "");
                }else if(this.position=="top"){
                    navClasses.push("nav--top");
                    navClasses.push((this.transparent) ? "nav--top--transparent" : "");
                    navClasses.push((this.sticky) ? "nav--top--sticky" : "");
                    navClasses.push((this.navTopScrolled) ? "nav--top--scrolled" : "");
                    if(this.fixed){
                        navClasses.push("nav--top--fixed");
                        this.$once("hook:mounted",()=>{    
                            let nav = this.$refs.nav;
                            nav.dataset.navId=this.navId;
                            let spacerId = "spacer--"+this.navId;
                            if(!document.getElementById(spacerId) 
                                && this.$refs.navWrapper.getElementsByClassName("nav--spacer").length==0){
                                let navHeight = nav.getBoundingClientRect().height;
                                let spacer = document.createElement("div");
                                spacer.setAttribute(this.$options._scopeId,'');
                                spacer.id=spacerId;
                                spacer.classList.add("nav--spacer");
                                spacer.style.height=navHeight+"px";
                                nav.insertAdjacentElement('afterEnd',spacer); 
                            }
                        })
                    }
                }
                return navClasses
            }
        },
        methods:{
            onScroll(){
                if(window.scrollY>0 && this.position=="top"){
                    this.navTopScrolled=true;
                }else{
                    this.navTopScrolled=false;
                }
            },
            updateClasses(){
                this.class = [...this.$el.classList];
            }
        },
        beforeCreate(){
            this.navId = this.$uuid.v4();
        },
        beforeDestroy(){
            window.removeEventListener("scroll",this.onScroll);
        },
        mounted(){
            window.addEventListener("scroll",this.onScroll);
            this.onScroll();
            this.updateClasses();
        },
        watch:{
            "$el.classList":function(){
                this.updateClasses();
                this.$el.classList=[];
                console.log("running");
            }
        }
    }
</script>
<style lang="scss" scoped>
    @use "nav";
</style>