<script lang="ts" setup>
import { motion } from 'motion-v';
import { ref } from 'vue';
import { SuArrowUpCircle, ThAlignJustify, SuClose } from '@kalimahapps/vue-icons';

const isNavOpen = ref(false);
const isMobile = ref(false);

const fadeInUp: any = {
  initial: { opacity: 0, y: 30 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: any = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const onScrollTo = (id:string)=> {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth"
    });
  }
  isNavOpen.value = false;
}

const openNav = () => {
  isNavOpen.value = !isNavOpen.value;
}

</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 font-sans pb-12">
    <div v-if="isMobile" class="sticky top-8 flex flex-row justify-end pr-8 z-50">
      <button @click="openNav">
        <ThAlignJustify class="w-18 h-18"/>
      </button>
    </div>  
    <nav v-if="!isMobile" class="sticky top-0 py-3 w-full bg-slate-750/80 backdrop-blur-md z-50">
      <div class="max-w-4xl mx-auto px-6 sm:px-10 flex justify-center items-center">
        <div class="flex items-center gap-4">
          <button @click="onScrollTo('profile')" class="text-base text-slate-400 hover:text-white transition-colors duration-300">Profile</button>
          <button @click="onScrollTo('experience')" class="text-base text-slate-400 hover:text-white transition-colors duration-300">Experience</button>
          <button @click="onScrollTo('education')" class="text-base text-slate-400 hover:text-white transition-colors duration-300">Education</button>
          <button @click="onScrollTo('sertifikat')" class="text-base text-slate-400 hover:text-white transition-colors duration-300">Sertifikat</button>
          <button @click="onScrollTo('technical-skills')" class="text-base text-slate-400 hover:text-white transition-colors duration-300">Technical Skills</button>
          <button @click="onScrollTo('project')" class="text-base text-slate-400 hover:text-white transition-colors duration-300">Project</button>
          <button @click="onScrollTo('contact')" class="text-slate-400 hover:text-white transition-colors duration-300">Contact</button>
        </div>
      </div>
    </nav>
    <div v-if="isNavOpen" class="absolute top-0 right-0 w-full h-full bg-slate-950 z-50 flex flex-col p-4">
      <div class="flex flex-row justify-end w-full bg-red-30">
        <button @click="openNav">
          <SuClose class="w-12 h-12"/>
        </button>
      </div>
      <div class="flex flex-col">
        <button @click="onScrollTo('profile')">Profile</button>
        <button @click="onScrollTo('experience')">Experience</button>
        <button @click="onScrollTo('education')">Education</button>
        <button @click="onScrollTo('sertifikat')">Sertifikat</button>
        <button @click="onScrollTo('technical-skills')">Technical Skills</button>
        <button @click="onScrollTo('project')">Project</button>
        <button @click="onScrollTo('contact')">Contact</button>
      </div>
    </div>

    <!-- Header / Hero Section -->
    <motion.header
      :initial="fadeInUp.initial"
      :animate="fadeInUp.enter"
      class="max-w-4xl mx-auto pt-24 pb-16 px-6 sm:px-10 flex flex-col md:flex-row items-center gap-10"
      id="profile"
    >
      <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <div class="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-slate-800 shadow-2xl">
          <img src="../assets/profile.png" alt="Ayi Solahudin Profile" class="w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-700 ease-in-out" />
        </div>
      </div>
      
      <div class="flex-1 text-center md:text-left space-y-4">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
          Ayi Solahudin
        </h1>
        <h2 class="text-indigo-400 font-medium tracking-wide uppercase text-sm">Fullstack Developer</h2>
        <p class="text-slate-400 leading-relaxed text-sm md:text-base font-light max-w-xl text-justify">
          Frontend Developer with 3+ years of experience, building scalable enterprise web platforms at 
          <span class="text-slate-200 font-medium">PT Bank Rakyat Indonesia (BRI)</span>. 
          Experienced in modern JavaScript ecosystems, performance optimization, and secure system workflows. 
          Previously part of the CEISA team at <span class="text-slate-200 font-medium">Direktorat Jenderal Bea Cukai (DJBC) Indonesia</span>.
        </p>
      </div>
    </motion.header>

    <!-- Content Sections -->
    <motion.main
      :initial="staggerContainer.initial"
      :animate="staggerContainer.enter"
      class="max-w-4xl mx-auto px-6 sm:px-10 space-y-16"
    >
      
      <!-- Experience Section -->
      <motion.section 
        :variants="fadeInUp" 
        class="space-y-6"
        id="experience"
      >
        <div class="flex items-center gap-4">
          <h3 class="text-2xl font-bold text-white tracking-wide">Experience</h3>
          <div class="flex-1 h-px bg-slate-800"></div>
        </div>

        <div class="grid gap-6">
          <div class="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 hover:bg-slate-900 transition-all duration-300">
            <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
              <div>
                <h4 class="text-lg font-semibold text-slate-100">PT Bank Rakyat Indonesia (Persero) Tbk</h4>
                <p class="text-indigo-400 text-sm font-medium">Frontend Developer</p>
              </div>
              <span class="text-xs font-medium text-slate-500 bg-slate-800/80 px-3 py-1 rounded-full whitespace-nowrap">Apr '23 - Present</span>
            </div>
            
            <div class="space-y-5 text-slate-400 text-sm leading-relaxed relative z-10">
              <div>
                <h5 class="inline-flex items-center gap-2 font-medium text-slate-300 mb-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  APP Division
                </h5>
                <div class="pl-5 border-l border-slate-700/50 space-y-4 ml-0.5">
                  <div class="space-y-1.5">
                    <h6 class="text-slate-200 font-medium text-[15px]">Loyalty Management System</h6>
                    <ul class="list-disc pl-4 space-y-1 marker:text-slate-600">
                      <li>Developed enterprise web application using 
                        <span class="text-slate-200 font-bold"> Next.js, Radix UI, TanStack React Query, and Zustand.</span>
                      </li>
                      <li>Developed a QRIS cashback Promotion feature and implemented Maker-Checker-Signer Approval workflow.</li>
                      <li>Built bulk upload mechanism for QRIS program management.</li>
                    </ul>
                  </div>
                  <div class="space-y-1.5">
                    <h6 class="text-slate-200 font-medium text-[15px]">ProCash</h6>
                    <ul class="list-disc pl-4 space-y-1 marker:text-slate-600">
                      <li>Developed a web platform using <span class="text-slate-200 font-bold">Laravel</span>.</li>
                      <li>Developed a QRIS Cashback Promotion feature with Maker-Checker-Signer Approval workflow.</li>
                      <li>Managed task tracking in Jira, handled feature testing, error handling, and bug fixing.</li>
                    </ul>
                  </div>
                  <div class="space-y-1.5">
                    <h6 class="text-slate-200 font-medium text-[15px]">Ambilin Cash Pick Up (BRILink)</h6>
                    <ul class="list-disc pl-4 space-y-1 marker:text-slate-600">
                      <li>Developed Ambilin Dashboard Internal & Partner using 
                        <span class="text-slate-200 font-bold">Next.js and Tailwind CSS</span>
                      </li>
                      <li>Built Ambilin Dashboard Internal for Cash Pick Up monitoring and management system.</li>
                      <li>Improved <span class="text-slate-200 font-bold">
                        performance and order creation workflow
                      </span>, and implemented <span class="text-slate-200 font-bold">
                        Role-Based Access Control (RBAC)
                      </span>.</li>
                      <li class="text-slate-200 font-bold">
                        Refactored legacy code to improve readability, maintainability, and performance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h5 class="inline-flex items-center gap-2 font-medium text-slate-300 mb-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  DDB Division
                </h5>
                <div class="pl-5 border-l border-slate-700/50 space-y-4 ml-0.5">
                  <div class="space-y-1.5">
                    <h6 class="text-slate-200 font-medium text-[15px]">BRISilk (Shortlink URL)</h6>
                    <ul class="list-disc pl-4 space-y-1 marker:text-slate-600">
                      <li>Developed shortlink management Web Application using 
                        <span class="text-slate-200 font-bold">Next.js and Material UI</span>.
                      </li>
                      <li>Built <span class="text-slate-200 font-bold">responsive UI with analytics charts</span></li>
                      <li>Integrated BRISTARS Mobile</li>
                      <li>Applied ElasticSearch APM for monitoring.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 hover:bg-slate-900 transition-all duration-300">
            <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
              <div>
                <h4 class="text-lg font-semibold text-slate-100">Direktorat Jenderal Bea dan Cukai Kemenkeu RI</h4>
                <p class="text-indigo-400 text-sm font-medium">Frontend Developer</p>
              </div>
              <span class="text-xs font-medium text-slate-500 bg-slate-800/80 px-3 py-1 rounded-full whitespace-nowrap">Oct '22 - Jan '23</span>
            </div>

            <div class="space-y-4 text-slate-400 text-sm leading-relaxed relative z-10">
              <div class="space-y-1.5">
                <h6 class="text-slate-200 font-medium text-[15px]">CEISA 4.0</h6>
                <ul class="list-disc pl-4 space-y-1 marker:text-slate-600">
                  <li>Developed responsive web layouts using <span class="text-slate-200 font-bold">React.js and Ant Design</span></li>
                  <li>Integrated frontend services with backend APIs</li>
                  <li>Performed feature testing, error handling, bug fixing, and managed tasks using Jira</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <!-- Education Section -->
      <motion.section 
        :variants="fadeInUp" 
        class="space-y-6"
        id="education"
      >
        <div class="flex items-center gap-4">
          <h3 class="text-2xl font-bold text-white tracking-wide">Education</h3>
          <div class="flex-1 h-px bg-slate-800"></div>
        </div>

        <div class="grid gap-6">
          <div class="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 hover:bg-slate-900 transition-all duration-300">
             <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
             <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-4">
              <div>
                <h4 class="text-lg font-semibold text-slate-100">Pijar Camp</h4>
                <p class="text-indigo-400 text-sm font-medium">Fullstack Developer</p>
              </div>
              <span class="text-xs font-medium text-slate-500 bg-slate-800/80 px-3 py-1 rounded-full whitespace-nowrap">May '22 - Aug '24</span>
            </div>
            <div class="space-y-4 text-slate-400 text-sm leading-relaxed relative z-10">
              <ul class="list-disc pl-4 space-y-1 marker:text-slate-600">
                <li>Learned essential skills of a Web Developer including 
                  <span class="text-slate-200 font-bold">
                    Algorithms, Node.js, Express.js, React.js, Next.js, Bootstrap, Postman, GitHub, and PostgreSQL.
                  </span>
                </li>
                <li>Deployed multiple web applications applying production-ready engineering practices</li>
                <li>Developed soft skills such as growth mindset, stress management, self-management, and time management</li>
              </ul>
            </div>
          </div>

          <div class="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 hover:bg-slate-900 transition-all duration-300">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
             <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-4">
              <div>
                <h4 class="text-lg font-semibold text-slate-100">State Vocational School 1 Kawali</h4>
                <p class="text-indigo-400 text-sm font-medium">Software Engineering</p>
              </div>
              <span class="text-xs font-medium text-slate-500 bg-slate-800/80 px-3 py-1 rounded-full whitespace-nowrap">Jul '16 - May '19</span>
            </div>
            <div class="space-y-4 text-slate-400 text-sm leading-relaxed relative z-10">
              <ul class="list-disc pl-4 space-y-1 marker:text-slate-600">
                <li>Studied software engineering fundamentals: 
                  <span class="text-slate-200 font-bold">
                    HTML, CSS, Java, PHP, .NET, MySQL, and Algorithms.
                  </span>
                </li>
                <li>Collaborated in team-based software projects with structured task distribution and integration</li>
                <li>Participated in PKL (internship program) to gain real work experience.</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        :variants="fadeInUp" 
        class="space-y-6"
        id="sertifikat"
      >
        <div class="flex items-center gap-4">
          <h3 class="text-2xl font-bold text-white tracking-wide">Sertifikat</h3>
          <div class="flex-1 h-px bg-slate-800"></div>
        </div>

        <div class="grid gap-6">
          <div class="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 hover:bg-slate-900 transition-all duration-300">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
             <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-4">
              <h4 class="text-lg font-semibold text-slate-100">Pijar Camp</h4>
              <span class="text-xs font-medium text-slate-500 bg-slate-800/80 px-3 py-1 rounded-full whitespace-nowrap">May '22 - Aug '24</span>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        :variants="fadeInUp" 
        class="space-y-6"
        id="technical-skills"
      >
        <div class="flex items-center gap-4">
          <h3 class="text-2xl font-bold text-white tracking-wide">Technical Skills</h3>
          <div class="flex-1 h-px bg-slate-800"></div>
        </div>

        <div class="grid gap-6">
          <div class="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 hover:bg-slate-900 transition-all duration-300">
            <div class="flex justify-between">
              <div>
                <h5 class="text-lg font-semibold text-slate-100">Language</h5>
                <ul class="list-disc pl-4 space-y-1 marker:text-slate-600">
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>PHP</li>
                </ul>
              </div>
              <div>
                <h5 class="text-lg font-semibold text-slate-100">Framework</h5>
                <ul class="list-disc pl-4 space-y-1 marker:text-slate-600">
                  <li>React Js</li>
                  <li>Next Js</li>
                  <li>Vue Js</li>
                  <li>React Native</li>
                  <li>Express.js</li>
                  <li>Laravel</li>
                </ul>
              </div>
              <div>
                <h5 class="text-lg font-semibold text-slate-100">Database</h5>
                <ul class="list-disc pl-4 space-y-1 marker:text-slate-600">
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                </ul>
              </div>
              <div>
                <h5 class="text-lg font-semibold text-slate-100">Tools/Other</h5>
                <ul class="list-disc pl-4 space-y-1 marker:text-slate-600">
                  <li>Github</li>
                  <li>GitLab</li>
                  <li>Bitbucket</li>
                  <li>Postman</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>Jira</li>
                  <li>Jenkins</li>
                  <li>Agile/Scrum</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        :variants="fadeInUp" 
        class="space-y-6"
        id="project"
      >
        <div class="flex items-center gap-4">
          <h3 class="text-2xl font-bold text-white tracking-wide">Project</h3>
          <div class="flex-1 h-px bg-slate-800"></div>
        </div>

        <div class="grid gap-6">
          <div class="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 hover:bg-slate-900 transition-all duration-300">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

          </div>
        </div>
      </motion.section>

    </motion.main>

    <!-- Footer -->
    <motion.footer
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1, transition: { delay: 0.8, duration: 1 } }"
      class="max-w-4xl mx-auto px-6 sm:px-10 mt-20 text-center"
    >
      <div class="pt-8 border-t border-slate-800 flex flex-col items-center gap-4">
        <p class="text-sm text-slate-500 font-light">
          Ayi Solahudin - Frontend Developer
        </p>
      </div>
    </motion.footer>

    <div class="sticky bottom-10 flex flex-row justify-end pr-10">
      <button @click="scrollToTop" class="cursor-pointer">
        <SuArrowUpCircle class="w-10 h-10 text-white"/>
      </button>
    </div>
  </div>
</template> 