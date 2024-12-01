<script lang="ts">
    import "../app.css";
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
 
    inject({ mode: dev ? 'development' : 'production' });
</script>


    <nav class="navbar bg-transparent">
        <div class="flex mx-auto space-x-4">
            <a href="/" role="button" class="font-semibold text-lg">Home</a>
            <a href="/about" role="button" class="font-semibold text-lg">About</a>
            <a href="/experience" role="button" class="font-semibold text-lg">Experience</a>
            <a href="/projects" role="button" class="font-semibold text-lg">Projects</a>
            <a href="/contact" role="button" class="font-semibold text-lg">Contact</a>
        </div>
    </nav>


<main>
    <slot />
</main>