<script>
  let title = "Professional Experience";
  let firstProject = "ORCASat";
  let secondProject = "Open Ocean Robotics";
</script>
  
  <main>
    <h1>{title}</h1>
    <section>
      <article>
        <h2>{firstProject}</h2>
        <p>
          ORCASAT is a cube satellite designed to calibrate telescopes
          for atmospheric interferance. My main role was firmware 
          development for the Telemetry, Tracking, and Command team. 
          Aditionally I worked with the Command and Data Handling team 
          and the Ground Control Software team.
        </p>
        <h3>Accomplishments</h3>
          <ul>
            <li>
              Developed firmware for ORCASat radio using C. 
              Features included new radio commands, message encryption, 
              and over-the-air firmware updates
            </li>
            <li>
              Performed testing with ORCASat radio and on-board computer 
              using Python tests and logic analyzer to find and remove 
              integration bugs
            </li>
            <li>
              Developed Python toolchain for flashing new radio firmware 
              to improve reliability
            </li>
            <li>
              Developed Python toolchain for flashing new radio firmware 
              to improve reliability
            </li>
            <li>
              Assisted in development of on-board computer firmware in C 
              to accommodate new radio commands
            </li>
            <li>
              Assisted in ground control software development using Python 
              to add features and impove performance
            </li>
          </ul>
        <a href="https://www.orcasat.ca/">ORCASat Website</a>
      </article>

      <article>
        <h2>{secondProject}</h2>
        <p>
          Open Ocean Robotics develop Uncrewed Surface Vehicles for ocean 
          monitoring and data collection. As an early hire during the
          startup phase, I worked on a wide variety of projects, from 
          software develompemnt to field testing.
        </p>
        <h3>Accomplishments</h3>
          <ul>
            <li>
              Adapted Ardupilot open source software for prototype uncrewed 
              surface vehicle to provide navigation capabilities
            </li>
            <li>
              Implemented UDP video streaming to remotely monitor the USV 
              over a cellular network
            </li>
            <li>
              Designed a web based dashboard and backend to track and 
              log USV telemetry
            </li>
            <li>
              Added a satellite backup for the USV telemetry using Iridium
              satellites and AWS for when the USV is out of cellular range
            </li>
          </ul>
        <a href="https://www.openoceanrobotics.com/">
          Open Ocean Robotics Website
        </a>
      </article>
    </section>
  </main>