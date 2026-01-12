<template>
  <private-view title="IA">
    <template #navigation>
      <v-list nav>
        <v-list-item 
          :to="`/ia/base-conoscenza`"
          exact
        >
          <v-list-item-icon><v-icon name="auto_stories" /></v-list-item-icon>
          <v-list-item-content>Base di conoscenza</v-list-item-content>
        </v-list-item>
        
        <v-list-item 
          :to="`/ia/prompt`"
          exact
        >
          <v-list-item-icon><v-icon name="code" /></v-list-item-icon>
          <v-list-item-content>Prompt</v-list-item-content>
        </v-list-item>
      </v-list>
    </template>

    <router-view />
  </private-view>
</template>

<script>
export default {
  name: 'IAModule'
};
</script>