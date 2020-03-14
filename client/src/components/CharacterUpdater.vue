
<template>
    <div>
        <h1>CharacterUpdater</h1>
        <form>
            <div v-for="(character, index) in characters" v-bind:key="index">
                <input
                    type="radio"
                    :value="character._id"
                    :id="'radio-input-'+character._id"
                    v-model="id"
                    @change="() => oldName = character.name"
                />
                <label :for="'radio-input-'+character._id">{{ character.name }}</label>
            </div>
        </form>

        <br />

        <div>
            <label for="change-character-name">Character Name: </label>
            <input
                type="text"
                id="change-character-name"
                placeholder="New name for the character"
                v-model="name"
            />
            <br />
            <br />
            <label for="change-professions-list">Character Profession: </label>
            <select id="change-professions-list" v-model="profession" value="Mage">
                <option value="Mage">Mage</option>
                <option value="Thief">Thief</option>
                <option value="Warrior">Warrior</option>
            </select>
        </div>

        <br />
        <span id="err">{{ err }}</span>
        <br />
        <button v-on:click="updateCharacter">Change the character</button>
    </div>
</template>


<script>
import axios from "axios";

export default {
    name: "CharacterUpdater",
    data: function() {
        return {
            oldName: "",
            name: "",
            profession: "Mage",
            id: "",
            err: ""
        };
    },
    props: {
        characters: Array,
        getCharacters: Function
    },
    methods: {
        updateCharacter: function() {
            if (this.id) {
                axios.put("http://localhost:3031/characters/" + this.id, {
                    name: this.name ? this.name : this.oldName,
                    profession: this.profession
                }).then(() => this.getCharacters());
                this.err = "";
            } else {
                this.err = "Hero wasn't selected!";
            }
        }
    }
};
</script>


<style scoped>
#err {
    color: red;
}
</style>