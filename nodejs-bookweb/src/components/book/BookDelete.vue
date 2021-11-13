<template>
  <div>
    <h1>도서 삭제</h1>
    <div>삭제중...</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios
      .delete(`http://localhost:9999/vuews/book/${this.$route.params.isbn}`)
      .then(({ data }) => {
        let msg = "삭제 처리시 문제 발생";
        if (data === "success") {
          msg = "삭제가 완료되었습니다.";
        }
        alert(msg);
        this.$router.push("/list");
      });
  },
};
</script>

<style></style>
