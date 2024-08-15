<script>
    let name = "";
    let email = "";
    let message = "";
  
    const handleSubmit = () => {
      // Handle form submission
      alert(`Message sent by ${name}`);
    };
  </script>
  
  <main>
    <h1>Contact Me</h1>
    <form on:submit|preventDefault={handleSubmit}>
      <input type="text" bind:value={name} placeholder="Your Name" required />
      <input type="email" bind:value={email} placeholder="Your Email" required />
      <textarea bind:value={message} placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </main>
  