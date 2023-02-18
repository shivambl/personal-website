<script>
	import '../app.css';

	const year = new Date().getFullYear();
</script>

<div class="px-4 text-lg flex flex-col h-screen">
	<header class="pt-4 pb-8 text-center text-6xl font-semibold text-maroon-600"><a href="/">Shivam Bansal</a></header>
	<!-- <nav class="pt-2 pb-8 text-xl text-center uppercase font-bold">
		<a href="/about" class="hover:underline underline-offset-[4.5px] decoration-[1.5px]">About</a>
		/
		<a href="/work" class="hover:underline underline-offset-[4.5px] decoration-[1.5px]">Work</a>
	</nav> -->

	<main class="mx-auto max-w-2xl w-full grow flex flex-col">
		<slot />
	</main>

	<footer class="px-4 py-2 text-center">
		Copyright © {year} Shivam Bansal
	</footer>
</div>

<style lang="postcss">
</style>
