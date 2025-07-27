<template>
    <ion-page>
        <OpenMenuButton v-if="isMobile" title="Blind Test"></OpenMenuButton>
        <ion-content>
            <ion-row class="ion-justify-content-center ion-margin-top">
                <img alt="Blind Test" src="@/resources/blindtest.png" />
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <a href="https://blindtest.jorismartin.fr" target="_blank">
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
    width: 80%;
    border-radius: 10px;
}
</style>