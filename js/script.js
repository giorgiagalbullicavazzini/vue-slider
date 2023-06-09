'use strict';

// Vue
const { createApp } = Vue;

// Slider
const app = createApp({
    data() {
        return {
            currentVideogame: 0,
            autoplayTimer: 'sliderTimer',

            // Videogames data
            videogames: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morales',
                    text: 'Experience the rise of Miles Morales as the new hero: master incredible and explosive new powers to become his own Spider-Man.',
                    isActive: true,
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    isActive: false,
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos.',
                    isActive: false,
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city.',
                    isActive: false,
                },
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    isActive: false,
                }
            ]
        }
    },
    methods: {
        activeThumb() {
            if(this.videogames[this.currentVideogame].isActive === true) {
                this.videogames[this.currentVideogame].isActive = false;
            } else {
                this.videogames[this.currentVideogame].isActive = true;
            }
        },
        prevImg() {
            this.activeThumb();
            this.currentVideogame--;
            if(this.currentVideogame < 0) {
                this.currentVideogame = this.videogames.length - 1;
            }
            this.activeThumb();
        },
        nextImg() {
            this.activeThumb();
            this.currentVideogame++;
            if(this.currentVideogame === this.videogames.length) {
                this.currentVideogame = 0;
            }
            this.activeThumb();
        },
        selectedThumb(index) {
            this.activeThumb();
            this.currentVideogame = index;
            this.activeThumb();
        },
        autoplay() {
            this.autoplayTimer = setInterval(this.nextImg, 3000);
        },
        stopAutoplay() {
            clearInterval(this.autoplayTimer);
        }
    },
    mounted() {
        this.autoplay();
    }
}).mount('#app');