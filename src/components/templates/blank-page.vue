<template>
  <div class="blog-container">
    <app-sidebar rootClassName="sidebar-root-class-name1"></app-sidebar>
    <div class="fit-container">
      <img class="center fit" src="/assets/tv-overlay.png" >
    </div>
    <div class="spacer">
      <slot></slot>
    </div>
    <app-footer
        rootClassName="footer-root-class-name1"
    ></app-footer>
  </div>
</template>

<script>
import AppSidebar from "@/components/organisms/sidebar";
import AppFooter from "@/components/organisms/footer";

export default {
  name: "blank-page",
  props: {
    content: {
    }
  },
  components: {
    AppSidebar,
    AppFooter,
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
.spacer {
  width: 40%;
  height: auto;
  display: flex;
  margin-top: 12%;
  margin-bottom: 12%;
  align-items: flex-start;
  flex-direction: column;
}

.fit {
  overflow:hidden;
  width: 100%;
  top: 0;
}
.center {
  display: block;
  margin: auto;
}

.blog-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-image: url("/assets/background.jpg");
  background-attachment: fixed;
}

</style>
