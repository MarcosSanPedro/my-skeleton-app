<script lang="ts">
    import Product from '../../components/product.svelte'
    export let data;
    const { items } = data;
  
    // Acceder a un producto específico por su ID numérico
    const product = items[1];
  </script>
  
  <div>
    {#each Object.entries(items) as [id, product]}
      <Product
        src={product.src}
        title={product.title}
        description={product.description}
        block={product.block}
      />
    {/each}
  </div>
