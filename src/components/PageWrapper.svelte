<script lang="ts">
	export let width: number | null = 1170;
</script>

<div class="wrapper_{width}">
	<slot />
</div>

{@html `<style>
	.wrapper_${width} {
		height: 100%;
		margin: 0 auto;
		width: 100%;
	}
	@media (min-width: ${width + 1}px) {
		.wrapper_${width} {
			width: ${width}px;
		}
	}
</style>`}
