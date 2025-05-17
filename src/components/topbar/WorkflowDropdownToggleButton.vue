<template>
  <Button
    v-show="workflowStore.openWorkflows.length > 0"
    v-tooltip="{ value: $t('menu.toggleWorkflowDropdown'), showDelay: 300 }"
    severity="secondary"
    text
    :aria-label="$t('menu.toggleWorkflowDropdown')"
    @click="workflowDropdownStore.toggleWorkflowDropdown"
  >
    <template #icon>
      <WorkflowDropdown v-if="workflowDropdownStore.workflowDropdownVisible" />

      <i-material-symbols:dock-to-bottom-outline v-else />
    </template>
  </Button>
</template>

<script setup lang="ts">
import Button from 'primevue/button'

import { useWorkflowStore } from '@/stores/workflowStore'
import { useWorkflowDropdownStore } from '@/stores/workspace/workflowDropdownStore'

import WorkflowDropdown from './WorkflowDropdown.vue'

const workflowDropdownStore = useWorkflowDropdownStore()
const workflowStore = useWorkflowStore()
</script>
