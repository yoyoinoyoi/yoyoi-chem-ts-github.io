<template>
  <div class="about">
  <h1> Choices </h1>
  <ElementViewer/>
  <h1> Done ({{ count }})</h1>
  <table class="DoneTable">
    <ElementSelector/>
    <ResultViewer/>
  </table>
  <h1> Action </h1> 
  <AnswerSelector/>
  </div>
</template>

<script lang="ts">
    import ElementViewer from "@/components/ElementViewer.vue";
    import ElementSelector from "@/components/ElementSelector.vue";
    import AnswerSelector from "@/components/AnswerSelector.vue";
    import ResultViewer from "@/components/ResultViewer.vue";
    import { defineComponent, ref, computed } from 'vue'
    import { useStore } from "@/store/index";


    export default defineComponent({
        // 型推論を有効にする
        name: 'AboutView',
        components: {
          ElementSelector,
          ElementViewer,
          AnswerSelector,
          ResultViewer
        },
        setup(){
            const store = useStore();
            store.commit('Initialize');
            const ChemicalItems = computed(() => store.state.ChemicalItems);
            const count = computed(() => store.state.count);
            return { ChemicalItems, count }
        }
    })

</script>

<style>
  .DoneTable {
      border: 1px solid rgb(158, 155, 155);
  }
  .DoneTable tr td {
      width: 500px;
      border: 1px solid rgb(158, 155, 155);
  }
</style>