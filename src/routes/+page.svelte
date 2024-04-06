<script lang="ts">
	import CtAs from '../components/CTAs.svelte';
	import Bestproducts from '../components/bestproducts.svelte';
	import Cardinfo from '../components/cardinfo.svelte';
</script>

<!-- <div class="flex flex-col lg:flex-row items-center gap-5  m-auto px-10 p-6 py-15 bgImage ">
	<div class="flex flex-col gap-5 md:gap-10 bg-opacity-90">
	<h1 class=" md:text-5xl text-4xl text-center">Welcome to Yircos Ornaments</h1>
	<p >
		At Yicros crations, we firmly believe that every space deserves to be elevated with a touch
		of warmth and character. Our curated collection of handmade cement ornaments, pots, and elegant
		"Yaquis" is thoughtfully desig ned to cater to a variety of tastes and styles, ensuring that
		there is something special for every home. Our team of skilled artisans takes great pride in
		creating pieces that seamlessly blend intricate patterns with sleek, modern designs. Each item
		in our collection is meticulously crafted, paying close attention to detail and quality to
		ensure that every product meets our high standards.
	</p>
</div>
svelte-ignore a11y-img-redundant-alt 
<img src="/image1.jpg" alt="image" class=" lg:w-2/5">



</div> -->

<div class="bgImage">
	<div class="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pb-14 bg-white md:h-screen bg-opacity-40 py-16">
	<h2
		class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1200px] mx-auto w-full text-center font-bold"
	>	
		<span class="text-primary-600 font-extrabold">Welcome to  Yircos Ornaments</span><br>
		<span class=" ">Make your home unique</span>
	</h2>
	<p class="text-xl font-extrabold sm:text-2xl md:text-3xl text-center max-w-[1000px] mx-auto w-full">
		Sculpted Cement specializes in creating unique, modern cement ornaments for your home. Our skilled craftsmen use innovative techniques to produce eye-catching, long-lasting pieces that showcase your style.
	</p>
	<CtAs />
</div>
</div>
<Cardinfo />

<style>
	.bgImage {
		background-image: url('/bgs.jpg');
		background-size: cover;
		background-position: center;
		z-index: -1;
	}
</style>
