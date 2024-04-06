<!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#c61515" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg> -->


<!-- ProductCard.svelte -->
<script lang="ts">
    export let src: string;
    export let title: string;
    export let description: string;
    export let block: string[];
  </script>
  
  <div class="card">
    <img {src} alt={title} class="card-image" />
    <div class="card-content">
      <h2 class="card-title">{title}</h2>
      <p class="card-description">{description}</p>
      <ul class="card-block">
        {#each block as item}
          <li>{item}</li>
        {/each}
      </ul>
      <button>Learn More</button>
    </div>
  </div>
  