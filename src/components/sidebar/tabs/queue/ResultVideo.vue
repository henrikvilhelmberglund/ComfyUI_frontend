<template>
  <video controls width="100%" height="100%">
    <source :src="url" :type="htmlVideoType" />
    {{ $t('g.videoFailedToLoad') }}
  </video>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { useExtensionStore } from '@/stores/extensionStore'
import { ResultItemImpl } from '@/stores/queueStore'
import { useSettingStore } from '@/stores/settingStore'

const props = defineProps<{
  result: ResultItemImpl
}>()

const settingStore = useSettingStore()
const { isExtensionInstalled, isExtensionEnabled } = useExtensionStore()

const vhsAdvancedPreviews = computed(() => {
  return (
    isExtensionInstalled('VideoHelperSuite.Core') &&
    isExtensionEnabled('VideoHelperSuite.Core') &&
    settingStore.get('VHS.AdvancedPreviews') &&
    settingStore.get('VHS.AdvancedPreviews') !== 'Never'
  )
})

const url = computed(() =>
  vhsAdvancedPreviews.value
    ? props.result.vhsAdvancedPreviewUrl
    : props.result.url
)
const htmlVideoType = computed(() =>
  vhsAdvancedPreviews.value ? 'video/webm' : props.result.htmlVideoType
)
</script>
