<template>
  <private-view title="IA">
    <template #navigation>
      <v-list nav>
        <v-list-item 
          :to="`/content/Base_di_conoscenza`"
        >
          <v-list-item-icon><v-icon name="auto_stories" /></v-list-item-icon>
          <v-list-item-content>Base di conoscenza</v-list-item-content>
        </v-list-item>
        
        <v-list-item 
          :to="`/content/Prompt`"
        >
          <v-list-item-icon><v-icon name="code" /></v-list-item-icon>
          <v-list-item-content>Prompt</v-list-item-content>
        </v-list-item>
      </v-list>
    </template>

    <div class="empty">
      <p>Seleziona una sezione dal menu laterale</p>
    </div>
  </private-view>
</template>

<script>
export default {
  name: 'IAModule'
};
</script>

<style scoped>
.empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--foreground-subdued);
}
</style>
