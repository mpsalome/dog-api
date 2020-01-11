<template>
  <div class="DogPicture">
    <img :src="dogInfo.photo" />
  </div>
</template>

<script>
import API from "@/services/api";

export default {
  name: "DogPicture",
  props: {
    breed: {},
    subBreed: {}
  },
  data() {
    return {
      dogInfo: {
        photo:
          "https://t3.ftcdn.net/jpg/02/48/42/64/240_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
      }
    };
  },
  watch: {
    breed: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        this.loadImage();
      }
    },
    subBreed: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        this.loadImage();
      }
    }
  },
  mounted() {
    if (this.dogInfo.breed) {
      this.loadImage();
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
img {
  max-height: 50vh;
  max-width: 50vw;
}
select {
  margin: 0 0 0.8rem 0.3rem;
  width: 10rem;
}
.DogPicture {
  border: 1px solid red;
  height: 50vh;
  width: 50vw;
  text-align: center;
  padding: auto 0;
}
</style>
