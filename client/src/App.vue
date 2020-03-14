
<template>
    <div id="app">
        <button v-on:click="toggle='character-viewer'; getCharacters()">View all characters</button>

        <button v-on:click="toggle='character-creator'">Create characters</button>

        <button v-on:click="toggle='character-remover'; getCharacters()">Remove characters</button>

        <button v-on:click="toggle='character-updater'; getCharacters()">Update characters</button>

        <CharacterViewer v-show="toggle==='character-viewer'" :characters="characters" />
        <CharacterCreator v-show="toggle==='character-creator'" />
        <CharacterRemover
            v-show="toggle==='character-remover'"
            :characters="characters"
            :getCharacters="getCharacters"
        />
        <CharacterUpdater
            v-show="toggle==='character-updater'"
            :characters="characters"
            :getCharacters="getCharacters"
        />
    </div>
</template>

<script>
import CharacterViewer from "./components/CharacterViewer.vue";
import CharacterCreator from "./components/CharacterCreator.vue";
import CharacterRemover from "./components/CharacterRemover.vue";
import CharacterUpdater from "./components/CharacterUpdater.vue";
import axios from "axios";

export default {
    name: "App",
    components: {
        CharacterViewer,
        CharacterCreator,
        CharacterRemover,
        CharacterUpdater
    },
    data: function() {
        return {
            toggle: "character-viewer",
            characters: []
        };
    },
    methods: {
        getCharacters: function() {
            axios
                .get("http://localhost:3031/characters")
                .then(res => (this.characters = res.data));
        }
    },
    mounted: function() {
        this.getCharacters();
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
