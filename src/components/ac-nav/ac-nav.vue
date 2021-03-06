<template>
    <div ref="navWrapper" class="---nav-wrapper">
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
                        this.$once("hook:updated",()=>{    
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
                                this.updateSpacers();
                            }
                        })
                    }
                }
                return navClasses
            },
            navElement(){
                return this.$refs.nav;
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
            async updateClasses(){
                // Prepend all root classess with ac- and add root classes to nav
                await this.$nextTick();
                let rootClasses = [...this.$el.classList];
                // Trim ac- prepend and add to nav
                // Do not add any -- classes to the nav element
                this.class = rootClasses.filter((name)=>name.substr(0,2)!="--")
                    .map((name)=>(name.substr(0,3)!="ac-") ? name : name.substr(3));
                this.$el.classList=[];
                this.$nextTick(function(){
                    // Always keep "---" classes in nav wrapper
                    rootClasses = rootClasses.filter((name)=>name.substr(0,2)!="--" || name.substr(0,3)=="---");
                    // Add "--!" classes to nav wrapper if they match classes in the nav element
                    rootClasses.push(...this.class.filter(name=>name.length>0 && !rootClasses.includes("ac-"+name))
                        .map(name=>"--!"+name))
                    rootClasses.forEach((name)=>{
                        if(name.substr(0,3)!="ac-" && name.substr(0,2)!="--"){
                            this.$el.classList.add("ac-"+name)
                        }else{
                            this.$el.classList.add(name)
                        }
                    })
                    // Add root dataset to child
                    Object.keys(this.$el.dataset).forEach((key)=>{
                        this.navElement.dataset[key] = "";
                    })
                    this.classesSet = true; 
                })
            },
            updateSpacers(){
                const transitonLengthMS =150;  
                let that =  this;
                setTimeout(function(){
                    const navHeight = that.navElement.getBoundingClientRect().height;
                    [...document.getElementsByClassName("nav--spacer")].forEach((spacer)=>{
                        spacer.style.height = navHeight +"px";
                    })
                },transitonLengthMS*1.1)
            },
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
            this.updateSpacers();
        },
        updated(){
            if(this.classesSet){
                this.classesSet=false;
            }else{
                this.updateClasses();
            }
            this.updateSpacers();
        }
    }
</script>
<style lang="scss" scoped>
    @use "nav";
</style>