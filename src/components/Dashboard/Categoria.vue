<template>
	<div>
		<b-container>

			<b-row>
				<b-col cols="3" class="">
					<div class="text-center">
						<b-button variant="primary" @click="habilitar">
							Buscqueda por filtro
						</b-button>
					</div>
					<div v-if="(disabled==false)">
						<b-form-group label="Categoria" >
							<b-form-radio v-model="selected2" name="some-radios" value="Todos">Todos</b-form-radio>
							<b-form-radio v-model="selected2" name="some-radios" value="Damas">Damas</b-form-radio>
							<b-form-radio v-model="selected2" name="some-radios" value="Caballeros">Caballeros</b-form-radio>
							<b-form-radio v-model="selected2" name="some-radios" value="Niños">Niños</b-form-radio>
						</b-form-group>
					</div>
				</b-col>
				<b-col cols="9">
					<b-form-group label="Buscar por categorias">
						<div>
							<b-nav tabs >
								<b-nav-item @click="todos">Todos</b-nav-item>
								<b-nav-item @click="damas">Damas</b-nav-item>
								<b-nav-item @click="caballeros">Caballeros</b-nav-item>
								<b-nav-item @click="ninos">Niños</b-nav-item>
							</b-nav>
							<div v-if="(todo==true)" class="tabs">
								<div v-for="pic in pics" :key="pic.id">							
									<img :src="getImgUrl(pic)" v-bind:alt="pic">
								</div>
							</div>
							<div v-if="(dama==true)" class="tabs">
								Damas
							</div>
							<div v-if="(caballero==true)" class="tabs">
								Caballeros
							</div>
							<div v-if="(nino==true)" class="tabs">
								Niños
							</div>
						</div>
					</b-form-group>
				</b-col>
			</b-row>


			<b-row>
				<b-col cols="3" class="">
					<div v-if="(disabled==false)">
						<b-form-group label="Talla">
							<template>

								<div >
									<b-form-group >
										<b-form-checkbox-group
										v-model="selected"
										:options="options"
										stacked
										buttons
										class="px-1"
										></b-form-checkbox-group>

										<b-form-checkbox-group
										v-model="selected"
										:options="options2"
										stacked
										buttons
										class="px-1"
										></b-form-checkbox-group>

										<b-form-checkbox-group
										v-model="selected"
										:options="options3"
										stacked
										buttons
										class="px-1"
										></b-form-checkbox-group>

										<b-form-checkbox-group
										v-model="selected"
										:options="options4"
										stacked
										buttons
										class="px-1"
										></b-form-checkbox-group>
									</b-form-group>
								</div>
								<div class="mt-3">Selected: <strong>{{ selected }}</strong></div>

							</template>
						</b-form-group>
					</div>
				</b-col>
				<b-col cols="9">
					<b-form-group label="Buscar por marca">
						<div>
							<Carousel/>
						</div>
					</b-form-group>
				</b-col>
			</b-row>


			<b-row>
				<b-col cols="3">
					<div v-if="(disabled==false)">
						<b-form-group label="Categoria">
							<template>
								<div>
									<b-form-select v-model="selected3" :options="options5"></b-form-select>
									<div class="mt-3">Selected: <strong>{{ selected3 }}</strong></div>
								</div>
							</template>
						</b-form-group>
					</div>
				</b-col>
				<b-col cols="9">
					<b-form-group label="Buscar por popular">
						<div>
							<b-nav tabs>
								<b-nav-item @click="todos2">Todos</b-nav-item>
								<b-nav-item @click="damas2">Damas</b-nav-item>
								<b-nav-item @click="caballeros2">Caballeros</b-nav-item>
								<b-nav-item @click="ninos2">Niños</b-nav-item>
							</b-nav>
							<div v-if="(todo2==true)">
								<div>
									<template>
										<v-card
										class="mx-auto mt-2"
										max-width="250">
										<v-img
										src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
										height="200px"
										></v-img>
										<v-card-title>
											Precio 50.000 Bs
										</v-card-title>
									</v-card>
								</template>
							</div>

						</div>
						<div v-if="(dama2==true)">
							Popular Damas
						</div>
						<div v-if="(caballero2==true)">
							Popular Caballeros
						</div>
						<div v-if="(nino2==true)">
							Popular Niños
						</div>
					</div>
				</b-form-group>
			</b-col>
		</b-row>

		<b-row>
			<b-col cols="3">
				<div v-if="(disabled==false)">
					<b-form-group label="Marcas">

					</b-form-group>
				</div>
			</b-col>
			<b-col cols="9">
			</b-col>
		</b-row>
	</b-container>
</div>
</template>

<script>
import Carousel from './Carousel/Carousel.vue'
	export default {
		data() {
			return {
				disabled:true,
				selected: [],
				selected2: '',
				selected3: '',
				dialog: false,
				options: [
				{ text: '25', value: 25 },
				{ text: '26', value: 26 },
				{ text: '27', value: 27 },
				{ text: '28', value: 28 },
				{ text: '29', value: 29 }
				],
				options2 : [
				{ text: '30', value: 30 },
				{ text: '31', value: 31 },
				{ text: '32', value: 32 },
				{ text: '33', value: 33 },
				{ text: '34', value: 34 }
				],
				options3 : [
				{ text: '35', value: 35 },
				{ text: '36', value: 36 },
				{ text: '37', value: 37 },
				{ text: '38', value: 38 },
				{ text: '39', value: 39 }
				],
				options4 : [
				{ text: '40', value: 40 },
				{ text: '41', value: 41 },
				{ text: '42', value: 42 },
				{ text: '43', value: 43 },
				{ text: '44', value: 44 }
				],
				options5 : [
				{ text: 'Zapatos', value: 'Zapatos' },
				{ text: 'Cholas', value: 'Cholas' },
				{ text: 'Sandalias', value: 'Sandalias' },
				{ text: 'Deportivos', value: 'Deportivos' },
				{ text: 'Mas', value: 'Mas' }
				],
				todo:true,
				dama:false,
				caballero:false,
				nino:false,
				todo2:true,
				dama2:false,
				caballero2:false,
				nino2:false,
				show: false,
				model: null,
				images:[
				{url:'@/assets/apolo.png', value:'Apolo'}
				]
			}
		},
		computed: {

		},
		components:{
			Carousel
		},
		methods:{
			habilitar(){
				this.disabled=!this.disabled
			},
			damas(){
				this.dama=true, this.todo=false, this.caballero=false, this.nino=false 
			},
			todos(){
				this.todo=true, this.dama=false, this.caballero=false, this.nino=false 
			},
			caballeros(){
				this.caballero=true, this.dama=false, this.todo=false, this.nino=false 
			},
			ninos(){
				this.nino=true, this.dama=false, this.todo=false, this.caballero=false 
			},
			damas2(){
				this.dama2=true, this.todo2=false, this.caballero2=false, this.nino2=false 
			},
			todos2(){
				this.todo2=true, this.dama2=false, this.caballero2=false, this.nino2=false 
			},
			caballeros2(){
				this.caballero2=true, this.dama2=false, this.todo2=false, this.nino2=false 
			},
			ninos2(){
				this.nino2=true, this.dama2=false, this.todo2=false, this.caballero2=false 
			},
			getImgUrl(pic) {
				return require('@/assets/'+pic)
			}
		}
	}
</script>

<style type="text/css">
	.container{
		width: 100%;
	}
	.tabs{
		width:90%;

	}

	.tabs:hover{
		background: rgba(0,0,0,0.4);
	}
</style>