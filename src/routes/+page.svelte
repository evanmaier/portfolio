<script>
  import splashscreen from '$lib/assets/splashscreen2.png';
  import profile from '$lib/assets/profile3.jpg';
  import resume from '$lib/assets/softwareResume.webp';
</script>

<div
  class="hero h-full"
  style="background-image: url({splashscreen});">
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-neutral-content text-center">
    <div class="max-w-md">
      <div class="avatar">
        <div class="w-64 rounded-full">
          <img src={profile} alt="profile" class="avatar">
        </div>
      </div>
      <h1 class="text-5xl font-bold">Hello There
      </h1>
      <p class="py-6">
        My name is Evan Maier. I'm an Electrical Engineer with a background in software and firmware development.
      </p>
      <a href={resume} download role="button" class="btn btn-primary">Download Resume</a>
      <a href="https://github.com/evanmaier" role="button" class="btn btn-primary">Github</a>
      <a href="https://www.linkedin.com/in/evan-maier-6310b1153/" role="button" class="btn btn-primary">Linkedin</a>

    </div>
  </div>
</div>