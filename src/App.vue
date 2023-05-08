<script setup>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="background">
    <Header></Header>
    <router-view></router-view>
  </div>
  <div style="background-color: #FBF8F0;">
    <Footer></Footer>
  </div>
  
</template>

<style scoped>
.background {
  background: url("@/assets/bg.png"); 
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
