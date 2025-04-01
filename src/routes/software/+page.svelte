<script>
    import tunelink from '$lib/assets/tunelink.png';
    import rentals from '$lib/assets/tunelink-rentals.png';
    import request from '$lib/assets/tunelink-request.png';
</script>

<article class="prose p-4">
    <h2 class="text-center">TuneLink</h2>
    <p>
      TuneLink is a sharing economy platform for music gear. The goal is to connect
      local musicians looking to rent and lend instruments and other music equiptment.
      It also serves as a platform for local buisinesses to advertise rentals and manage
      inventory.
    </p>

    <p>
      The core web app was built by me over a two month span in Sept-Oct of 2024.
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