<template>
    <v-container fluid fill-height class="headway teal lighten-3">
        <Navbar :colorProp="theme.color" :imageProp="theme.image"/>
        <h1>HEADWAY</h1>
    </v-container>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
    title: 'Headway - TerminalAnomaly',
    components: { Navbar },
    data () {
        return {
            theme:
                { theme: 'teal', color: 'teal--text text--lighten-3', image: 'ta-nav-te.png'}
        }
    }
}
</script>
