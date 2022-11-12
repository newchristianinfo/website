<script setup>
import { useRoute } from 'vitepress'
import config from '../config'

const theme = config.themeConfig
const { path } = useRoute()
let flat = []
theme.sidebar && theme.sidebar.forEach(section => flat = flat.concat(section.items))
theme.sidebar && theme.sidebar.forEach(section => console.log(section.items))

const myI = flat.findIndex(item => item.link == path)
const prevHref = flat[myI-1]
const nextHref = flat[myI+1]

</script>
<template>
	<div class="nav-ul">
		<a v-if="prevHref" class="link" :href="prevHref.link">&larr; Prev</a>
		<a class="link" href="/toc.html">Contents</a>
	</div>
	<div class="nav-ur">
		<a v-if="nextHref" class="link" :href="nextHref.link">Next &rarr;</a>
	</div>
	<div class="nav-ll">
		<a class="link" href="/toc.html">Contents</a><br>
		<a v-if="prevHref" class="link" :href="prevHref.link">&larr; Prev</a>
	</div>
	<div class="nav-lr">
		<a v-if="nextHref" class="link" :href="nextHref.link">Next &rarr;</a>
	</div>
</template>

<style>
.nav-ul, .nav-ur, .nav-ll, .nav-lr {
	position: absolute;
}
.nav-ul, .nav-ll {
	left: -13%;
	width: 11%;
	text-align: center;
}
.nav-ur, .nav-lr {
	right: 1%;
}
.nav-ul, .nav-ur {
	top: 10px;
}
.nav-ll, .nav-lr {
	bottom: -50px;
}
.link {
	display: inline-block;
	border: 1px solid rgb(140, 140, 255);
	border-radius: 16px;
	padding: 3px 16px;
	font-size: 14px;
	font-weight: 500;
	color: rgb(140, 140, 255);
	transition: border-color 0.25s, color .25s;
}
</style>