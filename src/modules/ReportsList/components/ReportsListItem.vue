<template>
    <RouterLink
        :to="`report/:${reportItem.id}`"
        class="item"
        @click.stop="handleItemClick"
    >
        <span>{{ reportItem.reportDate }}</span>
        <span>Исследование №{{ reportItem.reportNumber }}</span>
        <span>{{ reportItem.patientName }}</span>
        <span>Атипичных объектов: {{ reportItem.atypicalObjectsAmount }}</span>
        <DownloadIcon
            class="item__download"
            @click.stop.prevent="handleDownloadClick($event)"
        />
    </RouterLink>
</template>

<script setup lang="ts">
import {ReportItem} from 'src/modules/ReportsList/reports.dto'
import {useReportsStore} from '../ReportsStore'
import DownloadIcon from 'src/assets/icons/download-icon.vue'

const props = defineProps<{
    reportItem: ReportItem
}>()

const reportsStore = useReportsStore()

const handleItemClick = () => {
    reportsStore.setSelectedReportPage(props.reportItem.link)
}

const handleDownloadClick = (event: MouseEvent) => {
    console.log('download')
}
</script>

<style scoped lang="sass">
.item
  width: 1051rem
  min-height: 55rem
  padding: 0 16rem
  display: grid
  align-items: center
  grid-template-columns: 130rem 230rem 290rem 1fr 24rem
  column-gap: 32rem

  border-radius: 4rem
  border: 1px solid $border-color
  cursor: pointer
  text-decoration: none

  transition: all 0.25s ease-in-out

  &:hover
    border-color: $primary-color

  & span
    text-align: start

a:-webkit-any-link
  color: $primary-font-color

.item__download
  cursor: pointer
</style>
