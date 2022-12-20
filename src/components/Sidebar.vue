<template>
<!-- <div class="sidebar" :style="{width: sidebarWidth}">
    <span v-if="collapsed">
        <div>LOGO</div>
    </span>
    <span v-else>
        <div><h1>SpaceWard</h1></div>
    </span>
    <SidebarLink to="/" icon="">Dashboard</SidebarLink>
    <SidebarLink to="/userscreen" icon="fa-solid fa-user">Dashboard</SidebarLink>
    <SidebarLink to="/" icon="">Dashboard</SidebarLink>
    





    <span
    class="collapse-icon"
    :class="{'rotate-180' : collapsed}"
    @click="collapsed = !collapsed">
    <i class="fa-sharp fa-solid fa-arrow-right"></i>

    </span>
</div> -->

</template>
<script>


export default{
    components:{
        
    },
    data(){
        // return{
        //     collapsed: false,
        //     SIDEBAR_WIDTH: 180,
        //     SIDEBAR_WIDTH_COLLAPSED: 58,
          
        // }
    },
    computed: {
        // sidebarWidth(){
        //     return `${this.collapsed? this.SIDEBAR_WIDTH_COLLAPSED : this.SIDEBAR_WIDTH}px`
        // },


    },
    methods:{
        // toggleSidebar(){
        //     this.collapsed= !collapsed;
        // }
    }
    
}
</script>
<style>
/* :root{
    --sidebar-bg-color: #D9D9D9;
    --sidebar-item-hover: #dacff5;
    --sidebar-item-active: #4a2b6f;

}



.sidebar{
    color: #11042b;
    background-color: var(--sidebar-bg-color);

    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
    color: rgb;
}

.collapse-icon{
    position: absolute;
    bottom: 0;
    padding: 0.75em;

    color: rgb(23, 78, 120, 0.7);

    transition: 0.2s linear;
}

.rotate-180{
    transform: rotate(-180deg);
    transition: 0.2s linear;
} */


</style>