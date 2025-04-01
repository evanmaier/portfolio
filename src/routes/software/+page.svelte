<script>
    import tunelink from '$lib/assets/tunelink.png';
    import rentals from '$lib/assets/tunelink-rentals.png';
    import request from '$lib/assets/tunelink-request.png';
</script>

<div class="flex flex-col mx-auto items-center p-4 max-w-6xl gap-4">
  <h1 class="text-4xl font-bold mb-6">TuneLink Web App</h1>

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

  <article class="prose max-w-full mt-4">
    <h2 class="text-2xl font-bold text-center">Outcomes</h2>
    <ul class="list-disc text-lg">
      <li>Demo the live site at <a href="https://tunelink-alpha.vercel.app/">tunelink-alpha.vercel.app</a></li>
      <li>Developed a fully functional instrument-rental platform using SvelteKit and Firebase.</li>
      <li>Implemented user authentication with Firebase Authentication.</li>
      <li>Designed an intuitive search experience using Algolia InstantSearch for instrument listings.</li>
      <li>Created a rental request system with manual approval by owners and integrated real-time chat using Firestore subcollections.</li>
    </ul>
  
    <h2 class="text-2xl font-bold text-center">Challenges & Solutions</h2>
    <ul class="list-disc text-lg">
      <li>
        Managing real-time messaging efficiently with Firestore subcollections.
        <ul>
          <li class=" font-light">Optimized Firestore queries and used Firestore listeners for real-time updates.</li>
        </ul>
      </li>
      <li>
        Handling dynamic rental requests with different statuses (pending, confirmed, rejected).
        <ul>
          <li class=" font-light">Designed a structured Firestore schema and used SvelteKit actions for controlled state updates.</li>
        </ul>
      </li>
      <li>
        Implementing secure and scalable authentication with Firebase while ensuring proper client-server separation.
        <ul>
          <li class=" font-light">Used Firebase Admin SDK on the server side for secure account creation and client-side authentication for login sessions.</li>
        </ul>
      </li>
      <li>
        Ensuring fast and relevant search results for users looking for instruments.          
        <ul>
          <li class=" font-light">Leveraged Algolia indexing for real-time, typo-tolerant search functionality.</li>
        </ul>
      </li>
      <li>
        Displaying geographically relevant results.
        <ul>
          <li class=" font-light">Integrated Mapbox Geocoding API</li>
        </ul>
      </li>
    </ul>
  
    <h2 class="text-2xl font-bold text-center">Skills Developed</h2>
    <ul class="list-disc text-lg">
      <li>Full-Stack Development using SvelteKit and Firebase.</li>
      <li>Advanced UI/UX design with Tailwind CSS & DaisyUI.</li>
      <li>Geolocation with Mapbox API.</li>
      <li>Real-time database management with Firestore and Firestore listeners.</li>
    </ul>
  </article>
</div>