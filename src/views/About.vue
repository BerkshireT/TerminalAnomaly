<template>
    <div class="about indigo lighten-4">
        <Navbar :colorProp="theme.color" :imageProp="theme.image"/>    
        <h1>ABOUTPAGE</h1>
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
                { color: 'indigo--text', image: 'ta-nav-in.png'}
        }
    }
}
</script>
