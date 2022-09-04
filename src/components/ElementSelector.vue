<template>
    <tr>
                <td> Name 
                    <button @click="submitAnswer"> 確定 </button>
                </td>
                <td v-bind:class=colour[0]> ion1
                    <select v-model=selected[0]>
                        <option v-for="item in ChemicalItems" :key="item.index" :value="item.index">
                            {{ item.element }}
                        </option>
                    </select>
                </td>
                <td v-bind:class=colour[1]> ion2
                    <select v-model=selected[1]>
                        <option v-for="item in ChemicalItems" :key="item.index" :value="item.index">
                            {{ item.element }}
                        </option>
                    </select>
                </td>
                <td v-bind:class=colour[2]> ion3
                    <select v-model=selected[2]>
                        <option v-for="item in ChemicalItems" :key="item.index" :value="item.index">
                            {{ item.element }}
                        </option>
                    </select>
                </td>
                <td v-bind:class=colour[3]> ion4
                    <select v-model=selected[3]>
                        <option v-for="item in ChemicalItems" :key="item.index" :value="item.index">
                            {{ item.element }}
                        </option>
                    </select>
                </td>
                <td v-bind:class=colour[4]> ion5
                    <select v-model=selected[4]>
                        <option v-for="item in ChemicalItems" :key="item.index" :value="item.index">
                            {{ item.element }}
                        </option>
                    </select>
                </td>
                
    </tr>
</template>

<script lang="ts">
    import { defineComponent, ref, computed } from 'vue'
    import { useStore } from "@/store/index";

    export default defineComponent({
        // 型推論を有効にする
        name: 'ElementSelector',
        setup(){
            let msg = ref('Hello')
            let selected = ref([1, 1, 1, 1, 1])
            let colour = ref(['white', 'white', 'white', 'white', 'white'])
            const store = useStore();
            const ChemicalItems = computed(() => store.state.ChemicalItems);

            const submitAnswer = function(){
                console.log("selected", selected)
                let cnt = 0;
                for (let i = 0; i < 5; i++){
                    if (selected.value[i] == store.state.AnswerItems[i].index){
                        // colour[i] = "red"
                        colour.value.splice(i, 1, "red")
                        cnt++;
                    }else{
                        // colour[i] = "blue"
                        colour.value.splice(i, 1, "blue")
                    }
                }
                alert('正解数は' + cnt + '問です')
                // console.log(colour)
            }
            return { msg, selected, colour, ChemicalItems, submitAnswer }
        }
    })

</script>

<style>
.white {
    background-color: rgb(245, 238, 238)
}
.red {
    background-color: rgb(246, 137, 137)
}
.blue {
    background-color: rgb(151, 156, 241)
}
</style>
