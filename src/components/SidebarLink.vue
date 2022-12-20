<template>
<RouterLink :to="to" class="link" :class="{ active: isActive}"> 
    
    <i class="icon " :class="icon"></i>
    <transition name="fade">
        <span v-if="!collapsed">
            <slot></slot>
        </span>
    </transition>
    </RouterLink>
</template>
<script>
export default{
    data(){
        return{
            to: {
                type: String,
                required: true
            },
            icon: {
                type: String,
                required: true,
            },
            collapsed: false,
        }
    },
    computed:{
        isActive(){
            // const route = useRoute();
            const isActive =  (this.$route.path === this.to) && this.collapsed;
            return { isActive}
        },
    }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active{
    transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to{
    opacity: 0;
}
.link{
    display: flex;
    align-items: center;

    cursor: pointer;
    position: relative;
    font-weight: 400;
    user-select: none;

    margin: 0.1em 0;
    padding: 0.4em;
    border-radius: 0.25em;
    height: 1.5em;

    color: #fff;
    text-decoration: none;
}
.link:hover{
    background-color: var(--sidebar-item-hover);
    color: #11042b;
}

.link .active{
    background-color: var(--sidebar-item-active);
}

.link .icon{
    flex-shrink: 0;
    width: 25px;
    margin-right: 10px;
}
</style>