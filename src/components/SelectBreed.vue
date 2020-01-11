<template>
  <div class="SelectBreed">
    <div class="selects">
      <p>Selecione uma raça:</p>
      <select v-model="selectedBreed" @change="changeBreed">
        <option v-for="breedName in breeds" :key="breedName">{{ breedName }}</option>
      </select>

      <!-- <div v-if="subBreeds.length > 0"> -->
        <p>Selecione uma sub-raça:</p>
        <select v-model="dogInfo.subBreed" @change="changeSubBreed">
          <option v-for="breedName in subBreeds" :key="breedName">{{ breedName }}</option>
        </select>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import API from "@/services/api";

export default {
  name: "SelectBreed",
  props: {
    breedList: {},
    dogInfo: {}
  },
  data() {
    return {
      selectedBreed: "",
      subBreeds: {},
      breeds: []
    };
  },
  created() {
    this.breeds = Object.getOwnPropertyNames(this.breedList.message);
    this.breeds.pop();
    this.loadSubBreeds();
  },
  methods: {
    changeBreed() {
      this.dogInfo.breed = this.selectedBreed;
      this.dogInfo.subBreed = "";
      this.$emit("changeInfo", this.dogInfo);
      this.loadSubBreeds();
    },
    changeSubBreed() {
      this.$emit("changeInfo", this.dogInfo);
    },
    loadSubBreeds() {
      this.subBreeds = this.breedList.message[this.selectedBreed];
    }
  }
};
</script>

<style scoped>
.SelectBreed {
  text-align: left;
  padding: 2rem 0 0 0;
  display: block;
}
.selects {
  display: inline-block;
  margin: 0 0 0 3rem;
}
select {
  margin: 0 0 0.8rem 0.3rem;
  width: 10rem;
}
p {
  margin: 0;
}
</style>
