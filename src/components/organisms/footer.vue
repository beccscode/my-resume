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
  align-items: center;
  flex-direction: column;
}
.footer-footer {
  width: auto;
  height: auto;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  padding: var(--dl-space-space-twounits) var(--dl-space-space-threeunits);
}

.footer-text {
  color: white;
}

</style>
