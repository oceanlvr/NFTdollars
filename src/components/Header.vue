<template>
    <div class="header-container">
        <div class="header">
            <div class="left-container">
                <div class="header-title">NFTdollars</div>
                <div class="header-navigation">
                    <div>Home</div>
                    <div>Docs</div>
                    <div>Borrow</div>
                </div>
            </div>
            <div>
                <el-button round>Connect Wallet</el-button>
            </div>
        </div>
        <div class="line"></div>
    </div>
</template>
    
<script setup>

</script>
    
<style scoped>
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
}

.header-button {
    width: 154px;
    height: 34px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #FBF8F0;
    background-color: transparent;
    border: 1.5px solid #FBF8F0;
    border-radius: 22.125px;
}

.line {
    margin: 5px auto;
    height: 0px;
    border: 1px solid rgba(0, 255, 255, 0.35);
}
</style>