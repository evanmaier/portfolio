<script>
  import schematic from '$lib/assets/schematic.png';
  import pcb from '$lib/assets/pcb_front.png';
</script>

<div class="flex flex-col mx-auto items-center p-4 max-w-6xl">
  <h1 class="text-4xl font-bold mb-6">Gutar Tuner</h1>

  <div class="grid grid-flow-row md:grid-cols-2 gap-4">
    <div class="relative w-full h-0 pb-[56.25%] col-span-2">
      <iframe
        class="absolute top-0 left-0 w-full h-full rounded-md"
        src="https://www.youtube.com/embed/g4U_7SbJp7o"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    
    <div class="col-span-2 md:col-span-1">
      <figure>
        <img src={schematic} alt='schematic' class="w-full aspect-square rounded-md object-cover"/>
      </figure>
    </div>

    <div class="col-span-2 md:col-span-1">
      <figure>
        <img src={pcb} alt='pcb' class="w-full aspect-square rounded-md object-cover"/>
      </figure>
    </div>
  </div>

  <article class="prose max-w-full mt-4">
    <h2 class="text-2xl font-bold text-center">Outcomes</h2>
    <ul class="list-disc text-lg">
      <li>Designed a standalone guitar tuner pedal that can detect pitch with one cent accuracy</li>
      <li>Ensured latency is below 100ms for a responsive user expereince.</li>
      <li>Allowed the user to choose between standard 9v DC power delivery or battery power.</li>
      <li>Implemented a true bypass switch, muting the output signal when active.</li>
    </ul>
  
    <h2 class="text-2xl font-bold text-center">Challenges & Solutions</h2>
    <ul class="list-disc text-lg">
      <li>
        Operating within the memory constraints of the STM32F411 microcontroller,
        a frequency domain approach to pitch detection was not feasable due to FFT binning quantization.
        <ul>
          <li class=" font-light">
            A time domain implementation of the YIN pitch detection algorithm was a better fit,
            trading off time complexity for memory efficiency.
          </li>
        </ul>
      </li>
      <li>
        Due to the limitations of the SPI interface, naively refreshing the entire screen every frame
        induced a flickering effect.
        <ul>
          <li class=" font-light">
            Only the parts of the screen that change between frames need to be updated.
            The flickering went away once I adjusted the display driver to take advantage of that fact.
          </li>
        </ul>
      </li>
      <li>
        When setting the sampling rate at double the highest possible guitar note frequency,
        the pitch detection was not accurate across the upper range of the guitar.
        <ul>
          <li class=" font-light">
            The pitch detection needs to account for higher degree harmonics of each note, not just
            the fundemental frequency. Raising the sampling rate to 32 kHz solved the problem.
          </li>
        </ul>
      </li>
    </ul>
  
    <h2 class="text-2xl font-bold text-center">Skills Developed</h2>
    <ul class="list-disc text-lg">
      <li>
        PCB Design
        <ul>
          <li class=" font-light">Designed prototype PCB in KICad</li>
          <li class=" font-light">Met JLCPCB manufacturing requriements</li>
          <li class=" font-light">Created custom footprint for microcontroller</li>
        </ul>
      </li>
      <li>
        Signal Processing
        <ul>
          <li class=" font-light">Designed amplifier circuit to bias and scale the instrument signal</li>
          <li class=" font-light">Implemented custom YIN pitch detection algorithm</li>
          <li class=" font-light">Configured ADC for double buffered direct memory access</li>
        </ul>
      </li>
      <li>
        Display Control
        <ul>
          <li class=" font-light">Wrote custom SPI display driver for TFT display</li>
          <li class=" font-light">Designed custom images for TFT display</li>
        </ul>
      </li>
    </ul>
  </article>
</div>