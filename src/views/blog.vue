<template>
  <div>
    <blank-page>
      <Typewrite text="Welcome!"></Typewrite>
      <skills-list></skills-list>
    </blank-page>
  </div>
</template>

<script>
import BlankPage from "@/components/templates/blank-page";
import Typewrite from "@/components/atoms/typewrite";
import LoadingBar from "@/components/atoms/loading-bar";
import SkillContainer from "@/components/molecules/skill-container";
import SkillsList from "@/components/organisms/skills-list";

export default {
  name: 'Blog',
  components: {
    SkillsList,
    SkillContainer,
    LoadingBar,
    Typewrite,
    BlankPage,
  },
  metaInfo: {
    title: 'Blog - Resume',
    meta: [
      {
        property: 'og:title',
        content: 'Blog - Resume',
      },
    ],
  },
}
</script>

<style scoped>
</style>
