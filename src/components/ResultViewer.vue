<template>
            <tr v-for="result in ResultItems" v-bind:key="result.name"> 
                <td>{{ result.action }}</td>
                <td>{{ result.ion1 }}</td>
                <td>{{ result.ion2 }}</td>
                <td>{{ result.ion3 }}</td>
                <td>{{ result.ion4 }}</td>
                <td>{{ result.ion5 }}</td>
            </tr>
</template>

<script lang="ts">
    import { defineComponent, ref, computed } from 'vue'
    import { useStore } from "@/store/index";

    export default defineComponent({
        // 型推論を有効にする
        name: 'ResultViewer',
        setup(){
            const store = useStore();
            const ResultItems = computed(() => store.state.ResultItems);

            return { ResultItems }
        }
    })

</script>
