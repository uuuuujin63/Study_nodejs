<template>
  <div>
    <h2>코로나 19 예방 접종 센터 목록</h2>
    <div>
      지역
      <select v-model="sido" @change="searchCenters">
        <option value="전체">전체</option>
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
      <tr v-for="(center, index) in centers" :key="center.idx">
        <td>{{ index + 1 }}</td>
        <td>
          <router-link
            :to="{ name: 'CenterView', params: { id: center.id } }"
            @click="setCenter"
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
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      sido: "전체",
    };
  },
  computed: {
    ...mapState(["centers"]),
  },
  created() {
    //this.$store.dispatch("getCenters", this.sido);
    //this.getCenters(this.sido);
    this.searchCenters();
  },
  methods: {
    ...mapActions(["getCenters"]),
    ...mapMutations(["CLEAR_CENTERS"]),
    searchCenters() {
      this.CLEAR_CENTERS();
      this.getCenters(this.sido);
    },
    setCenter() {
      this.getCenter(this.center.id);
    },
  },
};
</script>

<style></style>
