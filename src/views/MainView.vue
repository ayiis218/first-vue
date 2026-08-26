<script lang="ts" setup>
import CardSection from '@/composables/card.section.vue'
import ListItem from '@/composables/list.item.vue'
import CardItem from '@/composables/card.item.vue'
import ThemeToggle from '@/composables/theme.toggle.vue'
import { motion, type VariantType } from 'motion-v';
import { ref, onMounted, onUnmounted } from 'vue';
import { SuArrowUpCircle, ThAlignJustify, SuClose, AkGithubFill, AkLinkedinBoxFill, AkInstagramFill, FeMail, AkWhatsappFill } from '@kalimahapps/vue-icons';
import { dataExperience, dataEducation, techStack, dataProject, contact, dataCertificate } from '@/stores/mock';
import { useScreenSize } from '@/helper/screen.size';
import cv from '@/assets/CV.pdf';

type AnimationVariant = {
  [key: string]: VariantType;
} & { initial: VariantType; enter: VariantType };

const { isMobile } = useScreenSize();
const isNavOpen = ref(false);
const activeSection = ref('profile');

const navItems = [
  { id: 'profile', label: 'Profile' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'sertifikat', label: 'Certificate' },
  { id: 'technical-skills', label: 'Technical Skills' },
  { id: 'project', label: 'Project' },
  { id: 'contact', label: 'Contact' },
];

const heroStats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Delivered', value: `${dataProject.length}+` },
  { label: 'Enterprise Clients', value: `${dataExperience.length}` },
];

const fadeInUp: AnimationVariant = {
  initial: { opacity: 0, y: 30 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: AnimationVariant = {
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

const openCv = () => {
  window.open(cv, '_blank')
}

let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) {
        activeSection.value = visible.target.id;
      }
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );

  navItems.forEach((item) => {
    const el = document.getElementById(item.id);
    if (el) observer?.observe(el);
  });
});

onUnmounted(() => {
  observer?.disconnect();
});

</script>

<template>
  <div class="min-h-screen bg-white text-slate-700 dark:bg-slate-950 dark:text-slate-200 selection:bg-indigo-500/30 font-sans pb-12">

    <div v-if="isMobile" class="flex flex-row justify-between items-center pt-8 px-8 z-50">
      <ThemeToggle />
      <button @click="openNav" aria-label="Open menu">
        <ThAlignJustify class="w-18 h-18"/>
      </button>
    </div>
    <nav v-if="!isMobile" class="sticky top-0 py-3 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/60 z-50">
      <div class="max-w-4xl mx-auto px-6 sm:px-10 flex justify-center items-center gap-6">
        <div class="flex items-center gap-4">
          <button
            v-for="item in navItems"
            :key="item.id"
            @click="onScrollTo(item.id)"
            :class="[
              'text-base transition-colors duration-300',
              activeSection === item.id ? 'text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            ]"
          >{{ item.label }}</button>
        </div>
        <ThemeToggle />
      </div>
    </nav>
    <Transition name="nav-fade">
      <div
        v-if="isNavOpen"
        @click.self="openNav"
        class="fixed inset-0 w-full h-full bg-white dark:bg-slate-950 z-50 flex flex-col p-4"
      >
        <div class="flex flex-row justify-between items-center w-full">
          <ThemeToggle />
          <button @click="openNav" aria-label="Close menu">
            <SuClose class="w-12 h-12"/>
          </button>
        </div>
        <div class="flex flex-col">
          <button
            v-for="item in navItems"
            :key="item.id"
            @click="onScrollTo(item.id)"
            :class="[
              'text-base text-left py-2 transition-colors duration-300',
              activeSection === item.id ? 'text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            ]"
          >{{ item.label }}</button>
        </div>
      </div>
    </Transition>

    <!-- Header / Hero Section -->
    <motion.header
      :initial="fadeInUp.initial"
      :animate="fadeInUp.enter"
      class="max-w-4xl mx-auto pt-24 pb-5 px-6 sm:px-10 flex flex-col md:flex-row items-center gap-10"
      id="profile"
    >
    <div class="flex flex-col gap-4 items-center">
      <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <div class="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-2xl">
          <img src="../assets/profile.png" alt="Ayi Solahudin Profile" class="w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-700 ease-in-out" />
        </div>
      </div>
      <div class="flex-1 text-center">
        <button @click="openCv" class="border border-indigo-400 px-4 py-1 rounded-md text-indigo-400 hover:bg-indigo-400 hover:text-white transition-colors duration-300 font-bold text-base">Download CV</button>
      </div>
    </div>

      <div class="flex-1 text-center md:text-left space-y-4">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
          Ayi Solahudin
        </h1>
        <h2 class="text-indigo-600 dark:text-indigo-400 font-medium tracking-wide uppercase text-sm">Fullstack Developer</h2>
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base font-normal max-w-xl text-justify">
          Frontend Developer with 3+ years of experience in building <strong class="text-indigo-600 dark:text-indigo-400 font-semibold">high-performance, scalable enterprise web applications</strong>.
          With a proven track record at <span class="text-slate-800 dark:text-slate-100 font-semibold">PT Bank Rakyat Indonesia (BRI)</span> and <span class="text-slate-800 dark:text-slate-100 font-semibold">Direktorat Jenderal Bea Cukai</span>, I architect complex state management, optimize rendering performance, and deliver seamless user experiences that drive business impact.
        </p>
        <div class="flex justify-center md:justify-start gap-6 pt-2">
          <div v-for="(stat, index) in heroStats" :key="index" class="text-center md:text-left">
            <p class="text-2xl font-bold text-slate-900 dark:text-white">{{ stat.value }}</p>
            <p class="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">{{ stat.label }}</p>
          </div>
        </div>
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
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Experience</h3>
          <div class="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
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
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Education</h3>
          <div class="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
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
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Certificate</h3>
          <div class="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
        </div>

        <div class="grid gap-6">
          <CardSection
            v-for="(item, index) in dataCertificate"
            :key="index"
            :companyName="item.companyName"
            :position="item.position"
            :date="item.date"
            :link="item.link"
            :experience="item.experience"
          />
        </div>
      </motion.section>

      <motion.section 
        :variants="fadeInUp" 
        class="space-y-6"
        id="technical-skills"
      >
        <div class="flex items-center gap-4">
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Technical Skills</h3>
          <div class="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
        </div>

        <div class="grid gap-6">
          <div class="group relative p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-500/30 hover:bg-slate-100 dark:bg-slate-900/50 dark:border-slate-800 dark:hover:bg-slate-900 transition-all duration-300">
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
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Project</h3>
          <div class="flex-1 h-px bg-slate-200 dark:bg-slate-800"></div>
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
      <div class="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col items-center gap-4">
        <p class="text-sm text-slate-600 dark:text-slate-300 font-light hover:text-indigo-500 hover:transition-colors hover:duration-300 hover:scale-105">
          Ayi Solahudin - Frontend Developer
        </p>
      </div>
      <div class="flex flex-row gap-2 justify-center items-center">
        <div v-for="(item, index) in contact" :key="index">
          <a :href="item.url" target="_blank" rel="noopener noreferrer" :aria-label="item.name">
            <component :is="iconMap[item.icon as keyof typeof iconMap]" class="w-6 h-6 hover:text-indigo-500 hover:transition-colors hover:duration-300 hover:scale-125" />
          </a>
        </div>
      </div>

      <div class="flex flex-row gap-2 justify-center items-center mt-4">
        <h1 class="text-sm font-light text-slate-500 hover:text-indigo-500 hover:transition-colors hover:duration-300 hover:scale-105">
          Build with Vue Js, Vite, Tailwind Css, and Motion-V
        </h1>
      </div>
    </motion.footer>

    <div class="sticky bottom-10 flex flex-row justify-end pr-10">
      <button @click="scrollToTop" class="cursor-pointer" aria-label="Scroll to top">
        <SuArrowUpCircle class="w-10 h-10 text-slate-900 dark:text-white"/>
      </button>
    </div>
  </div>
</template>

<style scoped>
.nav-fade-enter-active,
.nav-fade-leave-active {
  transition: opacity 0.25s ease;
}
.nav-fade-enter-from,
.nav-fade-leave-to {
  opacity: 0;
}
</style>
