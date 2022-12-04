<script>
	let b1;
	let formState = 1;
	let form1 = '';
	let form2 = '';
	let form3 = '';
	let form4 = '';
	let form5 = '';
	function formCheck1() {
		if (form1 != '' && form2 != '' && form3 != '') {
			b1.disabled = false;
		} else {
			b1.disabled = true;
		}
	}
</script>

<form action="POST">
	<div class="form">
		<label for="nom">Nom complet <span style="color:#ff9d9d">*</span></label>
		<input type="text" id="nom" name="nom" bind:value={form1} on:input={formCheck1} />
		<label for="tel">No. de téléphone <span style="color:#ff9d9d">*</span></label>
		<input type="text" id="tel" name="tel" bind:value={form2} on:input={formCheck1} />
		<label for="email">Adresse courriel <span style="color:#ff9d9d">*</span></label>
		<input type="text" id="email" name="email" bind:value={form3} on:input={formCheck1} />
		<label for="desc">Description du projet</label>
		<textarea id="desc" name="desc" bind:value={form4} on:input={formCheck1} />
	</div>

	<div class="boutons">
		<button disabled type="button" bind:this={b1}>Envoyer</button>
	</div>
</form>
<p class="eta">Nous prenons présentements des résercations pour xyz</p>

<style lang="scss">
	form {
		padding: 0.5rem 0;
		& textarea {
			display: block;
      height: 5rem;
			resize: none;
		}
	}
	@media (max-width: 1024px) {
		form,
		p {
			margin-top: 0.5rem;
		}
	}
	@media (min-width: 1025px) {
		form,
		p {
			margin-right: 3rem;
			margin-top: 1rem;
		}
	}
	label {
		color: white;
	}
	input,
	textarea {
		width: 100%;
		color: black;
		margin-bottom: 0.75rem;
    box-shadow: 0 0.15rem 0.3rem black;
    border-width: 2px;
    border-style: inset;
	}
	button {
		color: black;
		font-weight: 700;
		background-color: white;
		border: none;
		padding: 0.5rem 1rem;
		&:disabled {
			opacity: 0.3;
			cursor: not-allowed;
		}
		&:not(:disabled) {
			cursor: pointer;
		}
		&:nth-of-type(2) {
			margin-left: 1rem;
		}
	}
</style>
