<script lang="ts">
    import "../app.css";
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
 
    inject({ mode: dev ? 'development' : 'production' });
</script>


    <nav class="navbar bg-transparent">
        <div class="flex mx-auto space-x-4">
            <a href="/" role="button" class="font-semibold text-lg md:text-2xl">Home</a>
        </div>
    </nav>


<main>
    <slot />
</main>