<script setup>
import { useData, useRoute, useRouter } from 'vitepress'

const { title, theme } = useData()
const { path, data } = useRoute()
const { route, go } = useRouter()

const isCurrentPage = link => link.link == path
const isCurrentSection = links => links.filter(isCurrentPage).length

</script>

<template>
	<nav>
		<div v-for="section in theme.sidebar" class="section">
			<RoughNotation is-show type="box" animate="false" color="blue">
				{{ section.text }}
			</RoughNotation>
			<div v-if="isCurrentSection(section.items)"
			     v-for="item in section.items">
				<RoughNotation :is-show="isCurrentPage(item)" type="highlight"
						color="#ffff006c" tag="span">
					<a :href="item.link" v-html="item.text"></a>
				</RoughNotation>
			</div>
			<div v-else>
				<a :href="section.items[0].link"
				   v-html="section.items[0].text"></a><br />
				<br />
				<a :href="section.items[0].link"
				   style="text-emphasis:italic">
				   ...{{ section.items.length-1 }} more
				</a>
			</div>
		</div>
	</nav>
	<main style="margin-left:15%">
	<!-- 	<div style="float:right; margin-right:3%;">
			Page Title<br />
			<br />
			<label>sample label</label>
		</div> -->

		<!-- <h1 v-if="data.title">{{ data.title }}</h1> -->
		<div class="body">
			<Content />
		</div>

		<br />
		<br />
	</main>
</template>

<style>
ul {
	list-style: circle;
	margin-left: 40px;
}
body {
 	background-image: url("/lined-paper-bg.jpg");
	background-repeat: repeat-y;
	background-size: 190% 1400px;
	background-position: left 4% top -35px;
}
nav {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	width: 16%;
	text-align: center;
}
nav a {
	color: rgb(140, 140, 255)
}
nav .section {
	margin-top: 100px;
	padding: 0 19%;
	position:relative;
}
nav .section > * {
	margin: 40px 0;
	-webkit-transform: rotate(-5deg); 
	-moz-transform: rotate(-5deg); 
}
.display-on-hover { display:none; }
*:hover > .display-on-hover { display:block; }

#app {
	font-family: "Gloria Hallelujah", cursive;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: black;
	margin-top: 5px;
	font-size: 24px;
}
h1 {
	line-height: 2em;
	font-size: 1.75em;
	font-weight: 900;
	opacity: 0.5;
	text-align: center;
	-webkit-transform: rotate(-2deg); 
	-moz-transform: rotate(-2deg); 
}
h2 {
	display: inline-block;	
	margin: 0.66em 5%;
	font-size: 1.25em;
	opacity: 0.6;
	font-weight: bold;
	text-decoration: underline;
	-webkit-transform: rotate(-3deg); 
	-moz-transform: rotate(-3deg); 
}
label {
	cursor: pointer;
}
.body {
	line-height: 1.7em;
	clear: both;
	padding-right: 10px;
	display: flex;
}
/* .body h1 {
	display: none;
} */
.header-anchor {
	display: none;
}
/* .body > * {
	flex: auto;
} */
.tweak {
	-webkit-transform: rotate(-5deg); 
	-moz-transform: rotate(-5deg); 
}
wired-input {
	font-family: inherit;
}

</style>