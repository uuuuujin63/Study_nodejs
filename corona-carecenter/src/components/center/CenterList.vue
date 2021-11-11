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
export default {
  data() {
    return {
      centerList: {
        currentCount: 5,
        data: [
          {
            address: "서울특별시 중구 을지로 39길 29",
            centerName: "코로나19 중앙 예방접종센터",
            centerType: "중앙/권역",
            createdAt: "2021-03-03 07:00:52",
            facilityName: "국립중앙의료원 D동",
            id: 1,
            lat: "37.567817",
            lng: "127.004501",
            org: "국립중앙의료원",
            phoneNumber: "02-2260-7114",
            sido: "서울특별시",
            sigungu: "중구",
            updatedAt: "2021-07-16 04:55:08",
            zipCode: "04562",
          },
          {
            address: "충청남도 천안시 동남구 천안대로 357",
            centerName: "코로나19 중부권역 예방접종센터",
            centerType: "중앙/권역",
            createdAt: "2021-03-03 07:00:52",
            facilityName: "천안시 실내배드민턴장 1층",
            id: 2,
            lat: "36.779887",
            lng: "127.164717",
            org: "순천향대 천안병원",
            phoneNumber: "",
            sido: "충청남도",
            sigungu: "천안시 동남구",
            updatedAt: "2021-07-16 04:55:08",
            zipCode: "31212",
          },
          {
            address: "광주광역시 동구 필문대로 365",
            centerName: "코로나19 호남권역 예방접종센터",
            centerType: "중앙/권역",
            createdAt: "2021-03-03 07:00:52",
            facilityName: "조선대학교병원 의성관 5층",
            id: 3,
            lat: "35.139465",
            lng: "126.925563",
            org: "조선대병원",
            phoneNumber: "062-220-3739",
            sido: "광주광역시",
            sigungu: "동구",
            updatedAt: "2021-07-16 04:55:08",
            zipCode: "61452",
          },
          {
            address: "경상남도 양산시 물금읍 금오로 20",
            centerName: "코로나19 영남권역 예방접종센터",
            centerType: "중앙/권역",
            createdAt: "2021-03-03 07:00:53",
            facilityName: "양산 부산대병원 기숙사동 1층",
            id: 4,
            lat: "35.3239",
            lng: "129.009337",
            org: "양산 부산대병원",
            phoneNumber: "055-360-6701",
            sido: "경상남도",
            sigungu: "양산시",
            updatedAt: "2021-07-16 04:55:08",
            zipCode: "50612",
          },
          {
            address: "대구시 중구 달성로 56",
            centerName: "코로나19 대구광역시 중구 예방접종센터",
            centerType: "지역",
            createdAt: "2021-03-03 07:00:53",
            facilityName: "계명대학교 대구동산병원 별관",
            id: 5,
            lat: "35.869985",
            lng: "128.583716",
            org: "",
            phoneNumber: "053-661-3955",
            sido: "대구광역시",
            sigungu: "중구",
            updatedAt: "2021-07-16 04:55:09",
            zipCode: "41931",
          },
        ],
        matchCount: 284,
        page: 1,
        perPage: 5,
        totalCount: 284,
      },
      sido: "",
    };
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
