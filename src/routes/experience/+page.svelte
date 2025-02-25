<script>
    import orcasat from '$lib/assets/ORCASat-partial-1.jpg';
    import dataXplorer from '$lib/assets/dataXplorer.png';
  </script>


<div class="flex flex-col justify-center items-center">
  <article class="prose p-4">
      <h2 class="text-center">Open Ocean Robotics</h2>
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
      <figure>
        <img src={dataXplorer} alt = 'boat' class="rounded-lg object-cover"/>
        <figcaption>DataXplorer</figcaption>
      </figure>
    </article>

    <article class="prose p-4">
      <h2 class="text-center">ORCASAT</h2>
      <p>
        ORCASAT is a cubesat designed to calibrate telescopes for atmospheric interferance.
      </p>
      <p>
        Launched aboard CRS-26 from Kennedy Space Center to the ISS on Nov. 26, 2022, then deployed to low earth orbit on Dec. 29, 2022. Atmospheric re-entry completed on July 7, 2023.
      </p>
      <p>
        My main role was firmware development for the Telemetry, Tracking, and Command team. Aditionally I worked with the Command and Data Handling team and the Ground Control Software team.
      </p>
      <figure>
        <figcaption>
          <img src={orcasat} alt = 'satellite' class="rounded-lg object-cover"/>
          The satellite without solar pannels
        </figcaption>
      </figure>
  </article>
</div>







