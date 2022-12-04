<script>
	import { album } from '../../../contenu';
	import { navigated, page } from '../../../stores';
	import { onMount } from 'svelte';
	import Inspect from '../../../components/inspect.svelte';
	import { getContext } from 'svelte';
	const lang = getContext('lang');
	console.log(lang)

	let visible = false;
	let currentcategory = 1;
	let currentpicture = 1;

	onMount(() => {
		navigated.set(true);
		page.set('galerie');
	});

	let showInspect = (picture, category) => {
		console.log('visible');

		currentcategory = category + 1;
		currentpicture = picture + 1;

		visible = true;
	};
</script>

<div class="container">
	<h1 class="contained">Galerie de photos</h1>
	<a class="retour" href={lang == 'fr' ? '/' : '/en'}>Retour</a>

	<div class="inspectWrap">
		<Inspect bind:visible bind:currentcategory bind:currentpicture class="inspect" />
	</div>

	{#each album.categories as categorie, j}
		<div class="categorie">
			<h2>{categorie.nom}</h2>
			<div class="photos">
				{#each categorie.photos as photo, i}
					<div
						class="photo"
						on:keypress={(e) => {
							if (e.charCode === 13) showInspect(i, j);
						}}
						on:click={() => showInspect(i, j)}
						tabindex="0"
						role="button"
					>
						<picture>
							<source
								srcset="/op{photo.id}-240.webp, /op{photo.id}-400.webp 2x"
								media="(max-width:515px)"
								type="image/webp"
							/>
							<source
								srcset="/op{photo.id}-240.jpg, /op{photo.id}-400.jpg 2x"
								media="(max-width:515px)"
								type="image/jpeg"
							/>
							<source
								srcset="/op{photo.id}-400.webp, /op{photo.id}-800.webp 2x"
								media="(max-width:1440px)"
								type="image/webp"
							/>
							<source
								srcset="/op{photo.id}-400.jpg, /op{photo.id}-800.jpg 2x"
								media="(max-width:1440px)"
								type="image/jpeg"
							/>
							<source srcset="/op{photo.id}-600.webp" media="(max-width:1920px)" type="image/webp" />
							<source srcset="/op{photo.id}-600.jpg" media="(max-width:1920px)" type="image/jpeg" />
							<img src="/op{photo.id}-240.jpg" alt="hi:)" />
						</picture>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.inspectWrap {
		z-index: 2;
	}

	.container {
		& .categorie {
			& .photos {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
				grid-gap: 1rem;
				width: 100%;
				@media (min-width: 1462px) {
					grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
				}
				@media (max-width: 623px) {
					grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
				}
				.photo {
					position: relative;
					height: 0;
					padding-top: 56.25%;
					
					& picture {
						background-color: #252527;
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						filter: drop-shadow(0px 0.25rem 0.5rem rgba(0, 0, 0, 0.75));
						
						& img {
							width: 100%;
							
						}
					}
				}
			}
		}
	}
	@media (max-width: 1024px) {
		.container {
			padding: 0px calc(1rem + 5vw);
			color: white;
			display: flex;
			flex-direction: column;
			margin-top: 2rem;
			& .retour {
				text-align: center;
				margin-top: 0.5rem;
				width: min-content;
				justify-self: center;
				align-self: center;
			}
			& .categorie {
				margin-top: 1rem;
				& .photos {
					margin-top: 1rem;
				}
			}
		}
		@media (max-width: 600px) {
			.container {
				padding: 0px 0.75rem;
			}
		}
	}
	@media (min-width: 1025px) {
		.container {
			margin-left: 6rem;
			margin-top: 3rem;
			margin-right: 3rem;
			color: white;
			& .categorie {
				margin-top: 1rem;
				& .photos {
					margin-top: 1rem;
					& img {
					}
				}
			}
		}
	}
</style>
