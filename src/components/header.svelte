<script>
	import { page } from '../stores.js';
	export let lang
</script>

<div class="container contained header">
	<div class="logoContainer">
		<a href={(lang == 'fr' ? '/' : '/en/')}>
			<svg viewBox="0 0 168 46" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					class="swipe"
					d="M86.8579 0.00162198C43.7225 5.53079 19.4514 9.63846 20.548 21.3502C24.0704 38.3358 100.311 43.0829 167.562 23.9379C124.837 51.0613 1.38639 56.0226 0.00808512 22.644C-0.584803 8.28604 31.4952 1.12658 74.7271 0.12322C78.683 0.0313954 82.732 -0.00885507 86.8579 0.00162198Z"
					fill="url(#logoGradient)"
				/>
				<path
					d="M32.4537 12.7135H35.2246V25.5896H42.2916V27.8681H32.4537V12.7135ZM54.9398 24.3213H47.5722L46.0471 27.8681H43.2547L50.1068 12.7135H52.3622L59.2143 27.8681H56.4649L54.9398 24.3213ZM54.0162 22.1717L51.2452 15.7229L48.4743 22.1717H54.0162ZM73.9453 12.7135L67.2006 27.8681H64.9452L58.2005 12.7135H61.0574L66.0837 24.4288L71.1315 12.7135H73.9453ZM84.6098 24.3213H77.2421L75.7171 27.8681H72.9247L79.7768 12.7135H82.0322L88.8843 27.8681H86.1348L84.6098 24.3213ZM83.6861 22.1717L80.9152 15.7229L78.1443 22.1717H83.6861ZM91.1435 12.7135H93.9144V25.5896H100.981V27.8681H91.1435V12.7135ZM103.703 12.7135H106.474V25.5896H113.541V27.8681H103.703V12.7135ZM116.262 12.7135H126.4V14.9061H118.968V19.0763H125.971V21.2474H118.968V25.6755H126.4V27.8681H116.262V12.7135ZM120.815 11.4238L123.006 8.1134H125.605L122.534 11.4238H120.815ZM129.555 12.7135H139.694V14.9061H132.262V19.0763H139.264V21.2474H132.262V25.6755H139.694V27.8681H129.555V12.7135Z"
					fill="white"
				/>
				<defs>
					<linearGradient
						id="logoGradient"
						x1="83.7811"
						y1="0"
						x2="83.7811"
						y2="46"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0.3125" stop-color="#FF2D4F" />
						<stop offset="0.697917" stop-color="#FF183E" />
					</linearGradient>
				</defs>
			</svg>
		</a>
		<p><i>© Armoires de cuisine Lavallée LTÉE</i></p>
	</div>
	<div class="links">
		<a
			class="fb"
			href="https://www.facebook.com/Armoires-de-cuisine-Lavall%C3%A9e-lt%C3%A9e-378982095772299"
			target="_blank"
		>
			<svg class="svg" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M38.5 0.5V40H27.1V26.0652H33.4V20.0501H27.1V16.0401C27.1 14.9373 28.045 14.0351 29.2 14.0351H33.4V8.02005H28.15C24.097 8.02005 20.8 11.1679 20.8 15.0376V20.0501H16.6V26.0652H20.8V39.6992H0.5V0.5H38.5Z"
					fill="white"
				/>
			</svg>
		</a>

		<a href={(lang == 'fr' ? '/en/' : '/') + $page} class="lang">
			<p>{lang == 'fr' ? 'English' : 'Français'}</p>
		</a>
	</div>
</div>

<style lang="scss">
	.container {
		& .logoContainer {
			& svg {
				filter: drop-shadow(0.25rem 0.25rem 0.125rem rgb(0, 0, 0, 0.75));
				// & .swipe {
				// 	clip-path: polygon(70% 0, 69% 0, 70% 0, 70% 0, 70% 0, 70% 0);
				// 	animation: logoAnim 0.5s 0.5s linear forwards;
				// }
			}
		}
	}
	@media (max-width: 1024px) {
		.container {
			display: flex;
			flex-direction: column;
			& .links {
				display: flex;
				flex-direction: row;
				height: max-content;
				justify-content: space-between;
				align-items: center;
				padding-top: 1rem;
				& .fb {
					height: 1.5em;
					width: 1.5em;
				}
			}
			& .logoContainer {
				order: 2;
				display: flex;
				flex-direction: column;
				align-items: center;
				padding-top: 1rem;

				& a {
					width: 60%;
					max-height: 5rem;
					display: flex;
					justify-content: center;
				}
				& svg {
					max-height: 5rem;
				}
				& p {
					padding-top: 0.5rem;
				}
			}
		}
	}
	@media (min-width: 1025px) {
		.container {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			height: 2rem;
			padding-top: 2rem;
			box-sizing: content-box;
			& .logoContainer {
				margin-left: 6rem;
				display: flex;
				align-items: flex-end;
				& a {
					height: 100%;
					display: block;
				}
				& svg {
					height: 100%;
					margin-right: 1rem;
				}
			}
			& .links {
				order: 2;
				margin-right: 3rem;
				display: flex;
				flex-direction: row;
				align-items: center;

				& .fb {
					height: 1.5em;
					width: 1.5em;
					margin-right: 2rem;
				}
			}
		}
	}
	@keyframes logoAnim {
		0% {
			animation-timing-function: ease-in;
		}
		40% {
			clip-path: polygon(70% 0, 70% 12%, 70% 13%, 70% 12%, 0 29%, 0 0);
		}
		50% {
			clip-path: polygon(70% 0, 70% 12%, 50% 35%, 70% 12%, 0 80%, 0 0);
		}
		60% {
			clip-path: polygon(70% 0, 70% 12%, 39% 100%, 38% 100%, 0 100%, 0 0);
		}
		100% {
			clip-path: polygon(70% 0, 70% 12%, 100% 40%, 100% 100%, 0 100%, 0 0);
			animation-timing-function: ease-out;
		}
	}
</style>
