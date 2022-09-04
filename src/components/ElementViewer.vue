<template>
    <td class="elements" v-for="item in ChemicalItems" :key="item.index">{{ item.element }}</td>
</template>

<script lang="ts">
    import { defineComponent, ref, computed } from 'vue'
    import { useStore } from "@/store/index";

    export default defineComponent({
        // 型推論を有効にする
        name: 'ElementViewer',
        setup(){
            const store = useStore();
            const ChemicalItems = computed(() => store.state.ChemicalItems);
            return { ChemicalItems }
        }
    })

</script>

<style>
.elements{
    letter-spacing: 0px;
    padding: 0px 10px 0px 10px;
}
</style>
