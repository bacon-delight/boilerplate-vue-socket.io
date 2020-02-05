<template>
	<div class="container">
		
		<div v-if="!activated" class="curtain">
			<div class="curtain__notification">Awaiting Activation</div>
		</div>

		<div v-else class="background">
			
			<div class="bg-video">
				<video class="bg-video__content" autoplay muted loop>
					<source src="../assets/fireworks4.mp4" type="video/mp4">
					<source src="../assets/fireworks4.webm" type="video/webm">
					Browser doesn't support video!
				</video>
			</div>

			<div class="logo">
				<h2 class="logo__text">Enterprise Integrated Solutions</h2>
				<img class="logo__image" src="../assets/logo.png" alt="Philips">
			</div>

			<div class="greeting">
				<div class="greeting__text">EIS Innovation Open</div>
			</div>

		</div>

	</div>
</template>

<script>
	import io from "socket.io-client";
	var socket = io.connect("https://eis-socket-server.herokuapp.com/");

	export default {
		name: 'stage',
		data() {
			return {
				activated: false
			}
		},
		created() {
			socket.on("startShow", _ => {
				this.activated = true;
			})
		}
	}
</script>

<style lang="scss" scoped>

	@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

	.container {
		height: 100vh;
		width: 100vw;
	}

	.curtain {
		position: relative;
		background: #000;
		height: 100vh;
		width: 100vw;
		transition: all 1s;

		&__notification {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			color: #fff;
			font-weight: 400;
			font-size: 1.5rem;
			letter-spacing: .2rem;
		}
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
			font-family: 'Open Sans', sans-serif;
			color: #fff;
			font-weight: 500;
			font-size: 2.5rem;
			letter-spacing: .25rem;
		}
	}

	.logo {
		position: absolute;
		top: 0;
		right: 0;
		padding: 1rem 2rem;

		&__image {
			max-height: 4rem;
			display: inline-block;
			transform: translateY(1.5rem);
		}

		&__text {
			display: inline-block;
			color: #fff;
			font-weight: 400;
			margin-right: 1rem;
			padding-bottom: 1.5rem;
			letter-spacing: .1rem;
		}
	}
</style>