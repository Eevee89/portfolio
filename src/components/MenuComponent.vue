<template>
    <ion-item @click="menuClick(); $emit('menuClick', props.index)" router-direction="forward" :router-link="props.menu!['link']+menuLink" lines="none">
        <ion-icon aria-hidden="true" slot="start" :icon="props.menu!['icon']"></ion-icon>
        <ion-label>{{ props.menu!['label'] }}</ion-label>
        <ion-icon v-if="hasSubMenu" ref="iconRef" aria-hidden="true" slot="end" :icon="chevronForwardOutline"></ion-icon>
    </ion-item>
    <ion-item-group v-if="selectedMenu">
        <ion-item v-for="submenu in props.submenus!"
            @click="submenuClick(submenu['index'], submenu['link'])" 
        router-direction="forward" :router-link="props.menu!['link']+submenu['link']" 
            lines="none" :detail="false" class="hydrated ion-margin-start" 
            :class="{ selected: selectedIndex == submenu['index'] }">
            <ion-icon aria-hidden="true" slot="start" :icon="submenu['icon']"></ion-icon>
            <ion-label>{{ submenu['label'] }}</ion-label>
        </ion-item>
    </ion-item-group>
</template>

<script setup lang="ts">
import {
    IonIcon,
    IonItem,
    IonLabel,
    IonItemGroup,
} from '@ionic/vue';
import {
    Animation,
    createAnimation 
} from '@ionic/vue';
import { 
    ref, 
    onMounted,
    watch
} from 'vue';
import {
    chevronForwardOutline,
} from 'ionicons/icons';

const props = defineProps({
    menu: Object,
    submenus: Array<{ index: number, label: string, link: string, icon: string }>,
    index: Number,
    selected: Boolean
})

const selectedIndex = ref(0);
const menuLink = ref("/");
const selectedMenu = ref(props.selected);
const iconRef = ref();
let animation: Animation;
const hasSubMenu: boolean = props.submenus?.length ? true : false;

onMounted(() => {
    if (hasSubMenu) {
        animation = createAnimation()
        .addElement(iconRef.value.$el)
        .duration(300)
        .iterations(1)
        .fromTo('transform', 'rotate(0deg)', 'rotate(90deg)');
    }
});

watch(() => props.selected, (newVal) => {
    selectedMenu.value = newVal;
    if (hasSubMenu) {
        playAnimation();
    }
});

function playAnimation() {
    if (selectedMenu.value) {
        animation.direction("normal").play();
    } else {
        animation.direction("reverse").play();
    }
}

function menuClick() {
    selectedMenu.value = !selectedMenu.value;
    if (hasSubMenu) {
        playAnimation();
    }
}

function submenuClick(index: number, link: string) {
    selectedIndex.value = index;
    menuLink.value = link;
}
</script>

<style lang="css" scoped>
ion-item {
    --padding-start: 10px;
    --padding-end: 10px;
    border-radius: 4px;
}

ion-item.selected {
    --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-item.selected ion-icon {
    color: var(--ion-color-primary);
}

ion-item ion-icon {
    color: #616e7e;
}

ion-item ion-label {
    font-weight: 500;
}

ion-item {
    --padding-start: 16px;
    --padding-end: 16px;
    --min-height: 50px;
}

ion-item.selected ion-icon {
    color: var(--ion-color-primary);
}

ion-item ion-icon {
    font-size: 24px;
    color: #73849a;
}


ion-item.selected {
    --color: var(--ion-color-primary);
}

ion-item-divider {
    border-radius: 10px;
}
</style>