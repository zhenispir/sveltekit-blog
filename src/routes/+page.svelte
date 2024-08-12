<script>
import { siteTitle } from '$lib/config';

import Main from '$lib/components/Main.svelte'
</script>

<svelte:head>
<title>{siteTitle}</title>
<meta property="og:title" content="Zhenis Pir" />
<meta
	data-key="description"
	property="og:description"
	name="description"
	content="Teacher, Developer"
/>

</svelte:head>

<!-- This is the README.md file in the root of the repo. It serves double duty as the homepage's content. If you'd rather use your own HTML and/or Svelte, you can delete/modify everything in this file. -->
<Main>
<div class="intro">
	<div class="intro__headline">
		<h2>
			<strong>Hi, I'm Zhenis</strong>. I'm a teacher and huge coding enthusiast.
		</h2>

		<p class="subhead h2">
			I currently live in the Aktau City area, and work for <a href="https://akt.nis.edu.kz">Aktau NIS</a> as
			a computer science and programming.
		</p>

		<!-- 
		<p>
			I specialize in performant, accessible, user-focused interfaces. I wrote
			<a href="https://css-tricks.com/a-complete-beginners-guide-to-npm/"
				><i>a Complete Beginner's Guide to npm</i></a
			>
			on <a href="https://css-tricks.com">CSS Tricks</a>. I
			<a href="/projects">designed and built</a>
			the word games
			<a href="https://quina.app">Quina</a> and <a href="https://playhondo.com">Hondo</a>.
			Occasionally I'll
			<a href="/about-me#appearances">appear on a podcast</a>, and I
			<a href="/blog">blog here</a> once in a while.
		</p> -->

		<section>
			<nav>
				<ul>
					<li><a href="/about">More about me and what I do</a></li>
					<li><a href="/blog">My blog</a></li>
					<!-- <li><a href="/projects">Some of my projects</a></li> -->
					<li><a href="/contact">Get in touch</a></li>
				</ul>
			</nav>
		</section>
	</div>
</div>
</Main>
