<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="inbox-list">
            <ion-list-header>
              <ion-row class="ion-align-items-center">
                <ion-avatar>
                  <img alt="My face" src="$/myface.jpg" />
                </ion-avatar>
                <ion-col class="ion-no-padding ion-padding-start">
                  <h3>Joris Martin</h3>
                  <h4 class="ion-no-padding">Contact : <a href="mailto:admin@jorismartin.fr" target="_blank">admin@jorismartin.fr</a></h4>
                </ion-col>
              </ion-row>
            </ion-list-header>
            <ion-note></ion-note>

            <ion-menu-toggle :auto-hide="false">
              <ion-item-group>
                <ion-item>
                  <ion-icon aria-hidden="true" slot="start" :icon="folderOpenOutline"></ion-icon>
                  <ion-label>Mon travail</ion-label>
                </ion-item>

                <ion-item @click="selectedIndex = 2" router-direction="forward" router-link="/hangedpokemon" lines="none" :detail="false" class="hydrated ion-padding-start" :class="{ selected: selectedIndex === 2 }">
                  <ion-icon aria-hidden="true" slot="start" :icon="logoFirefox"></ion-icon>
                  <ion-label>Pendu Pokémon</ion-label>
                </ion-item>
                <ion-item @click="selectedIndex = 3" router-direction="forward" router-link="/blindtest" lines="none" :detail="false" class="hydrated ion-padding-start" :class="{ selected: selectedIndex === 3 }">
                  <ion-icon aria-hidden="true" slot="start" :icon="logoFirefox"></ion-icon>
                  <ion-label>Blind Test</ion-label>
                </ion-item>
                <ion-item @click="selectedIndex = 4" router-direction="forward" router-link="/cardcounter" lines="none" :detail="false" class="hydrated ion-padding-start" :class="{ selected: selectedIndex === 4 }">
                  <ion-icon aria-hidden="true" slot="start" :icon="logoFirefox"></ion-icon>
                  <ion-label>Card Counter</ion-label>
                </ion-item>
              </ion-item-group>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
        <ion-footer>
          <ion-row class="ion-padding ion-justify-content-around">
            <a href="https://discord.gg/h5HEjnyxjN" target="_blank">
              <ion-icon :icon="logoDiscord" size="large" aria-hidden="true"></ion-icon>
            </a>
            <a href="https://www.linkedin.com/in/joris-martin-1b3748268/" target="_blank">
              <ion-icon :icon="logoLinkedin" size="large" color="primary"></ion-icon>
            </a>
            <a href="https://github.com/Eevee89" target="_blank">
              <ion-icon :icon="logoGithub" size="large" color="primary"></ion-icon>
            </a>
          </ion-row>
        </ion-footer>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup lang="ts">
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
  IonItemGroup,
  IonAvatar,
  IonCol,
  IonRow,
  IonFooter
} from '@ionic/vue';
import { ref } from 'vue';
import {
  archiveOutline,
  archiveSharp,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
  personCircleOutline,
  folderOpenOutline,
  podiumOutline,
  logoFirefox,
  logoAndroid,
  logoLinkedin,
  logoGithub,
  logoDiscord
} from 'ionicons/icons';

const selectedIndex = ref(0);
const appPages = [
  {
    title: 'Inbox',
    url: '/folder/Inbox',
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: 'Outbox',
    url: '/folder/Outbox',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
  },
  {
    title: 'Favorites',
    url: '/folder/Favorites',
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: 'Archived',
    url: '/folder/Archived',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp,
  },
  {
    title: 'Trash',
    url: '/folder/Trash',
    iosIcon: trashOutline,
    mdIcon: trashSharp,
  },
  {
    title: 'Spam',
    url: '/folder/Spam',
    iosIcon: warningOutline,
    mdIcon: warningSharp,
  },
];

const path = window.location.pathname.split('folder/')[1];
if (path !== undefined) {
  selectedIndex.value = appPages.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
}
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-background-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}

ion-item-divider {
  border-radius: 10px;
}
</style>
