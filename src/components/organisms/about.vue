<template>
  <div class="about-testimonial-card" v-bind:class="rootClassName">
    <div class="about-about">
      <span class="about-text">About me</span>
      <img
        alt="image"
        src="/assets/profile-300h.jpg"
        class="about-image"
      />
      <div class="about-description">
        <span class="about-text1">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
            lorem, malesuada in metus vitae, scelerisque accumsan ipsum. Nam
            pellentesque nulla leo, sagittis vehicula sem commodo nec.
          </span>
          <br />
          <span></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.about-testimonial-card {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  justify-content: center;
  background-color: rgba(217, 217, 217, 0);
}
.about-about {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: 48px;
  flex-direction: column;
  justify-content: center;
}
.about-text {
  color: var(--dl-color-gray-white);
  font-size: 3rem;
  max-width: 600px;
  align-self: center;
  text-align: center;
  font-family: IBM Plex Sans Condensed;
  font-weight: 600;
  margin-bottom: var(--dl-space-space-threeunits);
}
.about-image {
  width: var(--dl-size-size-xxlarge);
  height: var(--dl-size-size-xxlarge);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.about-description {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.about-text1 {
  color: var(--dl-color-gray-white);
  font-size: 1.15rem;
  max-width: 600px;
  margin-top: var(--dl-space-space-threeunits);
  text-align: center;
  font-family: IBM Plex Sans;
  padding-left: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-twounits);
}
.about-root-class-name1 {
  align-self: flex-start;
  background-color: transparent;
}
@media(max-width: 991px) {
  .about-image {
    margin-bottom: 0;
  }
  .about-text1 {
    margin-top: var(--dl-space-space-threeunits);
    margin-bottom: var(--dl-space-space-threeunits);
  }
}
@media(max-width: 767px) {
  .about-testimonial-card {
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
    padding-left: 0;
    padding-right: 0;
  }
}
@media(max-width: 479px) {
  .about-testimonial-card {
    flex-direction: column;
    padding: var(--dl-space-space-twounits) var(--dl-space-space-unit);
  }
  .about-about {
    padding: var(--dl-space-space-twounits) var(--dl-space-space-unit);
  }
  .about-image {
    width: 200px;
  }
  .about-text1 {
    width: auto;
  }
}
</style>
