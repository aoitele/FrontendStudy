<template>
    <nav class="menu">
        <router-link :to="{name: 'root'}" exact>最新</router-link>
        <router-link :to="{name: 'items'}">一覧</router-link>
        <router-link :to="{name: 'add'}">追加</router-link>

    </nav>
</template>
<style lang="scss" scoped>
.menu {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    background-color: #fff;
    color: #555;
    a {
      color: inherit;
      text-decoration: none;
      display: inline-block;
      padding: 10px;
      font-weight: normal;
      font-size: 14px;
      &:link {
        color: inherit;
      }
    }
    a.router-link-active {
      background-color: #555;
      color: #fff;
    }
  }
</style>