<template>
    <div class="grid-container">
      <img :src="source" class="img-size">
      <div class="Content center" >{{title}}</div>
    </div>
</template>

<script>
export default {
  name: "skill-container",
  props: {
    source: {
      default: "/assets/icons/python-icon.svg"
    },
    title: {
      default: "Python"
    }
  }
}
</script>

<style scoped>
.grid-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
}

.img-size {
  width: 50px;
}

</style>
