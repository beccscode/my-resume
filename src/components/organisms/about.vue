<template>
  <div class="about-testimonial-card" v-bind:class="rootClassName">
    <div class="about-about">
      <h1 class="about-heading">{{ heading }}</h1>
      <img
          alt="image"
          src="/assets/bw-face.png"
          class="about-image"
      />
      <span class="about-text">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem,
          malesuada in metus vitae, scelerisque accumsan ipsum. Nam pellentesque
          nulla leo, sagittis vehicula sem commodo nec.
        </span>
        <br />
        <span></span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    heading: {
      type: String,
      default: 'Heading',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.about-card {
  width: 1182px;
  display: flex;
  align-items: center;
  padding-left: 3px;
  margin-bottom: 300px;
  justify-content: center;
  background-color: rgba(217, 217, 217, 0);
}
.about-about {
  width: 50%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.about-image {
  width: auto;
  height: 500px;
  object-fit: cover;
}

@media(max-width: 991px) {
  .about-about {
    flex-wrap: wrap;
  }
  .about-image {
    margin-bottom: 0;
  }
  .about-text {
    margin-top: var(--dl-space-space-threeunits);
    margin-bottom: var(--dl-space-space-threeunits);
  }
}
@media(max-width: 890px) {
  .about-about {
    flex-wrap: wrap;
  }
}
@media(max-width: 767px) {
  .about-card {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .about-about {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
}
@media(max-width: 650px) {
  .about-about {
    width: 516px;
    flex-wrap: wrap;
    padding-left: 0px;
    padding-right: 0px;
  }

}
@media(max-width: 479px) {
  .about-card {
    flex-direction: column;
    padding: var(--dl-space-space-twounits) var(--dl-space-space-unit);
  }
  .about-about {
    padding: var(--dl-space-space-twounits) var(--dl-space-space-unit);
  }
}
</style>
