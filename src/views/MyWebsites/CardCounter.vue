<template>
    <ion-page>
        <OpenMenuButton v-if="isMobile" title="Compteur de points"></OpenMenuButton>
        <ion-content>
            <ion-row class="ion-justify-content-center ion-margin-top">
                <ion-row class="ion-justify-content-around" style="width: 80%">
                    <img alt="CardCounter" src="@/resources/cardcounter_home.jpg" />
                    <img alt="CardCounter" src="@/resources/cardcounter_round.jpg" />
                    <img alt="CardCounter" src="@/resources/cardcounter_scorelist.jpg" />
                </ion-row>
            </ion-row>
            <div style="height: 10px"></div>
            <ion-row class="ion-justify-content-center">
                <a href="https://cardcounter.jorismartin.fr" target="_blank">
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
  IonLabel
} from '@ionic/vue';

import {
    exitOutline
} from 'ionicons/icons';

import OpenMenuButton from '@/components/OpenMenuButton.vue';
const isMobile: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
</script>

<style scoped>
img {
    width: 20%;
    border-radius: 10px;
}
</style>