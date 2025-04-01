<script>
  import svpwm_bc from '$lib/assets/svpwm_bc.png';
  import prototype from '$lib/assets/final_prototype.png';
</script>

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
  
