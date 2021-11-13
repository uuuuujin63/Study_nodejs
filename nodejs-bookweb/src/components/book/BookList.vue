<template>
  <div>
    <h1 class="underline">도서 목록</h1>
    <div style="text-align: right">
      <button @click="register">도서 등록</button>
    </div>
    <div>
      <table id="book-list">
        <colgroup>
          <col style="width: 5%" />
          <col style="width: 20%" />
          <col style="width: 40%" />
          <col style="width: 20%" />
          <col style="width: 15%" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>ISBN</th>
            <th>제목</th>
            <th>저자</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, index) in bookList" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ book.isbn }}</td>
            <td>
              <router-link
                :to="{ name: 'BookView', params: { isbn: book.isbn } }"
                >{{ book.title }}</router-link
              >
            </td>
            <td>{{ book.author }}</td>
            <td>{{ book.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="text-center" v-if="bookList.length === 0">
      게시글이 없습니다.
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      bookList: [],
    };
  },
  created() {
    axios.get("http://localhost:9999/vuews/book").then(({ data }) => {
      this.bookList = data;
      console.log(this.bookList);
    });
  },
  methods: {
    register() {
      this.$router.push({ name: "BookCreate" });
    },
  },
};
</script>

<style></style>
