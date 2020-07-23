<template>
	<div>
		<b-container>
			Dashboard<br><br>
			<b-button variant="primary" @click="carrito">Carrito</b-button>
			<router-link to="/carrito"><b-button variant="primary" @click="carrito">Carrito</b-button></router-link>
			
		</b-container>
	</div>
</template>

<script>
export default{
	name: 'Dashboard',
	methods:{
		carrito(){
			this.$router.push({ path: 'carrito' })
		}
	}
}
</script>