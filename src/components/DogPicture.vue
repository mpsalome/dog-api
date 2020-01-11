<template>
     <div class="DogPicture">
      <img
        :src="dogInfo.photo || 'https://t3.ftcdn.net/jpg/02/48/42/64/240_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'  "
      />
    </div>
</template>

<script>
import API from "@/services/api";

export default {
  name: "DogPicture",
  props: {
    dogInfo: {}
  },
  created() {
  },
  methods: {
    loadImage() {
      if (this.dogInfo.subBreed !== "") {
        this.dogInfo.photo = API.getImageBySub(
          this.dogInfo.breed,
          this.dogInfo.subBreed
        ).message;
        this.$emit("changeInfo", this.dogInfo);
      } else {
        this.dogInfo.photo = API.getImageBy(this.dogInfo.breed).message;
      }
    },
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
.image {
  border: 1px solid red;
  height: 50vh;
  width: 50vw;
  text-align: center;
  padding: auto 0;
}
</style>
