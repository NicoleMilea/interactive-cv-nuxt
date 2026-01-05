<script setup lang="ts">
import { BsLightbulb, IoOutlineExtensionPuzzle, CdRobot, AnOutlinedSetting, CaColorPalette, FlDataHistogram } from '@kalimahapps/vue-icons';
import SkillsComponent from '../components/SkillsComponent.vue';
</script>
    

<template>
    <div class="custom-spacing-top-bottom custom-spacing-left-right mt-3 overview-text"  style="max-width: 1400px;">
        <h3 class="black font-bold pt-2 pb-2">Skills & Expertise</h3>
        <p>A focused overview of the technologies and areas I work with regularly in production environments.</p>

        <div class="pt-4 flex gap-2 w-full md:flex-row flex-col">
            <SkillsComponent class="md:w-1/3 w-full" style="height: -webkit-fill-available;" skillName="Core Engineering Areas" :skills="['Full-Stack Engineering', 'Serverless Architectures', 'LLM-powered Workflows', 'Distributed & Event-Driven Systems', 'Data Processing & System Reliability']" :iconComponent="BsLightbulb" iconColor="fill-yellow-500" />
            <SkillsComponent class="md:w-1/3 w-full" style="height: -webkit-fill-available;" skillName="Backend & Cloud" :skills="['.NET Core / .NET Framework', 'AWS Lambda · Step Functions · S3 · CloudFront', 'Microservices & Background Services', 'SQL · Data Modeling', 'Serverless & Event-Driven Design']" :iconComponent="AnOutlinedSetting" iconColor="fill-gray-500" />
            <SkillsComponent class="md:w-1/3 w-full" style="height: -webkit-fill-available;" skillName="AI & Automation" :skills="['ChatGPT / LLM API Integration', 'Prompt Design & Orchestration', 'LLM Agent Coordination', 'Automation via CI/CD & Pipelines']" :iconComponent="CdRobot" iconColor="fill-red-500" />

        </div>

        <div class="pt-4">
            <div class="flex md:flex-row flex-col gap-2 w-full">
                <SkillsComponent class="md:w-1/3 w-full" style="height: -webkit-fill-available;" skillName="Frontend" :skills="['Vue.js (2 & 3) · Nuxt 3 / Nuxt 4  ', 'TypeScript · JavaScript', 'Webflow & CMS Collections', 'UX-focused UI development', 'Robust error handling for user-facing systems']" :iconComponent="CaColorPalette" iconColor="fill-pink-400" />
                <SkillsComponent class="md:w-1/3 w-full" style="height: -webkit-fill-available;" skillName="Data & Systems" :skills="['Data Processing Pipelines', 'Deduplication & Data Quality Logic', 'Azure Storage · Google Cloud Storage · BigQuery', 'Monitoring & Observability']" :iconComponent="FlDataHistogram" iconColor="fill-blue-500" />
                <SkillsComponent class="md:w-1/3 w-full" style="height: -webkit-fill-available;" skillName="Collaboration & Ways of Working" :skills="['Product-driven development', 'Scrum · Kanban · Epic-based workflows', 'Cross-functional collaboration (Engineering, Product, Marketing)', 'Mentoring & knowledge sharing', 'Ownership of systems in production']" :iconComponent="IoOutlineExtensionPuzzle" iconColor="fill-red-500" />
            </div>
        </div>

    </div>
</template>
