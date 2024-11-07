<script>
  import battlesnake from '$lib/assets/battlesnake.gif';
  import tunelink from '$lib/assets/tunelink.png';
  import rentals from '$lib/assets/tunelink-rentals.png';
  import request from '$lib/assets/tunelink-request.png';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="flex justify-center">
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
  <div class="flex justify-center">
    <article class="prose p-4">
      <h2 class="text-center">Battlesnake</h2>
      <img src={battlesnake} alt = 'game' class="rounded-lg object-cover"/>

      <p>In this game, each Battlesnake is controlled in real-time by a live web server, responding to the Battlesnake API. It navigates the game board based on your algorithm, trying to find food, avoid other Battlesnakes, and survive as long as possible. </p>
      <p>Our snake is written in Python using the Bottle web framework. It uses an A* pathfinding alogorithm to navigate the board. We placed 3rd in the Stay Home and Code tournament in 2020.</p>
      <p>Check out the <a href="https://play.battlesnake.com/" class="text-blue-600 hover:underline">official website</a> and our <a href="https://github.com/CyrusSA/jah-snake" class="text-blue-600 hover:underline">GitHub.</a></p>
    </article>
  </div>
</div>