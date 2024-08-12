<script>
    // TODO: Put here some of your stdents accomplishments and certificates.
	// import { EXTERNAL_POSTS } from '$lib/data/external_posts'
	// import { talks } from '$lib/data/talks'

	import Main from '$lib/components/Main.svelte'
</script>

<svelte:head>
	<title>Zhenis Pir | About me</title>
	<meta
		data-key="description"
		name="description"
		content="A bit about my personal life and work history."
	/>
</svelte:head>

<Main>
	<div class="compressed-content writing">
		<img
			class="profile-pic"
			src="/images/bio-photo.jpg"
			alt="Me, Zhenis Pir, an average guy in a small city of Kazakhstan."
		/>
		<h2>Who I am</h2>

		<p>
			I'm currently a Computer Science and Programming Teacher at <a href="https://akt.nis.edu.kz">Nazabayev Intellectual School (Aktau NIS)</a>. Before that, I was
			a Computer Science Teacher at <a href="https://shopify.com">Daryn</a> and <a href="https://www.instagram.com/rbs_daryn/">Bilim Innovation-Lyceum (Aktau BIL)</a>. In my spare time, I
			love hobby coding; I have created a video series of how to solve contest problems in <a href="https://www.youtube.com/@zorcode">Zorcode</a> YouTube Channel in Kazakh language.
		</p>

		<p>
			Previously, I worked as a Senior JavaScript developer at <a href="https://aware3.com"
				>Aware3</a
			>, and as a front-end engineer at <a href="https://wpengine.com">WP Engine</a>. Before
			becoming a full-time dev, I was a senior support lead at
			<a href="https://getflywheel.com">Flywheel</a>, and also a course instructor for
			<a href="https://interfaceschool.com">AIM Code School</a>, where I taught WordPress
			development, and was solely responsible for both curriculum development and teaching.
		</p>

		<p>
			As a writer, I authored the CSS Tricks series <a
				href="https://css-tricks.com/a-complete-beginners-guide-to-npm/"
				>A Complete Beginner's Guide to NPM</a
			>, and I enjoy blogging about dev, design and tech (both <a href="#writing">freelance</a> and
			<a href="blog">here on this site</a>). Occasionally, I get asked to talk about what I write
			<a href="#appearances">on podcasts</a>.
		</p>

		<p>
			Before entering tech, I spent a few years as a graphic designer (that's what my degree is in).
			Prior to that, I was a bartender and server, and regularly gigged as a musician, though that's
			all been many years ago now.
		</p>

		<p>
			I moved to the Kansas City area fairly recently, but was in Omaha for several years before
			that.
		</p>

		<p>
			Personally, I am a: hobby coder; font hoarder; husband since 2012; dad since 2019 (though
			notorious for dad jokes since long before); accessibility advocate; DEI accomplice; cold brew
			aficionado; Facebook, Instagram, and Twitter abandoner; Mastodon appreciator; semi-notorious
			React critic; occasional public speaker and podcast guest; pun enthusiast; curious learner;
			dog person; lifelong Nintendo fan; musician/guitarist/hack pianist; he/him/his; liberal abuser
			of semicolons.
		</p>

		<h3>More:</h3>

		<ul>
			<li>
				<a href="/contact?from_page=about">Contact</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/zhenis-pir/" rel="nofollow">LinkedIn</a>
			</li>
			<li>
				<a href="https://github.com/zhenispir" rel="nofollow">GitHub</a>
			</li>
			<li>
				<a href="/resume">Resume/CV</a>
			</li>
		</ul>

		<!-- TODO: Is as written above!
        <h2 id="appearances">Talks and appearances</h2>
		<p class="subhead">Conference presentations, trainings, and podcasts</p>
		<hr />
		<ul>
			{#each talks as talk}
				<li>
					<b>
						{#if talk.link}
							<a href={talk.link} rel="external">
								{talk.title}
							</a>
						{:else}
							{talk.title}
						{/if}
					</b>
					<br />
					<i>{talk.event}</i>
				</li>
			{/each}
		</ul>

		<h2 id="writing">Writing</h2>
		<p class="subhead">Articles written for other publications</p>
		<hr />

		<ul>
			{#each EXTERNAL_POSTS as post}
				<li>
					<b>
						{#if post.slug}
							<a href={post.slug} rel="external">
								{post.title}
							</a>
						{:else}
							{post.title}
						{/if}
					</b>
					<br />
					<i>{post.subtitle}</i>
				</li>
			{/each}
		</ul>
	</div> -->
</Main>
