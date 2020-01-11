<template>
  <div class="DogPicture">
    <img
      :src="dogInfo.photo ||'https://t3.ftcdn.net/jpg/02/48/42/64/240_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg' "
    />
  </div>
</template>

<script>
import API from "@/services/api";

export default {
  name: "DogPicture",
  props: {
    breed: {},
    subBreed: {},
    dogInfo: {}
  },
  watch: {
    breed: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        if (newValue != oldValue) {
          this.loadImage();
        }
      }
    },
    subBreed: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        if (newValue != oldValue) {
          this.loadImage();
        }
      }
    }
  },
  methods: {
    loadImage() {
      if (this.breed !== "") {
        if (this.subBreed !== "") {
          this.dogInfo.photo = API.getImageBySub(
            this.breed,
            this.subBreed
          ).message;
          this.$emit("changeInfo", this.dogInfo);
        } else {
          this.dogInfo.photo = API.getImageBy(this.breed).message;
          this.$emit("changeInfo", this.dogInfo);
        }
      }
    }
  }
};
</script>

<style scoped>
.DogPicture {
  height: 50vh;
  width: 50vw;
  text-align: center;
  padding: auto 0;
  line-height: 50vh;
}
</style>
