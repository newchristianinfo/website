<script setup>
defineProps({
	reference: String,
})
</script>
<template>
	<div style="float:right; padding:10px">
		<RoughNotation brackets="left" isShow type="bracket" color="red"
		      animate="false" strokeWidth="2">
			"<slot></slot>"
			<div v-if="reference" style="text-align:right">
				-- {{ reference }}
			</div>
		</RoughNotation>
	</div>
</template>