<template>
  <!-- <nav class="navbar mSticky" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/administration">
      <h3 class="title is-2">ZapateriaArmalot</h3>
    </router-link>

    <a role="button" class="navbar-burger burger" :class="{'is-active' : isOpen}" @click.prevent="toggleMenu" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active' : isOpen}">
    <div class="navbar-end">
      <div class="navbar-item">
        <template v-if="user">
          <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          {{user.email}}
        </a>

        <div class="navbar-dropdown">
          <router-link class="navbar-item" to="/dashboard">
            Dashboard
          </router-link>
          <a class="navbar-item" @click.prevent="logout">
            Cerrar sesión
          </a>
        </div>
      </div>
        </template>
        <template v-else>
          <div class="buttons">
          <router-link class="button is-primary" to="/register/administration">
            <strong>Registrar</strong>
          </router-link>
          <router-link class="button is-light" to="/login/administration">
            Iniciar Sección
          </router-link>
        </div>
        </template>
      </div>
    </div>
  </div>
</nav> -->
<div>
<b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">
      <router-link class="navbar-item" to="/administration">
        <h3 class="title is-2">ZaperiaArmalot</h3>
      </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav >
      

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <template v-if="user">
          <b-nav-item-dropdown text="perfil" right>
            <b-dropdown-item href="#">{{user.displayName || user.email}}</b-dropdown-item>
            <router-link class="dropdown-item" to="/dashboard">Dasboard</router-link>
            <b-dropdown-item  @click.prevent="logout">Log out</b-dropdown-item>
          </b-nav-item-dropdown>
        </template>


        

          <!-- Using 'button-content' slot -->
        <template v-else>
          <b-button variant="success" to="/login/administration" class="">Login</b-button>
          <b-button variant="secondary" to="/register/administration" class="mx-2">Register</b-button>
        </template>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>


</template>

<script>
  import '@/js/mStiky.js'
  import firebase from 'firebase'
  import '@/views/Client/Autentificacion/Register.vue'
  export default{
    data(){
      return{
        isOpen:false,
        user:null
      }
    },
    methods:{
      toggleMenu(){
        const status = !this.isOpen
        this.isOpen = status
      },
      logout(){
        firebase.auth().signOut().then(() => {
          this.$router.push({name : 'Login'})
        })
      }
    },
    created(){
      firebase.auth().onAuthStateChanged(user => {
        if(user){
          this.user = user
        }else{
          this.user = null
        }
      })
    }
  }
</script>