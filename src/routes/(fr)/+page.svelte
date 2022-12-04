<script>
	import Hero from '../../components/hero/hero.svelte';
	import Thumbnails from '../../components/hero/thumbnails.svelte';
	import Form from '../../components/form.svelte';
	import { onMount } from 'svelte';
	import { navigated, page } from '../../stores';
	import { getContext } from 'svelte';
	const lang = getContext('lang');
	let btf_container;
	function scrollEvent() {
		console.log('scroll');
		btf_container.style.opacity = 1;
		btf_container.style.transform = 'none';
	}
	onMount(() => {
		if (window.scrollY != 0 || $navigated) scrollEvent();
		page.set('');
	});
</script>

<svelte:window on:scroll|once={scrollEvent} />

<div class="atf_container">
	<h1 class="contained">Vos armoires sur mesure depuis 1979</h1>

	<div id="hero_component">
		<Hero />
	</div>
	<div class="thumbnails contained" id="thumbnails1">
		<Thumbnails />
	</div>
	<p class="contained">
		<b>I pulled into Nazareth,</b> was feelin' about half past dead; I just need some place where I
		can lay my head. "Hey, mister, can you tell me where a man might find a bed?" He.
		<br /><br />
		<b>Beyond the horizon,</b> behind the sun. At the end of the rainbow life has only begun. In the
		long hours of twilight ’neath the stardust above. Beyond the horizon it is easy.
	</p>
</div>
<div />
<div class="galerie_lien contained">
	<a href="/galerie">
		<svg viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M29.3333 3.77778V30.2222H3.66667V3.77778H29.3333ZM29.3333 0H3.66667C1.65 0 0 1.7 0 3.77778V30.2222C0 32.3 1.65 34 3.66667 34H29.3333C31.35 34 33 32.3 33 30.2222V3.77778C33 1.7 31.35 0 29.3333 0ZM20.4233 16.7356L14.9233 24.0456L11 19.1533L5.5 26.4444H27.5L20.4233 16.7356Z"
				fill="white"
			/>
		</svg>
		Visitez notre galerie de photos!
		<svg viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M29.3333 3.77778V30.2222H3.66667V3.77778H29.3333ZM29.3333 0H3.66667C1.65 0 0 1.7 0 3.77778V30.2222C0 32.3 1.65 34 3.66667 34H29.3333C31.35 34 33 32.3 33 30.2222V3.77778C33 1.7 31.35 0 29.3333 0ZM20.4233 16.7356L14.9233 24.0456L11 19.1533L5.5 26.4444H27.5L20.4233 16.7356Z"
				fill="white"
			/>
		</svg>
	</a>
</div>
<div bind:this={btf_container} class="btf_container contained l_contained">
	<picture>
		<source srcset="op1-400.webp, op1-800.webp 2x" media="(max-width:500px)" type="image/webp" />
		<source srcset="op1-400.jpg, op1-800.webp 2x" media="(max-width:500px)" type="image/jpeg" />
		<source srcset="op1-600.webp, op1-1200.webp 2x" media="(max-width:768px)" type="image/webp" />
		<source srcset="op1-600.jpg, op1-1200.webp 2x" media="(max-width:768px)" type="image/jpeg" />
		<source srcset="op1-800.webp " media="(max-width:1280)" type="image/webp" />
		<source srcset="op1-800.jpg " media="(max-width:1280px)" type="image/jpeg" />
		<source srcset="op1-1200.webp " media="(max-width:1920px)" type="image/webp" />
		<source srcset="op1-1200.jpg " media="(max-width:1920px)" type="image/jpeg" />
		<source srcset="op1-1600.webp " type="image/webp" />
		<source srcset="op1-1600.jpg " type="image/jpeg" />
		<img src="op1-400.jpg" alt="hi:)" />
	</picture>
	<h2>Discutions de votre future cuisine!</h2>
	<div class="form_container">
		<Form class="form" />
	</div>
</div>

<style lang="scss">
	@media (max-width: 1024px) {
		.atf_container {
			& h1,
			#hero_component,
			p {
				margin-top: 2rem;
			}
		}
		.btf_container {
			& img {
				width: 100%;
			}
			& h2 {
				margin-top: 1rem;
				text-align: initial;
			}
		}
	}
	@media (min-width: 1025px) {
		.atf_container {
			display: grid;
			grid-template-columns: 40% 60%;
			margin-top: 3rem;
			margin-left: 6rem;
			margin-right: 3rem;
			filter: drop-shadow(0px 0.25rem 0.5rem rgba(0, 0, 0, 0.75));
			h1 {
				margin-right: 2rem;
				margin-bottom: 2rem;
				@media (max-width: 1220px) {
					grid-area: 1 / 1 / span 1 / span 2;
				}
			}
			p {
				margin-right: 2rem;
				margin-bottom: 2rem;
			}
			& p {
				@media (max-width: 1499px) {
					grid-area: 2 / 1 / span 2 / span 1;
					align-self: center;
					margin-bottom: 0;
					line-height: calc(125% + 0.5vw);
				}
			}
			& #hero_component {
				grid-area: 1 / 2 / span 3 / span 1;

				@media (max-width: 1499px) {
					grid-area: 1 / 2 / span 2 / span 1;
					align-self: end;
				}
				@media (min-width: 1500px) {
					align-self: center;
				}
				@media (max-width: 1220px) {
					grid-area: 2 / 2 / span 1 / span 2;
				}
			}
		}
		.btf_container {
			display: grid;
			grid-template-columns: 60% 40%;
			opacity: 0.25;
			transform: translateY(1rem);
			transition: transform 2s ease, opacity 1s ease;
			& picture {
				margin-right: 2rem;
				align-self: flex-start;
				grid-area: 1 / 1 / span 3 / span 1;
				filter: drop-shadow(0px 1rem 2rem rgba(0, 0, 0, 0.75));
				@media (max-width: 1449px) {
					grid-area: 2 / 1 / span 1 / span 1;
					margin-top: 1rem;
				}
				& img {
					width: 100%;
				}
			}
			& h2 {
				margin-right: 3rem;
				@media (max-width: 1449px) {
					grid-area: 1 / 1 / span 1 / span 2;
					justify-self: start;
				}
			}
		}
	}
	.galerie_lien {
		margin: 4rem 0;
		display: flex;
		justify-content: center;
		filter: drop-shadow(0.25rem 0.25rem 0.125rem rgba(0, 0, 0, 0.75));
		& a {
			display: flex;
			text-align: center;
			font-size: 1.5rem;
			align-items: center;
			justify-content: center;
			width: fit-content;
			text-decoration-color: red;
		}
		& svg {
			height: 2rem;
			margin: 0 1rem;
		}
	}
	.thumbnails {
		width: 100%;
		display: grid;

		@media (min-width: 1500px) {
			grid-area: 3 / 1 / span 1 / span 1;
			align-self: end;
		}
		@media (max-width: 1499px) {
			grid-area: 3 / 2 / span 1 / span 1;
			margin-top: 1rem;
		}
		@media (max-width: 1499px) {
			align-self: start;
			margin-top: 1rem;
		}
	}
</style>
