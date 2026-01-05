<script setup lang="ts">
import { ref } from 'vue'

const showDetails = [ref(false), ref(false), ref(false)];
const wrapperRefs = [ref<HTMLElement | null>(null), ref<HTMLElement | null>(null), ref<HTMLElement | null>(null)];
const contentRefs = [ref<HTMLElement | null>(null), ref<HTMLElement | null>(null), ref<HTMLElement | null>(null)];
const heights = [ref(300), ref(300), ref(300)];

const measureAndExpand = (index: number) => {
    const wrapper = wrapperRefs[index]?.value;
    const content = contentRefs[index]?.value;
    const heightRef = heights[index];
    
    if (!wrapper || !content || !heightRef) return;
    
    // Temporarily remove height constraint to measure full content
    const currentMaxHeight = wrapper.style.maxHeight;
    wrapper.style.maxHeight = 'none';
    heightRef.value = content.scrollHeight;
    wrapper.style.maxHeight = currentMaxHeight || '300px';
    
    // Force reflow to ensure browser is ready, then toggle
    void wrapper.offsetHeight;
    const showDetailRef = showDetails[index];
    if (showDetailRef) {
        showDetailRef.value = true;
    }
};

const toggleProject = (index: number) => {
    const showDetailRef = showDetails[index];
    if (!showDetailRef) return;
    
    if (!showDetailRef.value) {
        measureAndExpand(index);
    } else {
        showDetailRef.value = false;
    }
};

// Convenience functions for template
const toggleProject1 = () => toggleProject(0);
const toggleProject2 = () => toggleProject(1);
const toggleProject3 = () => toggleProject(2);

// Expose refs for template (using array indices)
const [wrapperRef1, wrapperRef2, wrapperRef3] = wrapperRefs;
const [contentRef1, contentRef2, contentRef3] = contentRefs;
const [height1, height2, height3] = heights;
const [showDetailsProject1, showDetailsProject2, showDetailsProject3] = showDetails;
</script>

<template>
    <div class="custom-spacing-top-bottom custom-spacing-left-right mt-3 overview-text"  style="max-width: 1400px;">
        <div class="rounded-md border border-gray-200 shadow-md p-4 flex flex-col">
            <div ref="wrapperRef1" class="project-content-wrapper" :style="{ maxHeight: showDetailsProject1 ? `${height1}px` : '300px' }">
                <div ref="contentRef1" class="project-content">
                    <div class="flex flex-col border-bottom border-gray-200 pb-4">
                        <h3 class="black font-bold">Project 1 — AI-Powered Fashion & Styling Platform</h3>
                        <span class="text-gray-500 company-name">AnnoAnno</span>
                    </div>

                    <div class="pt-4 overflow-hidden">
                        <div class="float-left w-[40%] mr-8 mb-4">
                            <NuxtImg src="/projects/annoanno-project-preview.webp" width="100%" height="auto" format="webp" densities="1x 2x"  class="rounded-xl border"  alt="AnnoAnno public website" />
                            <span class="text-gray-500 mt-2 custom-font-size pl-2 pr-2 block">Public-facing screenshot from the AnnoAnno website. Shown for illustrative purposes only.</span>
                        </div>
                        <p class="leading-[1]"><span class="text-black font-medium pr-2 subtitle-font-size leading-[1]">Context:</span><span class="font-thin text-gray-600 content-font-size leading-[1]">Long-term product platform focused on delivering personalized fashion and styling experiences. The product pre-dated my involvement and has been continuously evolved by a cross-functional engineering team.</span></p>
                        <p class="leading-[1] mt-3"><span class="text-black font-medium pr-2 subtitle-font-size leading-[1]">Role:</span><span class="font-thin text-gray-600 content-font-size leading-[1]">Senior Full-Stack Software Engineer</span></p>
                        <div class="leading-[1] mt-3">
                            <p class="leading-[1]"><span class="text-black font-medium pr-2 subtitle-font-size leading-[1]">What I owend & delivered:</span></p>
                            <ul class="list-disc list-outside pl-6 leading-[1] pt-1">
                                <li class="content-font-size pb-2 font-thin text-gray-600">Led and owned the <b>frontend implementation</b> for the past 3+ years, building and maintaining the Nuxt / Vue.js application end to end, with a strong focus on UX, robustness, and error handling.</li>
                                <li class="content-font-size pb-2 font-thin text-gray-600">Co-implemented <b>AI-powered features</b> together with a colleague, while taking ownership of <b>most LLM-related development</b>, including prompt design, API integrations, and orchestration logic.</li>
                                <li class="content-font-size pb-2 font-thin text-gray-600">Designed and implemented the <b>LLM Agent Orchestrator</b> from scratch, coordinating multiple AI agents and workflows to support complex, production-ready use cases.</li>
                                <li class="content-font-size pb-2 font-thin text-gray-600">Owned the <b>Webflow + CMS Collections architecture</b>, designing and delivering a hybrid Webflow–Nuxt solution that enabled marketing teams to manage content independently without developer involvement.</li>
                                <li class="content-font-size pb-2 font-thin text-gray-600">Implemented and maintained <b>AWS Lambda functions and selected Step Functions</b>, supporting AI workflows, backend processes, and event-driven integrations.</li>
                            </ul>
                        </div>
                        <p class="leading-[1] mt-3"><span class="text-black font-medium pr-2 subtitle-font-size leading-[1]">Tech:</span><span class="font-thin text-gray-600 content-font-size leading-[1]">.NET Core · AWS · Lambda · Step Functions · Vue.js · Nuxt · TypeScript · Webflow · ChatGPT</span></p>
                    </div>
                </div>
            </div>
            <span class="content-font-size flex justify-end flex-wrap text-gray-500 mt-3 pl-2 pr-2 cursor-pointer" @click="toggleProject1">{{ showDetailsProject1 ? 'See less...' : 'See more...' }}</span>
        </div>


        <div class="rounded-md border border-gray-200 shadow-md p-4 mt-4 flex flex-col">
            <div ref="wrapperRef2" class="project-content-wrapper" :style="{ maxHeight: showDetailsProject2 ? `${height2}px` : '300px' }">
                <div ref="contentRef2" class="project-content">
                    <div class="flex flex-col border-bottom border-gray-200 pb-4">
                        <h3 class="black font-bold">Project 2 — Smart Locker Software Distribution & Management</h3>
                        <span class="text-gray-500 company-name">SupplyPoint · IoT / Industrial System</span>
                    </div>

                    <div class="pt-4 overflow-hidden">
                        <div class="float-right w-[40%] ml-8 mb-4">
                            <NuxtImg src="/projects/smart-locker-architecture-diagram.webp" width="100%" height="auto" format="webp" densities="1x 2x"  class="rounded-xl border"  alt="AnnoAnno public website" />
                            <span class="text-gray-500 mt-2 custom-font-size pl-2 pr-2 block">Diagram shown for architectural illustration only. Implementation details intentionally omitted.</span>
                        </div>
                        <p class="leading-[1]"><span class="text-black font-medium pr-2 subtitle-font-size leading-[1]">Context:</span><span class="font-thin text-gray-600 content-font-size leading-[1]">IoT-enabled smart lockers deployed in factory and medical environments, operating under restricted network conditions with a parent–child device topology.</span></p>
                        <p class="leading-[1] mt-3"><span class="text-black font-medium pr-2 subtitle-font-size leading-[1]">Role:</span><span class="font-thin text-gray-600 content-font-size leading-[1]">Backend Software Engineer</span></p>
                        <div class="leading-[1] mt-3">
                            <p class="leading-[1]"><span class="text-black font-medium pr-2 subtitle-font-size leading-[1]">What I owend & delivered:</span></p>
                            <ul class="list-disc list-outside pl-6 leading-[1] pt-1">
                                <li class="content-font-size pb-2 font-thin text-gray-600"><b>Co-developed a WPF application and multiple Windows Services</b> powering smart locker devices, designed to operate reliably in <b>restricted-network, production-critical environments</b>.</li>
                                <li class="content-font-size pb-2 font-thin text-gray-600">Implemented a <b>software delivery and update service</b> running on both parent and child lockers, capable of: detecting its execution context (main vs. secondary device), locating update packages from either a <b>server-backed database</b> or a <b>shared intranet-accessible location</b>, unpacking and installing updated executables automatically across the locker fleet.</li>
                                <li class="content-font-size pb-2 font-thin text-gray-600">Built a second <b>resource synchronization service</b> responsible for retrieving and distributing shared assets (configuration, static resources, media) from the parent locker to all connected devices, ensuring consistency across the system.</li>
                                <li class="content-font-size pb-2 font-thin text-gray-600">Integrated <b>centralized logging and monitoring</b> (Papertrail) to track device health, installation status, and runtime issues in near real time, improving observability across deployed lockers.</li>
                                <li class="content-font-size pb-2 font-thin text-gray-600">Worked across legacy <b>.NET Framework</b> and newer <b>.NET Core</b> components, balancing reliability, maintainability, and gradual modernization.</li>
                            </ul>
                        </div>
                        <p class="leading-[1] mt-3"><span class="text-black font-medium pr-2 subtitle-font-size leading-[1]">Tech:</span><span class="font-thin text-gray-600 content-font-size leading-[1]">.NET Framework · .NET Core · .NET Standard · WPF · Windows Services · IoT · SQL · Papertrail</span></p>
                    </div>
                </div>
            </div>
            <span class="content-font-size flex justify-end flex-wrap text-gray-500 mt-3 pl-2 pr-2 cursor-pointer" @click="toggleProject2">{{ showDetailsProject2 ? 'See less...' : 'See more...' }}</span>
        </div>


        <div class="rounded-md border border-gray-200 shadow-md p-4 mt-4 flex flex-col">
            <div ref="wrapperRef3" class="project-content-wrapper" :style="{ maxHeight: showDetailsProject3 ? `${height3}px` : '300px' }">
                <div ref="contentRef3" class="project-content">
                    <div class="flex flex-col border-bottom border-gray-200 pb-4">
                        <h3 class="black font-bold">Project 3 — Deduplication Service for Classified Ads Aggregation</h3>
                        <span class="text-gray-500 company-name">Rubrikk · Data Processing / Backend Systems</span>
                    </div>

                    <div class="pt-4 overflow-hidden">
                        <div class="float-left w-[40%] mr-8 mb-4">
                            <NuxtImg src="/projects/deduplication-architecture.webp" width="100%" height="auto" format="webp" densities="1x 2x"  class="rounded-xl border"  alt="AnnoAnno public website" />
                            <span class="text-gray-500 mt-2 custom-font-size pl-2 pr-2 block">Diagram shown for architectural illustration only. Implementation details intentionally omitted.</span>
                        </div>
                        <p class="leading-[1]"><span class="text-black font-medium pr-2 subtitle-font-size leading-[1]">Context:</span><span class="font-thin text-gray-600 content-font-size leading-[1]">Product platform aggregating classified ads (cars, real estate, jobs, etc.) by crawling multiple portals across different countries and categories.</span></p>
                        <p class="leading-[1] mt-3"><span class="text-black font-medium pr-2 subtitle-font-size leading-[1]">Role:</span><span class="font-thin text-gray-600 content-font-size leading-[1]">Junior Backend Software Engineer</span></p>
                        <div class="leading-[1] mt-3">
                            <p class="leading-[1]"><span class="text-black font-medium pr-2 subtitle-font-size leading-[1]">What I owend & delivered:</span></p>
                            <ul class="list-disc list-outside pl-6 leading-[1] pt-1">
                                <li class="content-font-size pb-2 font-thin text-gray-600">Owned and maintained a <b>deduplication microservice</b> responsible for identifying identical ads published across multiple external portals.</li>
                                <li class="content-font-size pb-2 font-thin text-gray-600">Designed <b>category-specific matching and hashing strategies</b>, extracting relevant attributes (e.g. price, location, make/model, characteristics) to generate deterministic hashes for duplicate detection.</li>
                                <li class="content-font-size pb-2 font-thin text-gray-600">Implemented logic to <b>merge and surface the most complete version of an ad</b>, prioritizing richer data (images, descriptions, metadata) when duplicates were detected.</li>
                                <li class="content-font-size pb-2 font-thin text-gray-600">Impact: Improved data quality and user experience by reducing duplicate listings and consolidating richer ad content across sources.</li>
                            </ul>
                        </div>
                        <p class="leading-[1] mt-3"><span class="text-black font-medium pr-2 subtitle-font-size leading-[1]">Tech:</span><span class="font-thin text-gray-600 content-font-size leading-[1]">.NET Framework · Microservices · SQL · Data Processing · Hashing · Azure Storage · GCS · BigQuery</span></p>
                    </div>
                </div>
            </div>
            <span class="content-font-size flex justify-end flex-wrap text-gray-500 mt-3 pl-2 pr-2 cursor-pointer" @click="toggleProject3">{{ showDetailsProject3 ? 'See less...' : 'See more...' }}</span>
        </div>
    </div>
</template>

<style scoped>
.custom-font-size {
    font-size: 0.5rem;
    line-height: 0.5rem;
}
.content-font-size,
.subtitle-font-size{
    line-height: 1.2 !important;
}

.content-font-size b,
.content-font-size strong {
    font-weight: 700 !important;
}

.project-content-wrapper {
    transition: max-height 0.6s cubic-bezier(0.6, 0, 0.6, 1);
    overflow: hidden;
}

.project-content {
    overflow: hidden;
}

@media (max-width: 700px) {
    .content-font-size {
        font-size: 0.6rem; /* text-xs */
    }

    li.content-font-size {
        font-size: 0.57rem; /* text-xs */
    }
    .subtitle-font-size{
        font-size: 0.63rem;
    }
}

@media (min-width: 701px) and (max-width: 1400px) {
    .content-font-size {
        font-size: 0.8rem; /* text-base */
    }
    li.content-font-size {
        font-size: 0.77rem; /* text-xs */
    }
    .subtitle-font-size{
        font-size: 0.83rem;
    }
}

@media (min-width: 1400px) and (max-width: 1920px) {
    .content-font-size {
        font-size: 0.9rem; /* text-sm */
    }
    li.content-font-size {
        font-size: 0.87rem; /* text-xs */
    }
    .subtitle-font-size{
        font-size: 0.93rem;
    }
}

@media (min-width: 1920px) {
    .content-font-size {
        font-size: 1rem; /* text-md equivalent */
    }
    li.content-font-size {
        font-size: 0.97rem; /* text-xs */
    }
    .subtitle-font-size{
        font-size: 1.03rem;
    }
}
</style>
