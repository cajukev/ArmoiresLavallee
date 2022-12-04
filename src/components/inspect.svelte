<script>
	import { album } from '../contenu';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	let nbcategories = album.categories.length;
	let close;
	export let currentcategory = 0;
	export let currentpicture = 0;
	export let visible;

	onMount(() => {
		console.log(album.categories);
	});
	let flipped1 = false;
	let flipped2 = false;
	let flipped3 = false;
	let flipped4 = false;
	$: console.log(`${currentcategory},${currentpicture}`);
	$: if (close) {
		close.focus();
	}

	let navAnim = (x, y) => {
		if (x == 0 && y == 0) {
			//anim prev photo
			flipped1 = !flipped1;
			document.getElementsByClassName('arrow')[0].style.transform = `rotatex(${
				flipped1 ? '180deg' : '0deg'
			})`;
		} else {
			if (x == 0 && y == 1) {
				//anim prev cat
				flipped2 = !flipped2;

				document.getElementsByClassName('arrow')[1].style.transform = `rotatex(${
					flipped2 ? '180deg' : '0deg'
				})`;
			} else {
				if (x == 1 && y == 0) {
					//anim next photo
					flipped3 = !flipped3;

					document.getElementsByClassName('arrow')[2].style.transform = `rotatex(${
						flipped3 ? '180deg' : '0deg'
					})`;
				} else {
					if (x == 1 && y == 1) {
						//anim next cat
						flipped4 = !flipped4;

						document.getElementsByClassName('arrow')[3].style.transform = `rotatex(${
							flipped4 ? '180deg' : '0deg'
						})`;
					}
				}
			}
		}
	};
</script>

{#if visible == true}
	<div class="container" in:fade={{ duration: 200 }} out:fade={{ duration: 200 }}>
		<div
			class="bg"
			on:click={() => {
				visible = false;
				flipped1 = false;
				flipped2 = false;
				flipped3 = false;
				flipped4 = false;
			}}
		/>
		<div class="grid">
			<div class="close-wrap">
				<div
					class="close"
					tabindex="0"
					role="button"
					bind:this={close}
					on:click={() => {
						visible = false;
					}}
					on:keypress={(e) => {
						if (e.charCode === 13) visible = false;
					}}
				>
					<p>Retour vue grille</p>
					<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M0 0V10.6667H10.6667V0H0ZM8 8H2.66667V2.66667H8V8ZM0 13.3333V24H10.6667V13.3333H0ZM8 21.3333H2.66667V16H8V21.3333ZM13.3333 0V10.6667H24V0H13.3333ZM21.3333 8H16V2.66667H21.3333V8ZM13.3333 13.3333V24H24V13.3333H13.3333ZM21.3333 21.3333H16V16H21.3333V21.3333Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>

			<div class="photo">
				<picture>
					<source
						srcset="/op{album.categories[currentcategory - 1].photos[currentpicture - 1]
							.id}-400.webp, /op{album.categories[currentcategory - 1].photos[currentpicture - 1]
							.id}-800.webp 2x"
						media="(max-width:400px)"
						type="image/webp"
						num
					/>
					<source
						srcset="/op{album.categories[currentcategory - 1].photos[currentpicture - 1]
							.id}-400.jpg, /op{album.categories[currentcategory - 1].photos[currentpicture - 1]
							.id}-800.webp 2x"
						media="(max-width:400px)"
						type="image/jpeg"
					/>
					<source
						srcset="/op{album.categories[currentcategory - 1].photos[currentpicture - 1]
							.id}-600.webp, /op{album.categories[currentcategory - 1].photos[currentpicture - 1]
							.id}-1200.webp 2x"
						media="(max-width:600px)"
						type="image/webp"
					/>
					<source
						srcset="/op{album.categories[currentcategory - 1].photos[currentpicture - 1]
							.id}-600.jpg, /op{album.categories[currentcategory - 1].photos[currentpicture - 1]
							.id}-1200.webp 2x"
						media="(max-width:600px)"
						type="image/jpeg"
					/>
					<source
						srcset="/op{album.categories[currentcategory - 1].photos[currentpicture - 1]
							.id}-1200.webp, /op{album.categories[currentcategory - 1].photos[currentpicture - 1]
							.id}-1600.webp 2x"
						media="(max-width:1200px)"
						type="image/webp"
					/>
					<source
						srcset="/op{album.categories[currentcategory - 1].photos[currentpicture - 1]
							.id}-1200.jpg, /op{album.categories[currentcategory - 1].photos[currentpicture - 1]
							.id}-1600.webp 2x"
						media="(max-width:1200px)"
						type="image/jpeg"
					/>
					<source
						srcset="/op{album.categories[currentcategory - 1].photos[currentpicture - 1]
							.id}-1600.webp"
						type="image/webp"
					/>
					<source
						srcset="/op{album.categories[currentcategory - 1].photos[currentpicture - 1]
							.id}-1600.jpg"
						type="image/jpeg"
					/>
					<img
						src="/op{album.categories[currentcategory - 1].photos[currentpicture - 1].id}-400.jpg"
						alt="hi:)"
					/>
				</picture>
			</div>
			<div class="prev">
				<div
					tabindex="{currentpicture == 1 ? '-1' : '0'}"
					role="button"
					class="navphoto {currentpicture == 1 ? 'disabled' : ''}"
					on:click={() => {
						currentpicture = Math.max(currentpicture - 1, 1);
						navAnim(0, 0);
					}}
					on:keypress={(e) => {
						if (e.charCode === 13) {
							currentpicture = Math.max(currentpicture - 1, 1);
							navAnim(0, 0);
						}
					}}
				>
					<svg class="arrow" viewBox="0 0 23 41" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M21 41L23 38.8519L3.53901 20.4533L23 2.05467L21 0L0 19.7995V21.0137L21 41Z"
							fill="white"
						/>
					</svg>
					<p>Photo</p>
				</div>
				<div
					tabindex="{currentcategory == 1 ? '-1' : '0'}"
					role="button"
					class="navcategorie {currentcategory == 1 ? 'disabled' : ''}"
					on:click={() => {
						currentcategory = Math.max(currentcategory - 1, 1);
						currentpicture = 1;
						navAnim(0, 1);
					}}
					on:keypress={(e) => {
						if (e.charCode === 13) {
							currentcategory = Math.max(currentcategory - 1, 1);
							currentpicture = 1;
							navAnim(0, 1);
						}
					}}
				>
					<svg class="arrow" viewBox="0 0 23 41" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M21 41L23 38.8519L3.53901 20.4533L23 2.05467L21 0L0 19.7995V21.0137L21 41Z"
							fill="white"
						/>
					</svg>
					<p>Catégorie</p>
				</div>
			</div>
			<div class="next">
				<div
					tabindex="{currentpicture == album.categories[currentcategory - 1].photos.length
						? '-1'
						: '0'}"
					role="button"
					class="navphoto {currentpicture == album.categories[currentcategory - 1].photos.length
						? 'disabled'
						: ''}"
					on:click={() => {
						currentpicture = Math.min(
							currentpicture + 1,
							album.categories[currentcategory - 1].photos.length
						);
						navAnim(1, 0);
					}}
					on:keypress={(e) => {
						if (e.charCode === 13) {
							currentpicture = Math.min(
								currentpicture + 1,
								album.categories[currentcategory - 1].photos.length
							);
							navAnim(1, 0);
						}
					}}
				>
					<p>Photo</p>
					<svg class="arrow" viewBox="0 0 23 41" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M2 41L0 38.8519L19.461 20.4533L0 2.05467L2 0L23 19.7995V21.0137L2 41Z"
							fill="white"
						/>
					</svg>
				</div>
				<div
					tabindex="{currentcategory == album.categories.length ? '-1' : '0'}"
					role="button"
					class="navcategorie {currentcategory == album.categories.length ? 'disabled' : ''}"
					on:click={() => {
						currentcategory = Math.min(currentcategory + 1, album.categories.length);
						currentpicture = 1;
						navAnim(1, 1);
					}}
					on:keypress={(e) => {
						if (e.charCode === 13) {
							currentcategory = Math.min(currentcategory + 1, album.categories.length);
							currentpicture = 1;
							navAnim(1, 1);
						}
					}}
				>
					<p>Catégorie</p>
					<svg class="arrow" viewBox="0 0 23 41" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M2 41L0 38.8519L19.461 20.4533L0 2.05467L2 0L23 19.7995V21.0137L2 41Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>
			<div class="text">
				<p class="categorie">{album.categories[currentcategory - 1].nom}</p>
				<p class="photonom">
					<b>{album.categories[currentcategory - 1].photos[currentpicture - 1].nom}</b>
				</p>
				<p class="photodesc">
					{album.categories[currentcategory - 1].photos[currentpicture - 1].desc}
				</p>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #000000b2;
		backdrop-filter: blur(0.35rem);
		color: #fff;
		z-index: 2;
		transform: translateZ(0);
		display: flex;
		flex-direction: column;
		align-items: center;
		&::-webkit-scrollbar {
			display: none;
		}
		-ms-overflow-style: none;
		scrollbar-width: none;
		& .bg {
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
		}
		& .grid {
			display: grid;
			pointer-events: none;
			& .close-wrap {
				grid-area: 1/ 1 /span 1 /span 3;
				justify-self: center;
				& .close {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: center;
					width: fit-content;
					text-decoration: underline;
					cursor: pointer;
					pointer-events: all;
					& svg {
						height: 1.5rem;
						margin-left: 1rem;
					}
				}
			}
			& .prev,
			.next {
				display: flex;
				flex-direction: column;
				& .navphoto,
				.navcategorie {
					pointer-events: all;
					display: flex;
					flex-direction: row;
					justify-content: center;
					padding: 0.5rem 1rem;
					border: 1px solid rgba(255, 255, 255, 0.65);
					cursor: pointer;
					&.disabled {
						opacity: 0.5;
						cursor: default;
						border: 1px solid rgba(255, 255, 255, 0.25);
					}
				}
				& svg {
					height: 1.5rem;
					transition: transform 0.5s ease;
					transform: rotateX(0deg);
				}
			}
			.prev {
				& .navphoto > p,
				.navcategorie > p {
					margin-left: 1rem;
				}
				& .navphoto,
				.navcategorie {
					transition: transform 0.25s ease;
					perspective: 20;
				}
				& .navphoto:hover,
				.navcategorie:hover {
					transform: translateX(-0.25rem);
				}
			}
			.next {
				& .navphoto > p,
				.navcategorie > p {
					margin-right: 1rem;
				}
				& > .navphoto,
				> .navcategorie {
				}
				& .navphoto,
				.navcategorie {
					transition: transform 0.25s ease;
					perspective: 20;
				}
				& .navphoto:hover,
				.navcategorie:hover {
					transform: translateX(0.25rem);
				}
			}
			& .photo {
				align-self: center;
				justify-self: center;
				pointer-events: all;
				width: 100%;
				& img {
					width: 100%;
				}
			}
			& .text {
				max-width: 40rem;
				& p {
					pointer-events: all;
					&.categorie {
						font-size: 1rem;
						font-style: italic;
					}
					&.photonom {
						font-size: 1.2rem;
					}
				}
			}
		}
	}
	@media (max-width: 1366px) {
		.grid {
			display: grid;
			grid-template-columns: repeat(2, 50%);
			& .close {
				grid-area: 1 / 1 / span 1 / span 2;
				margin-top: 2rem;
			}
			& .prev {
				grid-area: 3 / 1 / span 1 / span 1;
				margin-left: calc(1rem + 5vw);
				margin-top: 1rem;
				@media (max-width: 600px) {
					margin-left: 0.75rem;
				}
				& .navphoto,
				.navcategorie {
					margin: 0.5rem 1rem 0.5rem 0;
				}
			}
			& .next {
				grid-area: 3 / 2 / span 1 / span 1;
				margin-right: calc(1rem + 5vw);
				margin-top: 1rem;
				@media (max-width: 600px) {
					margin-right: 0.75rem;
				}
				& .navphoto,
				.navcategorie {
					margin: 0.5rem 0 0.5rem 1rem;
				}
			}
			& .photo {
				grid-area: 2 / 1 / span 1 / span 2;
				width: 100%;
				margin-top: 2rem;
			}
			& .text {
				grid-area: 4 / 1 / span 1 / span 2;
				margin: 2rem calc(1rem + 5vw) 0 calc(1rem + 5vw);
				margin-top: 2rem;
				margin-bottom: 2rem;
				@media (max-width: 600px) {
					margin: 2rem 0.75rem 0 0.75rem;
				}
				& p {
					&.categorie {
					}
					&.photonom {
						margin-top: 1rem;
					}
					&.photodesc {
						margin-top: 1rem;
					}
				}
			}
		}
	}
	@media (min-width: 1367px) {
		.grid {
			display: grid;
			grid-template-columns: repeat(3, auto);
			grid-template-rows: repeat(3, auto);
			max-width: 80vw;
			& .close {
				grid-area: 1 / span 3 /1 / span 1;
				margin-top: 2rem;
			}
			& .prev {
				grid-column: 1 / span 1;
				grid-row: 3 / span 1;
				align-self: start;
				margin: 2rem  auto 0 auto;
				& .navphoto,
				.navcategorie {
					margin: 0 1.5rem 1rem 0;
				}
			}
			& .photo {
				grid-column: 1 / span 3;
				grid-row: 2 / span 1;
				
				border: 0.2rem solid white;
				margin-top: 2rem;
				& picture {
					height: 100%;
					& img {
						display: block;
					}
				}
			}
			& .next {
				grid-column: 3 / span 1;
				grid-row: 3 / span 1;
				align-self: start;
				margin: 2rem  auto 0 auto;
				& .navphoto,
				.navcategorie {
					margin: 0 0 1rem 1.5rem;
				}
			}
			& .text {
				grid-column: 2 / span 1;
				grid-row: 3 / span 1;
				max-width: 60vw;
				align-self: start;
				justify-self: center;
				width: 100%;
				display: grid;
				margin-top: 2rem;
				margin-bottom: 2rem;
				& p {
					font-size: 1rem;
					&.categorie {
						width: 8rem;
					}
					&.photonom {
						margin-bottom: 1rem;
					}
					&.photodesc {
					}
				}
			}
		}
	}
	@keyframes flipprev {
		0% {
		}

		100% {
			transform: rotate(180deg);
		}
	}
</style>
