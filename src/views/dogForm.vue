<template>
  <div id="dogForm">
    <div class="form">
      <DogPicture
        :breed="dogInfo.breed"
        :subBreed="dogInfo.subBreed"
        :dogInfo="dogInfo"
        v-on:changeInfo="changePhoto"
      />
      <div class="selectInfo">
        <SelectBreed :breedList="breedList" v-on:changeInfo="changeBreed" :dogInfo="dogInfo" />
        <SelectDogInfo v-on:changeInfo="changeDog" :dogInfo="dogInfo" />
        <input class="btn" type="button" value="teste" @click="saveDog" />
      </div>
    </div>
    {{dogInfo}}
  </div>
</template>

<script>
import API from "@/services/api";
import SelectBreed from "@/components/SelectBreed";
import SelectDogInfo from "@/components/SelectDogInfo";
import DogPicture from "@/components/DogPicture";

export default {
  name: "dogForm",
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
    changePhoto(dogInfo) {
      this.dogInfo.photo = dogInfo.photo;
    },
    saveDog() {
      localStorage.setItem("dogInfo", JSON.stringify(this.dogInfo));
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Barlow+Condensed|Indie+Flower|Pacifico|Roboto|Montserrat|Seymour+One&display=swap");

.form {
  display: flex;
  padding: 2rem 0 0 5rem;
  font-family: "Montserrat", sans-serif;
}
.selectInfo {
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0 3rem;
}
.btn {
  font-family: "Montserrat", sans-serif;
  background-color: #1673ad;
  border-radius: 28px;
  border: 1px solid #1b5375;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 17px;
  padding: 0 13px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #000000;
  vertical-align: middle;
  text-align: center;
  width: 5rem;
}
.btn:hover {
  background-color: #476e9e;
}
.btn:active {
  position: relative;
  top: 1px;
}
select,
input {
  margin: 0 0 0.8rem 0.3rem;
  text-align: left;
  width: 15rem;
  height: 1.5rem;
  padding: 0 5px;
  border-radius: 28px;
}
p {
  margin: 0;
}
</style>
