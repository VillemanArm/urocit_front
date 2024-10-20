<template>
    <div class="list">
        <h1>Отчеты</h1>
        <ReportsListToolbar />
        <div class="list__items">
            <ReportsListItem
                v-for="reportItem in reportsStore.reportItems.slice(
                    displayedItemsFrom,
                    displayedItemsTo
                )"
                :reportItem="reportItem"
                :key="reportItem.id"
            />
        </div>

        <!-- <BasePagination
            v-if="maxPages > 1"
            :maxPages="maxPages"
            :currentPage="currentPage"
            @changePage="(value) => setCurrentPage(value)"
            class="list__pagination"
        /> -->
    </div>
</template>

<script setup lang="ts">
import {ref, computed, onMounted} from 'vue'
import BasePagination from 'src/ui/BasePagination.vue'
import ReportsListItem from './components/ReportsListItem.vue'
import ReportsListToolbar from './components/ReportsListToolbar.vue'
import {useReportsStore} from './ReportsStore'

const reportsStore = useReportsStore()

const currentPage = ref<number>(1)
const itemsByPage = ref<number>(10)
const maxPages = computed(() => Math.ceil(reportsStore.reportItems.length / itemsByPage.value))
const displayedItemsFrom = computed(() => (currentPage.value - 1) * itemsByPage.value)
const displayedItemsTo = computed(() => displayedItemsFrom.value + itemsByPage.value)
const setCurrentPage = (newValue: number) => {
    currentPage.value = newValue
}

onMounted(() => {
    reportsStore.getReportsList()
})
</script>

<style scoped lang="sass">
.list
  position: relative

.list__items
  min-height: 663rem
  width: 1051rem
  position: absolute
  right: 32rem
  margin-bottom: 45rem
  display: grid
  gap: 4rem
  align-content: start

.list__pagination
  position: absolute
  bottom: 0
</style>
