<script>
  import tunelink from '$lib/assets/tunelink.png';
  import rentals from '$lib/assets/tunelink-rentals.png';
  import request from '$lib/assets/tunelink-request.png';
  import svpwm_bc from '$lib/assets/svpwm_bc.png';
  import prototype from '$lib/assets/final_prototype.png';
  import front from '$lib/assets/front.png';
  import inside from '$lib/assets/inside.png';
  import box from '$lib/assets/3d_box.png';
</script>

  <div class="flex flex-col justify-center items-center">
    <article class="prose p-4">
      <h2 class="text-center">Guitar Tuner</h2>
      <p>
        I have always wanted to build a guitar pedal, as it combines my interest in music and engineering.
        I chose to build a chromatic tuner because it poses interesting hardware and software design problems.
        After months of design, testing, and iteration I am quite pleased with the final result.
      </p>
      
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/g4U_7SbJp7o"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <p>
        The pedal is powered by either a 9V battery or 9V DC power supply, and drives a 1.8" TFT display.
        When the switch is not pressed the guitar signal will bypass the pedal, and when pressed it will mute the output.
      </p>

      <figure>
        <img src={front} alt='front' class="rounded-lg object-cover"/>
        <figcaption>Action shot</figcaption>
      </figure>

      <p>
        The PCB contains an amplifier circuit, power delivery, connections for the microcontroller, and peripherals.
        The design was done in KiCad and manufactured by JLCPCB.
      </p>

      <figure>
        <img src={inside} alt='inside' class="rounded-lg object-cover"/>
        <figcaption>The guts</figcaption>
      </figure>

      <p>
        The firmware is written in C and runs on an STM32F411 microcontroller.
        The pitch detection is my implementation of the time domain YIN algorithm deveolped by Cheveigne and Kawahara.
      </p>

      <p>
        I was able to achieve 0.5 cent accuracy in the guitar frequency range, which is on par with commercially available alternatives.
        The firmware is available at <a href="https://github.com/evanmaier/tuner-firmware">github.com/evanmaier/tuner-firmware</a> 
      </p>

      <figure>
        <img src={box} alt='box' class="rounded-lg object-cover"/>
        <figcaption>Enclosure with items for scale</figcaption>
      </figure>

      <p>
        I enlised the help of my friend Karan Dere to design and print the enclosure from my mock-up drawings.
        Check him out at <a href="https://www.linkedin.com/in/karan-dere-070b29154">linkedin.com/in/karan-dere-070b29154</a>.
      </p>
    </article>

    <article class="prose p-4">
      <h2 class="text-center">TuneLink</h2>
      <p>
        TuneLink is a sharing economy platform for music gear. The goal is to connect
        local musicians looking to rent and lend instruments and other music equiptment.
        It also serves as a platform for local buisinesses to advertise rentals and manage
        inventory. The core web app was built by me over a two month span in Sept-Oct of 2024.
        This is a full stack application built with Sveltekit with TypeScript and Firebase.
      </p>

      <p>
        Check out the live site at <a href="https://tunelink-alpha.vercel.app/">tunelink-alpha.vercel.app</a> 
        and the source code at <a href="https://github.com/evanmaier/tunelink">github.com/evanmaier/tunelink</a> 
      </p>

      <figure>
        <img src={tunelink} alt = 'homepage' class="rounded-lg object-cover"/>
        <figcaption>Landing page where users can see local gear and keyword search</figcaption>
      </figure>

      <figure>
        <img src={rentals} alt = 'rentals' class="rounded-lg object-cover"/>
        <figcaption>Rentals page where users can manage active and pending rentals</figcaption>
      </figure>

      <figure>
        <img src={request} alt = 'request' class="rounded-lg object-cover"/>
        <figcaption>Requests page where users can interact with a request and chat with the renter/owner</figcaption>
      </figure>
    </article>

    <article class="prose p-4 w-full">
      <h2 class="text-center">Capstone</h2>
      <p>
        For our capstone project, my team decided to build an Electronic Speed controller
        for a brushless DC motor. My role was to design and program the control system. 
        This involved simulating the system in MATLAB to tune the PID gain parameters, then programming
        the system on an STM32F407 microcontroller. 
      </p>

      <p>
        We chose the Field Oriented Control algorithm with Space Vector PWM commutation.
        The source code is hosted at <a href="https://github.com/evanmaier/hermes-firmware">github.com/evanmaier/hermes-firmware</a>
      </p>

      <figure>
        <img src={prototype} alt = 'prototype' class="rounded-lg object-cover"/>
        <figcaption>Demo prototype</figcaption>
      </figure>

      <figure>
        <img src={svpwm_bc} alt = 'svpwm_b' class="rounded-lg object-cover"/>
        <figcaption>SVPWM control signal</figcaption>
      </figure>
    </article>
  </div> 
