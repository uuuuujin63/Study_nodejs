<template>
  <div class="regist">
    <h1 class="underline">도서 수정</h1>
    <div class="regist_form">
      <label for="isbn">도서번호</label>
      <input type="text" id="isbn" name="isbn" v-model="isbn" disabled /><br />
      <label for="title">도서명</label>
      <input type="text" id="title" name="title" v-model="title" /><br />
      <label for="author">저자</label>
      <input type="text" id="author" name="author" v-model="author" /><br />
      <label for="price">가격</label>
      <input type="number" id="price" name="price" v-model="price" /><br />
      <label for="content">설명</label>
      <br />
      <textarea
        id="content"
        name="content"
        v-model="content"
        cols="35"
        rows="5"
      ></textarea
      ><br />
      <button @click="modifyBook()">수정</button>
      <button @click="moveList()">목록</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isbn: "",
      title: "",
      author: "",
      price: 0,
      content: "",
    };
  },
  created() {
    axios
      .get(`http://localhost:9999/vuews/book/${this.$route.params.isbn}`)
      .then(({ data }) => {
        this.author = data.author;
        this.content = data.content;
        this.isbn = data.isbn;
        this.price = data.price;
        this.title = data.title;
      });
  },
  methods: {
    checkValue() {
      let err = true;
      let msg = "";
      !this.isbn &&
        ((msg = "isbn 입력해주세요"), (err = false), this.$refs.isbn.focus());
      err &&
        !this.title &&
        ((msg = "제목 입력해주세요"), (err = false), this.$refs.title.focus());
      err &&
        !this.author &&
        ((msg = "저자 입력해주세요"), (err = false), this.$refs.author.focus());
      err &&
        !this.price &&
        ((msg = "가격 입력해주세요"), (err = false), this.$refs.price.focus());
      err &&
        !this.content &&
        ((msg = "내용 입력해주세요"),
        (err = false),
        this.$refs.content.focus());
      if (!err) alert(msg);
      else this.modifyBook();
    },
    modifyBook() {
      axios
        .put(`http://localhost:9999/vuews/book/${this.$route.params.isbn}`, {
          author: this.author,
          content: this.content,
          isbn: this.isbn,
          price: this.price,
          title: this.title,
        })
        .then(({ data }) => {
          let msg = "수정 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "수정이 완료되었습니다.";
          }
          alert(msg);
          // 현재 route를 /list로 변경.
          this.$router.push("/list");
        });
    },
    moveList() {
      this.$router.push("/list");
    },
  },
};
</script>

<style></style>
