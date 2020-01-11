<template>
  <div class="selectBreed">
    <div class="image">
      <img :src="breedImage" />
    </div>
    <div class="selects">
      <p>Selecione uma raça:</p>
      <select v-model="dogInfo.breed" @change="changeBreed">
        <option
          v-for="breedName in breeds"
          :key="breedName"
        >{{ breedName }}</option>
      </select>

      <div v-if="subBreeds.length > 0">
        <p>Selecione uma sub-raça:</p>
        <select v-model="dogInfo.subBreed" @change="changeSubBreed">
          <option v-for="breedName in subBreeds" :key="breedName">{{ breedName }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import API from "@/services/api";

export default {
  name: "SelectBreed",
  props: {
    breedList: {}
  },
  data() {
    return {
      dogInfo: {
        breed: "",
        subBreed: ""
      },
      subBreeds: {},
      breeds: [],
      breedImage:
        "https://t3.ftcdn.net/jpg/02/48/42/64/240_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
    };
  },
  created() {
    this.breeds = Object.getOwnPropertyNames(this.breedList.message);
    this.breeds.pop();
  },
  methods: {
    changeBreed() {
      this.dogInfo.subBreed = "";
      this.$emit("changeInfo", this.dogInfo);
      this.subBreeds = this.breedList.message[this.dogInfo.breed];
      this.loadImage();
    },
    changeSubBreed() {
      this.$emit("changeInfo", this.dogInfo);
      this.loadImage();
    },
    loadImage() {
      if (this.dogInfo.subBreed !== "") {
        console.log(this.dogInfo.subBreed);
        this.breedImage = API.getImageBySub(
          this.dogInfo.breed,
          this.dogInfo.subBreed
        ).message;
      } else {
        console.log("teste2");
        console.log(this.dogInfo.breed);
        this.breedImage = API.getImageBy(this.dogInfo.breed).message;
      }
    }
  }
};
</script>

<style scoped>
.selectBreed {
  text-align: left;
  padding: 2rem 0 0 0;
  display: flex;
}
.selects {
  display: inline-block;
  margin: 0 0 0 3rem;
}
img {
  max-height: 50vh;
  max-width: 50vw;
}
select {
  margin: 0 0 .8rem .3rem;
  width: 10rem;
}
.image {
  border: 1px solid red;
  height: 50vh;
  width: 50vw;
  text-align: center;
  padding: auto 0;
}
p{
  margin: 0;
}
</style>
