<template>
	<div class="app">
		<router-view/>
	</div>
</template>

<style lang="scss">
	*,
	*::after,
	*::before {
		margin: 0px;
		padding: 0px;
		box-sizing: inherit;
	}

	html, body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Lato', sans-serif;

		//Hide Scroll
		overflow: -moz-scrollbars-none;
		-ms-overflow-style: none;
		&::-webkit-scrollbar {
			width: 0 !important;
		}
	}

	.app {
		height: 100vh;
		width: 100vw;
	}
</style>
