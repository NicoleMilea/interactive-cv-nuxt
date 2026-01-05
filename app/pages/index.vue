<script setup lang="ts">
import { CdSearch, BsCheckCircleFill, SiReaddotcv } from '@kalimahapps/vue-icons';
</script>

<template>
    <div class="custom-spacing-top-bottom custom-spacing-left-right mt-3 overview-text"  style="max-width: 1400px;">
        <h3 class="black font-bold pt-2 pb-2">Professional Overview</h3>
        <div class="p-4 rounded-md border border-gray-200 shadow-sm">
            <p>Full-stack software engineer with <b>8+ years of experience</b> building scalable backend, frontend, and cloud-based systems for real-world products.</p>
            <br>
            <p>Experienced in both <b>modern cloud-native systems</b> and legacy <b>.NET environments</b>, with a strong focus on <b>reliability, performance</b>, and real-world product impact. I’ve spent the last years working in a product company, owning core backend, frontend, and AI-powered workflows end to end.</p>
        </div>

        <div class="flex justify-left pt-6" style="overflow: auto;">
            <div class="flex gap-2 custome-gap w-full justify-evenly items-center general-information-container">
                <div class="flex flex-col rounded-md border border-gray-200 shadow-sm p-3 h-full overview-card">
                    <span class="font-bold">8+ Years Experience</span>
                    <span class="text-gray-500 custom-font-size">Full-stack • Backend • Frontend</span>
                </div>
                <div class="flex flex-col rounded-md border border-gray-200 shadow-sm p-3 h-full overview-card">
                    <span class="font-bold">.NET • Vue.js • AWS</span>
                    <span class="text-gray-500 custom-font-size">Serveless • Cloud-native</span>
                </div>
                <div class="flex flex-col rounded-md border border-gray-200 shadow-sm p-3 h-full overview-card">
                    <span class="font-bold">Long-term Product Work</span>
                    <span class="text-gray-500 custom-font-size">Backend, frontend & AI flows</span>
                </div>
                <div class="flex flex-col rounded-md border border-gray-200 shadow-sm p-3 h-full overview-card">
                    <span class="font-bold">Backend & Data Workflows</span>
                    <span class="text-gray-500 custom-font-size">LLM in Production</span>
                </div>
            </div>
        </div>

        <div class="pt-6">
            <h3 class="black font-bold pb-2">What I work on</h3>
            <ul class="list-disc list-inside mt-1">
                <li>Designing and maintaining <b>scalable backend APIs</b> and microservices</li>
                <li>Modernizing systems from legacy <b>.NET / WPF</b> to <b>.NET Core</b></li>
                <li>Orchestrating workflows using <b>AWS Lambda, Step Functions, S3, CloudFront</b></li>
                <li>Delivering robust frontends with Vue.js (2/3), Nuxt 3, and TypeScript</li>
                <li>Designing and integrating CMS-driven workflows, leveraging <b>Webflow Collections</b></li>
                <li>Creating systems that empower non-technical teams (<b>Webflow + Nuxt</b>)</li>
                <li>Integrating LLMs (<b>ChatGPT</b>) into <b>real production workflows</b></li>
                <li>Ensuring clean error handling and great UX for both technical and <b>non-technical users</b></li>
            </ul>
        </div>


        <div class="pt-6">
            <h3 class="black font-bold pb-2">How I work</h3>      
            <div class="flex flex-col sm:flex-row gap-2" style="max-width: 1000px;">         
                <div class="sm:w-1/2 full-w">
                    <ul class="list-none mt-1">
                        <li>I’m comfortable working in <b>Scrum, Kanban, and epic-based workflows</b>, and I take strong ownership of the systems I build. I enjoy mentoring, recently supporting an entry-level developer, and I’m comfortable stepping in wherever help is needed.</li>
                        <li>I’m technology-agnostic by mindset — my focus is always on the <b>product and business need</b>, not on sticking to a specific stack.</li>
                    </ul>
                </div>

                <div class="sm:w-1/2 full-w">
                    <div class="flex flex-col rounded-md border border-gray-200 shadow-md p-3">
                        <ul class="list-none">
                            <li>
                                <RouterLink class="flex gap-2 justify-between border-b border-gray-200" to="/experience">
                                    <div class="flex gap-2 place-items-center">
                                        <CdSearch :width="20" :height="20" class="icon fill-orange-800"/>
                                        <span class="font-bold" style="font-size: 1rem;">Explore further</span>
                                    </div>
                                    <span class="font-bold text-gray-400 pr-1">></span>
                                </RouterLink>
                                <RouterLink class="flex gap-2 justify-between border-b border-gray-200 pt-4" to="/ai-chat">
                                    <div class="flex gap-2 place-items-center">
                                        <BsCheckCircleFill :width="20" :height="20" class="icon fill-blue-400"/>
                                        <span style="font-size: 1rem;">Ask the AI chat about my experience</span>
                                    </div>
                                    <span class="font-bold text-gray-400 pr-1">></span>
                                </RouterLink>
                                <RouterLink class="flex gap-2 justify-between pt-4" to="/taylor-my-cv">
                                    <div class="flex gap-2 place-items-center">
                                        <SiReaddotcv :width="20" :height="20" class="icon fill-green-800"/>
                                        <span  style="font-size: 1rem;">Generate a tailored CV for a specific role</span>
                                    </div>
                                    <span class="font-bold text-gray-400 pr-1">></span>
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
</template>

<style scoped>

.general-information-container{
    min-width: 600px;
}

.overview-text{
    overflow: auto;
}

@media (max-width: 700px) {
    .custom-font-size {
        font-size: 0.6rem; /* text-xs */
    }

    li {
        font-size: 0.75rem;
        /* line-height: 1.25rem; */
    }
}

@media (min-width: 701px) and (max-width: 1400px) {
    .custom-font-size {
        font-size: 0.8rem; /* text-base */
    }
}

@media (min-width: 1400px) and (max-width: 1920px) {
    .custom-font-size {
        font-size: 0.9rem; /* text-sm */
    }
}

@media (min-width: 1920px) {
    .custom-font-size {
        font-size: 1rem; /* text-md equivalent */
    }

    .overview-card{
        padding: 1.5rem !important;
    }
}
</style>
