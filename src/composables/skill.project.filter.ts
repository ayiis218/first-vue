import { ref } from 'vue';

/**
 * Cross-filter between the Technical Skills chips and the Project cards.
 * Clicking a skill toggles it as "active"; `matches(techStack)` tells a
 * project card whether it should be highlighted for the currently active skill.
 */
export function useSkillProjectFilter() {
  const activeSkill = ref<string | null>(null);

  function toggleSkill(skill: string) {
    activeSkill.value = activeSkill.value === skill ? null : skill;
  }

  function matches(techStack: string): boolean {
    if (!activeSkill.value) return true;
    return techStack.toLowerCase().includes(activeSkill.value.toLowerCase());
  }

  function clear() {
    activeSkill.value = null;
  }

  return { activeSkill, toggleSkill, matches, clear };
}
