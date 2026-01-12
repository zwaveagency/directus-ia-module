<template>
  <private-view title="Base di conoscenza">
    <template #navigation>
      <v-list nav>
        <v-list-item :to="`/content/FAQ`">
          <v-list-item-icon><v-icon name="help_outline" /></v-list-item-icon>
          <v-list-item-content>FAQ</v-list-item-content>
        </v-list-item>
        
        <v-list-item :to="`/content/Sito_web`">
          <v-list-item-icon><v-icon name="language" /></v-list-item-icon>
          <v-list-item-content>Sito web</v-list-item-content>
        </v-list-item>
        
        <v-list-item :to="`/content/File`">
          <v-list-item-icon><v-icon name="folder" /></v-list-item-icon>
          <v-list-item-content>File</v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </private-view>
</template>

<script>
export default {
  name: 'IAModule'
};
</script>
