<template>
    <div class="top-nav">
        <img src="../assets/img/logo-final.png" alt="photo-logo" width="50" />
        <a href="#log-in" class="login-button">Log In</a>
    </div>
</template>

<script>

</script>

<style scoped>
#log-in {
    padding: 50px;
}

.top-nav {
    padding: 15px;
    margin-top: 5px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
}

.login-button {
    color: rgb(255, 255, 255);
    padding: 8px;
    border: 1px solid rgb(255, 255, 255);
    text-decoration: none;
    background-color: #04294f;
    height: 45px;
}

.login-button a:visited, a:link {
    color: rgb(0, 0, 0);
    text-decoration: none;
}

</style>