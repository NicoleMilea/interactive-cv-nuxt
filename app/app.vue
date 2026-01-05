<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import GeneralInformation from './components/GeneralInformation.vue'

useHead({
    link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }
    ]
})
</script>

<template>
    <main class="flex">
        <header class="p-4 lg:p-8">
            <div class="border-bottom">
                <div class="wrapper pb-2 lg:pb-2">
                    <NuxtImg src="/avatar.webp" width="110" height="110" format="webp" densities="1x 2x" class="cv-portrait" alt="CV portrait" />
                    <div class="greetings">
                        <h1 class="black">Nicole</h1>
                        <h2 class="black">Software Engineer</h2>
                    </div>
                </div>
            </div>
            <GeneralInformation/>
        </header>
        <div class="md:ml-6 md:pt-3 lg:pt-5 content-width content">
            <nav class="border-bottom pb-2 lg:pb-2" width="100%">
                <NuxtLink class="router-link" to="/"><span>Overview</span></NuxtLink >
                <NuxtLink class="router-link" to="/experience"><span>Experience</span></NuxtLink>
                <NuxtLink class="router-link" to="/projects"><span>Projects</span></NuxtLink>
                <NuxtLink class="router-link" to="/skills"><span>Skills</span></NuxtLink>
                <NuxtLink class="router-link" to="/ai-chat"><span class="bg-gray-100 p-1 pl-3 pr-3 rounded-md">AI Chat</span></NuxtLink>
                <NuxtLink class="router-link" to="/taylor-my-cv"><span>Taylor My CV</span></NuxtLink>
            </nav>

            <div class="router-view-container">
                <NuxtPage />
            </div>
        </div>
    </main>

</template>

<style scoped>
header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.5;
    height: 100vh;
    max-height: 100vh;
    background-color: #f0f0f082;
    border-right: 1.5px solid var(--color-border);
    width: 30%;
    overflow: auto;
}

.content-width {
    width: 70%;
    }

.content{
    height: 100vh;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.router-view-container {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    min-height: 0;
}

.wrapper{
    display: flex;
    flex-wrap: wrap;
    place-items: center;
    margin: 0 auto;
    width: 100%;
    justify-content: center;

}

.cv-portrait {
    display: block;
    margin-right: 10px;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: left;
    margin-top: 2rem;
    display: flex;
    justify-content: stretch;
    flex-wrap: wrap;
    align-items: center;
}

nav a:first-of-type {
    border: 0;
}

nav a.router-link-exact-active {
    color: var(--color-text);
    font-weight: bold;
    position: relative;
}



nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    flex: 1;
    /* min-width: 0; */
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav a:first-of-type {
    border-left: none;
    padding-left: 1rem;
}

nav a.router-link-exact-active {
    position: relative;
}

nav a span {
    position: relative;
}

nav a span::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: rgba(0, 68, 255, 0.452);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
}

nav a.router-link-exact-active span::after {
    transform: scaleX(1);
}

h1 {
    font-weight: 500;
    font-size: 1.8rem;
    position: relative;
    top: -10px;
}

.greetings h1,
.greetings h3 {
    text-align: center;
    line-height: 1;
}


@media (min-width: 1280px) {
    nav {
        margin-left: -1rem;
        /* font-size: 1rem; */
        margin-top: 1rem;
    }

    
    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}


@media (min-width: 1700px) {
    header {
        width: 20%;
    }

    .content-width {
    width: 80%;
    }
}

@media (max-width: 700px) {
    nav {
        margin-top: 0.5rem;
    }
}

</style>

