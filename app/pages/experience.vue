<script setup lang="ts">
    import ExperienceSection from '../components/ExperienceSection.vue';
</script>
    

<template>
    <div class="custom-spacing-left-right">
        <div class="custom-spacing-top-bottom mt-3 experience-text experience-container">
        <ExperienceSection
            experienceTitle="Senior Software Engineer / Frontend Developer"
            experienceCompany="AnnoAnno"
            :experienceDescription="['Built and maintained full-stack, production-grade applications using Vue.js (2/3), Nuxt 3, TypeScript, and .NET Core, delivering reliable APIs and polished user experiences for both technical and non-technical users.',
             'Designed and operated cloud-native, event-driven architectures with AWS Lambda, Step Functions, S3, and CloudFront, owning deployment, testing, and iterative improvements in close collaboration with the team.',
             'Bridged engineering, product, and marketing by delivering a unified Webflow + Nuxt ecosystem, enabling marketing teams to manage content independently, while also integrating ChatGPT-powered features.']"
            experienceDate="July 2022 - Present"
            iconColor="fill-pink-800"
        />
        <ExperienceSection
            experienceTitle="Full-stack Software Engineer"
            experienceCompany="Computacenter Romania"
            :experienceDescription="['Contributed to a legacy core system built on .NET Framework with embedded Angular, focusing on stability, maintenance, and incremental improvements to support ongoing business operations.',
             'Designed and delivered two new logistics-focused products, combining Vue.js frontends with .NET backends, providing modern, maintainable solutions aligned with evolving business requirements.',
             'Mentored an entry-level software engineer across both frontend and backend development, supporting technical growth and best practices.']"
            experienceDate="May 2021 - July 2022"
            iconColor="fill-green-800"
        />
        <ExperienceSection
            experienceTitle="Backend Software Engineer"
            experienceCompany="SupplyPoint / TouchPoint Medical"
            :experienceDescription="['Delivered and maintained IoT-enabled software solutions for smart lockers used in industrial and medical environments, including WPF applications, Windows Services, and an Electron app.',
             'Designed and implemented Windows Services and background APIs responsible for deploying and updating software on connected devices, leveraging direct database access to orchestrate updates across fleets of smart lockers.',
             'Worked across both legacy .NET Framework and newer .NET Core projects, balancing system stability with gradual modernization in a production-critical environment.']"
            experienceDate="Jan 2020 - May 2021"
            iconColor="fill-blue-800"
        />

        <ExperienceSection
            experienceTitle="Junior Backend Software Engineer"
            experienceCompany="Rubrikk.no"
            :experienceDescription="['Worked as part of the Big Data Team, contributing to backend systems built on .NET Framework, with a strong focus on reliability, correctness, and long-term maintainability.',
             'Owned and maintained two data-processing microservices, handling large data volumes and delivering pipelines for outlier detection, statistical analysis, and actionable reporting insights.',
             'Collaborated cross-functionally to improve data quality and reporting accuracy, leveraging SQL, Azure Storage, Google Cloud Storage, and BigQuery to store and process datasets efficiently.']"
            experienceDate="Sept 2017 - Jan 2020"
            iconColor="fill-orange-800"
        />

        </div>
    </div>
</template>

<style scoped>
.experience-text{
    max-width: 1400px;
    overflow: auto;
}

.experience-container {
    position: relative;
}

.experience-container::before {
    content: '';
    position: absolute;
    left: calc(1rem + 0.6rem); /* pl-4 (1rem = left padding) + half icon width (0.6rem = 1.2rem/2) */
    top: calc(0.75rem + 0.25rem + 1.2rem); /* mt-3 (0.75rem) + mt-1 (0.25rem) + icon height (1.2rem) */
    width: 2px;
    bottom: 0.75rem; /* bottom spacing */
    background-color: #e5e7eb; /* gray-200 */
    z-index: 0;
}

@media (min-width: 1400px) and (max-width: 1920px) {
    .experience-container::before {
        left: calc(1rem + 0.7rem); /* pl-4 (1rem) + half icon width (0.7rem = 1.4rem/2) */
        top: calc(0.75rem + 0.25rem + 1.4rem); /* mt-3 (0.75rem) + mt-1 (0.25rem) + icon height (1.4rem) */
    }
}

@media (min-width: 1920px) {
    .experience-container::before {
        left: calc(1rem + 0.9rem); /* pl-4 (1rem) + half icon width (0.9rem = 1.8rem/2) */
        top: calc(0.75rem + 0.25rem + 1.8rem); /* mt-3 (0.75rem) + mt-1 (0.25rem) + icon height (1.8rem) */
    }
}
</style>