<template>
    <v-container fluid fill-height class="game indigo lighten-3">
        <Navbar :colorProp="theme.color" :imageProp="theme.image"/>
        <h1>GAME</h1>
    </v-container>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
    title: 'Game - TerminalAnomaly',
    components: { Navbar },
    data () {
        return {
            theme:
                { theme: 'indigo', color: 'indigo--text text--lighten-3', image: 'ta-nav-in.png'}
        }
    }
}
</script>
