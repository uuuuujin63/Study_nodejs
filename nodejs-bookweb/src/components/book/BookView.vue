<template>
  <div class="regist">
    <h1 class="underline">도서 정보</h1>
    <div class="regist_form">
      <label for="isbn">도서번호</label>
      <div class="view">{{ bookinfo.isbn }}</div>
      <label for="title">도서명</label>
      <div class="view">{{ bookinfo.title }}</div>
      <label for="author">저자</label>
      <div class="view">{{ bookinfo.author }}</div>
      <label for="price">가격</label>
      <div class="view">{{ bookinfo.price }}</div>
      <label for="content">설명</label>
      <div class="view">{{ bookinfo.content }}</div>
      <div style="padding-top: 15px">
        <router-link
          :to="{ name: 'BookModify', params: { isbn: bookinfo.isbn } }"
          class="btn"
          >수정</router-link
        >
        <router-link
          :to="{ name: 'BookDelete', params: { isbn: bookinfo.isbn } }"
          class="btn"
          >삭제</router-link
        >
        <router-link to="/list" class="btn">목록</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      bookinfo: {},
    };
  },
  created() {
    axios
      .get(`http://localhost:9999/vuews/book/${this.$route.params.isbn}`)
      .then(({ data }) => {
        this.bookinfo = data;
        console.log("글보기 완료!!!");
      });
  },
};
</script>

<style></style>
