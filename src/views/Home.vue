<style lang="scss">
  @import '@/scss/home.scss';
  .hello {
    transform: skew(7deg, -11deg);
  }
  canvas {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .content {
    position: relative;
    z-index: 100;
  }
</style>


<template>
  <section id="home" class="home">
    <canvas id="canvas"></canvas>
    <div class="content">
      <div class="about">
        <aside>
          <h1 class="hello" @click="getNewGreeting()">{{ this.hello }}!</h1>
          <div class="image">
            <img class="home-pic" src="@/assets/prof.jpg">
            <span class="background"></span>
          </div>
          <div>
            <h2>{{ this.caption }}</h2>
          </div>
        </aside>
        <main>
          <div class="flex-outer">
            <h2 class="name">Sam Nelson - <small>She/They</small></h2>
            <div class="flex-inner">
              <section class="resume">
                <h3>Software Developer | UX Guru</h3>
                <div class="edu">
                  <p class="degree">Master of Professional Studies - <strong>User Experience Design</strong></p>
                  <p><em>2020-2021</em> - In Progress!</p>
                </div>
                <div class="edu">
                  <p class="degree">Certificate of Web Development</p>
                  <p><em>2016-2017</em></p>
                </div>
                <div class="edu">
                  <p class="degree">Bachelor of Fine Arts - <strong>Illustration</strong></p>
                  <p><em>2010-2015</em></p>
                </div>
                <div class="edu">
                  <p class="degree">Bachelor of Arts- <strong>German</strong></p>
                  <p><em>2010-2015</em></p>
                </div>
              </section>
              <section class="hobbies">
                <span>User Experience</span>
                <span>Yarn Spinning</span>
                <span>Homesteading</span>
                <span>Druidry</span>
                <span>Artistry</span>
                <span>Rats & Rabbits</span>
                <span>Reptiles</span>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */

export default {
  name: 'Home',
  components: {

  },
  data: function() {
    return {
      hello: '',
      greetings: ['Hello', 'Bonjour', 'Salut', 'Hola', '¿Qué tal?', 'Zdravstvuyte', 'Privet', 'Nǐn hǎo', 'Salve', 'Ciao', 'Konnichiwa', 'Yō', 'Guten Tag', 'Hallo', 'Olá', 'Anyoung', 'Ahlan', 'Goddag', 'Halløj', 'Shikamoo', 'Habari', ],

      caption: '',
      sambCaptions: ['User Experience Bard', 'Crazy Rat Lady', 'Coffee Addict', 'Neo-Druid']
    }
  },
  methods: {
    getNewGreeting() {
      let greeting = this.greetings[Math.floor(Math.random() * this.greetings.length)]
      this.hello = greeting
    },
    getNewCaption() {
      let caption = this.sambCaptions[Math.floor(Math.random() * this.sambCaptions.length)]
      this.caption = caption
    },
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
    this.getNewGreeting();
    this.fireflies();
    this.getNewCaption();
  }
}

</script>
