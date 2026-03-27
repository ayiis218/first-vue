<script lang="ts" setup>
import CardSection from '@/composables/card.section.vue'
import ListItem from '@/composables/list.item.vue'
import CardItem from '@/composables/card.item.vue'
import { motion } from 'motion-v';
import { ref } from 'vue';
import { SuArrowUpCircle, ThAlignJustify, SuClose, AkGithubFill, AkLinkedinBoxFill, AkInstagramFill, FeMail, AkWhatsappFill } from '@kalimahapps/vue-icons';
import { dataExperience,dataEducation, techStack, dataProject, contact } from '@/stores/mock';
import { useScreenSize } from '@/helper/screen.size';

const { isMobile } = useScreenSize();
const isNavOpen = ref(false);

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

const iconMap = {
  github: AkGithubFill,
  linkedin: AkLinkedinBoxFill,
  instagram: AkInstagramFill,
  email: FeMail,
  whatsapp: AkWhatsappFill,
}

</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 font-sans pb-12">
  
    <div v-if="isMobile" class="flex flex-row justify-end pt-8 pr-8 z-50">
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
        <button @click="onScrollTo('profile')" class="text-base text-slate-400 hover:text-white transition-colors duration-300">Profile</button>
        <button @click="onScrollTo('experience')" class="text-base text-slate-400 hover:text-white transition-colors duration-300">Experience</button>
        <button @click="onScrollTo('education')" class="text-base text-slate-400 hover:text-white transition-colors duration-300">Education</button>
        <button @click="onScrollTo('sertifikat')" class="text-base text-slate-400 hover:text-white transition-colors duration-300">Sertifikat</button>
        <button @click="onScrollTo('technical-skills')" class="text-base text-slate-400 hover:text-white transition-colors duration-300">Technical Skills</button>
        <button @click="onScrollTo('project')" class="text-base text-slate-400 hover:text-white transition-colors duration-300">Project</button>
        <button @click="onScrollTo('contact')" class="text-slate-400 hover:text-white transition-colors duration-300">Contact</button>
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
          <CardSection
            v-for="(item, index) in dataExperience"
            :key="index"
            :companyName="item.companyName"
            :position="item.position"
            :date="item.date"
            :experience="item.experience"
          />
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
          <CardSection
            v-for="(item, index) in dataEducation"
            :key="index"
            :companyName="item.companyName"
            :position="item.position"
            :date="item.date"
            :experience="item.experience"
          />
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
            <div class="flex flex-wrap gap-4 md:flex-row md:justify-between">
              <div 
                v-for="(item, index) in techStack" 
                :key="index" 
                class="flex-1"
              >
                <ListItem
                  :title="item.title"
                  :list="item.list"
                />
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

        <div class="grid gap-6 grid-cols-1 md:grid-cols-2">
          <CardItem 
            v-for="(item, index) in dataProject"
            :key="index"
            :title="item.projectName"
            :description="item.description"
            :link="item.link"
            :images="item.images"
            :techStack="item.techStack"
          />
        </div>
      </motion.section>

    </motion.main>

    <!-- Footer -->
    <motion.footer
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1, transition: { delay: 0.8, duration: 1 } }"
      class="max-w-4xl flex flex-col gap-3 mx-auto px-6 sm:px-10 mt-20 text-center"
      id="contact"
    >
      <div class="pt-8 border-t border-slate-800 flex flex-col items-center gap-4">
        <p class="text-sm text-slate-500 font-light">
          Ayi Solahudin - Frontend Developer
        </p>
      </div>
      <div class="flex flex-row gap-2 justify-center items-center">
        <div v-for="(item, index) in contact" :key="index">
          <a :href="item.url" target="_blank" rel="noopener noreferrer">
            <component :is="iconMap[item.icon as keyof typeof iconMap]" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </motion.footer>

    <div class="sticky bottom-10 flex flex-row justify-end pr-10">
      <button @click="scrollToTop" class="cursor-pointer">
        <SuArrowUpCircle class="w-10 h-10 text-white"/>
      </button>
    </div>
  </div>
</template> 