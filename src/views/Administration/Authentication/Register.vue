<template>
   <div class="container mt-50">
      <div class="columns">
         <div class="column is-6 is-offset-3">
            <h3 class="title is-3">Crear una cuenta</h3><hr>
            <form action="#" @submit.prevent="register">

               <div class="field">
                  <label class="label">Name</label>
                  <div class="control">
                     <input class="input" type="text" placeholder="Julio Santos" v-model="name">
                  </div>
               </div>

               <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                     <input class="input" type="email" placeholder="armalot@gmail.com" v-model="email">
                  </div>
               </div>

               <div class="field">
                  <label class="label">Contraseña</label>
                  <div class="control">
                     <input class="input" type="password" v-model="password">
                  </div>
               </div>

               <button type="submit" class="button is-primary">Registrarme</button>
            </form>

            <div class="notification is-danger mt-10" v-if="error">
               {{error}}
            </div>

         </div>
      </div>
   </div>
</template>

<script>
   import '@/firebase/init.js'
   import firebase from 'firebase'
   export default{
      name:'RegisterA',
      data(){
         return{
            name:'',
            email:'',
            password:'',
            error:''
         }
      },
      methods:{
         register(){
            this.error = ''
            if(this.name && this.email && this.password){
               firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
               .then(user => {
                  //actualizar el usuario
                  if(user){
                     user.updateProfile({
                        displayName: this.name
                     }).then((u) => {
                        this.name = ''
                        this.email = ''
                        this.password = ''
                        this.$router.push({ name: 'DashboardA' })
                        console.log(u)
                     }).catch((err) => {
                        this.error = err.message
                     })
                  }
               }).catch(err => {
                  this.error = err.message
               })
            }else{
               this.error = 'Todos los campos son requeridos'
            }
         }
      }
   }
</script>