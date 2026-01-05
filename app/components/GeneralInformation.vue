<script setup lang="ts">
import Skills from './Skills.vue';
import ProjectContributionCardHeader from './ProjectContributionCardHeader.vue';
</script>

<template>
  <div class="main-wrapper w-full">
    <div class="about-me border-bottom custom-spacing-top-bottom">
        <h3 class="black font-bold pt-2 pb-2">About Me</h3>
        <p class="pb-2">Experienced software engineer specializing in backend, frontend, and AI solutions.</p>
    </div>

    <div class="key-skills border-bottom custom-spacing-top-bottom">
        <h3 class="black font-bold pt-2 pb-2">Key Skills</h3>
        <div class="skils custom-spacing-top-bottom">
            <Skills skillName=".NET" backgroundColor="bg-gray-300" />
            <Skills skillName="AWS" backgroundColor="bg-green-200" />
            <Skills skillName="JavaScript" backgroundColor="bg-blue-200" />
            <Skills skillName="Step Functions" backgroundColor="bg-pink-300" />
            <Skills skillName="VueJS" backgroundColor="bg-yellow-200" />
            <Skills skillName="ChatGPT" backgroundColor="bg-orange-200" />
        </div>
    </div>

    <div class="key-skills custom-spacing-top-bottom padding-bottom">
        <h3 class="black font-bold pt-2 pb-2">Recent Major Contributions</h3>
        <div class="flex flex-wrap flex-col custome-gap gap-3 custom-spacing-top-bottom"> 
            <ProjectContributionCardHeader contributionTitle="LLM Agent Orchestration" when="2025" color="fill-green-500" />
            <ProjectContributionCardHeader contributionTitle="Serverless setup" when="2025" color="fill-pink-500" />
            <ProjectContributionCardHeader contributionTitle="AI Styling" when="2024" color="fill-blue-500" />
        </div>
        <RouterLink class="see-more text-gray-400" to="/projects"><span>See more ... </span></RouterLink>
    </div>
  </div>
</template>

<style scoped>
    .skils {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    
    .padding-bottom {
        padding-bottom: 10px !important;
    }

    .see-more {
        justify-content: flex-end;
        display: flex;
        padding-right: 10px;

        span{
            font-size: 0.8rem;
        }
    }
</style>
