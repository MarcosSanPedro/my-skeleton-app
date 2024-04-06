<!-- App.svelte -->
<script lang="ts">
    import Bestproducts from './bestproducts.svelte';
  
    const products = [
      {
        title: 'Product 1',
        description: 'Description for product 1.',
        price: 19.99,
        imageUrl: 'path/to/product1-image.jpg',
      },
      {
        title: 'Product 2',
        description: 'Description for product 2.',
        price: 24.99,
        imageUrl: 'path/to/product2-image.jpg',
      },
      {
        title: 'Product 3',
        description: 'Description for product 3.',
        price: 29.99,
        imageUrl: 'path/to/product3-image.jpg',
      },
    ];
  </script>
  
  <div class="container mx-auto items-center justify-center px-28">
    <h1 class="text-3xl font-bold mb-4 flex justify-center">Best Selling Products</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {#each products as product}
        <Bestproducts {...product} />
      {/each}
    </div>
  </div>