<template>
  <div class="container">
    <div class="maintext-container">
      <el-card>
        <div class="card-item">
          <div class="card-item-left">
        <img src="@/assets/avatar.svg" style="width: 48px;height: 48px;border-radius: 48px">
          Extraction
          <img src="@/assets/share.svg" style="width: 16px; height:16px"  >
          </div>
          <div class="card-item-right">
            <el-button @click="toggleTroveDropdown" :class="{ Active: isTroveOpen }"><text>{{TroveText}}</text></el-button>
          </div>
        </div>
        <div class="card-hidden-item" v-show="isTroveOpen">
          <div style="width: 726px;height: 0px;
                      border: 1px solid rgba(255, 255, 255, 0.35);
                      transform: rotate(-0.16deg);"></div>
          <div class="card-hidden-above">
            <div class="card-hidden-stepText">Step 1</div>

            <el-select v-model="layer" class="m-2" placeholder="Select"  :popper-append-to-body="false" >
              <el-option
                      v-for="item in Layers"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
              />
            </el-select>
            <el-select v-model="address" class="m-2" placeholder="Select"  :popper-append-to-body="false" >
              <el-option
                      v-for="item in addressList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
              />
            </el-select>
            <el-select v-model="tokenID" class="m-2" placeholder="Select"  :popper-append-to-body="false" >
              <el-option
                      v-for="item in idList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
              />
            </el-select>

<!--            <el-button><div class="card-hidden-buttonText">Crosslayer</div></el-button>-->
<!--            <el-button><div class="card-hidden-buttonText">Unitlayer</div></el-button>-->
<!--            0xF38e1D160c86CbA7e8D87a9e58d3209c6dBA9374-->
          </div>
          <div class="card-hidden-bottom">
            <div class="card-hidden-stepText">Step 2</div>
            <div class="card-hidden-form">
              <div class="form-inputOne">
                <div class="demo-input-suffix">
                <el-row :gutter="20">

                <el-col :span="16" >
                <el-input-number style="border: none"  v-model="BorrowAmount" :precision="2" :step="0.1" placeholder="Borrow amount" ></el-input-number>
                </el-col>
                  <el-col :span="6" >
                    <div  style="text-align: center;line-height:100%;align-items: center;margin-top: 20%" >nftUSD</div>
                  </el-col>
                </el-row>
                </div>
              </div>
              <div style="display: flex;flex-direction: row; margin-top: 15px">
                <div class="card-item-right">
                  <el-button><text>Confirm</text></el-button>
                </div>
                <div class="card-item-right1" style="margin-left: 30px;">
                  <el-button @click="toggleTroveDropdown" ><text>Later</text></el-button>
                </div>
                </div>

            </div>
            <div class="card-hidden-list1" style="font-size: 6px">

              <el-row :span="6"><div class="grid-content ep-bg-purple" />MaxExtraction   &nbsp;&nbsp;&nbsp; &nbsp;   {{MaxExtractionPrice}}nftUSD</el-row>
              <el-row :span="6"><div class="grid-content ep-bg-purple" />Collateral Ratio
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {{CollateralRatio}}%</el-row>
              <el-row :span="6"><div class="grid-content ep-bg-purple" />Liquidation Price  &nbsp;{{BorrowAmount}}nftUSD</el-row>
              <el-row :span="6"><div class="grid-content ep-bg-purple" />Security Deposit  &nbsp;  {{parseFloat(BorrowAmount*0.1).toFixed(2)}}nftUSD</el-row>
                <el-row :span="6"><div class="grid-content ep-bg-purple" />Obtained &nbsp;&nbsp;&nbsp;&nbsp;{{Tranferdebt}}nftUSD</el-row>

              <el-row :span="6"><div class="grid-content ep-bg-purple" />BorrowFee   &nbsp;&nbsp;&nbsp; &nbsp;   {{BorrowFee}}NDL(4%)</el-row>


            </div>
          </div>
        </div>
      </el-card>
      <el-card>
        <div class="card-item">
          <div class="card-item-left">
            <img src="@/assets/avatar.svg" style="width: 48px;height: 48px;border-radius: 48px">
            Stability Pool
            <img src="@/assets/share.svg" style="width: 16px; height:16px"  >
          </div>
          <div class="card-item-right">
            <el-button @click="toggleDepositDropdown" :class="{ Active: isDepositOpen }"><text>{{ DepositText }}</text></el-button>
          </div>
        </div>
        <div class="card-hidden-item" v-show="isDepositOpen">
          <div style="width: 726px;height: 0px;
                      border: 1px solid rgba(255, 255, 255, 0.35);
                      transform: rotate(-0.16deg);"></div>

          <div class="card-hidden-bottom">

            <div class="card-hidden-form">

              <div class="form-inputOne" style="">
                <el-input style="border: none"  v-model="BorrowAmount" type="number" placeholder="Deposit" ></el-input>
              </div>
            </div>
            <div class="card-hidden-list2" style="font-size: 6px;line-height: 250%">
              <el-row :span="6"><div class="grid-content ep-bg-purple" />Pool Share   &nbsp;&nbsp;&nbsp; &nbsp;   {{BorrowFee}}%</el-row>
            </div>
          </div>
          <div style="display: flex;flex-direction: row; margin-top: 15px">
            <div class="card-item-right">
              <el-button><text>Confirm</text></el-button>
            </div>
            <div class="card-item-right1" style="margin-left: 30px;">
              <el-button  @click="toggleDepositDropdown" ><text>Later</text></el-button>
            </div>
          </div>
        </div>
      </el-card>
      <el-card>
        <div class="card-item">
          <div class="card-item-left">
            <img src="@/assets/avatar.svg" style="width: 48px;height: 48px;border-radius: 48px">
            Staking NDL
            <img src="@/assets/share.svg" style="width: 16px; height:16px"  >
          </div>
          <div class="card-item-right">
            <el-button @click="toggleStakingDropdown" :class="{ Active: isStakingOpen }"><text>{{ StakingText }}</text></el-button>
          </div>
        </div>
        <div class="card-hidden-item" v-show="isStakingOpen">
          <div style="width: 726px;height: 0px;
                      border: 1px solid rgba(255, 255, 255, 0.35);
                      transform: rotate(-0.16deg);"></div>

          <div class="card-hidden-bottom">

            <div class="card-hidden-form">
              <div class="form-inputOne">
                <el-input style="border: none"></el-input></div>

              <div style="display: flex;flex-direction: row">
              <el-button style="border-radius: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  background: #FFC507;
  color: #FCFCFC;
  padding: 25px;"><text>Confirm</text></el-button>
                <div class="card-item-right1" style="margin-left: 30px;">
                  <el-button  @click="toggleStakingDropdown" ><text>Later</text></el-button>
                </div>
              </div>
            </div>
            <div class="card-hidden-list2" style="font-size: 6px;line-height: 250%">
              <el-row :span="6"><div class="grid-content ep-bg-purple" />Pool Share   &nbsp;&nbsp;&nbsp; &nbsp;   {{BorrowFee}}%</el-row>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    <div class="sideblock-container">
      <el-card class="sideblock-card">
      <div class="sideblock-up">
        <img src="@/assets/wallet_line.svg" style="width: 16px;height: 16px">
        <div style="width: 100px;height: 16px;
                    font-family: 'Poppins';font-style: normal;
                    font-weight: 600;font-size: 12px;
                    line-height: 16px;display: flex;
                    align-items: center;white-space: nowrap;color: #FFFFFF;">Liquity Statistics</div>
      </div>
      <div class="sideblock-middle">
        <div style="display: flex;flex-direction: row;
             align-items: center;padding: 0px;
             gap: 8px;width: 126px;height: 48px;">
          <img src="@/assets/avatar.svg" style="width: 32px;height: 32px;border-radius: 32px">
          <div style="display: flex;flex-direction: column;
                      align-items: center;padding: 0px;
                      gap: 8px;width: 126px;height: 48px;">
                      <div class="sideblock-middle-uptext">Price</div>
                      <div class="sideblock-middle-downtext">$13.33333</div>
          </div>
          <div style="display: flex;flex-direction: column;
                      align-items: flex-start;padding: 0px;
                      gap: 8px;width: 70px;height: 74px;">
                      <div class="sideblock-middle-uptext">NFTdollars</div>
                      <div class="sideblock-middle-downtext">$55.55511</div>
                      <div class="sideblock-middle-icon">
                        <div style="width: 70px;height: 12px;
                                    font-family: 'Poppins';font-style: normal;
                                    font-weight: 400;font-size: 8px;line-height: 12px;
                                    align-items: center;white-space: nowrap;
                                    color: #FFFFFF;">Market Price</div>
                        <div class="sideblock-middle-icon-display">
                          <img src="@/assets/wallet-leftAnimal.svg" style="width: 16px;height: 16px">
                          <img src="@/assets/wallet-rightAnimal.svg" style="width: 16px;height: 16px">
                        </div>
                      </div>
          </div>
          <div style="display: flex;flex-direction: column;
                      align-items: flex-start;padding: 0px;
                      gap: 8px;width: 70px;height: 74px;">
                      <div class="sideblock-middle-uptext">nftUSD</div>
                      <div class="sideblock-middle-downtext">$8.88811</div>
                     <div class="sideblock-middle-icon">
                        <div style="width: 70px;height: 12px;
                                    font-family: 'Poppins';font-style: normal;
                                    font-weight: 400;font-size: 8px;line-height: 12px;
                                    align-items: center;white-space: nowrap;
                                    color: #FFFFFF;">Market Price</div>
                        <div class="sideblock-middle-icon-display">
                          <img src="@/assets/wallet-leftAnimal.svg" style="width: 16px;height: 16px">
                          <img src="@/assets/wallet-rightAnimal.svg" style="width: 16px;height: 16px"></div>
                     </div>
          </div>
        </div>
      </div>
      <div class="sideblock-down">
        <div style="width: 70px;height: 16px;
                    font-family: 'Poppins';font-style: normal;
                    font-weight: 600;font-size: 12px;
                    line-height: 16px;display: flex;
                    align-items: center;color: #FFFFFF;">Protocol</div>
        <div class="sideblock-down-colmun">
            <div class="sideblock-down-colmun-item" v-for="(item,index) in RowList" :key="index">
                <div class="item-text-left">{{item.name}}</div>
                <div class="item-text-right">{{item.value}}</div>
            </div>
          <div style="width: 280px;height: 0px;
                      border: 1px solid rgba(255, 255, 255, 0.35);"></div>
        </div>
      </div>
      </el-card>
    </div>
  </div>
</template>

<script >
// import router from "@/router/index.js";
import { ethers } from "ethers";
import { nextTick,ref} from  "vue";

export default {
  data(){
    return {
      isTroveOpen:ref(false),
      isDepositOpen:ref(false),
      isStakingOpen:ref(false),
      TroveText : ref('Open Trove'),
    DepositText :ref('Deposit'),
    StakingText: ref('Start Staking'),
    RowList:[
      {name:'Borrowing Fee',value:'4%NDL'},
      {name:'Redemption Fee',value:'100%'},
      {name:'Liquidation Fee',value: '100%'},
    ],
    layer:ref('select Layer'),
    address : ref('select address'),
    tokenID :ref(""),
    Layers : [
      {
        value: '1',
        label: 'Unit Layer',
      },
      {
        value: '2',
        label: 'Cross Layer',
      },
      {
        value: '3',
        label: 'Reserve Layer',
      }
    ],
    addressList :[],
     idList :[],
      BorrowAmount:ref(1),
      MaxExtractionPrice:ref("500"),
      BorrowFee:ref("0.00"),
      Tranferdebt:ref("0.00"),
      LiquidationPrice:ref("0.00"),
      CollateralRatio:ref(100)
    }
  },

  watch: {
    layer: {
      deep: true,
      handler: function (newVal, oldVal) {
          this.L2input(this.layer);
      }
    },
    address:{
      deep: true,
      handler: function (newVal, oldVal) {
          this.getIdList(newVal);

      }
    },
    BorrowAmount: {
      deep: true,
      handler: function (newVal, oldVal) {
        this.BorrowFee =  parseFloat(newVal *0.04).toFixed(2)
        this.Tranferdebt =parseFloat(newVal *0.9).toFixed(2)
        this.LiquidationPrice = newVal
        this.CollateralRatio =parseFloat(this.MaxExtractionPrice*1.2/newVal *100).toFixed(2)
      }
    },

    },
  methods: {
    toggleTroveDropdown() {
      this.isTroveOpen = !this.isTroveOpen;
      this.TroveText = this.isTroveOpen ? 'Close' : 'Open Borrow';
    },

    toggleDepositDropdown() {
      this.isDepositOpen = !this.isDepositOpen;
      this.DepositText = this.isDepositOpen ? 'Close' : 'Deposit';
    },
    toggleStakingDropdown() {
      this.isStakingOpen = !this.isStakingOpen;
      this.StakingText = this.isStakingOpen ? 'Close' : 'Start Staking';
    },
    L2input(input) {
      if (input == 1) {
        this.addressList = [
          {
            value: '0xc8adfb4d437357d0a656d4e62fd9a6d22e401aa0',
            label: 'CryptoBatz by Ozzy Osbourne',
          },
          {
            value: '0x6632a9d63e142f17a668064d41a21193b49b41a0',
            label: 'Prime Ape Planet',
          },
          {
            value: '0x32973908faee0bf825a343000fe412ebe56f802a',
            label: 'Pixelmon',
          },  {
            value: '0x6be69b2a9b153737887cfcdca7781ed1511c7e36',
            label: 'Killer GF',
          },  {
            value: '0x7ea3cca10668b8346aec0bf1844a49e995527c8b',
            label: 'CyberKongz VX',
          },  {
            value: '0x7ecb204fed7e386386cab46a1fcb823ec5067ad5',
            label: 'FULL SEND METACARD',
          },  {
            value: '0xb4d06d46a8285f4ec79fd294f78a881799d8ced9',
            label: '3Landers',
          },
        ]
      } else if (input == 2) {
        this.addressList = [
          {
            value: '0x59468516a8259058bad1ca5f8f4bff190d30e066',
            label: 'Invisible Friends',
          },
          {
            value: '0xccc441ac31f02cd96c153db6fd5fe0a2f4e6a68d',
            label: 'FLUF',
          },
          {
            value: '0xc99c679c50033bbc5321eb88752e89a93e9e83c5',
            label: 'KILLABEARS',
          }
        ]
      }else{
        this.addressList = {
          value: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
                  label: 'Bored Ape Yacht Club',
        },
        {
          value: '0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949',
                  label: 'Wrapped Cryptopunks',
        },
        {
          value: '0x23581767a106ae21c074b2276d25e5c3e136a68b',
                  label: 'Moonbirds',
        }
      }
    },
    getIdList(input){
      if (input=="0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"){
        this.idList = [
          {
            value: '1',
            label: '#10001',
          },
          {
            value: '2',
            label: '#10002',
          },
          {
            value: '3',
            label: '#10004',
          }
        ]
      }else{
        this.idList = [
          {
            value: '1',
            label: '#231',
          },
          {
            value: '2',
            label: '#145',
          },
          {
            value: '3',
            label: '#115',
          }
        ]
      }
    }
  }
}





</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 50px 20px 150px;
  font-family: 'Poppins';
  font-style: normal;
}
.later-button{
  width: 100px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: white;
}
.el-card{
  margin: 15px;
  width: 100vh;
  background-color: rgb(241, 232, 211,0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 10px;
  display: flex;
  opacity: 0.8;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.Active{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px ;
  gap: 8px;
  width: 74px;
  height: 40px;
  background: #FFFFFF!important;
  border-radius: 12px!important;
  text{
    width: 34px;
    height: 16px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.01em;
    color: #FFC507;
  }
}
.card-item img{
  margin: 10px;
}
.card-hidden-above{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 607px;
  height: 40px;
  margin: 10px;
}
.card-hidden-bottom{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 641px;
  height: 128px;
  margin: 10px;
}
.card-item-right .el-button{
  border-radius: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  background: #FFC507;
  color: #FCFCFC;
  padding: 25px;
}
.maintext-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 20px;
  width: 800px;
}
.card-item{
   display: flex;
   flex-direction: row;
   height: 48px;
 }
.card-item-left{
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 524px;
}
.card-item-right{
  display: flex;
  flex-direction: row;
  align-items: center;

}
.card-item-right1{
  display: flex;
  flex-direction: row;
  align-items: center;

}
.card-item-right1 .el-button{

  background: transparent;
  border-radius: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  border: 2.5px solid white;
  color: #FCFCFC;
  padding: 25px;

}
.card-hidden-item{
  margin: 20px 10px 20px 10px;
}
.card-hidden-above .el-button{
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  background: transparent;
  width: 184px;
  height: 40px;
  border: 2px solid #FFFFFF;
  border-radius: 12px;
  margin: 10px;
}
.card-hidden-buttonText{
  width: 150px;
  height: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #23262F;
}
.card-hidden-stepText{
  width: 35px;
  height: 24px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #23262F;
  white-space: nowrap;
  margin: 10px;
}
.card-hidden-form{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 300px;
  height: 128px;
  margin: 10px;
}
.form-inputOne{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  gap: 8px;
  width: 300px;
  height: 44px;
  background-color: rgb(255,255,255,0.7);
  z-index: 1;
  border-radius: 12px;
}
.card-hidden-list{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 8px;
  margin: 10px;
  width: 272px;
  height: 128px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
}
.card-hidden-list1{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 8px;
  margin: 10px;
  width: 400px;
  height: 130px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
}
.card-hidden-list2{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 8px;
  margin: 10px;
  width: 272px;
  height: 35px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
}
.sideblock-container{
  display: flex;
  flex-direction: column;
  align-self: flex-start;
}
.sideblock-card{
   background-color: transparent;
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding: 15px;
   gap: 24px;
   width: 346px;
   height: 558px;
   border: 2px solid #FFFFFF;
   border-radius: 12px;
 }
.sideblock-up{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 124px;
  height: 16px;
}
.sideblock-middle{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 298px;
  height: 74px;
}
.sideblock-middle-uptext{
  width: 70px;
  height: 16px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
}
.sideblock-middle-downtext{
  width: 70px;
  height: 14px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
}
.sideblock-middle-icon{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 70px;
  height: 32px;
}
.sideblock-middle-icon-display{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 40px;
  height: 16px;
}
.sideblock-down{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 280px;
  height: 372px;
}
.sideblock-down-colmun{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 280px;
  height: 340px;
}
.sideblock-down-colmun-item{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 280px;
  height: 16px;
  white-space: nowrap;
}
.item-text-left{
  width: 85px;
  height: 16px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
}
.item-text-right{
  width: 35px;
  height: 16px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #FFFFFF;
}
::v-deep.el-input__wrapper {
  background-color: transparent;
  border-radius: 10px!important;
  box-shadow: 0 0 0 0;
  width: 8000px;
  padding: 0;
}
</style>

<style lang="scss">
.el-input__wrapper {
  width: 150px;
  height: 40px;
  border-color:white;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: black;
  border-radius: 3px!important;
}


::v-deep .el-select .el-input__inner{
  text-align: center;
  color: #fff !important;
  width: 300px;
}


/*  //下拉框标题文本label*/
/*::v-deep .el-form-item__label{*/
/*  color: #fff;*/
/*  font-weight: 100;*/
/*  border: 1px solid #254277 !important;*/
/*  border-radius: 10px !important;*/
/*}*/
/*//选择框*/
/*::v-deep .el-input__wrapper{*/
/*  background-color: rgba(26, 84, 128,0.5);*/
/*  border: 1px solid #254277 !important;*/
/*  border-radius: 10px !important;*/
/*  width:180px;*/
/*}*/
/*//下拉框文字*/
/* .el-input__inner{*/
/*  color:#e1dcdc;*/

/*}*/

/*.el-popper.is-light.selectStyle {*/
/*  background-color: rgba(0, 136, 255, 0.1) !important;*/
/*  border: 1px solid #254277 !important;*/
/*  border-radius: 10px !important;*/
/*}*/


</style>
