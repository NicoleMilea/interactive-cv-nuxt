<script setup lang="ts">
import type { Component } from 'vue'
    
    const props = defineProps<{
        skillName: string,
        skills: string[],
        iconComponent: Component,
        iconColor: string
    }>()
</script>

<template>
    <div class="flex flex-col rounded-md border border-gray-200 shadow-lg shadow-blue-200/60 p-4 h-full overview-card">
        <div class="flex items-center">
            <div class="icon-container">
                <div class="icon-wrapper mt-1">
                    <iconComponent class="icon" :class="iconColor"/>
                </div>
            </div>
            <span class="font-bold pl-2 skill-name">{{ skillName }}</span>
        </div>
        <ul class="list-disc list-outside pl-6 leading-[1] pt-2">
            <li v-for="skill in skills" :key="skill" class="content-font-size pb-2 font-thin text-gray-600">{{ skill }}</li>
        </ul>
    </div>
</template>


<style scoped>
.skill-name {
    font-size: 1rem;
}
.icon-container {
    position: relative;
    flex-shrink: 0;
}

.icon-wrapper {
    display: inline-flex;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    background-color: white; /* Ensure icon appears above the line */
}

.icon-wrapper .icon {
    width: 100%;
    height: 100%;
}

.icon-wrapper :deep(svg) {
    width: 100% !important;
    height: 100% !important;
}

@media (max-width: 700px) {
    li {
        font-size: 0.6rem; /* text-xs */
    }
}

@media (min-width: 701px) and (max-width: 1400px) {
    li {
        font-size: 0.8rem; /* text-base */
    }

    .company-name {
        font-size: 0.9rem;
    }
}

@media (min-width: 1400px) and (max-width: 1920px) {
    li {
        font-size: 0.9rem; /* text-sm */
    }

    .icon-wrapper{
        width: 1.4rem;
        height: 1.4rem;
    }
}

@media (min-width: 1920px) {
    li {
        font-size: 1.1rem;
        line-height: 1.3;
    }

    .icon-wrapper{
        width: 1.8rem;
        height: 1.8rem;
    }
}
</style>