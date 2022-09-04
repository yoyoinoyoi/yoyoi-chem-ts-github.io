<template>
    <select v-model="selected">
        <option v-for="action in Actions" :key="action.index" :value="action.index">
            {{ action.text }}
        </option>
    </select>
    <button @click="AddResult"> Try </button>
</template>

<script lang="ts">
    import { defineComponent, ref, computed } from 'vue'
    import { useStore } from "@/store/index";

    export default defineComponent({
        // 型推論を有効にする
        name: 'ElementSelector',
        setup(){
            let selected = ref(1)
            const store = useStore();
            const Actions = computed(() => store.state.Actions);

            const AddResult = function(){
                return store.commit('AddResult',  selected)
            }
            return { selected, Actions, AddResult }
        }
    })

</script>
