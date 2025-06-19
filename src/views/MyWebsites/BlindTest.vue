<template>
    <ion-page>
        <ion-content>
            <ion-row class="ion-justify-content-center ion-margin-top">
                <img alt="Blind Test" src="$/blindtest.png" />
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
</script>

<style scoped>
img {
    width: 80%;
    border-radius: 10px;
}
</style>