<template>
  <div class="footer-container" v-bind:class="rootClassName">
    <footer class="footer-footer">
      <span class="footer-text">{{ text }}</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    text: {
      type: String,
      default: '© 2023 Rebecca Borski',
    },
    image_src: {
      type: String,
      default:
        '/assets/robot_logo_white-1400w.png',
    },
    rootClassName: String,
    image_alt: {
      type: String,
      default: 'logo',
    },
  },
}
</script>

<style scoped>
.footer-container {
  width: 100%;
  height: auto;
  display: flex;
  position: fixed;
  bottom:0;
  align-items: flex-start;
  flex-direction: column;
}
.footer-footer {
  width: 100%;
  height: 90px;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  padding: var(--dl-space-space-twounits) var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.footer-image {
  height: 2rem;
  object-fit: cover;
}
.footer-text {
  color: var(--dl-color-gray-white);
}


@media(max-width: 767px) {
  .footer-footer {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .footer-text {
    text-align: center;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }
}
@media(max-width: 479px) {
  .footer-footer {
    padding: var(--dl-space-space-unit);
    flex-direction: column;
  }
  .footer-image {
    margin-bottom: var(--dl-space-space-unit);
  }
  .footer-text {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
