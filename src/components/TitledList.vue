<script lang="ts" setup>
import SkillChip from './SkillChip.vue';

defineProps<{
  title: string;
  list: string[];
  activeSkill: string | null;
}>()

defineEmits<{
  'select-skill': [skill: string];
}>()
</script>

<template>
  <h5 class="font-display text-lg text-ink">{{ title }}</h5>
  <ul class="flex flex-wrap gap-2 mt-2">
    <SkillChip
      v-for="(item, index) in list"
      :key="index"
      :label="item"
      :active="activeSkill === item"
      @select="$emit('select-skill', $event)"
    />
  </ul>
</template>
