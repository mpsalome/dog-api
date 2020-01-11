<template>
  <div id="dogForm">
    <div class="form">
      <div class="displayInfo">
        <DogPicture
          :breed="dogInfo.breed"
          :subBreed="dogInfo.subBreed"
          :dogInfo="dogInfo"
          v-on:changeInfo="changePhoto"
        />
        <h1 :style="selectedInfo">{{ dogInfo.dogName }}</h1>
      </div>
      <div class="selectInfo">
        <SelectBreed :breedList="breedList" v-on:changeInfo="changeBreed" :dogInfo="dogInfo" />
        <SelectDogInfo v-on:changeInfo="changeDog" :dogInfo="dogInfo" />
        <input class="btn" type="button" value="Salvar Pedido" @click="saveDog" />
      </div>
    </div>
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
  computed: {
    selectedInfo() {
      return {
        "font-family": this.dogInfo.dogFont,
        color: this.dogInfo.dogColor
      };
    }
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
      alert("Pedido salvo!");
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
  font-size: 16px;
  font-weight: 600;
  width: 10rem;
  height: 1.5rem;
  background-color: #1673ad;
  border-radius: 8px;
  border: 0;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  padding: 0 13px;
  text-decoration: none;
  vertical-align: middle;
  text-align: center;
}
.btn:hover {
  background-color: #1b5375;
  text-shadow: 0px 1px 0px #000000;
}
.btn:active {
  position: relative;
  top: 1px;
}
.inputColor {
  margin-top: 0.1rem;
  width: 50px;
}
.displayInfo {
  text-align: center;
}
img {
  max-height: 50vh;
  max-width: 50vw;
  vertical-align: middle;
}
select,
input {
  margin: 0 0 0.8rem 0;
  text-align: left;
  width: 15rem;
  height: 1.5rem;
  padding: 0 5px;
  border-radius: 8px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
}
p {
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
}
option {
  font-family: "Montserrat", sans-serif;
}
</style>
