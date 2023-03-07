<template>
  <div class="sidebar-container" v-bind:class="rootClassName">
    <div class="sidebar-sidebar">
      <nav class="sidebar-nav">
        <a href="#home" ><img :alt="image_alt" :src="image_src" class="sidebar-image" /></a>
        <a href="#about" class="sidebar-link">{{ text }}</a>
        <a href="#skills" class="sidebar-link1">{{ text1 }}</a>
        <a href="#projects" class="sidebar-link2">{{ text2 }}</a>
        <a href="#experience" class="sidebar-link3">{{ text3 }}</a>
        <router-link to="/blog" class="sidebar-navlink">{{ text4 }}</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    text3: {
      type: String,
      default: 'Experience',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default: '/assets/robot_logo_white-200w.png',
    },
    text: {
      type: String,
      default: 'About me',
    },
    text2: {
      type: String,
      default: 'Projects',
    },
    text4: {
      type: String,
      default: 'Blog',
    },
    rootClassName: String,
    text1: {
      type: String,
      default: 'My Skills',
    },
  },
}
</script>

<style scoped>
.sidebar-container {
  top: 0;
  width: auto;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.sidebar-sidebar {
  flex: 1;
  width: auto;
  height: var(--dl-size-size-maxwidth);
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: var(--dl-space-space-sixunits) var(--dl-space-space-fiveunits) var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.sidebar-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sidebar-image {
  width: 83px;
  height: 106px;
  margin-bottom: var(--dl-space-space-threeunits);
}
.sidebar-link {
  color: var(--dl-color-gray-white);
  font-family: IBM Plex Sans;
  margin-bottom: var(--dl-space-space-threeunits);
  text-decoration: none;
}
.sidebar-link1 {
  color: var(--dl-color-gray-white);
  font-family: IBM Plex Sans;
  margin-bottom: var(--dl-space-space-threeunits);
  text-decoration: none;
}
.sidebar-link2 {
  color: var(--dl-color-gray-white);
  display: none;
  margin-bottom: var(--dl-space-space-threeunits);
  text-decoration: none;
}
.sidebar-link3 {
  color: var(--dl-color-gray-white);
  font-family: IBM Plex Sans;
  margin-bottom: var(--dl-space-space-threeunits);
  text-decoration: none;
}
.sidebar-navlink {
  color: var(--dl-color-gray-white);
  display: none;
  font-family: IBM Plex Sans;
  text-decoration: none;
}

@media(max-width: 1600px) {
}
@media(max-width: 1200px) {
}
@media(max-width: 991px) {
  .sidebar-sidebar {
    width: 100%;
    display: none;
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
}
@media(max-width: 890px) {
  .sidebar-container {
    align-items: flex-start;
    justify-content: flex-start;
    background-color: transparent;
  }
  .sidebar-sidebar {
    height: 70vh;
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .sidebar-nav {
    display: none;
  }
}
@media(max-width: 650px) {
  .sidebar-container {
    display: none;
    background-color: transparent;
  }
  .sidebar-sidebar {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .sidebar-nav {
    display: flex;
  }
}
</style>
