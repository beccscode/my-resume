<template>
  <div class="blog-container">
    <app-sidebar rootClassName="sidebar-root-class-name1"></app-sidebar>
    <div class="blog-container1">
      <blog-post rootClassName="blog-post-root-class-name5"></blog-post>
    </div>
    <app-footer
      image_src="/assets/robot_logo_white-1400w.png"
      rootClassName="footer-root-class-name1"
    ></app-footer>
  </div>
</template>

<script>
import AppSidebar from '../components/sidebar'
import BlogPost from '../components/blog-post'
import AppFooter from '../components/footer'

export default {
  name: 'Blog',
  components: {
    AppSidebar,
    BlogPost,
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
.blog-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-image: url("/assets/background-1500w.jpg");
}
.blog-container1 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
</style>
