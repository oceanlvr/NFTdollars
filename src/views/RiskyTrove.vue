<template>

  <div class="container">
    <div class="maintext-container">
      <div class="maintext-tilteContainer">
        <div class="maintext-title">Risky Trove</div>
        <el-button style="background: transparent;border: none"><div>
          <img src="@/assets/refresh.svg" style="width: 18px;height: 18px">
        </div></el-button>
        <el-pagination
            small
            background
            layout="prev, next"
            :total="50"
            class="mt-4"
        />
      </div>
      <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column prop="date" label="Owner" width="300" >
          <template #default="scope" >
            <div style="display: flex; align-items: center;font-family: 'Poppins';
                        font-style: normal;font-weight: 600;font-size: 12px;
                        line-height: 24px;color: #777E90;" >
              <img src="@/assets/clipBoard.svg" style="width: 18px;height: 18px" @click="copyText(scope.row.date)">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="Collateral" width="180" >
          <template #header>
            <div style="display: flex; align-items: center">
              <span style="margin-left: 10px">Collateral</span>

            </div>
          </template>
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <span style="margin-left: 10px">{{ scope.row.name }}nftUSD</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="Debt(nftUSD)" width="180"  >
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <span style="margin-left: 10px">{{ scope.row.address }}nftUSD</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Coll Ratio">
          <template #default="scope">
            <div style="display: flex; align-items: center">
                           <span style="margin-left: 10px">{{ parseFloat(scope.row.name/scope.row.address).toFixed(2) }}</span>
              <img src="@/assets/warning.svg" style="width: 16px;height: 16px;margin: 0 10px 0 10px" v-show="parseFloat(scope.row.name/scope.row.address).toFixed(2)<2">

            </div>
          </template>
        </el-table-column>
      </el-table>

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
              <div class="sideblock-middle-downtext">$13333333</div>
            </div>
            <div style="display: flex;flex-direction: column;
                      align-items: flex-start;padding: 0px;
                      gap: 8px;width: 70px;height: 74px;">
              <div class="sideblock-middle-uptext">NFTdollars</div>
              <div class="sideblock-middle-downtext">$55555511</div>
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
              <div class="sideblock-middle-downtext">$8888811</div>
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
            <div class="sideblock-down-colmun-item">
              <div class="item-text-left">Borrowing Fee</div>
              <div class="item-text-right">0.50%</div>
            </div>
            <div style="width: 280px;height: 0px;
                      border: 1px solid rgba(255, 255, 255, 0.35);"></div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import {Timer, Warning} from "@element-plus/icons-vue";
import {ref} from "vue";
import {ElMessage} from "element-plus";
const tableData = [
  {
    date: '0x40ebF7a33f8FAb287B9616F54d45fC6371c6f162',
    name: '2600',
    address: '2400',
  },
  {
    date: '0x6aB0fBCBcf0D8a69C6877fEE955FA349C8Ca4A77',
    name: '2400',
    address: '2000',
  },
  {
    date: '0xa497b54bC4cFd93ac197a04B73218a38117D2b5a',
    name: '3600',
    address: '2000',
  },
  {
    date: '0xE6f0a140d4A9Ff064cCFc765d3F188A8dbEf2bef',
    name: '3000',
    address: '1000',
  },
]

const copyText = async (content) => {
  try {
    await navigator.clipboard.writeText(content);
    console.log('已复制到剪贴板', content);
    ElMessage({
      message: '已复制到剪贴板',
      type: 'success'
    })
  } catch (error) {
    console.error('复制失败', error);
  }
};
function tableRowClassName({ row, rowIndex }) {
  if (rowIndex % 2 === 0) {
    return "";
  } else {
    return "warning-row";
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
.maintext-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 20px;
  width: 800px;
}
.maintext-tilteContainer{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 774px;
  height: 32px;
}
.maintext-title{
  width: 122px;
  height: 32px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  /* identical to box height, or 160% */
  letter-spacing: -0.02em;
  color: #FFFFFF;
}
// 表格部分样式
// 最外层透明
:deep .el-table,
:deep .el-table__expanded-cell {
  background-color: transparent;
  color: #93dcfe;
  font-size: 24px;
}

// 表格内背景颜色
:deep .el-table th,
:deep .el-table tr,
:deep .el-table td {
  background: rgba(239, 228, 201, 0.5);
  border: 0;
  color: #23262F;
  font-size: 14px;
  height: 5px;
  font-weight: 600;
  text-align: center;
}
:deep .el-table th{
  width: 59px;
  height: 12px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.01em;
  color: #777E90;

}
:deep .el-table tr{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.01em;
  color: #777E90;
}
// 去掉最下面的那一条线
.el-table::before {
  height: 0px;

}

// 设置表格行高度
:deep .el-table__body tr,
:deep .el-table__body td {
  padding: 0;
  height: 54px;
}

// 修改高亮当前行颜色
:deep .el-table tbody tr:hover > td {
  background: rgb(252, 248, 242) !important;
}

// 取消当前行高亮
// :deep .el-table tbody tr {
//   pointer-events: none;
// }

// 修改表头样式-加边框
:deep .el-table__header-wrapper {
  border: solid 1px ;
  background: rgba(239, 228, 201, 0.5);
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  /* identical to box height, or 100% */
  letter-spacing: -0.01em;

  color: #777E90;
  // box-sizing: border-box;
}

// 表格斑马自定义颜色
:deep .el-table__row.warning-row {
  background: rgb(236, 229, 220);
}

// 滚动条样式
:deep .el-table__body-wrapper::-webkit-scrollbar-track {
  background-color: #063570;
}

:deep .el-table__body-wrapper::-webkit-scrollbar {
  width: 10px;
  opacity: 0.5;
}

:deep .el-table__body-wrapper::-webkit-scrollbar-thumb {
  border-radius: 15px;
  background-color: #0257aa;
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
</style>
