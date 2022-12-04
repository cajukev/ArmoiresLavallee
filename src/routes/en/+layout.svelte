<script>
	import Header from '../../components/header.svelte';
	import Footer from '../../components/footer.svelte';

	// Transition
	import PageTransition from '../../components/utils/PageTransition.svelte';
	import { beforeUpdate } from 'svelte';
	let page = 0;
	beforeUpdate(() => {
		page++;
	});

	import { setContext } from 'svelte';
	setContext('lang', 'en');
</script>

<Header lang="en" />
<PageTransition refresh={page}>
	<slot />
</PageTransition>
<Footer lang="en" />
