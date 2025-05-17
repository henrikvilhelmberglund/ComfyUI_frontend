import { defineStore } from 'pinia'
import { ref } from 'vue'

// import {
//   useCommandTerminalTab,
//   useLogsTerminalTab
// } from '@/composables/bottomPanelTabs/useTerminalTabs'
// import { useCommandStore } from '@/stores/commandStore'
// import { ComfyExtension } from '@/types/comfy'
// import type { BottomPanelExtension } from '@/types/extensionTypes'
// import { isElectron } from '@/utils/envUtil'

export const useWorkflowDropdownStore = defineStore('workflowDropdown', () => {
  const workflowDropdownVisible = ref(false)
  const toggleWorkflowDropdown = () => {
    // If there are no tabs, don't show the bottom panel
    // if (bottomPanelTabs.value.length === 0) {
    // return
    // }
    workflowDropdownVisible.value = !workflowDropdownVisible.value
  }

  return {
    toggleWorkflowDropdown,
    workflowDropdownVisible
  }
})
