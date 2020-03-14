
<template>

  <div class="character-viewer">
    <h1>CharacterViewer</h1>
    <p v-for="(character, index) in characters" v-bind:key="index">
      {{character.name}} is {{character.profession}}!
    </p>
  </div>

</template>



<script>

export default {

  name: 'CharacterViewer',
  props: {
    characters: Array,
  },
}
</script>

