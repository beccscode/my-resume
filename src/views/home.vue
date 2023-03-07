<template>
  <div id="home" class="home-container">
    <nav-bar
      rootClassName="nav-bar-root-class-name"
      image_src="/assets/robot_logo_white-1400w.png"
    ></nav-bar>
    <app-sidebar rootClassName="sidebar-root-class-name"></app-sidebar>
    <div class="home-container01">
      <div class="home-hero">
        <div class="typewrite1">Welcome,</div>
        <br />
        <div class="typewrite2">I'm Rebecca.</div>
      </div>
      <div id="about" class="home-about">
        <app-about
          name="Rebecca Borski"
          quote="lorem ipsum "
          profile_src="/assets/profile-300h.jpg"
          rootClassName="rootClassName1"
        ></app-about>
      </div>
      <div id="skills" class="home-my-skills">
        <h1 class="home-text05">
          <span>My Skills</span>
          <br />
        </h1>
      </div>
      <div id="projects" class="home-projects">
        <h1 class="home-text08">
          <span>Projects</span>
          <br />
        </h1>
        <div class="home-blog">
          <div class="home-container02">
            <blog-post rootClassName="rootClassName3"></blog-post>
          </div>
          <div class="home-container03">
            <blog-post
              image_src="/assets/blog_placeholder.jpg"
              rootClassName="rootClassName2"
            ></blog-post>
          </div>
          <div class="home-container04">
            <blog-post
              image_src="/assets/blog_placeholder.jpg"
              rootClassName="rootClassName1"
            ></blog-post>
          </div>
        </div>
      </div>
      <div id="experience" class="home-experience">
        <h1 class="home-text11">Experience</h1>
        <span class="home-text12">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <br />
          <span></span>
        </span>
        <div class="home-container05">
          <div class="home-step">
            <div class="home-container06">
              <div class="home-line"></div>
              <div class="home-container07">
                <svg viewBox="0 0 1024 1024" class="home-icon">
                  <path
                    d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"
                  ></path>
                </svg>
              </div>
              <div class="home-line1"></div>
            </div>
            <div class="home-container08">
              <h1 class="home-text15"><span>Ideate</span></h1>
              <span class="home-text17">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br />
                <span></span>
              </span>
            </div>
          </div>
          <div class="home-step1">
            <div class="home-container09">
              <div class="home-line2"></div>
              <div class="home-container10">
                <svg viewBox="0 0 1024 1024" class="home-icon2">
                  <path
                    d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"
                  ></path>
                </svg>
              </div>
              <div class="home-line3"></div>
            </div>
            <div class="home-container11">
              <h1 class="home-text20"><span>Design</span></h1>
              <span class="home-text22">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br />
                <span></span>
              </span>
            </div>
          </div>
          <div class="home-step2">
            <div class="home-container12">
              <div class="home-line4"></div>
              <div class="home-container13">
                <svg viewBox="0 0 1024 1024" class="home-icon4">
                  <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                  <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                </svg>
              </div>
              <div class="home-line5"></div>
            </div>
            <div class="home-container14">
              <h1 class="home-text25"><span>Develop</span></h1>
              <span class="home-text27">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br />
                <span></span>
              </span>
            </div>
          </div>
          <div class="home-step3">
            <div class="home-container15">
              <div class="home-line6"></div>
              <div class="home-container16">
                <svg viewBox="0 0 1024 1024" class="home-icon7">
                  <path
                    d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"
                  ></path>
                </svg>
              </div>
              <div class="home-line7"></div>
            </div>
            <div class="home-container17">
              <h1 class="home-text30"><span>Deploy</span></h1>
              <span class="home-text32">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br />
                <span></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer
      image_src="/assets/robot_logo_white-1400w.png"
      rootClassName="footer-root-class-name"
    ></app-footer>
  </div>
</template>

<script>
import NavBar from '../components/nav-bar'
import AppSidebar from '../components/sidebar'
import AppAbout from '../components/about'
import BlogPost from '../components/blog-post'
import AppFooter from '../components/footer'

export default {
  name: 'Home',
  components: {
    NavBar,
    AppSidebar,
    AppAbout,
    BlogPost,
    AppFooter,
  },
  metaInfo: {
    title: 'Resume',
    meta: [
      {
        property: 'og:title',
        content: 'Resume',
      },
    ],
  },
}
</script>

<style scoped>
.typewrite1 {
  color: var(--dl-color-gray-white);
  align-self: center;
  font-style: normal;
  font-family: IBM Plex Sans Condensed;
  font-weight: 400;
  width: fit-content;
  margin: 0 auto;
  overflow: hidden;
  font-size: 3rem;
  max-width: fit-content;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 0.15em;
  animation:
      typing 3.5s steps(40, end);
}
.typewrite2 {
  color: var(--dl-color-gray-white);
  align-self: center;
  font-style: normal;
  font-family: IBM Plex Sans Condensed;
  font-weight: 400;
  width: fit-content;
  overflow: hidden;
  font-size: 3rem;
  max-width: fit-content;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 0.15em;
  margin-top: 2%;
  border-right: .10em solid white;
  animation:
      typing 3.5s steps(40, end),
      blink .75s step-end infinite;
  animation-delay: 1s;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: white; }
}

.home-container {
  width: 100%;
  display: flex;
  overflow: hidden;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  background-size: cover;
  justify-content: flex-start;
  background-image: url("/assets/background-1500w.jpg");
  background-repeat: no-repeat;
  background-position: top left;
}
.home-container01 {
  flex: 1;
  width: auto;
  height: 538px;
  display: flex;
  position: relative;
  align-self: center;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-start;
}
.home-hero {
  width: 100%;
  height: 1346px;
  display: flex;
  position: relative;
  align-self: center;
  margin-top: var(--dl-space-space-sixunits);
  min-height: var(--dl-size-size-maxwidth);
  align-items: center;
  margin-left: var(--dl-space-space-sixunits);
  padding-top: 167px;
  margin-right: var(--dl-space-space-sixunits);
  flex-direction: column;
  justify-content: flex-start;
}

.home-about {
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: flex-start;
}
.home-my-skills {
  width: 100%;
  margin: var(--dl-space-space-twounits);
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  justify-content: center;
}
.home-text05 {
  color: var(--dl-color-gray-white);
  font-style: normal;
  font-family: IBM Plex Sans Condensed;
  font-weight: 400;
}
.home-projects {
  flex: 0 0 auto;
  width: 100%;
  display: none;
  align-self: center;
  align-items: flex-start;
  flex-direction: column;
}
.home-text08 {
  color: var(--dl-color-gray-white);
  align-self: center;
  font-style: normal;
  font-family: IBM Plex Sans Condensed;
  font-weight: 400;
}
.home-blog {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  justify-content: space-between;
}
.home-container02 {
  display: flex;
  align-items: center;
  margin-right: var(--dl-space-space-twounits);
  justify-content: space-between;
}
.home-container03 {
  display: flex;
  align-items: center;
  margin-right: var(--dl-space-space-twounits);
  justify-content: space-between;
}
.home-container04 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.home-experience {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: column;
}
.home-text11 {
  color: var(--dl-color-gray-white);
  font-size: 3rem;
  font-style: normal;
  font-family: IBM Plex Sans Condensed;
  font-weight: 400;
}
.home-text12 {
  color: var(--dl-color-gray-white);
  font-size: 1.15rem;
  max-width: 600px;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
}
.home-container05 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.home-step {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-container06 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: 2px;
  padding-right: 2px;
  flex-direction: row;
  justify-content: center;
}
.home-line {
  flex: 1;
  height: 0;
  display: flex;
  align-items: flex-start;
  border-color: transparent;
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 0;
}
.home-container07 {
  flex: 0 0 auto;
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: #f5f5f5ff;
}
.home-icon {
  fill: var(--dl-color-gray-500);
  width: 24px;
  height: 24px;
}
.home-line1 {
  flex: 1;
  height: 0;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-900);
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 0;
}
.home-container08 {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: var(--dl-space-space-unit) var(--dl-space-space-twounits);
}
.home-text15 {
  color: var(--dl-color-gray-white);
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text17 {
  color: var(--dl-color-gray-white);
  font-size: 0.75rem;
  text-align: center;
}
.home-step1 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-container09 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: 2px;
  padding-right: 2px;
  flex-direction: row;
  justify-content: center;
}
.home-line2 {
  flex: 1;
  height: 0;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-900);
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 0;
}
.home-container10 {
  flex: 0 0 auto;
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: #f5f5f5ff;
}
.home-icon2 {
  fill: var(--dl-color-gray-500);
  width: 24px;
  height: 24px;
}
.home-line3 {
  flex: 1;
  height: 0;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-900);
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 0;
}
.home-container11 {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: var(--dl-space-space-unit) var(--dl-space-space-twounits);
}
.home-text20 {
  color: var(--dl-color-gray-white);
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text22 {
  color: var(--dl-color-gray-white);
  font-size: 0.75rem;
  text-align: center;
}
.home-step2 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-container12 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: 2px;
  padding-right: 2px;
  flex-direction: row;
  justify-content: center;
}
.home-line4 {
  flex: 1;
  height: 0;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-900);
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 0;
}
.home-container13 {
  flex: 0 0 auto;
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: #f5f5f5ff;
}
.home-icon4 {
  fill: var(--dl-color-gray-500);
  width: 24px;
  height: 24px;
}
.home-line5 {
  flex: 1;
  height: 0;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-900);
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 0;
}
.home-container14 {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: var(--dl-space-space-unit) var(--dl-space-space-twounits);
}
.home-text25 {
  color: var(--dl-color-gray-white);
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text27 {
  color: var(--dl-color-gray-white);
  font-size: 0.75rem;
  text-align: center;
}
.home-step3 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-container15 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: 2px;
  padding-right: 2px;
  flex-direction: row;
  justify-content: center;
}
.home-line6 {
  flex: 1;
  height: 0;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-900);
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 0;
}
.home-container16 {
  flex: 0 0 auto;
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: #f5f5f5ff;
}
.home-icon7 {
  fill: var(--dl-color-gray-500);
  width: 24px;
  height: 24px;
}
.home-line7 {
  flex: 1;
  height: 0;
  display: flex;
  align-items: flex-start;
  border-color: transparent;
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 0;
}
.home-container17 {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: var(--dl-space-space-unit) var(--dl-space-space-twounits);
}
.home-text30 {
  color: var(--dl-color-gray-white);
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text32 {
  color: var(--dl-color-gray-white);
  font-size: 0.75rem;
  text-align: center;
}
@media(max-width: 1600px) {
  .home-container {
    background-repeat: no-repeat;
    background-position: top;
  }
  .home-container01 {
    padding-left: 0;
  }
  .home-hero {
    padding: var(--dl-space-space-threeunits);
    justify-content: flex-start;
  }

}
@media(max-width: 1200px) {
  .home-container {
    background-size: contain;
  }
  .home-container01 {
    padding-left: 0;
  }
  .home-hero {
    margin: var(--dl-space-space-twounits);
    justify-content: flex-start;
  }

}
@media(max-width: 991px) {
  .home-container {
    background-size: contain;
  }
  .home-container01 {
    padding-left: 0;
  }

}
@media(max-width: 890px) {
  .home-container {
    background-size: cover;
    background-image: url("/assets/background-1500w.jpg");
  }
  .home-container01 {
    padding-left: 0;
  }

}
@media(max-width: 767px) {
  .home-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-my-skills {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-blog {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-experience {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-container05 {
    align-items: flex-start;
    padding-left: var(--dl-space-space-fiveunits);
    flex-direction: column;
  }
  .home-step {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: center;
  }
  .home-container06 {
    width: var(--dl-size-size-small);
    height: auto;
    align-self: stretch;
    flex-direction: column;
    padding: 0 0 2px;
    justify-content: space-between;
  }
  .home-line1 {
    border-color: var(--dl-color-gray-900);
    border-style: dashed;
    border-top-width: 0;
    border-left-width: 2px;
  }
  .home-container08 {
    width: 100%;
    align-items: flex-start;
    padding-top: var(--dl-space-space-twounits);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-twounits);
    justify-content: space-between;
  }
  .home-text15 {
    margin: var(--dl-space-space-twounits) 0 var(--dl-space-space-unit);
  }
  .home-text17 {
    text-align: left;
  }
  .home-step1 {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: center;
  }
  .home-container09 {
    width: var(--dl-size-size-small);
    height: auto;
    align-self: stretch;
    flex-direction: column;
    padding: 0 0 2px;
    justify-content: space-between;
  }
  .home-line2 {
    border-top-width: 0;
    border-left-width: 2px;
  }
  .home-line3 {
    border-color: var(--dl-color-gray-900);
    border-style: dashed;
    border-top-width: 0;
    border-left-width: 2px;
  }
  .home-container11 {
    width: 100%;
    align-items: flex-start;
    padding-top: var(--dl-space-space-twounits);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-twounits);
    justify-content: space-between;
  }
  .home-text20 {
    margin: var(--dl-space-space-twounits) 0 var(--dl-space-space-unit);
  }
  .home-text22 {
    text-align: left;
  }
  .home-step2 {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: center;
  }
  .home-container12 {
    width: var(--dl-size-size-small);
    height: auto;
    align-self: stretch;
    flex-direction: column;
    padding: 0 0 2px;
    justify-content: space-between;
  }
  .home-line4 {
    border-top-width: 0;
    border-left-width: 2px;
  }
  .home-line5 {
    border-color: var(--dl-color-gray-900);
    border-style: dashed;
    border-top-width: 0;
    border-left-width: 2px;
  }
  .home-container14 {
    width: 100%;
    align-items: flex-start;
    padding-top: var(--dl-space-space-twounits);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-twounits);
    justify-content: space-between;
  }
  .home-text25 {
    margin: var(--dl-space-space-twounits) 0 var(--dl-space-space-unit);
  }
  .home-text27 {
    text-align: left;
  }
  .home-step3 {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: center;
  }
  .home-container15 {
    width: var(--dl-size-size-small);
    height: auto;
    align-self: stretch;
    flex-direction: column;
    padding: 0 0 2px;
    justify-content: space-between;
  }
  .home-line6 {
    border-top-width: 0;
    border-left-width: 2px;
  }
  .home-line7 {
    border-color: transparent;
    border-style: dashed;
    border-top-width: 0;
    border-left-width: 2px;
  }
  .home-container17 {
    width: 100%;
    align-items: flex-start;
    padding-top: var(--dl-space-space-twounits);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-twounits);
    justify-content: space-between;
  }
  .home-text30 {
    margin: var(--dl-space-space-twounits) 0 var(--dl-space-space-unit);
  }
  .home-text32 {
    text-align: left;
  }
}
@media(max-width: 650px) {
  .home-container {
    background-size: contain;
    background-color: var(--dl-color-gray-black);
    background-repeat: no-repeat;
  }
  .home-container01 {
    width: 324px;
    height: auto;
    justify-content: flex-start;
  }
  .home-hero {
    margin-top: var(--dl-space-space-unit);
    padding-top: 0;
    padding-bottom: 0;
  }

}
@media(max-width: 479px) {
  .home-hero {
    padding: var(--dl-space-space-twounits) var(--dl-space-space-unit);
  }
  .home-my-skills {
    align-items: center;
    flex-direction: column;
    padding: var(--dl-space-space-twounits) var(--dl-space-space-unit);
  }
  .home-blog {
    padding: var(--dl-space-space-twounits) var(--dl-space-space-unit);
  }
  .home-experience {
    padding: var(--dl-space-space-twounits) var(--dl-space-space-unit);
  }
  .home-container05 {
    padding-left: 0;
  }
  .home-container08 {
    padding: var(--dl-space-space-twounits) 0 var(--dl-space-space-twounits) var(--dl-space-space-unit);
  }
  .home-text15 {
    margin-left: 0;
    margin-right: var(--dl-space-space-twounits);
  }
  .home-container11 {
    padding: var(--dl-space-space-twounits) 0 var(--dl-space-space-twounits) var(--dl-space-space-unit);
  }
  .home-text20 {
    margin-left: 0;
    margin-right: var(--dl-space-space-twounits);
  }
  .home-container14 {
    padding: var(--dl-space-space-twounits) 0 var(--dl-space-space-twounits) var(--dl-space-space-unit);
  }
  .home-text25 {
    margin-left: 0;
    margin-right: var(--dl-space-space-twounits);
  }
  .home-container17 {
    padding: var(--dl-space-space-twounits) 0 var(--dl-space-space-twounits) var(--dl-space-space-unit);
  }
  .home-text30 {
    margin-left: 0;
    margin-right: var(--dl-space-space-twounits);
  }
}
</style>
