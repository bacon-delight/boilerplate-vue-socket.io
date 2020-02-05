<template>
	<div class="container">

		<div class="centered">
			
			<a v-if="!isActivated" class="centered__button" @click="activateConnection">Open</a>

			<h2 v-else class="centered__notification">Event Started</h2>

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
		background-image: linear-gradient(to right bottom, rgba(#000046, 0.8), rgba(#000000, 0.8));
	}

	.centered {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		&__button {
			text-decoration: none;
			color: #fff;
			background: tomato;
			font-size: 1.8rem;
			letter-spacing: .25rem;
			text-transform: uppercase;
			background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);
			background-size: 250%;
			padding: .5rem 1rem;
			cursor: pointer;
			border-radius: 10px;
		}

		&__notification {
			color: #fff;
			font-weight: 500;
			font-size: 1.5rem;
			letter-spacing: .2rem;
			text-align: center;
			text-transform: uppercase;
		}
	}
</style>