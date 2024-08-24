<script>
  import battlesnake from '$lib/assets/battlesnake.gif';
  import orcasat from '$lib/assets/ORCASat-partial-1.jpg';
  import openocean from '$lib/assets/openocean.webp';
</script>

<div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <article class="prose min-w-[400px] p-4">
      <h2 class="text-4xl min-w">Battlesnake</h2>
      <p>In this game, each Battlesnake is controlled in real-time by a live web server, responding to the Battlesnake API. It navigates the game board based on your algorithm, trying to find food, avoid other Battlesnakes, and survive as long as possible. </p>
      <p>Our snake is written in Python using the Bottle web framework. It uses an A* pathfinding alogorithm to navigate the board. We placed 3rd in the Stay Home and Code tournament in 2020.</p>
      <p>Check out the <a href="https://play.battlesnake.com/" class="text-blue-600 hover:underline">official website</a> and our <a href="https://github.com/CyrusSA/jah-snake" class="text-blue-600 hover:underline">GitHub.</a></p>
      <img src={battlesnake} alt = 'game' class="rounded-lg"/>
  </article>

  <article class="prose min-w-[400px] p-4">
      <h2 class="text-4xl">Open Ocean Robotics</h2>
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
      <img src={openocean} alt = 'boat' class="rounded-lg"/>
    </article>

    <article class="prose min-w-[400px] p-4">
      <h2 class="text-4xl">ORCASAT</h2>
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
      <img src={orcasat} alt = 'satellite' class="rounded-lg"/>
    </article>
</div>