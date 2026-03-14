<template>
    <ion-page>
        <ion-content class="ion-padding">
        
        <div class="project-header">
            <h1>Blind Test</h1>
            <ion-badge color="warning">En cours</ion-badge>
            <p class="ion-text-uppercase">Projet perso - 2025/2026</p>
        </div>

        <div class="main-preview">
            <img src="@/resources/blindtest.png" alt="Capture du projet" />
        </div>

        <ion-row class="ion-margin-top">
            <ion-chip outline color="primary">
                <ion-avatar style="--size: 24px;">
                    <img class="logo" alt="Symfony" src="/src/resources/symfony.png"></img>
                </ion-avatar>
                <ion-label>Symfony</ion-label>
            </ion-chip>
            <ion-chip outline color="tertiary">
                <ion-avatar style="--size: 24px;">
                    <img class="logo" alt="JQuery" src="/src/resources/jquery.png"></img>
                </ion-avatar>
                <ion-label>JQuery</ion-label>
            </ion-chip>
            <ion-chip outline color="tertiary">
                <ion-avatar style="--size: 24px;">
                    <img class="logo" alt="Boostrap" src="/src/resources/bootstrap.png"></img>
                </ion-avatar>
                <ion-label>Bootstrap</ion-label>
            </ion-chip>
            <ion-chip outline color="tertiary">
                <ion-avatar style="--size: 24px;">
                    <img class="logo" alt="Boostrap" src="/src/resources/pusher.png"></img>
                </ion-avatar>
                <ion-label>Pusher</ion-label>
            </ion-chip>
            <ion-chip outline color="secondary">
                <ion-avatar style="--size: 24px;">
                    <img class="logo" alt="MySQL" src="/src/resources/mysql.png"></img>
                </ion-avatar>
                <ion-label>MySQL</ion-label>
            </ion-chip>
        </ion-row>

        <ion-list lines="none" class="ion-margin-top">
            <ion-item-group>
                <ion-item-divider color="primary">
                    <ion-label>Le projet</ion-label>
                </ion-item-divider>
                <ion-item>
                    <p>
                        Le blind test permet de jouer en ligne avec ses amis.
                        <br><br>
                        Un premier joueur (le master) crée une salle de jeu (une room), et ajoute les musiques qu'il veut (via lien Youtube). 
                        Il peut également modifier le temps que les joueurs auront pour deviner les musiques, et mettre un nombre d'essais maximum.
                        <br><br>
                        Les joueurs peuvent rejoindre une partie en renseignant son numéro (visible en haut de l'interface master). Un joueur peut choisir une couleur, et un son pour son buzzer.
                        Lors du jeu, l'appareil du joueur devient son buzzer.
                    </p>
                </ion-item>
            </ion-item-group>

            <ion-item-group class="ion-margin-top">
                <ion-item-divider color="primary">
                    <ion-label>Challenges & Apprentissages</ion-label>
                </ion-item-divider>
                <ion-item>
                    <ul>
                    <li>Gestion des requêtes <strong>asynchrones (AJAX)</strong> avec jQuery.</li>
                    <li>Gestion d'une <strong>websocket externalisée</strong> avec Pusher.</li>
                    <li>Mise en place d'une persistance des salles dans une base de données <strong>MySQL</strong> via <strong>Symfony</strong>.</li>
                    <li>Optimisation de l'affichage mobile avec <strong>Bootstrap</strong>.</li>
                    </ul>
                </ion-item>
            </ion-item-group>
        </ion-list>

        <ion-row class="ion-margin-top ion-justify-content-center">
            <ion-button fill="outline" href="https://hanging-pokemon.jorismartin.fr" target="_blank" disabled="true">
                <ion-icon slot="start" :icon="globeOutline"></ion-icon>
                Tester
            </ion-button>
        </ion-row>

        </ion-content>
    </ion-page>
</template>

<script setup>
import { globeOutline } from 'ionicons/icons';
import { 
    IonPage,
    IonContent,
    IonRow, 
    IonBadge,
    IonChip,
    IonLabel,
    IonIcon,
    IonAvatar,
    IonList, 
    IonItem,
    IonItemDivider,
    IonItemGroup,
    IonButton 
} from '@ionic/vue';
</script>

<style scoped>
.project-header h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 5px;
}

.main-preview img {
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    width: 100%;
}

ul {
    padding-inline-start: 20px;
    font-size: 0.9rem;
    color: var(--ion-color-step-600);
}

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}
</style>