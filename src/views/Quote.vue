<template>
    <v-container fluid fill-height class="quote deep-purple lighten-3">
        <Navbar :colorProp="theme.color" :imageProp="theme.image"/>
        <h1>QUOTE</h1>
    </v-container>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
    title: 'Quotes - TerminalAnomaly',
    components: { Navbar },
    data () {
        return {
            theme:
                { theme: 'deep-purple', color: 'deep-purple--text text--lighten-3', image: 'ta-nav-dpu.png'}
        }
    }
}
</script>
