<template>
	<div>
		<Oferta/>
		<Categoria/>
	</div>
</template>

<script>
	import Categoria from '@/components/Dashboard/Categoria.vue'
	import Oferta from '@/components/Dashboard/Oferta.vue'
	export default {
		name: 'Home',
		components: {
			Categoria,
			Oferta
		}
	}
</script>

