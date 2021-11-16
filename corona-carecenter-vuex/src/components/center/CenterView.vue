<template>
  <div>
    <h2>코로나 19 예방 접종 센터 상세 페이지</h2>
    <div>
      <button>
        <router-link to="/">목록으로 돌아가기</router-link>
      </button>
    </div>
    <table>
      <tr>
        <th>센터명</th>
        <td>{{ center.centerName }}</td>
      </tr>
      <tr>
        <th>센터유형</th>
        <td>{{ center.centerType }}</td>
      </tr>
      <tr>
        <th>주소</th>
        <td>{{ center.address }}</td>
      </tr>
      <tr>
        <th>센터시설명</th>
        <td>{{ center.facilityName }}</td>
      </tr>
      <tr>
        <th>전화번호</th>
        <td>{{ center.phoneNumber }}</td>
      </tr>
      <tr>
        <th>생성일</th>
        <td>{{ center.createdAt }}</td>
      </tr>
      <tr>
        <th>수정일</th>
        <td>{{ center.updateAt }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  created() {
    this.getDetail(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getDetail"]),
  },
  computed: {
    ...mapState(["center"]),
  },
};
</script>

<style></style>
