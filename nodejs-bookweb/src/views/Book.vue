<template>
  <div class="container">
    <div class="header">
      <router-link :to="{ name: 'BookList' }">
        <p class="logo">도서관리</p></router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
