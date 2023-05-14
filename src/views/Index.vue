<template>
    <div class="container">
        <div style="display: flex;flex-direction: row;
                    align-items: flex-start;padding: 0;margin: 250px 0 0 770px;
                    gap: 10px;position: absolute;
                    width: 500px;height: 100px;left: 20px;top: 0px;">
          <img src="@/assets/MaleFile.svg" style="width: 500px;height: 500px">
        </div>
        <div class="maintext-container">
            <div style="font-weight: 700;
                        color: #FBF8F0;
                        font-size: 120px;
                        line-height: 180px;
                        text-align: center;
                        text-transform: uppercase;background: url('@/assets/MaleFile.svg');">
                0% INTEREST LOANS
            </div>
            <div style="font-weight: 400;
                        font-size: 30px;
                        line-height: 45px;
                        color: #FBF8F0;
                        text-align: center;
                        margin-bottom: 20px">
                Borrow nftUSD against NFT
            </div>
        </div>
        <div class="button-container">
            <div><el-button round ><router-link class="button-container-buttonText"  to="/Borrow">Borrow Now</router-link></el-button></div>
            <div><el-button round><div class="button-container-buttonText">Learn More</div></el-button></div>
        </div>
        <div class="dialogContainer">
    </div>
        <div class="total-value-container">
            <div style="font-weight: 700;font-size: 16px;line-height: 100%;text-transform: uppercase;">Total Value Locked
            </div>
            <div style="font-weight: 300;font-size: 40px;line-height: 100%;text-transform: uppercase;color: #FFDD6F;">$
                754,692,844</div>
        </div>
        <div style="display: flex; flex-direction: column; padding: 80px 288px; gap: 10px; height: 400px;">
            <div class="block-container">
                <div class="index-block">
                    <div class="block-icon-container">
                        <img src="@/assets/index_block1_icon2.svg"
                            style="position: absolute; height: 40.14px; width: 40.14px; left: 3.93px; top: 3.93px;">
                        <img src="@/assets/index_block1_icon1.svg"
                            style="position: absolute; height: 12px; width: 12px; left: 18px; top: 18px;">
                    </div>
                    <div class="index-block-inner">
                        <div class="block-title-font">0% Interest Rate</div>
                        <div class="block-text-font">
                            NFTDollars charges a small, one-time fee to borrow nftUSD instead of highly variable interest rates.
                        </div>
                    </div>
                </div>
                <div class="block-divider"></div>
                <div class="index-block">
                    <div class="block-icon-container">
                        <img src="@/assets/index_block2_icon1.svg" style="position: absolute; height: 10.04px; width: 11.04px; left: 4.48px; top: 3.97px;">
                        <img src="@/assets/index_block2_icon2.svg" style="position: absolute; height: 40px; width: 32px; left: 8px; top: 4px;">
                        <img src="@/assets/index_block2_icon3.svg" style="position: absolute; height: 12px; width: 12px; left: 32px; top: 32px;">
                    </div>
                    <div class="index-block-inner">
                        <div class="block-title-font">100% Collateral Ratio</div>
                        <div class="block-text-font">
                            NFTDollar's efficient liquidation mechanism allows users to get the most liquidity for their NFT.
                            *Under normal operation.
                        </div>
                    </div>
                </div>
                <div class="block-divider"></div>
                <div class="index-block">
                    <div class="block-icon-container">
                        <img src="@/assets/index_block3_icon1.svg"
                            style="position: absolute; height: 24px; width: 16px; left: 16px; top: 12px;">
                        <img src="@/assets/index_block3_icon2.svg"
                            style="position: absolute; height: 40px; width: 40px; left: 4px; top: 4px;">
                    </div>
                    <div class="index-block-inner">
                        <div class="block-title-font">Unstoppable Stablecoin</div>
                        <div class="block-text-font">
                           nftUSD is a decentralized stablecoin capable of resisting all kinds of censorship.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script  setup>
import {ref} from "vue";
import metamaskLogo from '@/assets/metamask-logo.svg';
import walletConnectLogo from '@/assets/index-wallet.svg';
import coinbaseWalletLogo from '@/assets/index-coinbase.svg';
const isDialogVisble=ref(false)
const activeIndex = ref(-1);
function toggleBackground(index) {
  activeIndex.value = index;
}
const WalletList = [
  { name: 'MetaMask', icon: metamaskLogo },
  { name: 'WalletConnect', icon: walletConnectLogo },
  { name: 'Coinbase Wallet', icon: coinbaseWalletLogo }
];


</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Poppins';
    font-style: normal;
}

.maintext-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 225px;
}

.button-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 330px;
    height: 136px;
    margin-top:40px ;
}

.dialog-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 8px;
  position: absolute;
  width: 316px;
  height: 202px;
  left: 0;
  top: 72px;
  .dialog-content-WalletConnect{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: 228px;
    height: 42px;
    .dialog-content-wallet-Text{
      width: 110px;
      height: 24px;
      font-family: 'PingFang SC';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: #23262F;
      white-space: nowrap;
    }
  }

}
.dialog-content-Meta{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 228px;
  height: 42px;
  background: #FFC507;
  .dialog-content-Meta-Text{
    width: 110px;
    height: 24px;
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #23262F;
    white-space: nowrap;
  }
}
:deep .el-dialog{
  position: absolute;
  width: 316px;
  height: 298px;
  left: calc(50% - 316px/2);
  top: 100px;
  background: #FFFFFF;
  border-radius: 12px;
}
.el-dialog__headerbtn {
  font-size: 28px;
}

::v-deep .el-overlay {
  /* 修改遮罩层样式 */
  background-color: rgba(240, 224, 200, 0.5) !important;
}
.pointer{
  pointer-events: auto !important;
}

.button-container .el-button {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 90px;
  width: 330px;
  height: 60px;
  border: 2.25px solid #FBF8F0;
  border-radius: 45.75px;
  background: transparent;
}
.button-container-buttonText{
  width: 150px;height: 36px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #FBF8F0;
}
.button-container .index-button {
    cursor: pointer;
}

.total-value-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 267px;
    height: 72px;
    margin-top: 45px;
}

.block-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    width: 864px;
    height: 300px;
}

.block-divider {
    width: 1px;
    height: 300px;
    background: rgba(0, 255, 255, 0.35);
}

.index-block {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 245px;
    height: 216px;
}
.block-icon-container {
    width: 48px;
    height: 48px;
    position: relative;
}
.index-block-inner {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.block-title-font {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #23262F;
}

.block-text-font {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #777E91;
}
</style>
