<!-- App.vue : index.html 위에 반복되는 틀이 있으면 틀 코딩 후 router-view 해주면 됨. -->

<template>
  <div id="app">
    <div class="container">
      <!-- 이제 이 아래는 계속 바뀜. 글 목록, 글 보기 등등 따라서 router -->
      <router-view></router-view>
    </div>
  </div>
</template>

<style></style>
