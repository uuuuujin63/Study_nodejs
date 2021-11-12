<template>
  <div>
    <h2>코로나 19 예방 접종 센터 목록</h2>
    <div>
      지역
      <select v-model="sido">
        <option value="">전체</option>
        <option value="서울특별시">서울특별시</option>
        <option value="인천광역시">인천광역시</option>
        <option value="경기도">경기도</option>
        <option value="강원도">강원도</option>
        <option value="충청남도">충청남도</option>
        <option value="충청북도">충청북도</option>
        <option value="세종특별자치시">세종특별자치시</option>
        <option value="대전광역시">대전광역시</option>
        <option value="경상북도">경상북도</option>
        <option value="경상남도">경상남도</option>
        <option value="전라북도">전라북도</option>
        <option value="전라남도">전라남도</option>
        <option value="대구광역시">대구광역시</option>
        <option value="울산광역시">울산광역시</option>
        <option value="부산광역시">부산광역시</option>
        <option value="광주광역시">광주광역시</option>
        <option value="제주특별자치도">제주특별자치도</option>
      </select>
    </div>
    <table style="text-align: center">
      <tr>
        <td>번호</td>
        <td>센터명</td>
        <td>생성일</td>
        <td>수정일</td>
      </tr>
      <tr v-for="(center, index) in matchLoc" :key="center.idx">
        <td>{{ index + 1 }}</td>
        <td>
          <router-link
            :to="{ name: 'CenterView', params: { id: center.id } }"
            >{{ center.centerName }}</router-link
          >
        </td>
        <td>{{ center.createdAt }}</td>
        <td>{{ center.updatedAt }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import http from "@/util/http-common.js";
export default {
  data() {
    return {
      centerList: [],
      sido: "",
    };
  },
  created() {
    http
      .get(
        `/15077586/v1/centers?page=1&perPage=10&serviceKey=pK%2B5v%2BJKLaoeG%2FpUU1QVku5WJ7JKwySWiCvRbpo4StK4pBIuKHVrxEuibjXNZGTBVqhZeeoS8fzCbBRy7uCOCg%3D%3D`
      )
      .then(({ data }) => {
        this.centerList = data;
        console.log(this.centerList.data);
      });
  },
  computed: {
    matchLoc: function () {
      if (this.sido == "") return this.centerList.data;
      return this.centerList.data.filter((center) => center.sido == this.sido);
    },
  },
};
</script>

<style></style>
