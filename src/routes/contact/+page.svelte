<script>
	 import { onMount } from 'svelte';
    import Main from '$lib/components/Main.svelte';

    let isSubmitted = false;
    let showError = false;

    let formData = { // all below are string
        from_page: '',
        name: '',
        email: '',
        message: ''
    };

    onMount(() => {
        const params = new URLSearchParams(window.location.search);
        formData = { ...formData, from_page: params.get('from_page') };
    });

    const encode = (data) => {
        return Object.keys(data)
            .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    };

    const handleSubmit = (e) => {
        const { name, email, message, from_page } = formData;

        if (!name || !email || !message) {
            showError = true;
            return;
        }

        const target = e.target;
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': target.getAttribute('name'),
                ...formData
            })
        })
            .then(() => {
                isSubmitted = true;
            })
            .catch((error) => alert(error));
    };
</script>


<svelte:head>
	<title>Zhenis Pir | Contact</title>
	<meta
		data-key="description"
		name="description"
		content="If you fill out this form, I'll probably send you an email. What a bargain!"
	/>
</svelte:head>


<Main>
	<div class="compressed-content">
		<h2>Get in touch</h2>

		{#if !isSubmitted}
			<noscript>
				<h3>Sorry, this contact form won't work without JavaScript enabled.</h3>
				<p>
					I don't do any tracking or anything like that though (except some <a
						href="https://plausible.io">privacy-respecting analytics</a
					>), if that's your concern.
				</p>
			</noscript>

			<p class="big">Happy to chat! Email for business related messages.</p>

			<ul class="small">
				<li>
					<strong>Yes</strong>, I will work with you if you know the problem and willing to pay.
				</li>

				<li><strong>No</strong>, I do not work for free. Please, do not ask!</li>
			</ul>









			<form
				id="contact-form"
				name="contact"
				method="post"
				on:submit|preventDefault={handleSubmit}
				action="/success/"
			>
				<input type="hidden" name="form-name" value="contact" />
				<p hidden>
					<label>
						Don't fill this out: <input name="bot-field" />
					</label>
				</p>
				<input type="hidden" name="from_page" bind:value={formData.from_page} />
				<div class="sender-info">
					<div class="field">
						<label for="name" class="label">Your name:</label>
						<input
							type="text"
							name="name"
							bind:value={formData.name}
							placeholder="What should I call you?"
						/>
					</div>
					<div class="field">
						<label for="email"> Your email: </label>
						<input
							type="email"
							name="email"
							bind:value={formData.email}
							placeholder="Where can I send a response?"
						/>
					</div>
				</div>

				<div class="message-wrapper field">
					<label for="message">Message:</label>
					<textarea
						name="message"
						bind:value={formData.message}
						rows="6"
						placeholder="What would you like to talk about?"
					/>
				</div>

				{#if showError}
					<div class="error">Please be sure all above fields are filled out. Thanks!</div>
				{/if}

				<button type="submit"> Send </button>
			</form>
		{:else}
			<h3>Thanks for your message!</h3>

			<p>I'll follow up by email if this wasn't spam. :)</p>
		{/if}
	</div>
</Main>