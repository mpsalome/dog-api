<template>
  <div id="app">
    <DogPicture />
    <SelectBreed :breedList="breedList" v-on:changeInfo="changeBreed" />
    <SelectDogInfo v-on:changeInfo="changeDog" />
    {{dogInfo}}
  </div>
</template>

<script>
import API from "@/services/api";
import SelectBreed from "@/components/SelectBreed";
import SelectDogInfo from "@/components/SelectDogInfo";

export default {
  name: "app",
  components: {
    SelectBreed,
    SelectDogInfo
  },
  data() {
    return {
      breedList: {},
      dogInfo: {
        breed: "",
        subBreed: "",
        dogName: "",
        dogColor: "",
        dogFont: ""
      }
    };
  },
  created() {
    this.breedList = API.getAllBreeds();
  },
  methods: {
    changeBreed(dogInfo) {
      this.dogInfo.breed = dogInfo.breed;
      this.dogInfo.subBreed = dogInfo.subBreed;
    },
    changeDog(dogInfo) {
      console.log(dogInfo);
      this.dogInfo.dogName = dogInfo.dogName;
      this.dogInfo.dogColor = dogInfo.dogColor;
      this.dogInfo.dogFont = dogInfo.dogFont;
    }
  }
};
</script>
<style scoped>
#app {
  display: inline;
}
</style>
