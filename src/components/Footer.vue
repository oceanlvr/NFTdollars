<template>
    <div class="footer-divider"></div>
    <div style="margin: 0 160px;">
        <div class="footer">
            <div class="footer-first-block">
                <div style="width: 160px;">
                    <img src="@/assets/logo.svg" width="32" height="32">
                </div>
                <div class="footer-navigation">
                    <div><router-link to="/">Home</router-link></div>
                    <div><router-link to="/">Docs</router-link></div>
                    <div><router-link to="/">Borrow</router-link></div>
                </div>
            </div>
            <div style="width: 1px;height: 316px;background: #E6E8EC;"></div>
            <div class="footer-second-block">
                <div class="footer-title-font">contact</div>
                <div class="footer-text-font" style="gap: 11px;">
                    <div>
                        <div>nftdollars@gmail.com</div>
                        <div>@nftdollars</div>
                    </div>
                    <div>732-528-4945</div>
                </div>
            </div>
            <div style="width: 1px;height: 316px;background: #E6E8EC;"></div>
            <div class="footer-third-block">
                <div class="footer-title-font">NEWSLETTER</div>
                <div class="footer-text-font">Subscribe to our newsletter for updates</div>
                <div style="position: relative;">
                    <input class="footer-input" placeholder="enter your email">
                    <el-button color="#F4D471" circle :icon="Right" style="color: #FBF8F0; position: absolute; top: 10px; right: 15px"></el-button>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-divider"></div>
    <div style="margin: 0 160px;">
        <div class="bottom-bar">
            <div class="left bottom-bar-text-font">Copyright © 2023 NFTdollars. All rights reserved.</div>
            <div class="bottom-bar-right">
                <a href="https://twitter.com/">
                    <div class="icon-container"><img src="@/assets/twitter.svg"></div>
                </a>
                <a href="https://discord.com/">
                    <div class="icon-container"><img src="@/assets/discord.svg"></div>
                </a>
                <a href="https://github.com/">
                    <div class="icon-container"><img src="@/assets/github.svg"></div>
                </a>
                <a href="https://telegram.org/">
                    <div class="icon-container"><img src="@/assets/telegram.svg"></div>
                </a>
            </div>
        </div>
    </div>
</template>
    
<script setup>
import {Right} from '@element-plus/icons-vue'
</script>
    
<style scoped>
a {
    text-decoration: none;
    color: inherit;
}

.footer-divider {
    height: 1px;
    background: #777E91;
    opacity: 0.3;
}

.footer {
    height: 316px;
    display: flex;
    justify-content: space-between;
}

.footer-first-block {
    width: 350px;
    height: 296px;
    padding: 80px 0px 0px;
    display: flex;
}

.footer-navigation {
    width: 160px;
    height: 96px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #777E91;
}

.footer-title-font {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
    color: #23262F;
}

.footer-text-font {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #23262F;
}

.footer-second-block {
    width: 168px;
    height: 296px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 80px 0px 0px;
    gap: 41px;
}

.footer-third-block {
    width: 256px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 80px 1px 64px 0px;
    gap: 40px;
}

.footer-input {
    border: 2px solid #E6E8EC;
    border-radius: 90px;
    width: 240px;
    height: 48px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #777E91;
    padding-left: 15px;
    background-color: #FBF8F0;
}

.footer-input:focus {
    border-color: #777E90;
    outline: 2px solid #777E90; 
}

.bottom-bar {
    height: 69px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.bottom-bar-text-font {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #777E91;
}

.bottom-bar-right {
    display: flex;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    width: 152px;
    height: 20px;
}

.icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #23262F;
    border-radius: 400px;
    width: 20px;
    height: 20px;
}</style>