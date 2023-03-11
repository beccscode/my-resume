<template>
  <div class="typewrite">{{ text }}</div>
</template>

<script>
export default {
  name: "Typewrite",
  props: {
    text: {
      type: String,
      default: 'Hello World!'
    }
  }
}
</script>

<style scoped>

.typewrite {
  color: black;
  align-self: flex-start;
  font-style: normal;
  font-family: Computer,serif;
  font-weight: bold;
  width: fit-content;
  overflow: hidden;
  font-size: 4rem;
  max-width: fit-content;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 0.15em;
  margin-top: 2%;
  margin-bottom: 2%;
  border-right: .10em solid black;
  animation:
      typing 3.5s steps(40, end),
      blink .75s step-end infinite;
  animation-delay: .8s;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: black; }
}

</style>
