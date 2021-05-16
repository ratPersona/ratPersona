<style lang="scss">
@import '@/scss/subpage';
@import '@/scss/buttons';
@import '@/scss/resume';
</style>

<template>
  <div class="subpage resume employment">
    <router-link tag="button" to="/education"  class="to-education">
      <svg class="icon education"><use href="#education"></use></svg>
    </router-link>
    <button class="print-me">
      <svg class="print"><use href="#printer"></use></svg>
    </button>
    <section class="resume-content content-container">
      <div v-if="activeButton ==  0" class="job-each">
        <div class="job">
          <h2>Mayville Engineering Company</h2>
          <div class="flex-container">
            <div class="flex first">
              <h3>Software Developer <span>/</span> UX Designer</h3>
              <p class="years"><em>2019-Present</em></p>
              <ul class="resume-list job">
                <li><span>User Experience, Design Sprints, Design Thinking</span></li>
                <li><span>Creating Personas, refining Heuristics, ensuring Accessibility</span></li>
                <li><span>Vue, HTML5, CSS3</span></li>
                <li><span>C#, .NET Core, Visual Basic, SQL/Oracle</span></li>
                <li><span>Graphic/Web Design</span></li>
                <li><span>Communication between Developer/User/Stakeholder(s)</span></li>
                <li><span>Storymapping & Defining MVPs</span></li>
                <li><span>Education and Training of Front End Development</span></li>
                <li><span>Education and Training of User Experience</span></li>
                <li><span>Translating user pain-points into realistic solutions</span></li>
              </ul>
            </div>
            <div class="flex separator">
              <div class="border"></div>
            </div>
            <div class="flex last">
              <p>Supporting enterprise software isn't just code maintenance and UI facelifts; it's a constant reminder that user experience is important.</p>
              <p>I lead the development team in best UX practices and mangage design sprints, user testing, communication between users and developers, discussing project goals with stakeholders, and general quality of life updates for legacy software.</p>
              <p>I introduced Vue into the MEC code ecosystem, which was previously built on .Net/VB solely. As the facilitator of a new, dynamic intranet and app suite I take responsibility for keeping tabs on language updates and best practices.</p>
              <p>User experience is my passion, and I go to bat for our primary users; fabrication employees. I maintain excellent relationships and rapport with users and keep them in the loop through direct communication. I relay their pain-points and frunstrations to the team during design sprints to create and improve solutions.</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="activeButton == 1" class="job-each">
          <div class="job">
            <h2>BrownBoots Interactive</h2>
            <div class="flex-container">
              <div class="flex first">
                <h3>Web Developer</h3>
                <p class="years"><em>2017-2019</em></p>
                <ul class="resume-list job">
                  <li><span>jQuery, HTML5, CSS3</span></li>
                  <li><span>PHP, SQL</span></li>
                  <li><span>Agile Strategy, SCRUM Master, General Project Management</span></li>
                  <li><span>Maintain private Content Management System</span></li>
                  <li><span>WCAG Accessibility Testing</span></li>
                  <li><span>User Research, UX Research</span></li>
                  <li><span>Build Websites from back to front</span></li>
                  <li><span>Combine client needs and best practice</span></li>
                </ul>
                <!-- <p>Created Websites with HTML5/CSS3/JavaScript <span class="dot">•</span> Developed Agile strategy for Development Team <span class="dot">•</span> WCAG Accessibility Testing <span class="dot">•</span> Performed User Research <span class="dot">•</span> Updated existing technology <span class="dot">•</span> Brought attention to current Development Trends</p> -->
              </div>
              <div class="flex separator">
                <div class="border"></div>
              </div>
              <div class="flex last">
                <p>Being in a small company (~8 people) was interesting and helped me learn to balance several hats.</p>
                <p>The ecosystem BrownBoots had cultivated limited development because it gave significant flexibility to our clients. To allow our clients full access to anything in our CMS (content management system), we were required to problem-solve and generate unique solutions to accomodate funtion and form.</p>
                <p>I naturally gravitate towards leadership and responsibility, so I took it upon myself to bring ideas and follow-through to the company so we might upgrade our technology and provide better services. In addition, I also created a SCRUM/Agile schedule for all departments and taught management how to implement it.</p>
              </div>
          </div>
        </div>
      </div>
      <div v-else-if="activeButton == 2" class="job-each">
        <h2>Americorps</h2>
        <div class="flex-container">
          <div class="flex first">
            <h3>Runaway and Youth Services Advocate</h3>
            <p class="years"><em>2015-2017</em></p>
            <ul class="resume-list job">
              <li><span>Counseling, Fundraising, and Outreach</span></li>
              <li><span>Curate Youth Programming</span></li>
              <li><span>Family and One-on-One Para-professional sessions</span></li>
              <li><span>Community Service & Direct Outreach</span></li>
              <li><span>Forging relationships with other state/federal outreach programs</span></li>
              <li><span>Build rapport and refer clients to proper resources</span></li>
              <li><span>Partnership with city Health Department</span></li>
              <li><span>Manage Crisis Hotline</span></li>
              <li><span>Keep up to date with counseling studies/trends</span></li>
            </ul>
            <!-- <p>Managed Drop-In Center <span class="dot">•</span> Curated Youth Programming <span class="dot">•</span> Para-professional Youth and Family Counseling <span class="dot">•</span> Fundraising <span class="dot">•</span> Created professional community ties <span class="dot">•</span> Worked with other city programming to discuss funding and outreach <span class="dot">•</span> Direct community outreach</p> -->
          </div>
          <div class="flex separator">
            <div class="border"></div>
          </div>
          <div class="flex last">
            <p>My time with Americorps was incredibly eye-opening. It fed my desire to relate to people and help them solve their problems. It was the first tangible experience that led me to pursue UX Design.</p>
            <p>I worked with kiddos ages 11-17, specifically those who were homeless, runaway, or "at-risk". I honed listening skills and reinforced solutions with empathy. Each case was different and needed a new approach, uniting kids with their families and helping them understand each other was very rewarding.</p>
            <p>I spent a significant amount of time co-managing the program with my supervisor. I led efforts in fundraising and building community ties with other non-profits in the area. I also managed a drop-in center and after-school programming.</p>
          </div>
        </div>
      </div>

      <div v-else-if="activeButton == 3" class="job-each">
        <h2>Center for Excellence in Teaching and Learning</h2>
        <div class="flex-container">
          <div class="flex first">
            <h3>Interactive Graphics Designer</h3>
            <p class="years"><em>2014-2015</em></p>
            <ul class="resume-list job">
              <li><span>Instructional Design</span></li>
              <li><span>Graphic & Web Design</span></li>
              <li><span>Transcription & Student Accessibility</span></li>
              <li><span>Maintain Learning Management Systems</span></li>
              <li><span>Helped curate class modules</span></li>
              <li><span>Photo editing & Misc graphic work</span></li>
              <li><span>Articulate Storyline course creation</span></li>
              <li><span>Worked directly with faculty promoting online learning</span></li>
            </ul>
            <!-- <p>Helped curate online learning modules <span class="dot">•</span> Continuous updates on Learning Management Systems <span class="dot">•</span> Created graphics for class modules <span class="dot">•</span> Forged relationships with other departments to create new learning content</p> -->
          </div>
          <div class="flex separator">
            <div class="border"></div>
          </div>
          <div class="flex last">
            <p>My role was mainly to take information and articulate it into online learning modules. I created graphics for professors and helped them structure their courses aesthetically.</p>
            <p>I also created several interactive learning modules through Articulate Storyline, where students could choose their own path to learn what the professor/teacher wanted them to.</p>
            <p>Coursework through Articulate Storyline was either presented as a quiz or interactive story through narratives. Because of this nature, I provided graphics to match the tone and collaborated with professors to really showcase the content.</p>
          </div>
        </div>
      </div>
    </section>
    <nav class="subpage-bottom-nav resume">
      <ul class="internal-nav">
        <li
        class="button"
        :class="'button-' + index "
        @click="getActive(index)"
        v-for="(title, index) in titles"
        :key="title">
          <button :class="{active : activeItem == index}" class="bottom">{{ title }}</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Employment',
  data: function() {
    return {
      activeItem: '',
      activeButton: 0,
      activeCard: 1,
      titles: ['Mayville Engineering Company', 'BrownBoots', 'Americorps', 'C.E.T.L.']
    }
  },
  computed: {
    ...mapState([

    ]),
    ...mapGetters([

    ]),
  },
  methods: {
    getActive(item) {
      this.activeItem = item
      this.activeButton = item
      this.activeCard = 1
    },
    activeButtonResearch(button) {
      this.activeCard = button
    }
  }
}
</script>
