<template>
    <ion-page>
        <OpenMenuButton v-if="isMobile" title="Ma scolarité"></OpenMenuButton>
        <ion-content>
            <ion-card color="secondary">
                <ion-card-header>
                    <ion-card-title><strong>Diplôme d'ingénieur</strong></ion-card-title>
                    <ion-card-subtitle>2022 - 2025</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <ion-row class="ion-margin ion-align-items-center">
                        <ion-icon :icon="locateOutline" color="danger" size="large" class="ion-margin-end"></ion-icon>
                        <h2>Ecole Polytechnique de l'Université de Lorraine, Vandoeuvre-les-Nancy (54)</h2>
                    </ion-row>
                    Formation d'ingénieur en Informatique, Automatique, Robotique et Réseaux.<br>
                    Spécialisation en Systèmes d'Informations et Réseaux.

                    <ion-card color="secondary">
                        <ion-card-header>
                            <ion-card-title><strong>Semestre Erasmus</strong></ion-card-title>
                            <ion-card-subtitle>Aout 2023 - Janvier 2024</ion-card-subtitle>
                        </ion-card-header>
                        <ion-card-content>
                            <ion-row class="ion-margin ion-align-items-center">
                                <ion-icon :icon="locateOutline" color="danger" size="large" class="ion-margin-end"></ion-icon>
                                <h2>Linköping Universitet, Linköping (Suède)</h2>
                            </ion-row>
                        </ion-card-content>
                    </ion-card>
                </ion-card-content>
            </ion-card>
            <ion-card color="secondary">
                <ion-card-header>
                    <ion-card-title><strong>CPGE MPSI/MP</strong></ion-card-title>
                    <ion-card-subtitle>2020 - 2022</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <ion-row class="ion-margin ion-align-items-center">
                        <ion-icon :icon="locateOutline" color="danger" size="large" class="ion-margin-end"></ion-icon>
                        <h2>Lycée Carnot, Dijon (21)</h2>
                    </ion-row>
                    Théorie avancée en mathématiques et physique-chimie.<br>
                    Pratique basique en informatique (Python et OCaml).<br>
                    Bases en sciences de l'ingénieur (physique appliquée).
                </ion-card-content>
            </ion-card>
            <ion-card color="secondary">
                <ion-card-header>
                    <ion-card-title><strong>Baccalauréat</strong></ion-card-title>
                    <ion-card-subtitle>2017 - 2020</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <ion-row class="ion-margin ion-align-items-center">
                        <ion-icon :icon="locateOutline" color="danger" size="large" class="ion-margin-end"></ion-icon>
                        <h2>Lycée Chevalier d'Eon, Tonnerre (89)</h2>
                    </ion-row>
                    Baccalauréat S.<br>
                    Spécialité SVT, option Maths.<br>
                    Obtenu mention Très Bien.
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { 
    IonContent, 
    IonPage,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonRow,
    IonText,
    IonIcon
} from '@ionic/vue';
import {
    locateOutline,
} from 'ionicons/icons';

import OpenMenuButton from '@/components/OpenMenuButton.vue';
const isMobile: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
</script>