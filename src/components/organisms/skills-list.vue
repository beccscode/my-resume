<template>
  <div>
  <div class="box">
    <skill-container source="/assets/icons/javascript-icon.svg" title="JavaScript"></skill-container>
    <skill-container source="/assets/icons/python-icon.svg" title="Python"></skill-container>
    <skill-container source="/assets/icons/vue-icon.svg" title="Vue.js"></skill-container>
    <skill-container source="/assets/icons/react-icon.svg" title="React"></skill-container>
    <skill-container source="/assets/icons/flutter-icon.svg" title="Flutter"></skill-container>
  </div>
  </div>
</template>

<script>
import SkillContainer from "@/components/molecules/skill-container";
import Typewrite from "@/components/atoms/typewrite";
export default {
  name: "skills-list",
  components: {Typewrite, SkillContainer}
}
</script>

<style scoped>
.box {
  display: flex;
  gap: 3rem;
}

</style>
