<template>
    <nav>
        <v-toolbar flat dark app>
            <v-toolbar-side-icon class="teal--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>
                <v-icon class="teal--text">face</v-icon>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat outline color="teal">
                <v-icon>code</v-icon>
                <span>Button</span>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer app v-model="drawer" dark>
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="teal--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content class="teal--text">
                        <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data () {
        return {
            drawer: false,
            links: [
                { icon: 'dashboard', text: 'Dashboard', route: '/'},
                { icon: 'delete', text: 'test', route: '/test'}
            ]
        }
    }
}
</script>
