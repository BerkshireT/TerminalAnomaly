<template>
    <div class="library deep-orange lighten-4">
        <Navbar :colorProp="theme.color" :imageProp="theme.image"/>    
        <h1>LIBRARY</h1>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
    title: 'About - TerminalAnomaly',
    components: { Navbar },
    data () {
        return {
            theme:
                { theme: 'deep-orange', color: 'deep-orange--text text--lighten-3', image: 'ta-nav-dor.png'}
        }
    }
}
</script>
