<template>
    <div class="header-container">
        <div class="header">
            <div class="left-container">
                <div class="header-title">NFTdollars</div>
                <div class="header-navigation" style="color: white">

                    <router-link to="/" style="color: white">Home</router-link>
                    <a href="https://sylvain-code.gitbook.io/nftdollars-white-paper/" style="color: white;margin-left: 10px" >Docs</a>
                    <router-link to="/Borrow" style="color: white;margin-left: 10px">Borrow</router-link>
                    <router-link to="/riskyAddress" style="color: white;margin-left: 10px" >Risky&nbsp;Address</router-link>
                </div>
            </div>
            <div class="right-container">
                <div class="NTF-info">
                    <div class="wallet-avatar"><img src="@/assets/light.svg" width="24px" height="24px"></div>
                    <div class="wallet-avatar" >NFTdollars <br> <div class="NFTdollar">{{NDL}}</div></div>
                    <div class="wallet-avatar">NFTUSD <br> <div class="NFTUSD">{{NFTUSD}}</div></div>
                </div>
                <el-button @click="toggleTroveDropdown" >
                  <div class="wallet-Address"  >{{wallet }}</div>
                </el-button>
            </div>
        </div>
        <div class="line"></div>
    </div>
</template>

<script >

 // import {router} from "../router/index.js";
import { ethers } from "ethers";
import { nextTick,ref} from  "vue";
 import {useRouter} from 'vue-router';
 const router = useRouter();
export default {
  data(){
      return {
          wallet: ref("Connect Wallet"),
          NDL:ref(0),
          NFTUSD:ref(0),
          NFTUSDContract:"0x5170d5B9204B773Ba5B74be8443e583269fb4675",
          NDLContract:"0x5170d5B9204B773Ba5B74be8443e583269fb4675",
          abiERC20:[
              "function name() view returns (string)",
              "function symbol() view returns (string)",
              "function totalSupply() view returns (uint256)",
              "function balanceOf(address) view returns (uint)",
          ],
          provider:"",
      }
  },

    methods:{
        async toggleTroveDropdown() {
            if (this.wallet  == "Connect Wallet"){
                var provider = new ethers.providers.Web3Provider(window.ethereum);
                var accounts = await provider.send("eth_requestAccounts", []);//返回accounts [0]是钱包地址
                this.wallet  = accounts[0]
                this.provider = provider
                const contractDAI = new ethers.Contract(this.NFTUSDContract, this.abiERC20, provider)
                var balance =  await contractDAI.balanceOf(this.wallet)
                this.NFTUSD = parseFloat(balance)/(10**18)
                const contractNDL = new ethers.Contract(this.NDLContract, this.abiERC20, provider)
                var ndlbalance =  await contractNDL.balanceOf(this.wallet)
                this.NDL = parseFloat(ndlbalance*0.765)/(10**18)
                await nextTick()
            }
        },
        async getNftDollarsBalance(){
            const contractDAI = new ethers.Contract(this.NFTUSDContract, this.abiERC20, this.provider)
            var balance =  await contractDAI.balanceOf(this.wallet)
            this.NFTUSD = parseFloat(balance)/(10**18)
            await nextTick()
        },
        async getNDLBalance(){
            const contractDAI = new ethers.Contract(this.NDLContract, this.abiERC20, this.provider)
            var balance =  await contractDAI.balanceOf(this.wallet)
            this.NFTUSD = parseFloat(balance)/(10**18)
            await nextTick()
        },

        goto(){

            router.replace({path: "/Borrow"});

        }


    }

}

</script>

<style scoped>
.header-container {
    height: 52px;
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
.wallet-avatar{
  margin: 5px;
    color: white;
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
    color: #ffffff;
}
.header-navigation div{
  margin: 0 10px 0 10px;
  white-space: nowrap;
}
.right-container{
  display: flex;
  height: 34px;
  justify-content: space-between;
  align-items: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
}
.right-container .el-button{
  box-sizing: border-box;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 30px;
  gap: 10px;
  width: 154px;
  height: 34px;
  border: 1.5px solid #FBF8F0;
  border-radius: 22.125px;
}
.wallet-Address{
    width: 100px;
    height: 50px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: white;
}
.NTF-info{
  display: flex;
  flex-direction: row;
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
