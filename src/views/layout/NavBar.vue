<template>
  <el-header class="el-header">
    <Hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar"></Hamburger>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">
        <a href="JavaScript:;">订单管理</a>
      </el-menu-item>
    </el-menu>
    <el-dropdown class="el-dropdown">
      <i class="el-icon-setting" style="font-size:25px;margin: 18px"></i>
      <el-dropdown-menu slot="dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>Home</el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span @click="logout" style="display:block;">LogOut</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
import Hamburger from "@/components/Hamburger";
export default {
  name: "navbar",
  components: {
    Hamburger
  },
  data() {
    return {
      activeIndex: "1",
      sidebar: false
    };
  },
  methods: {
    toggleSideBar() {
      this.sidebar = !this.sidebar;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    logout() {}
  }
};
</script>

<style <style lang="scss" scoped>
.el-header {
  display: flex;
  width: 100%;
  height: 60px;
  position: relative;
  align-items: center;
  border-bottom: solid 1px #e6e6e6;
  overflow: hidden;
}
.el-dropdown {
  position: absolute;
  right: 15px;
}
.hamburger-container {
  line-height: 68px;
  height: 60px;
  width: 60px;
  padding: 0 10px;
}
</style>