<template>
    <div class="footer-divider"></div>
    <div style="margin: 0 160px;">
        <div class="footer">
            <div class="footer-first-block">
                <div style="width: 160px;">
                    <img src="@/assets/logo.svg" width="32px" height="32px">
                </div>
                <div class="footer-navigation">
                    <div>Home</div>
                    <div>Docs</div>
                    <div>Borrow</div>
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
                <div>enter your email</div>
            </div>
        </div>
    </div>
    <div class="footer-divider"></div>
    <div style="margin: 0 160px;">
        <div class="bottom-bar">
            <div class="left bottom-bar-text-font">Copyright © 2023 NFTdollars. All rights reserved.</div>
            <div class="bottom-bar-right">
                <div class="icon-container"><img src="@/assets/twitter.svg"></div>
                <div class="icon-container"><img src="@/assets/discord.svg"></div>
                <div class="icon-container"><img src="@/assets/github.svg"></div>
                <div class="icon-container"><img src="@/assets/telegram.svg"></div>
            </div>
        </div>
    </div>
</template>
    
<script setup>

</script>
    
<style scoped>
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
}
</style>