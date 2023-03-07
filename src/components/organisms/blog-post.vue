<template>
  <div class="blog-post-blog-post-card" v-bind:class="rootClassName">
    <img :alt="image_alt" src="image_scr" class="blog-post-image" />
    <div class="blog-post-container">
      <span class="blog-post-text">{{ label }}</span>
      <span class="blog-post-text1">{{ title }}</span>
      <span class="blog-post-text2">{{ description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    label: {
      type: String,
      default: 'Category',
    },
    rootClassName: String,
    description: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default:
        'public/assets/background-1500w.jpg',
    },
    title: {
      type: String,
      default: 'Lorem ipsum dolor sit amet',
    },
  },
}
</script>

<style scoped>
.blog-post-blog-post-card {
  width: 100%;
  display: flex;
  overflow: hidden;
  max-width: var(--dl-size-size-maxwidth);
  box-shadow: 5px 5px 10px 0 rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.blog-post-blog-post-card:hover {
  transform: scale(1.02);
}
.blog-post-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.blog-post-container {
  display: flex;
  padding: var(--dl-space-space-twounits);
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--dl-color-gray-white);
}
.blog-post-text {
  color: var(--dl-color-gray-500);
  font-weight: 700;
  margin-bottom: var(--dl-space-space-halfunit);
  text-transform: uppercase;
}
.blog-post-text1 {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: var(--dl-space-space-twounits);
}
.blog-post-text2 {
  color: var(--dl-color-gray-500);
  font-weight: 400;
  margin-bottom: var(--dl-space-space-twounits);
}






@media(max-width: 991px) {
  .blog-post-image {
    height: 350px;
  }
}
</style>
