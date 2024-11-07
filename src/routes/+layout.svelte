<script lang="ts">
    import "../app.css";
</script>

<nav class="navbar bg-base-100">
    <div class="flex mx-auto space-x-4">
        <a href="/" class="flex items-center text-white">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        </a>
        <a href="/about" role="button" class="font-semibold text-lg">About</a>
        <a href="/experience" role="button" class="font-semibold text-lg">Experience</a>
        <a href="/projects" role="button" class="font-semibold text-lg">Projects</a>
        <a href="/contact" role="button" class="font-semibold text-lg">Contact</a>
    </div>
</nav>

<main class="h-[95vh]">
    <slot />
</main>