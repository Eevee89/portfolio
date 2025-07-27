<template>
    <ion-page>
        <OpenMenuButton v-if="isMobile" title="Say The Line"></OpenMenuButton>
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
                <a href="mailto:admin@jorismartin.fr?subject=%5BSTL%5D%20Demande%20de%20participation%20aux%20tests&body=Vous%20serez%20ajouter%20en%20tant%20que%20testeur%20et%20recevrez%20un%20lien%20%C3%A0%20l'adresse%20que%20vous%20avez%20utilis%C3%A9e%20pour%20envoyer%20ce%20mail"
                target="_blank"
                >
                    <ion-button>
                        <ion-icon :icon="exitOutline" slot="start"></ion-icon>
                        <ion-label slot="end">Tester l'application</ion-label>
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