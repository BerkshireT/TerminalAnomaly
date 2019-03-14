<template>
    <nav>
        <v-toolbar flat dark app>
            <v-toolbar-side-icon exact route :to="'/'">
                <v-img :src="require('../assets/' + imageProp)" />
            </v-toolbar-side-icon>
            <v-toolbar-title>
                <span>TerminalAnomaly.dev</span>
            </v-toolbar-title>
            <v-divider class="mx-3" inset vertical />
            <v-spacer></v-spacer>
                <v-toolbar-side-icon :class="colorProp" 
                v-for="icon in icons" :key="icon.brand" :href="'https://' + icon.route" target="blank">
                    <font-awesome-icon :icon="['fab', icon.brand ]" class="display-1" />
                </v-toolbar-side-icon>
        </v-toolbar>
    </nav>
</template>

<script>
export default {
    props: {
        colorProp: {
            required: true,
            default: 'teal--text'
        },
        imageProp: {
            required: true,
            default: 'ta-nav-gr.png'
        }
    },
    data() {
        return {
            icons: [
                { brand: 'twitter-square', route: 'twitter.com/TerminalAnomaly' },
                { brand: 'linkedin', route: 'linkedin.com/in/TylerBerkshire' },
                { brand: 'github-square', route: 'github.com/BerkshireT' }
            ]
        }
    }
}
</script>
