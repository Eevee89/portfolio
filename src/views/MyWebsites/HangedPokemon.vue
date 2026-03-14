<template>
    <ion-page>
        <ion-content class="ion-padding">
        
        <div class="project-header">
            <h1>Pendu Pokémon</h1>
            <ion-badge color="success">Terminé</ion-badge>
            <p class="ion-text-uppercase">Projet perso - 2024/2025</p>
        </div>

        <div class="main-preview">
            <img src="@/resources/hanging-pokemon.png" alt="Capture du projet" />
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
                        Le pendu Pokémon est un jeu de pendu, reprennant les 1000 Pokémon des 9 premières générations de Pokémon (jusqu'à Pokémon Ecarlate et Violet) .
                        <br><br>
                        Le joueur peut ainsi (dé)sélectionner des générations, pour ne jouer qu'avec ses Pokémon favoris.
                        <br><br>
                        Le joueur peut aussi voir le meilleur score des joueurs inscrits et créer un compte pour sauvegarder son propre meilleur score.
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
                    <li>Mise en place d'un système de score lié à une base de données <strong>MySQL</strong> via <strong>Symfony</strong>.</li>
                    <li>Optimisation de l'affichage mobile avec <strong>Bootstrap</strong>.</li>
                    </ul>
                </ion-item>
            </ion-item-group>
        </ion-list>

        <ion-row class="ion-margin-top ion-justify-content-center">
            <ion-button fill="outline" href="https://hanging-pokemon.jorismartin.fr" target="_blank">
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
