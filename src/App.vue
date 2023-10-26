<template>
<!-- Todo el código HTML -->
<v-app id="app">
    <!-- Navegador lateral -->
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      v-if="logueado"
      color="grey darken-4"
    >
      <v-list dense>
        <template v-if="logueado">
          <!-- Botón de home -->
          <v-list-item :to="{name: 'HelloWorld'}">
            <v-list-item-action>
              <v-icon color="white">home</v-icon>
            </v-list-item-action>
            <v-list-item-title>
              <h3 style="color: white;">
                Inicio
              </h3>
            </v-list-item-title>
          </v-list-item>
          <!-- Fin botón de home -->
        </template>

        <template v-if="logueado">
        <!-- Listado agrupado de Compras -->
          <v-list-group>
            <!-- Botón principal Compras -->
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title>
                  <h3 style="color: white;">
                    Actividades
                  </h3>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- Fin botón principal Compras -->
            <!-- Administración de Tarjetas -->
            <v-list-item :to="{name: 'Tarjetas'}">
              <v-list-item-action>
                <v-icon color="white">table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  <h3 style="color: white;">
                    Administración de Tarjetas
                  </h3>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- Fin Administración de Tarjetas -->
            <!-- Tarjetas Interactivas -->
            <v-list-item :to="{name: 'TarjetasInteractivasAnimals'}">
              <v-list-item-action>
                <v-icon color="white">table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  <h3 style="color: white;">
                    Tarjetas de animales
                  </h3>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- Fin Tarjetas Interactivas -->
            <!-- Tarjetas Interactivas -->
            <v-list-item :to="{name: 'TarjetasInteractivasColors'}">
              <v-list-item-action>
                <v-icon color="white">table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  <h3 style="color: white;">
                    Tarjetas de colores
                  </h3>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- Fin Tarjetas Interactivas -->
            <!-- Tarjetas Interactivas -->
            <v-list-item :to="{name: 'TarjetasInteractivasJobs'}">
              <v-list-item-action>
                <v-icon color="white">table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  <h3 style="color: white;">
                    Tarjetas de trabajos
                  </h3>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- Fin Tarjetas Interactivas -->
          </v-list-group>
        <!-- Fin de listado agrupado de Compras -->
        </template>

        <template v-if="logueado">
        <!-- Listado agrupado de Accesos -->
          <v-list-group>
            <!-- Botón principal de Accesos -->
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title>
                  <h3 style="color: white;">
                    Accesos
                  </h3>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- Fin botón principal de accesos -->
            <!-- Usuarios -->
            <v-list-item :to="{name: 'Usuarios'}">
              <v-list-item-action>
                <v-icon color="white">table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  <h3 style="color: white;">
                    Usuarios
                  </h3>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- Fin Usuarios -->
          </v-list-group>
        <!-- Fin listado agrupado de Accesos -->
        </template>
      </v-list>
    </v-navigation-drawer>
    <!-- Fin del navegador lateral -->

    <!-- Barra superior -->
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="orange darken-3"
      dark
    >
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-3"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span class="hidden-sm-and-down">Flash English</span>
      </v-toolbar-title>      
      <v-spacer></v-spacer>
      <v-btn @click="salir()" icon v-if="logueado">
        <v-icon>logout</v-icon>Salir
      </v-btn>
      <v-btn icon v-else :to="{name: 'Login'}">
        <v-icon>login</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- Fin barra superior -->

    <!-- Contenido -->
    <v-main>
      <v-container
        fluid
        fill-height
      >
        <v-slide-y-transition mode="out-in">
          <router-view/> <!--Contenido traido desde el router-->
        </v-slide-y-transition>
      </v-container>
    </v-main>
    <!-- Fin Contenido -->

    <!-- Footer -->
    <v-footer  height="auto">
      <v-layout justify-center>
        <v-flex text-xs-center>
          <v-card flat tile color="orange darken-2" class="text-center">
            <v-card-text class="white--text font-italic">
              Ingeniería en Sistemas | Grupo 1 &copy; {{new Date().getFullYear()}}
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-footer>
    <!-- Fin del Footer -->

  </v-app>
</template>

<script>
//Todo el código JS
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    //HelloWorld,
  },

  data: () => ({
    //
    drawer: true,
  }),

  computed: {
    logueado(){
      return this.$store.state.token
    }
  },

  created(){
    this.$store.dispatch('autoLogin');
  },

  methods: {
    salir(){
      this.$store.dispatch('salir');
    },
  },
};
</script>
