<template>
	<div class="container">
		<div class="centered">
			
			<h2 class="centered__notification">
				{{ show }}
			</h2>

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
				show: 'Awaiting Activation'
			}
		},
		created() {
			socket.on("startShow", _ => {
				this.show = 'Event Activated Successfully';
			})
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		height: 100vh;
		width: 100vw;
		position: relative;
		background-image: linear-gradient(to right bottom, rgba(#000046, 0.8), rgba(#1CB5E0, 0.8));
	}

	.centered {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		&__notification {
			color: #fff;
			font-weight: 400;
			font-size: 1.5rem;
			letter-spacing: .2rem;
		}
	}
</style>