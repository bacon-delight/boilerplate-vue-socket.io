<template>
	<div class="container">

		<div class="centered">
			
			<a v-if="!isActivated" class="centered__button" @click="activateConnection">Activate</a>

			<h2 v-else class="centered__notification">Event has been triggered!</h2>

		</div>
		
	</div>
</template>

<script>
	import io from "socket.io-client";
	var socket = io.connect("https://eis-socket-server.herokuapp.com/");

	export default {
		name: 'trigger',
		data() {
			return {
				isActivated: false
			}
		},
		methods: {
			activateConnection() {
				socket.emit('activateShow', true);
				this.isActivated = true;
			}
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

		&__button {
			text-decoration: none;
			color: #fff;
			font-size: 1.8rem;
			letter-spacing: .25rem;
			text-transform: uppercase;
			background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);
			background-size: 250%;
			padding: .5rem 1rem;
			transition: all .8s;
			cursor: pointer;

			&:hover {
				background-position: 100%;
				color: #000046;
				letter-spacing: .35rem;
			}
		}

		&__notification {
			color: #fff;
			font-weight: 400;
			font-size: 1.5rem;
			letter-spacing: .2rem;
		}
	}
</style>