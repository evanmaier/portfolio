<script>
    import orcasat from '$lib/assets/ORCASat-partial-1.jpg';
    import openocean from '$lib/assets/openocean.webp';
  </script>

<div class="gap-4 grid grid-cols-1 md:grid-cols-2 p-2">
    <div class="flex justify-center">
    <article class="prose w-full">
        <h2 class="text-center">Open Ocean Robotics</h2>
        <img src={openocean} alt = 'boat' class="rounded-lg aspect-square object-cover max-w-xs mx-auto"/>
        <p>
          Open Ocean Robotics develop Uncrewed Surface Vehicles for ocean 
          monitoring and data collection. As an early hire during the
          startup phase, I worked on a wide variety of projects, from 
          software develompemnt to field testing.
        </p>
        <p>
          My main contributions include implementing UDP video streaming
          over cellular networks, and designing a web app to monitor the 
          USV telemetry data.
        </p>
        <p>
          Check out the <a href="https://www.openoceanrobotics.com/" class="text-blue-600 hover:underline">official website.</a>
        </p>
    </article>
</div>

    <div class="flex justify-center">

    <article class="prose">
        <h2 class="text-center">ORCASAT</h2>
        <img src={orcasat} alt = 'satellite' class="rounded-lg aspect-square object-cover max-w-xs mx-auto"/>
        <p>
          ORCASAT is a cubesat designed to calibrate telescopes for atmospheric interferance.
        </p>
        <p>
          Launched aboard CRS-26 from Kennedy Space Center to the ISS on Nov. 26, 2022, then deployed to low earth orbit on Dec. 29, 2022. Atmospheric re-entry completed on July 7, 2023.
        </p>
        <p>
          My main role was firmware development for the Telemetry, Tracking, and Command team. Aditionally I worked with the Command and Data Handling team and the Ground Control Software team.
        </p>
        <p>
          Check out the <a href="https://www.orcasat.ca/" class="text-blue-600 hover:underline">official website.</a>
        </p>
    </article>
</div>

</div>
