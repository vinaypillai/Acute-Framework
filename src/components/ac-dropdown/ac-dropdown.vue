<template>
    <div :class="classes" ref="dropdown">
        <select ref="dropdownSelect" v-model="dropdownValue">
            <option v-for="option in options" :key="option.value" :value="option.value">{{option.text}}</option>
        </select>
        <div class="dropdown__selected" ref="dropdownSelectedOption"></div>
        <input type="text" autocomplete="off" class="dropdown__input" ref="dropdownInput">
        <div class="dropdown__option-wrapper" ref="dropdownOptionsWrapper">
            <div v-for="option in options" class="dropdown__option" :key="option.value">{{option.text}}</div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        props:{
            "options":{
                type:Array
            },
            "displace":{
                type:Boolean,
                default:false,
            },
            "dark":{
                type:Boolean,
                default:false,
            },
            "value":{
                type:String
            }
        },
        data(){
            return {
                "dropdown":null,
                "dropdownSelect":null,
                "active":false,
                "dropdownValue":"element 1"
            }
        },
        computed:{
            classes(){
                const classes = ["dropdown"];
                if(this.active){
                    classes.push("dropdown--active");
                }
                if(this.dark){
                    classes.push("dropdown--dark");
                }
                if(this.displace){
                    classes.push("dropdown--displace");
                }
                return classes;   
            }
        },
        methods:{
            closeDropdown(){
                if(!document.activeElement.classList.contains('dropdown__input') 
                    && !document.activeElement.classList.contains('dropdown') && this.dropdown.classList.contains('dropdown--active')){  
                    const options = [...document.getElementsByClassName("dropdown__option")];
                    options.forEach(function(option){
                        option.classList.remove("dropdown__option--hide");
                    });
                    this.dropdownInput.value='';
                    this.dropdown.classList.remove("dropdown--active");
                }
            }
        },
        mounted(){
            let that = this;
            that.dropdownValue = that.value
            this.$nextTick(function(){    
                that.dropdown = that.$refs.dropdown;
                that.dropdownSelect = that.$refs.dropdownSelect;
                that.dropdownInput = that.$refs.dropdownInput;
                that.dropdownSelectedOption = that.$refs.dropdownSelectedOption;
                that.dropdownOptionsWrapper = that.$refs.dropdownOptionsWrapper;
                that.dropdownSelect.addEventListener("change",function(){
                     that.$emit('input',that.dropdownSelect.value)
                })
                that.dropdownInput.addEventListener("keyup",function(){
                    if(that.dropdownInput.value.trim().length>0){
                        const options = [...that.dropdown.getElementsByClassName("dropdown__options")];
                        const newOptions = [];
                        let invalidIndex = Number.MAX_VALUE - options.length;
                        options.forEach(function(option){
                            newOptions[newOptions.length] = {
                                index: (option.textContent.trim().toUpperCase().search(that.dropdownInput.value.trim().toUpperCase())==-1)? 
                                invalidIndex:option.textContent.toUpperCase().search(that.dropdownInput.value.toUpperCase()),
                                opt:option 
                            }
                            invalidIndex++;
                        });
                        newOptions.sort((a, b) => (a.opt.textContent < b.opt.textContent) ? 1 : -1)
                        newOptions.sort((a, b) => (a.index > b.index) ? 1 : -1)
                        newOptions.forEach(function(option){
                            option.opt.parentNode.appendChild(option.opt);
                        })
                    }
                });
                window.addEventListener("click",function(e){
                    if(e.srcElement!=that.dropdown && !that.dropdown.contains(e.srcElement)){
                        that.closeDropdown();
                    }
                })
                if(that.dropdownSelect.selectedIndex != -1){
                    that.dropdownSelectedOption.textContent = that.dropdownSelect.options[that.dropdownSelect.selectedIndex].textContent;
                }
                that.dropdownSelectedOption.addEventListener("click", function(){
                    that.active=!that.active;
                    that.dropdownInput.focus();
                });
                const options = [...that.dropdown.getElementsByClassName("dropdown__option")];
                options.forEach((option,i)=>{
                    option.addEventListener("click",function(){
                        that.dropdownSelectedOption.textContent = option.textContent;
                        that.dropdownSelect.selectedIndex = i;
                        that.dropdown.classList.remove("dropdown--active");
                        that.dropdownSelect.dispatchEvent(new Event("change"));
                    });
                })
            })
        }

    }
</script>
<style lang="scss" scoped>
    @use "dropdown"
</style>