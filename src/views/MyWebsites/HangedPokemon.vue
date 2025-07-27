<template>
    <ion-page>
        <OpenMenuButton v-if="isMobile" title="Pendu Pokémon"></OpenMenuButton>
        <ion-content>
            <ion-row class="ion-align-items-center ion-justify-content-between ion-margin-top ion-padding-start ion-padding-end language-row">
                <ion-text><h2 class="ion-no-padding ion-no-margin">Langage</h2></ion-text>
                <img class="logo" alt="PHP" src="/src/resources/php.png"></img>
            </ion-row>
            <ion-row class="ion-justify-content-center ion-margin-top">
                <img class="thumbnail" alt="Pendu Pokemon" src="@/resources/pokemonhanged.png" />
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <a href="https://pokemonhanged.jorismartin.fr" target="_blank">
                    <ion-button>
                        <ion-icon :icon="exitOutline" slot="start"></ion-icon>
                        <ion-label slot="end">Y aller</ion-label>
                    </ion-button>
                </a>
            </ion-row>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { 
  IonButton, 
  IonContent, 
  IonPage, 
  IonIcon,
  IonRow,
  IonLabel,
  IonText,
} from '@ionic/vue';

import {
    exitOutline
} from 'ionicons/icons';

import OpenMenuButton from '@/components/OpenMenuButton.vue';
const isMobile: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
</script>

<style scoped>
img {
    border-radius: 10px;
}

.thumbnail {
    width: 80%;
}

.language-row {
    height: 10%;
}

.logo {
    height: 100%;
    object-fit: contain;
}
</style>