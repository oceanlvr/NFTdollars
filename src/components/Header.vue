<template>
    <div class="header-container">
        <div class="header">
            <div class="left-container">
                <div class="header-title">NFTdollars</div>
                <div class="header-navigation">
                    <div><router-link to="/">Home</router-link></div>
                    <div><router-link to="/">Docs</router-link></div>
                    <div><router-link to="/">Borrow</router-link></div>
                </div>
            </div>
            <div>
                <button class="header-button">Connect Wallet</button>
            </div>
        </div>
        <div class="line"></div>
    </div>
</template>
    
<script setup>

</script>
    
<style scoped>
a {
    text-decoration: none;
    color: inherit;
}

.header-container {
    height: 82px;
    padding: 16px 60px;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.left-container {
    display: flex;
    width: 413px;
    height: 34px;
    justify-content: space-between;
    align-items: center;
}

.header-title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    font-size: 22.5px;
    line-height: 34px;
    text-align: center;
    color: #FBF8F0;
}

.header-navigation {
    width: 188px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #FBF8F0;
}

.el-button {
    width: 154px;
    height: 34px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    border: 1.5px solid #FBF8F0;
    color: #FBF8F0;
}

.header-button {
    width: 154px;
    height: 34px;
    border: 1.5px solid #FBF8F0;
    border-radius: 22.125px;
    background-color: transparent;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #FBF8F0;
}

.header-button:hover {
    cursor: pointer;
    background-color: rgba(80, 80, 80, 0.4);
}

.header-button:active {
    background-color: rgba(4, 4, 4, 0.15);
}

.line {
    margin: 5px auto;
    height: 0px;
    border: 1px solid rgba(255, 255, 255, 0.35);
}
</style>