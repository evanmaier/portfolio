<script>
  import profile from '$lib/assets/profile3.jpg';
</script>

<div class='flex flex-col items-center'>
  <img src={profile} alt="profile" class="md:w-1/2 w-2/3 max-w-md mx-auto rounded-full">
    <div class='text-center p-4'>
      <h1 class="text-4xl md:text-6xl font-bold">Evan Maier</h1>
    </div>
    
    <article class="prose p-4 text-center">
      <p>
        I am an electrical engineer specializing in embedded systems, firmware development, hardware design, and digital signal processing. 
      </p>
    </article>

    <div class="w-full max-w-lg text-center p-4">
      <a href="https://github.com/evanmaier" role="button" class="btn btn-primary w-1/3">GitHub</a>
      <a href="https://www.linkedin.com/in/evanmaier/" role="button" class="btn btn-primary w-1/3">LinkedIn</a>
    </div>

    <div class="w-full max-w-lg text-center p-4">
      <h2 class="text-3xl font-bold mb-6">Contact</h2>
      <form method="POST" class="flex flex-col gap-4">
        <input name="name" type="text" placeholder="Name" class="input input-bordered">
        <input name="company" type="text" placeholder="Company" class="input input-bordered">
        <input name="email" type="email" placeholder="Email" class="input input-bordered">
        <textarea name="message" placeholder="Message" class="textarea textarea-bordered"></textarea>
        <button class="btn btn-primary">Send</button>
      </form>
    </div>
</div>