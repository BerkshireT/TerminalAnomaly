<template>
    <div class="gallery amber lighten-4">
        <Navbar :colorProp="theme.color" :imageProp="theme.image"/>
        <h1>GALLERY</h1>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
    title: 'Gallery - TerminalAnomaly',
    components: { Navbar },
    data () {
        return {
            theme:
                { theme: 'amber', color: 'amber--text text--lighten-3', image: 'ta-nav-am.png'}
        }
    }
}
</script>

