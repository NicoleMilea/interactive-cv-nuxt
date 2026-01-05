<script setup lang="ts">
    const props = defineProps<{
        skillName: string,
        backgroundColor: string
    }>()
</script>

<template>
  <div class="item" :class="backgroundColor">
    <span class="skill-name">
        {{ skillName }}
    </span>
  </div>
</template>

<style scoped>
    .item {
        padding: 5px 10px;
        border-radius: 5px;
    }
</style>
