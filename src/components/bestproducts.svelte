<script lang="ts">
  export let title: string;
  export let description: string;
  export let price: number;
  export let imageUrl: string;

  export let datas
  let itemes

  datas = itemes
</script>

<div class="card sm:flex sm:flex-col">
  <header class="card-header sm:flex-shrink-0">
    <img src="{imageUrl}" alt="{title}" class="w-full h-48 sm:h-56 object-cover" />
  </header>
  <section class="p-4 sm:flex-grow">
    <h2 class="text-xl font-semibold mb-2">{title}</h2>
    <p class="text-gray-600 mb-4 sm:mb-6">{description}</p>
    <p class="text-lg font-bold">${price.toFixed(2)}</p>
  </section>
  <footer class="card-footer sm:mt-auto">
    <button class="btn btn-primary w-full sm:w-auto">Learn More</button>
  </footer>
</div>