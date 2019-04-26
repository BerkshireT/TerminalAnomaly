<template>
    <v-container fluid fill-height class="melee amber lighten-3">
        <Navbar :colorProp="theme.color" :imageProp="theme.image"/>
        <h1>MELEE</h1>
    </v-container>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
    title: 'Melee - TerminalAnomaly',
    components: { Navbar },
    data () {
        return {
            theme:
                { theme: 'amber', color: 'amber--text text--lighten-3', image: 'ta-nav-am.png'}
        }
    }
}
</script>
