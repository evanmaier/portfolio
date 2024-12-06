<script>
  import tunelink from '$lib/assets/tunelink.png';
  import rentals from '$lib/assets/tunelink-rentals.png';
  import request from '$lib/assets/tunelink-request.png';
  import svpwm_a from '$lib/assets/svpwm_a.png';
  import svpwm_bc from '$lib/assets/svpwm_bc.png';
  import prototype from '$lib/assets/final_prototype.png';
</script>

  <div class="flex flex-col md:flex-row justify-center">
    <article class="prose p-4">
      <h2 class="text-center">Capstone</h2>
      <p>
        For our capstone project, my team decided to build an Electronic Speed controller
        for a brushless DC motor. My role was to design and program the control system. 
        This involved simulating the system in MATLAB to tune the PID gain parameters, then programming
        the system on an STM32F407 microcontroller. We chose the Field Oriented Control algorithm with
        Space Vector PWM commutation.

      </p>
      <p>
        The firmware is viewable at <a href="https://github.com/evanmaier/hermes-firmware" class="text-blue-600 hover:underline">github.com/evanmaier/hermes-firmware</a> 
      </p>
      <img src={prototype} alt = 'prototype' class="rounded-lg object-cover"/>
      <p>This the prototype we prepared for our demo</p>
      <img src={svpwm_a} alt = 'svpwm_a' class="rounded-lg object-cover"/>
      <img src={svpwm_bc} alt = 'svpwm_b' class="rounded-lg object-cover"/>
      <p>
        These are the three phases of the SVPWM control signal going to the inverters.
        In our prototype the desired torque was set using a potentiometer.
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
        Check out the <a href="https://tunelink-alpha.vercel.app/" class="text-blue-600 hover:underline">live website</a> 
        and our <a href="https://github.com/evanmaier/tunelink" class="text-blue-600 hover:underline">GitHub.</a> 
      </p>
      <img src={tunelink} alt = 'homepage' class="rounded-lg object-cover"/>
      <p>This is the landing page, where users can see available local gear and keyword search</p>
      <img src={rentals} alt = 'rentals' class="rounded-lg object-cover"/>
      <p>This is an example rental page, where a user can manage their active and pending rentals</p>
      <img src={request} alt = 'request' class="rounded-lg object-cover"/>
      <p>This is an example request page, where a user can interact with a request and chat with the renter/owner</p>
    </article>
  </div> 
