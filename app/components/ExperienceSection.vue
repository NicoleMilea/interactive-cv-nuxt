<script setup lang="ts">
import { UnBagAlt } from '@kalimahapps/vue-icons';

    const props = defineProps<{
        experienceTitle: string,
        experienceCompany: string,
        experienceDescription: string[],
        experienceDate: string,
        iconColor: string
    }>()
</script>

<template>
    <div class="experience-component pt-2 pb-2 pl-4 pr-4">
            <div class="title-information flex justify-between pb-2">
                <div class="flex gap-2 place-items-top" style="width: 80%;">
                    <div class="icon-container">
                        <div class="icon-wrapper mt-1">
                            <UnBagAlt class="icon" :class="iconColor"/>
                        </div>
                    </div>
                    <div class="flex flex-col pl-4 pr-7">
                        <h3 class="black font-bold">{{ experienceTitle }}</h3>
                        <span class="text-gray-500 company-name">{{ experienceCompany }}</span>

                        <ul class="list-disc list-outside mt-3 pl-4">
                            <li v-for="description in experienceDescription" :key="description">{{ description }}</li>
                        </ul>
                    </div>
                </div>
                <span class="text-gray-500 company-name" style="width: 20%;">{{ experienceDate }}</span>
            </div>
        </div>
</template>

<style scoped>
.title-information {
    position: relative;
}

.icon-container {
    position: relative;
    flex-shrink: 0;
}

.icon-wrapper {
    display: inline-flex;
    align-items: center;
    width: 1.2rem;
    height: 1.2rem;
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

.company-name {
    font-size: 1rem;
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
        font-size: 1rem; /* text-md equivalent */
    }

    .icon-wrapper{
        width: 1.8rem;
        height: 1.8rem;
    }
}
</style>