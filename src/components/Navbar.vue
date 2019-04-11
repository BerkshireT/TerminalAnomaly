<template>
    <nav>
        <v-toolbar flat dark app>
            <v-toolbar-side-icon exact route :to="'/'">
                <v-img :src="require('../assets/' + imageProp)" />
            </v-toolbar-side-icon>
            <v-toolbar-title class="hidden-xs-only">
                <span>TerminalAnomaly.dev</span>
            </v-toolbar-title>
            <v-divider dark class="mx-3 py-1 hidden-xs-only" inset vertical />
            <v-spacer></v-spacer>
            <v-toolbar-side-icon :class="colorProp + ' hidden-xs-only'" 
            v-for="icon in icons" :key="icon.brand" :href="'https://' + icon.route" target="blank">
                <font-awesome-icon :icon="['fab', icon.brand ]" class="display-1" />
            </v-toolbar-side-icon>
                <v-menu bottom left offset-x>
                    <template v-slot:activator="{ on }">
                        <v-btn dark icon v-on="on" class='hidden-sm-and-up'>
                            <v-icon :class="colorProp">menu</v-icon>
                        </v-btn>
                    </template>
                <v-list dark>
                    <v-list-tile :class="colorProp" v-for="icon in icons" :key="icon.brand"
                    :href="'https://' + icon.route" target="blank">
                        <font-awesome-icon :icon="['fab', icon.brand ]" class="display-1" />
                    </v-list-tile>
                </v-list>
                </v-menu>
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
