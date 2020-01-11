<template>
  <div class="SelectDogInfo">
    <input type="color" v-model="dogInfo.dogColor" @change="selectInfo" />
    <br />
    <input type="text" v-model="dogInfo.dogName" @change="selectInfo" />
    <br />
    <select :style="selectStyle" v-model="dogInfo.dogFont" @change="selectInfo">
      <option id="font01">Barlow Condensed</option>
      <option id="font02">Pacifico</option>
      <option id="font03">Indie Flower</option>
      <option id="font04">Roboto</option>
      <option id="font05">Seymour One</option>
    </select>
  </div>
</template>

<script>
import API from "@/services/api";

export default {
  name: "SelectDogInfo",
  props: {
    breedList: {},
    dogInfo: {}
  },
  computed: {
    selectStyle() {
      return {
        "font-family": this.dogInfo.dogFont
      };
    }
  },
  methods: {
    selectInfo() {
      this.$emit("changeInfo", this.dogInfo);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Barlow+Condensed|Indie+Flower|Pacifico|Roboto|Seymour+One&display=swap");
.SelectDogInfo {
  display: flex;
}
img {
  margin: 0 auto;
  min-height: 50vh;
  min-width: auto;
  max-height: 50vh;
  max-width: auto;
}
select {
  margin: 0 auto 3rem auto;
}
#font01 {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
}
#font02 {
  font-family: "Pacifico", cursive;
  font-size: 16px;
}
#font03 {
  font-family: "Indie Flower", cursive;
  font-size: 16px;
}
#font04 {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}
#font05 {
  font-family: "Seymour One", sans-serif;
  font-size: 16px;
}
</style>
