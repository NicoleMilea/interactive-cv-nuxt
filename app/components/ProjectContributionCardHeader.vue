<script setup lang="ts">
import { CaLaptop } from '@kalimahapps/vue-icons/ca'
   
    const props = defineProps<{
        contributionTitle: string,
        when: string,
        color: string
    }>()
</script>

<template>
  <div class="card">
    <CaLaptop :width="20" :height="20" class="icon" :class="color"/>
    <div class="contribution-details">
        <span class="contribution-title">
            {{ contributionTitle }}
        </span>
        <span class="time">
            {{ when }}
        </span>
    </div>
  </div>
</template>

<style scoped>
    .card {
        padding: 5px 10px;
        border-radius: 5px;
        max-height: 200px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 10px;
        background-color: white;
    }

    .contribution-details{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
    
    .icon {
        display: inline-block;
        flex-shrink: 0;
    }

    .time{
        font-size: 0.8rem;
        color: #6b7280;
    }
</style>
