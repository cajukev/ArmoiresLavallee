<script>
	import { heroImg } from '../../stores.js';
	let range = [3, 2, 1];
</script>

<div class="container">
	{#each range as num}
		<picture style={`opacity:${$heroImg == num ? 1:0 }`}>
			<source
				srcset="op{num}-400.webp, op{num}-800.webp 2x"
				media="(max-width:500px)"
				type="image/webp"
				num
			/>
			<source
				srcset="op{num}-400.jpg, op{num}-800.jpg 2x"
				media="(max-width:500px)"
				type="image/jpeg"
			/>
			<source
				srcset="op{num}-600.webp, op{num}-1200.webp 2x"
				media="(max-width:768px)"
				type="image/webp"
			/>
			<source
				srcset="op{num}-600.jpg, op{num}-1200.jpg 2x"
				media="(max-width:768px)"
				type="image/jpeg"
			/>
			<source srcset="op{num}-800.webp, op{num}-1600.webp 2x" media="(max-width:1024px)" type="image/webp" />
			<source srcset="op{num}-800.jpg, op{num}-1600.jpg 2x " media="(max-width:1024px)" type="image/jpeg" />
			<source srcset="op{num}-1200.webp, op{num}-1600.webp 2x " media="(max-width:1920px)" type="image/webp" />
			<source srcset="op{num}-1200.jpg, op{num}-1600.jpg 2x " media="(max-width:1920px)" type="image/jpeg" />
			<source srcset="op{num}-1600.webp " type="image/webp" />
			<source srcset="op{num}-1600.jpg " type="image/jpeg" />
			<img src="op{num}-400.jpg" alt="hi:)" />
		</picture>
	{/each}
</div>

<style lang='scss'>
  .container{
    position: relative;
    height: 0;
    padding-top: 56.25%;
		filter: drop-shadow(0px 1rem 2rem rgba(0, 0, 0, 0.75));	
		@media(min-width:1025px){
		
		}
    
    & picture{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;  
      transition:opacity 0.5s ease;
			background-color: #252527;
      & img{
        width: 100%;
      }    
    }
  }
</style>
