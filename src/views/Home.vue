<template>
	<div class="container">
		
		<div class="background">
			
			<div class="bg-video">
				<video class="bg-video__content" autoplay loop>
					<source src="../assets/fireworks4.mp4" type="video/mp4">
					<source src="../assets/fireworks4.webm" type="video/webm">
					Browser doesn't support video!
				</video>
			</div>

			<div class="greeting">
				<div class="greeting__text">Welcome to EIS!</div>
			</div>

		</div>

	</div>
</template>

<script>
	export default {
		name: 'home'
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100vw;
		height: 100vh;
		position: relative;
	}

	.background {
		position: relative;
		height: 100vh;
		width: 100vw;
	}

	.bg-video {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: -1;
		overflow: hidden;

		&__content {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}

	.greeting {
		position: absolute;
		top: 80%;
		left: 50%;
		transform: translate(-50%, -50%);
		
		&__text {
			color: #fff;
			font-weight: 500;
			font-size: 2.5rem;
			letter-spacing: .25rem;
		}
	}
</style>