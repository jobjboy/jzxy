<template>
  <el-container class="home">
    <el-container>
      <nav-bar></nav-bar>
      <app-main></app-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import NavBar from "./layout/NavBar";
import AppMain from "./layout/AppMain";

export default {
  name: "home",
  components: {
    NavBar,
    AppMain
  }
};
</script>
