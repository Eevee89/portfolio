<template>
    <ion-page>
        <OpenMenuButton v-if="isMobile" title="Accueil"></OpenMenuButton>
        <ion-content>
            <ion-text class="ion-text-center ion-padding">
                <p>This page will be implemented in the future, please come back later</p>
            </ion-text>
            <ion-row class="ion-justify-content-center">
                <img alt="Toothless" src="@/resources/toothless-dancing.gif"/>
            </ion-row>
            <ion-row class="ion-align-items-center ion-padding arrow" v-if="isMobile">
                <p>Slide to open menu</p>
                <ion-icon :icon="chevronForwardOutline" size="large"></ion-icon>
            </ion-row>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { 
    IonContent, 
    IonPage,
    IonRow,
    IonIcon,
    IonText
} from '@ionic/vue';

import {
    chevronForwardOutline
} from 'ionicons/icons';

import OpenMenuButton from '@/components/OpenMenuButton.vue';
const isMobile: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
</script>


<style lang="css" scoped>
.arrow {
    transform-origin: 0% 50%;
    animation: slide 1s ease-in-out infinite;
}

@keyframes slide {
    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(10px, 0);
    }
}
</style>