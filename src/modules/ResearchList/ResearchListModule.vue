<template>
    <div class="list">
        <h1>Исследования</h1>
        <ResearchListToolbar />
        <div class="list__items">
            <ResearchListItem
                v-for="researchItem in researchStore.researchItems.slice(
                    displayedItemsFrom,
                    displayedItemsTo
                )"
                :researchItem="researchItem"
                :key="researchItem.id"
            />

            <!-- v-if="maxPages > 1 && !researchStore.isNewResearchForm" -->
            <BasePagination
                :maxPage="maxPages"
                :currentPage="currentPage"
                @changePage="(value) => setCurrentPage(value)"
                class="list__pagination"
            />
        </div>

        <NewResearchForm v-if="researchStore.isNewResearchForm" />
    </div>
</template>

<script setup lang="ts">
import {ref, computed, onMounted} from 'vue'
import ResearchListToolbar from './components/ResearchListToolbar.vue'
import BasePagination from 'src/ui/BasePagination.vue'
import ResearchListItem from './components/ResearchListItem.vue'
import NewResearchForm from './components/NewResearchForm.vue'
import {useResearchStore} from './ResearchStore'

const researchStore = useResearchStore()

const currentPage = ref<number>(1)
const itemsByPage = ref<number>(7)
const maxPages = computed(() => Math.ceil(researchStore.researchItems.length / itemsByPage.value))
const displayedItemsFrom = computed(() => (currentPage.value - 1) * itemsByPage.value)
const displayedItemsTo = computed(() => displayedItemsFrom.value + itemsByPage.value)

const setCurrentPage = (newValue: number) => {
    currentPage.value = newValue
}

onMounted(() => {
    researchStore.getResearchList()
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
  margin-bottom: 32rem
  display: grid
  gap: 4rem
  align-content: start

.list__pagination
  position: absolute
  bottom: 0
</style>
