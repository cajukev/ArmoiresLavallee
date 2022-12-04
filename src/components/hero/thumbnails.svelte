<script>
	import { heroImg } from '../../stores.js';
	let range = [1, 2, 3];
</script>

<div class="container">
	{#each range as num}
		<div
			class="imgContainer"
			on:keypress={(e) => {
				if (e.charCode === 13) heroImg.set(num);
			}}
			on:click={() => {
				heroImg.set(num);
			}}
		>
			<picture>
				<source
				srcset="/op{num}-120.webp, /op{num}-240.webp 2x"
				media="(max-width:1000px)"
				type="image/webp"
				num
			/>
			<source
				srcset="/op{num}-120.jpg, /op{num}-240.jpg 2x"
				media="(max-width:1000px)"
				type="image/jpeg"
			/>
				<source srcset="/op{num}-240.webp " type="image/webp" />
				<source srcset="/op{num}-240.jpg " type="image/jpeg" />
				<img
					class={$heroImg == num ? 'selected' : ''}
					src="/op{num}-120.jpg"
					alt="hi:)"
					role="button"
					tabindex="0"
				/>
			</picture>
		</div>
	{/each}
</div>

<style lang="scss">
	.container {
		display: flex;
		justify-content: space-between;
		@media (min-width: 1025px) {
			justify-content: space-between;
			@media (max-width: 1499px) {
				justify-content: space-between;
			}
			@media (min-width: 1500px) {
				margin-right: 2rem;
			}
		}
		& .imgContainer {
			filter: drop-shadow(0.25rem 0.25rem 0.125rem rgba(0,0,0,0.75));
			@media (max-width: 1024px) {
				width: 20vw;
				height: calc(20vw / 16 * 9);
				@media (max-width: 600px) {
					width: 28vw;
					height: calc(28vw / 16 * 9);
				}
			}
			@media (min-width: 1025px) {
				width: 10vw;
				height: calc(10vw / 16 * 9);
				@media (max-width: 1499px) {
					width: 13vw;
					height: calc(13vw / 16 * 9);
				}
			}
			& img {
				border: 0.05rem solid white;
				width: 100%;
				transition: border 0.5s ease;
				&:focus-visible {
					outline: 0.25rem double white;
				}
				&.selected {
					border-color: red;
					border-width: 0.15rem;
				}
			}
		}
	}
</style>
