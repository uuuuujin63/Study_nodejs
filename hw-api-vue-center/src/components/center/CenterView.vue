<template>
  <div>
    <h2>코로나 19 예방 접종 센터 상세 페이지</h2>
    <div>
      <button>
        <router-link to="/">목록으로 돌아가기</router-link>
      </button>
    </div>
    <table style="text-align: center">
      <thead>
        <th style="width: 140px">센터명</th>
        <th>센터유형</th>
        <th>주소</th>
        <th>센터시설명</th>
        <th>전화번호</th>
        <th>생성일</th>
        <th>수정일</th>
      </thead>
      <tbody>
        <tr v-for="(center, index) in selectedCenter" :key="index">
          <td style="text-align: left">{{ center.centerName }}</td>
          <td style="text-align: left">{{ center.centerType }}</td>
          <td style="text-align: left">{{ center.address }}</td>
          <td style="text-align: left">{{ center.org }}</td>
          <td style="text-align: left">{{ center.phoneNumber }}</td>
          <td style="text-align: left">{{ center.createdAt }}</td>
          <td style="text-align: left">{{ center.updatedAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import http from "@/util/http-common.js";
export default {
  data() {
    return {
      centerList: [],
    };
  },
  created() {
    http
      .get(
        `/15077586/v1/centers?page=1&perPage=10&serviceKey=pK%2B5v%2BJKLaoeG%2FpUU1QVku5WJ7JKwySWiCvRbpo4StK4pBIuKHVrxEuibjXNZGTBVqhZeeoS8fzCbBRy7uCOCg%3D%3D`
      )
      .then(({ data }) => {
        this.centerList = data.data;
        console.log(this.centerList);
      });
  },
  computed: {
    selectedCenter: function () {
      return this.centerList.filter(
        (center) => center.id === this.$route.params.id
      );
    },
  },
};
</script>

<style></style>
