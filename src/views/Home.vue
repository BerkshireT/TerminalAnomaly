<template>
    <div class="home">
        <h1>TODO:</h1>
        <v-list>
                <v-list-tile v-for="todo in todos" :key="todo.text">
                    <v-list-tile-content class="teal--text">
                        <v-list-tile-title>{{ todo.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
        </v-list>
    </div>
</template>

<script>
export default {
    data () {
        return {
            todos: [
                { text: 'make logo' },
                { text: 'setup routes' },
                { text: 'finish homepage' }
            ]
        }
    }
}
</script>
