<template>
  <div class="terminal" >
    <button v-if="showClosed"
            @click="showClosed = false, showTerminal = true, showMinimize = true"
    >
      <img
          alt="about me"
          src="/assets/icons/terminal-cmd.svg"
          class="iconClosed"
      />
    </button>
    <div class="terminal__head" v-if="showMinimize">
      <button
          class="button"
          @click="showTerminal = false"
      >
        <img
            alt="image"
            src="/assets/icons/window-minimize.svg"
            class="icon"
        />
      </button>
      <button
          class="button"
          @click="showTerminal = true"
      >
        <img
            alt="image"
            src="/assets/icons/window-maximize.svg"
            class="icon"
        />
      </button>
      <button
          class="button buttonColor"
          @click="showClosed= true, showTerminal = false, showMinimize = false"
      >
        <img
            alt="image"
            src="/assets/icons/window-close.svg"
            class="icon"
        />
      </button>
    </div>
    <div class="terminal__body" id="Terminal" v-if="showTerminal" >
      <div class="prompt"># Upgrade to latest Node (LTS) version</div>
      <div class="prompt">sudo npm cache clean -f</div>
      <div class="prompt">sudo npm install -g n</div>
      <div class="prompt">sudo n stable</div>

      <div class="prompt"></div>
      <div class="prompt"># Python Simple Server</div>
      <div class="prompt">python -m SimpleHTTPServer 8000</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "animation",
  components: {},
  data () {
    return {
      showMinimize: true,
      showClosed: false,
      showTerminal: true,
    }
  }
}
</script>

<style>
.icon{
  height: 1rem;
  width: 1rem;
}
.iconClosed {
  height: 3rem;
  width: 3rem;
}
.button {
  border: none;
  padding-left: 4px;
  padding-right: 4px;
  cursor: pointer;
  outline: none;
  transition: 0.1s;
}

.button:hover {
  background: lightgrey;
}


.buttonColor:hover {
  background-color: indianred;
}

.terminal {
  width:100%;
  text-align:left;
  border-radius:5px;
  margin-bottom:10px
}

.terminal__head{
  background-color:white;
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  display: flex;
  justify-content: end;
}


.terminal__body{
  background-color:#1e1e1e;
  padding:30px 17px 20px;
  border-bottom-left-radius:5px;
  border-bottom-right-radius:5px;
}

.prompt {
  margin-bottom:15px;
  font-family:"Computer", sans-serif;
  font-size:1.5rem;
  color: white;
}
.prompt::before {
  content:"$";
  padding-right:15px;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  color: white;
}

</style>
