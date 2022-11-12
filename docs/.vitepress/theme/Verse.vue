<script setup>
defineProps({
	reference: String,
})
</script>
<template>
	<div style="float:right; padding:10px; max-width: 33%; clear:right">
		<RoughNotation brackets="left" isShow type="bracket" color="red"
		      animate="false" strokeWidth="2">
			<span style="color:red"><slot></slot></span>
			<div v-if="reference" style="text-align:right">
				-- {{ reference }}
			</div>
		</RoughNotation>
	</div>
</template>