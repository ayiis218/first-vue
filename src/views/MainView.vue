<script lang="ts" setup>
import SectionCard from '@/components/SectionCard.vue'
import TitledList from '@/components/TitledList.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import StatTile from '@/components/StatTile.vue'
import PageLoader from '@/components/PageLoader.vue'
import GradientMesh from '@/components/GradientMesh.vue'
import GrainOverlay from '@/components/GrainOverlay.vue'
import { motion, type VariantType } from 'motion-v';
import { computed, ref } from 'vue';
import { SuArrowUpCircle, ThAlignJustify, SuClose, AkGithubFill, AkLinkedinBoxFill, AkInstagramFill, FeMail, AkWhatsappFill } from '@kalimahapps/vue-icons';
import { dataExperience, dataEducation, techStack, dataProject, contact, dataCertificate } from '@/stores/mock';
import { useScreenSize } from '@/composables/screen.size';
import { useScrollSpy } from '@/composables/scroll.spy';
import { useReducedMotion } from '@/composables/reduced.motion';
import { useSlidingIndicator } from '@/composables/sliding.indicator';
import { useSkillProjectFilter } from '@/composables/skill.project.filter';
import { useCursorTilt } from '@/composables/cursor.tilt';
import { useInView } from '@/composables/in.view';
import { useScrollReveal } from '@/composables/scroll.reveal';
import { useMagnetic } from '@/composables/magnetic';
import { useTypewriter } from '@/composables/typewriter';
import { usePageLoader } from '@/composables/page.loader';
import cv from '@/assets/CV.pdf';

type AnimationVariant = {
  [key: string]: VariantType;
} & { initial: VariantType; enter: VariantType };

const { isMobile } = useScreenSize();
const { prefersReducedMotion } = useReducedMotion();
const { isLoading } = usePageLoader();
const isNavOpen = ref(false);

const navItems = [
  { id: 'profile', label: 'Profile' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'sertifikat', label: 'Certificate' },
  { id: 'technical-skills', label: 'Technical Skills' },
  { id: 'project', label: 'Project' },
  { id: 'contact', label: 'Contact' },
];
const { activeSection } = useScrollSpy(navItems.map((item) => item.id), 'profile');
const { setItemRef, style: indicatorStyle } = useSlidingIndicator(activeSection);

const { activeSkill, toggleSkill, matches, clear: clearSkillFilter } = useSkillProjectFilter();

const heroNameWords = 'Ayi Solahudin'.split(' ');
const { displayedText: typedRole } = useTypewriter('Fullstack Developer');

const heroBioRef = ref<HTMLElement | null>(null);
const { isVisible: isHeroBioVisible } = useInView(heroBioRef, { threshold: 0.1 });

// Special Motion Effect — each content section fades in on scroll-into-view
// and fades back out on scroll-away, replaying every time (not one-shot).
const experienceReveal = useScrollReveal();
const educationReveal = useScrollReveal();
const certificateReveal = useScrollReveal();
const skillsReveal = useScrollReveal();
const projectReveal = useScrollReveal();
const contactReveal = useScrollReveal();

const photoRef = ref<HTMLElement | null>(null);
const { tiltStyle: photoTiltStyle, onMouseMove: onPhotoMouseMove, onMouseLeave: onPhotoMouseLeave } = useCursorTilt(photoRef, 8);

const cvButtonRef = ref<HTMLElement | null>(null);
const { magneticStyle: cvMagneticStyle, onMouseMove: onCvMouseMove, onMouseLeave: onCvMouseLeave } = useMagnetic(cvButtonRef, 0.25);

const heroStats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Delivered', value: `${dataProject.length}+` },
  { label: 'Enterprise Clients', value: `${dataExperience.length}` },
];

const fadeInUp = computed<AnimationVariant>(() => ({
  initial: { opacity: 0, y: prefersReducedMotion.value ? 0 : 30 },
  enter: { opacity: 1, y: 0, transition: { duration: prefersReducedMotion.value ? 0 : 0.6, ease: "easeOut" } }
}));

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const onScrollTo = (id: string) => {
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

// `motion.section`/`motion.footer` are Vue components (motion-v), so their
// template-ref callback receives the component instance, not the raw DOM
// node — unlike a plain <div>/<button> ref. Every component instance
// exposes `$el` for its root node, so this normalizes both cases.
function toEl(el: unknown): HTMLElement | null {
  return (el as { $el?: HTMLElement })?.$el ?? (el as HTMLElement | null);
}
</script>

<template>
  <PageLoader :visible="isLoading" />

  <div class="min-h-screen bg-paper text-ink selection:bg-accent/20 font-sans pb-12">

    <div v-if="isMobile" class="flex flex-row justify-between items-center pt-8 px-8 z-50">
      <ThemeToggle />
      <button @click="openNav" aria-label="Open menu">
        <ThAlignJustify class="w-18 h-18"/>
      </button>
    </div>
    <nav v-if="!isMobile" class="sticky top-0 py-3 w-full bg-surface/80 backdrop-blur-md border-b border-border z-50">
      <div class="max-w-4xl mx-auto px-6 sm:px-10 flex justify-center items-center gap-6">
        <div class="relative flex items-center gap-4">
          <button
            v-for="item in navItems"
            :key="item.id"
            :ref="(el) => setItemRef(item.id, el as HTMLElement | null)"
            @click="onScrollTo(item.id)"
            :class="[
              'text-base transition-colors duration-300',
              activeSection === item.id ? 'text-ink' : 'text-ink-muted hover:text-ink'
            ]"
          >{{ item.label }}</button>
          <div
            class="absolute -bottom-1.5 h-0.5 rounded-full bg-accent transition-all duration-300 ease-out"
            :style="indicatorStyle"
          ></div>
        </div>
        <ThemeToggle />
      </div>
    </nav>
    <Transition name="nav-fade">
      <div
        v-if="isNavOpen"
        @click.self="openNav"
        class="fixed inset-0 w-full h-full bg-paper z-50 flex flex-col p-4"
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
              activeSection === item.id ? 'text-ink' : 'text-ink-muted hover:text-ink'
            ]"
          >{{ item.label }}</button>
        </div>
      </div>
    </Transition>

    <!-- Header / Hero Section -->
    <motion.header
      :initial="fadeInUp.initial"
      :animate="fadeInUp.enter"
      class="relative max-w-4xl mx-auto pt-24 pb-5 px-6 sm:px-10 flex flex-col md:flex-row items-center gap-10"
      id="profile"
    >
      <GradientMesh />
      <div class="flex flex-col gap-4 items-center">
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-accent to-recognition rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div
            ref="photoRef"
            :style="photoTiltStyle()"
            @mousemove="onPhotoMouseMove"
            @mouseleave="onPhotoMouseLeave"
            class="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-border shadow-2xl"
          >
            <img src="../assets/profile.webp" alt="Ayi Solahudin Profile" class="w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-700 ease-in-out" />
            <GrainOverlay rounded="rounded-full" />
          </div>
        </div>
        <div class="flex-1 text-center">
          <button
            ref="cvButtonRef"
            @mousemove="onCvMouseMove"
            @mouseleave="onCvMouseLeave"
            :style="cvMagneticStyle()"
            @click="openCv"
            class="border border-accent px-4 py-1 rounded-md text-accent hover:bg-accent hover:text-on-accent transition-colors duration-300 font-bold text-base"
          >Download CV</button>
        </div>
      </div>

      <div class="flex-1 text-center md:text-left space-y-4">
        <h1 class="group relative inline-block font-display text-4xl md:text-5xl font-semibold tracking-tight text-ink drop-shadow-sm">
          <motion.span
            v-for="(word, i) in heroNameWords"
            :key="word"
            :initial="{ opacity: 0, y: 16, filter: 'blur(6px)' }"
            :animate="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
            :transition="{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.15 + i * 0.12, ease: 'easeOut' }"
            class="inline-block mr-3"
          >{{ word }}</motion.span>
          <GrainOverlay />
        </h1>
        <h2 class="text-accent font-medium tracking-wide uppercase text-sm">
          {{ typedRole }}<span class="typewriter-cursor ml-0.5" aria-hidden="true">|</span>
        </h2>
        <p ref="heroBioRef" :data-reveal="isHeroBioVisible" class="text-ink-soft leading-relaxed text-sm md:text-base font-normal max-w-xl text-justify">
          Frontend Developer with 3+ years of experience in building <strong class="metric">high-performance, scalable enterprise web applications</strong>.
          With a proven track record at <span class="text-ink font-semibold">PT Bank Rakyat Indonesia (BRI)</span> and <span class="text-ink font-semibold">Direktorat Jenderal Bea Cukai</span>, I architect complex state management, optimize rendering performance, and deliver seamless user experiences that drive business impact.
        </p>
        <div class="flex justify-center md:justify-start gap-6 pt-2">
          <StatTile v-for="(stat, index) in heroStats" :key="index" :value="stat.value" :label="stat.label" />
        </div>
      </div>
    </motion.header>

    <!-- Content Sections -->
    <main class="max-w-4xl mx-auto px-6 sm:px-10 space-y-16">

      <!-- Experience Section -->
      <motion.section
        :ref="(el) => (experienceReveal.target.value = toEl(el))"
        :initial="fadeInUp.initial"
        :animate="experienceReveal.isVisible.value ? fadeInUp.enter : fadeInUp.initial"
        class="space-y-6"
        id="experience"
      >
        <SectionHeading title="Experience" />
        <div class="grid gap-6">
          <SectionCard
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
        :ref="(el) => (educationReveal.target.value = toEl(el))"
        :initial="fadeInUp.initial"
        :animate="educationReveal.isVisible.value ? fadeInUp.enter : fadeInUp.initial"
        class="space-y-6"
        id="education"
      >
        <SectionHeading title="Education" />
        <div class="grid gap-6">
          <SectionCard
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
        :ref="(el) => (certificateReveal.target.value = toEl(el))"
        :initial="fadeInUp.initial"
        :animate="certificateReveal.isVisible.value ? fadeInUp.enter : fadeInUp.initial"
        class="space-y-6"
        id="sertifikat"
      >
        <SectionHeading title="Certificate" />
        <div class="grid gap-6">
          <SectionCard
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
        :ref="(el) => (skillsReveal.target.value = toEl(el))"
        :initial="fadeInUp.initial"
        :animate="skillsReveal.isVisible.value ? fadeInUp.enter : fadeInUp.initial"
        class="space-y-6"
        id="technical-skills"
      >
        <SectionHeading title="Technical Skills" />
        <p class="text-xs text-ink-muted -mt-2">Klik salah satu skill untuk melihat project yang memakainya.</p>
        <div class="grid gap-6">
          <div class="group relative p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 hover:bg-surface-hover transition-all duration-300">
            <div class="flex flex-wrap gap-6 md:flex-row md:justify-between">
              <div
                v-for="(item, index) in techStack"
                :key="index"
                class="flex-1 min-w-[160px]"
              >
                <TitledList
                  :title="item.title"
                  :list="item.list"
                  :activeSkill="activeSkill"
                  @select-skill="toggleSkill"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        :ref="(el) => (projectReveal.target.value = toEl(el))"
        :initial="fadeInUp.initial"
        :animate="projectReveal.isVisible.value ? fadeInUp.enter : fadeInUp.initial"
        class="space-y-6"
        id="project"
      >
        <div class="flex items-center gap-4 flex-wrap">
          <SectionHeading title="Project" class="flex-1" />
          <Transition name="fade">
            <button
              v-if="activeSkill"
              @click="clearSkillFilter"
              class="text-xs text-ink-muted hover:text-accent inline-flex items-center gap-1"
            >
              Filtering: <span class="font-medium text-accent">{{ activeSkill }}</span> ✕
            </button>
          </Transition>
        </div>

        <div class="grid gap-6 grid-cols-1 md:grid-cols-2">
          <ProjectCard
            v-for="(item, index) in dataProject"
            :key="index"
            :title="item.projectName"
            :description="item.description"
            :link="item.link"
            :images="item.images"
            :techStack="item.techStack"
            :dimmed="!matches(item.techStack)"
          />
        </div>
      </motion.section>

    </main>

    <!-- Footer -->
    <motion.footer
      :ref="(el) => (contactReveal.target.value = toEl(el))"
      :initial="{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }"
      :animate="contactReveal.isVisible.value ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 20 }"
      :transition="{ duration: prefersReducedMotion ? 0 : 0.6, ease: 'easeOut' }"
      class="max-w-4xl flex flex-col gap-3 mx-auto px-6 sm:px-10 mt-20 text-center"
      id="contact"
    >
      <div class="pt-8 border-t border-border flex flex-col items-center gap-4">
        <p class="text-sm text-ink-soft font-light hover:text-accent hover:transition-colors hover:duration-300">
          Ayi Solahudin - Fullstack Developer
        </p>
      </div>
      <div class="flex flex-row gap-3 justify-center items-center">
        <motion.a
          v-for="(item, index) in contact"
          :key="index"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="item.name"
          :whileHover="{ scale: 1.25, rotate: -8 }"
          :transition="{ type: 'spring', stiffness: 400, damping: 10 }"
          class="text-ink-soft hover:text-accent inline-flex"
        >
          <component :is="iconMap[item.icon as keyof typeof iconMap]" class="w-6 h-6" />
        </motion.a>
      </div>

      <div class="flex flex-row gap-2 justify-center items-center mt-4">
        <h1 class="text-sm font-light text-ink-muted hover:text-accent hover:transition-colors hover:duration-300">
          Build with Vue Js, Vite, Tailwind Css, and Motion-V
        </h1>
      </div>
    </motion.footer>

    <div class="sticky bottom-10 flex flex-row justify-end pr-10">
      <button @click="scrollToTop" class="cursor-pointer" aria-label="Scroll to top">
        <SuArrowUpCircle class="w-10 h-10 text-ink"/>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.typewriter-cursor {
  animation: caret-blink 1s step-end infinite;
}
@keyframes caret-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
