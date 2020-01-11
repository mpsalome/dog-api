<template>
  <div id="app">
    <SelectBreed :breedList="breedList" v-on:changeInfo="changeBreed" :dogInfo="dogInfo" />
    <SelectDogInfo v-on:changeInfo="changeDog" :dogInfo="dogInfo" />
    <DogPicture :dogInfo="dogInfo" />

    <input type="button" value="teste" @click="saveDog" />
    {{dogInfo}}
  </div>
</template>

<script>
import API from "@/services/api";
import SelectBreed from "@/components/SelectBreed";
import SelectDogInfo from "@/components/SelectDogInfo";
import DogPicture from "@/components/DogPicture";

export default {
  name: "app",
  components: {
    SelectBreed,
    SelectDogInfo,
    DogPicture
  },
  data() {
    return {
      breedList: {},
      dogInfo: {
        breed: "",
        subBreed: "",
        photo: "",
        dogName: "",
        dogColor: "",
        dogFont: ""
      }
    };
  },
  created() {
    var retrievedDog = JSON.parse(localStorage.getItem("dogInfo"));
    if (retrievedDog) {
      this.dogInfo = retrievedDog;
    }
    this.breedList = API.getAllBreeds();
  },
  methods: {
    changeBreed(dogInfo) {
      this.dogInfo.breed = dogInfo.breed;
      this.dogInfo.subBreed = dogInfo.subBreed;
    },
    changeDog(dogInfo) {
      this.dogInfo.dogName = dogInfo.dogName;
      this.dogInfo.dogColor = dogInfo.dogColor;
      this.dogInfo.dogFont = dogInfo.dogFont;
    },
    saveDog() {
      localStorage.setItem("dogInfo", JSON.stringify(this.dogInfo));
    }
  }
};
</script>
<style scoped>
#app {
  display: inline;
}
</style>
