<template>
    <v-layout align-start>
        <v-flex>
            <div :items="cards" class="row">
                <v-card class="mx-auto col-6" max-width="344" v-for="card in cards" v-bind:key="card.id" style="margin-top: 20px;" color="green lighten-5">
                    <v-card-text>
                        <p class="text-h4 text--primary">
                            {{card.title}}
                        </p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="green" @click="revealCard(card.id)">
                        <h4 style="color: white;"> Respuesta </h4>
                        </v-btn>
                    </v-card-actions>
                
                    <v-expand-transition>
                        <v-card
                        v-if="reveals[card.id]"
                        class="transition-fast-in-fast-out v-card--reveal"
                        style="height: 100%;"
                        >
                        <v-card-text class="pb-0">
                            <p class="text-h4 text--primary">
                                {{ card.traduction }}
                            </p>
                        </v-card-text>
                        <v-card-actions class="pt-0">
                            <v-btn
                            text
                            color="green"
                            @click="hideCard(card.id)"
                            >
                            Pregunta
                            </v-btn>
                        </v-card-actions>
                        </v-card>
                    </v-expand-transition>
                </v-card>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        reveals: {},
        cards: [],
        id: '',
        title: '',
        traduction: ''
    }),
    computed: {},

    watch: {},

    created () {
        this.listar()
    },

    methods: {
        listar() {
            let cat = this;
            axios.get('tarjet/tarjet/animals/',{headers: {
                'Authorization': `Token ${this.$store.state.token}`
            }})
            .then((response)=>{
                cat.cards = response.data;
                console.log(response.data);
            })
            .catch((error)=>{
                console.log(error);
            });
        },
        revealCard(cardId) {
            // Usar Vue.set para establecer el estado de la tarjeta específica
            this.$set(this.reveals, cardId, true);
        },
        hideCard(cardId) {
            // Usar Vue.set para establecer el estado de la tarjeta específica
            this.$set(this.reveals, cardId, false);
        },
    },
}
</script>

<style>
.v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
}
</style>