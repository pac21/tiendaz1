<template>
	<div>
		<b-container>
			<b-row>
				<b-col cols="3" v-for="producto in productos" :key="producto.id">
					<template>
						<v-card
						class="mx-auto px-0"
						max-width="200"
						outlined
						>
						<v-img
						height="200"
						width="200"
						src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
						></v-img>
						<v-list-item three-line>
							<v-list-item-content>
								<div class="overline mb-4">{{producto.name}}</div>
								<v-list-item-title class="headline mb-1">{{producto.precio}} Bs</v-list-item-title>
							</v-list-item-content>
							<v-list-item-avatar
							tile
							size="80"
							color="grey"
							></v-list-item-avatar>
						</v-list-item>
						<v-card-actions>
							<label v-if="producto.cantidad==0">Sin stock</label>
							<b-button v-if="producto.cantidad >= 1" @click="agregarCarrito(producto)" variant="info">Agregar al carrito</b-button>
						</v-card-actions>
					</v-card>
				</template>
				</b-col>
			</b-row>
			<b-row>
			carrito: {{ carritos }}
			</b-row>
			<b-row>
				<b-col cols="3" v-for="(carrito, index) in carritos" :key="carrito.id">
					<template>
						<v-card
						class="mx-auto px-0"
						max-width="200"
						outlined
						>
						<v-img
						height="200"
						width="200"
						src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
						></v-img>
						<v-list-item three-line>
							<v-list-item-content>
								<div class="overline mb-4">{{carrito.name}}</div>
								<v-list-item-title class="headline mb-1">{{carrito.precio}} Bs</v-list-item-title>
							</v-list-item-content>
							<v-list-item-avatar
							tile
							size="80"
							color="grey"
							></v-list-item-avatar>
						</v-list-item>
						<v-card-actions>
							<b-button @click="eliminarCarrito(index)" variant="info">Eliminar del carrito</b-button>
						</v-card-actions>
					</v-card>
				</template>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
	export default{
		name: 'Carrito',
		data(){
			return{
				carritos:[],
				productos:[
				{id:1, name:'manzana', precio:50, cantidad:20, carrito:false},
				{id:2, name:'cambur', precio:100, cantidad:20, carrito:false},
				{id:3, name:'pera', precio:75, cantidad:20, carrito:false},
				{id:4, name:'naranja', precio:90, cantidad:20, carrito:false},
				{id:5, name:'fresa', precio:30, cantidad:20, carrito:false},
				{id:6, name:'uvas', precio:25, cantidad:20, carrito:false},
				{id:7, name:'kiwi', precio:125, cantidad:0, carrito:false},
				{id:8, name:'Sandia', precio:200, cantidad:20, carrito:false},
				{id:9, name:'Carne', precio:700, cantidad:20, carrito:false},
				]
			}
		},
		methods:{
			agregarCarrito(producto){
				this.productos[producto.id-1].carrito=true
				producto.cantidad-=1
				this.carritos.push(producto)
			},
			eliminarCarrito(index){
				this.carritos.splice(index,1)
			}
		}
	}
</script>