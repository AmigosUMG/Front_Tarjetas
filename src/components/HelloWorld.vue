<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/fastEn.png')"
          class="my-3"
          contain
          height="350"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          ¡Bienvenido a Flash English!
        </h1>

        <p class="subheading font-weight-regular">
          Let's learn, 
          <a class="d-inline pa-2 pink darken-1 white--text">
            ALL TOGETHER!
          </a> 
        </p>
      </v-col>
      <v-col
        class="mb-5"
        cols="12"
      >
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosistema
        </h2>

        <p>
          Este proyecto está desarrollado gracias a la implementación de VueJS 
          <v-img
            :src="require('../assets/logo.png')"
            class="my-1"
            contain
            height="40"
          ></v-img>
          <br>
          un framework escrito en JavaScript perfecto para el desarrollo de aplicaciones
          single page.
        </p>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            <v-btn color="success">
              {{ eco.text }}
            </v-btn>
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
    }),
  }
</script>
