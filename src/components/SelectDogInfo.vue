<template>
  <div class="SelectDogInfo">
    <p class="pColor">Cor do cachorro:</p>
    <input class="inputColor" type="color" v-model="dogInfo.dogColor" @change="selectInfo" />
    <br />
    <p>Nome do chachorro:</p>
    <input type="text" v-model="dogInfo.dogName" @change="selectInfo" />
    <p>Fonte:</p>
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
.pColor {
  display: inline;
}

</style>
