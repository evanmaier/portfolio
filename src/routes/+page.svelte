<script>
  import profile from '$lib/assets/profile3.jpg';
  import resume from '$lib/assets/softwareResume.webp';
</script>


  <div class="hero min-h-[calc(100vh-4rem)]">
    <div class="hero-content text-center">
      <div class="max-w-md">
        
        <div class="avatar">
          <div class="w-64 rounded-full">
            <img src={profile} alt="profile" class="avatar">
          </div>
        </div>
        <h1 class="text-5xl font-bold">Hello There
        </h1>
        <p class="py-6">
          I'm Evan Maier, a Software Developer with a background in Electrical Engineering
        </p>
        <a href={resume} download role="button" class="btn btn-primary">Download Resume</a>
        <a href="https://github.com/evanmaier" role="button" class="btn btn-primary">Github</a>
        <a href="https://www.linkedin.com/in/evan-maier-6310b1153/" role="button" class="btn btn-primary">Linkedin</a>
  
      </div>
    </div>
  </div>

