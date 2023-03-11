<template>
  <div>
    <blank-page>
      <Typewrite text="Welcome!"></Typewrite>
      <
      <skills-list></skills-list>
    </blank-page>
  </div>
</template>

<script>
import BlankPage from "@/components/templates/blank-page";
import Typewrite from "@/components/atoms/typewrite";
import SkillsList from "@/components/organisms/skills-list";

export default {
  name: 'Home',
  components: {
    SkillsList,
    Typewrite,
    BlankPage,
  },
  metaInfo: {
    title: 'Home - Resume',
    meta: [
      {
        property: 'og:title',
        content: 'Home - Resume',
      },
    ],
  },
}
</script>

<style scoped>
</style>
