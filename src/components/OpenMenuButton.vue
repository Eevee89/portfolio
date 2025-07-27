<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button></ion-menu-button>
            </ion-buttons>
            <ion-title>{{ props.title ?? "Mon Portfolio" }}</ion-title>
        </ion-toolbar>
    </ion-header>
</template>

<script setup lang="ts">
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton
} from '@ionic/vue';

const props = defineProps({
    title: String
});
</script>