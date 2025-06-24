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
              <menu-component v-for="(menu, index) in menus" :index="index+1" 
                :menu="{ 'icon': menu['icon'], 'label': menu['label'], 'link': menu['link'] }"
                :submenus="menu['submenus']"
                :selected="selectedMenu == index+1"
                @menu-click="(i) => selectedMenu = i"
              ></menu-component>
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
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
  IonAvatar,
  IonCol,
  IonRow,
  IonFooter
} from '@ionic/vue';
import { ref } from 'vue';
import {
  folderOpenOutline,
  logoLinkedin,
  logoGithub,
  logoDiscord,
  logoFirefox,
  newspaperOutline,
  schoolOutline,
  briefcase
} from 'ionicons/icons';

import MenuComponent from './components/MenuComponent.vue';

const menus = ref([
  {
    "link": "/",
    "icon" : newspaperOutline,
    "label": "Mon parcours ...",
    "submenus": [
      {
        "index": 11,
        "label": "... scolaire",
        "link": "/",
        "icon": schoolOutline
      },
      {
        "index": 12,
        "label": "... professionnel",
        "link": "/",
        "icon": briefcase
      },
    ]
  }, {
    "link": "/",
    "icon" : folderOpenOutline,
    "label": "Mon travail",
    "submenus": [
      {
        "index": 21,
        "label": "Pendu Pokemon",
        "link": "/hangedpokemon",
        "icon": logoFirefox
      },
      {
        "index": 22,
        "label": "Blind Test",
        "link": "/blindtest",
        "icon": logoFirefox
      },
      {
        "index": 23,
        "label": "Card counter",
        "link": "/cardcounter",
        "icon": logoFirefox
      }
    ]
  }
]);

const selectedMenu = ref(0);
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
</style>
