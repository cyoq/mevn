
<template>
    <div>
        <h1>CharacterRemover</h1>

        <div v-for="(character, index) in characters" v-bind:key="index">
            <input :id="character.name" :value="character._id" v-model="selected" type="checkbox" />
            <label :for="character.name">{{ character.name }}</label>
        </div>
        <br />
        <button v-on:click="deleteCharacter();" v-bind:disabled="characters.length === 0">Remove heroes</button>
    </div>
</template>


<script>
import axios from "axios";

export default {
    name: "CharacterRemover",
    data: function() {
        return {
            selected: []
        };
    },
    props: {
        characters: Array,
        getCharacters: Function
    },
    methods: {
        deleteCharacter: function() {
            for (let id of this.selected) {

                axios
                    .delete("http://localhost:3031/characters/" + id)
                    .then(() => this.getCharacters());
                
            }
            this.selected = [];
        },
    }
};
</script>

<style scoped>
</style>