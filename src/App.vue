<style lang="scss">
  @import '@/scss/styles.scss';
  canvas {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .footer {
    position: relative;
    padding: 20px;
  }
</style>

<template>
  <div id="main-app">
    <canvas v-show="desktop" id="canvas"></canvas>
    <header id="nav">
      <Nav />
    </header>
    <!-- <router-view /> -->
    <router-view :key="componentKey"/>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { isBrowser } from 'mobile-device-detect'
import Nav from '@/components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Nav,
    // isBrowser
  },
  data: function() {
    return {
      desktop: isBrowser ? true : false
      // mobile: false
    }
  },
  computed: {
    ...mapState([
      'componentKey',
    ]),
  },
  methods: {
    ...mapMutations([
      'UPDATE_KEY'
    ]),
    fireflies() {
      let g = '';
      let rint2 = '';
      let pxs = [];
      let rint = 50;
      let canvas = document.getElementById('canvas');

      let WIDTH = window.innerWidth;
      let HEIGHT = window.innerHeight;
      // canvas.offsetWidth(WIDTH);
      // canvas.offsetHeight(HEIGHT);
      canvas.setAttribute('width', WIDTH);
      canvas.setAttribute('height',HEIGHT);
      let con = canvas.getContext('2d');
      for(var i = 0; i < 50; i++) {
        pxs[i] = new Circle();
        pxs[i].reset();
      }
      setInterval(draw,rint);
      setInterval(draw,rint2);

      function draw() {
        con.clearRect(0,0,WIDTH,HEIGHT);
        for(var i = 0; i < pxs.length; i++) {
          pxs[i].fade();
          pxs[i].move();
          pxs[i].draw();
        }
      }

      function Circle() {
        this.s = {ttl:8000, xmax:5, ymax:2, rmax:10, rt:1, xdef:960, ydef:540, xdrift:4, ydrift: 4, random:true, blink:true};

        this.reset = function() {
          this.x = (this.s.random ? WIDTH*Math.random() : this.s.xdef);
          this.y = (this.s.random ? HEIGHT*Math.random() : this.s.ydef);
          this.r = ((this.s.rmax-1)*Math.random()) + 1;
          this.dx = (Math.random()*this.s.xmax) * (Math.random() < .5 ? -1 : 1);
          this.dy = (Math.random()*this.s.ymax) * (Math.random() < .5 ? -1 : 1);
          this.hl = (this.s.ttl/rint)*(this.r/this.s.rmax);
          this.rt = Math.random()*this.hl;
          this.s.rt = Math.random()+1;
          this.stop = Math.random()*.2+.4;
          this.s.xdrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
          this.s.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
        }

        this.fade = function() {
          this.rt += this.s.rt;
        }

        this.draw = function() {
          if(this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) this.s.rt = this.s.rt*-1;
          else if(this.rt >= this.hl) this.reset();
          var newo = 1-(this.rt/this.hl);
          con.beginPath();
          con.arc(this.x,this.y,this.r,0,Math.PI*2,true);
          con.closePath();
          var cr = this.r*newo;
          g = con.createRadialGradient(this.x,this.y,0,this.x,this.y,(cr <= 0 ? 1 : cr));
          g.addColorStop(0.0, 'rgba(238,180,28,'+newo+')');
          g.addColorStop(this.stop, 'rgba(238,180,28,'+(newo*.2)+')');
          g.addColorStop(1.0, 'rgba(238,180,28,0)');
          con.fillStyle = g;
          con.fill();
        }

        this.move = function() {
          this.x += (this.rt/this.hl)*this.dx;
          this.y += (this.rt/this.hl)*this.dy;
          if(this.x > WIDTH || this.x < 0) this.dx *= -1;
          if(this.y > HEIGHT || this.y < 0) this.dy *= -1;
        }

        this.getX = function() { return this.x; }
        this.getY = function() { return this.y; }
      }
    }
  },
  mounted() {
    console.log(this.$device)
    this.fireflies()
    // this.UPDATE_KEY(this.componentKey += 1)
  }
}
</script>
