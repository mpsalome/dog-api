<template>
  <div class="SelectBreed">
    <div class="selects">
      <p>Selecione uma raça:</p>
      <select v-model="selected.breed" @change="changeBreed" required>
        <option v-for="breedName in breeds" :key="breedName">{{ breedName }}</option>
      </select>

      <p>Selecione uma sub-raça:</p>
      <select
        v-model="selected.subBreed"
        @change="changeSubBreed"
        :disabled="subBreeds ? subBreeds.length > 0 ? false : true : true"
      >
        <option v-for="breedName in subBreeds" :key="breedName">{{ breedName }}</option>
      </select>
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
      selected: {},
      subBreeds: {},
      breeds: []
    };
  },
  created() {
    this.breeds = Object.getOwnPropertyNames(this.breedList.message);
    this.breeds.pop();
    this.selected.breed = this.dogInfo.breed;
    this.selected.subBreed = this.dogInfo.subBreed;
    this.loadSubBreeds();
  },
  methods: {
    changeBreed() {
      this.dogInfo.breed = this.selected.breed;
      this.dogInfo.subBreed = "";
      this.selected.subBreed = "";
      this.loadSubBreeds();
      this.$emit("changeInfo", this.dogInfo);
    },
    changeSubBreed() {
      this.dogInfo.subBreed = this.selected.subBreed;
      this.$emit("changeInfo", this.dogInfo);
    },
    loadSubBreeds() {
      this.subBreeds = this.breedList.message[this.selected.breed];
    }
  }
};
</script>

