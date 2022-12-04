<script>
	import Header from '../components/header.svelte';
</script>

<div class="container">
	<Header />
	<p class="contained l_contained">761 Boulevard Saint Jean Baptiste, Mercier, Quebec</p>
</div>

<style lang="scss">
	.container {
		background-color: #343434;
		width: 100%;
		margin-top: 3rem;
		padding-bottom: 3rem;
		& p {
			margin-top: 1rem;
			@media (max-width: 1024px) {
				text-align: center;
			}
		}
	}
</style>
