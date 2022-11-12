<script setup>
import config from '.vitepress/config'
const sections = config.themeConfig.sidebar
</script>

<template>
	<div v-for="section in sections" class="section">
		<RoughNotation is-show type="box" animate="false" color="blue">
			{{ section.text }}
		</RoughNotation>
		<div v-for="item in section.items">
			<a :href="item.link" v-html="item.text"></a>
		</div>
	</div>
</template>

<style>
.section {
	display: inline-block;
	margin-top: 100px;
	margin-right: 100px;
	vertical-align: top;
	position: relative;
}
.section > * {
	margin: 40px 0;
	-webkit-transform: rotate(-5deg); 
	-moz-transform: rotate(-5deg); 
}

</style>