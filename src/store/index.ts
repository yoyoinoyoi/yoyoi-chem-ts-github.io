import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from "vuex";
import * as MutationTypes from "./mutationType";
import { choiceElement } from "./functions/choiceElement"
import { readCSV } from "./functions/readCSV"

// 登録されているイオンの名前と番号
type ChemicalItem = {
  element: string;
  index: number;
}

// 答えとして選ばれたイオンの名前と番号
type AnswerItem = {
  element: string;
  index: number;
}

type Action = {
  text: string;
  index: number;
}

type ResultItem = {
  action: string;
  ion1: string;
  ion2: string;
  ion3: string;
  ion4: string;
  ion5: string;
}

type State = {
  DataTable: string[][];
  ChemicalItems: ChemicalItem[];
  AnswerItems: AnswerItem[];
  Actions: Action[];
  ResultItems: ResultItem[];
  selected: number;
  count: number;
};

// storeをprovide/injectするためのキー
export const key: InjectionKey<Store<State>> = Symbol();

// store本体
export const store = createStore<State>({
  state: {
    DataTable: [[""]],
    ChemicalItems: [],
    AnswerItems: [],
    Actions: [],
    ResultItems: [],
    selected: 1,
    count: 0,
  },
  getters: {
  },
  mutations: {
    Initialize (state){
      const [DataTable, Actions, Elements] = readCSV();
      const elementsIndex = choiceElement(5, Elements);
      console.log(DataTable)
      console.log(Actions)
      console.log(Elements)

      const Vactions = [];
      for (let i = 0; i < Actions.length; i++){
          Vactions.push({text: Actions[i], index: i+1});
      }

      const VChemicalItems = [];
      for (let i = 0; i < Elements.length; i++){
          VChemicalItems.push({element: Elements[i], index: i+1});
      }

      const VAnswerItems = [];
      for (let i = 0; i < elementsIndex.length; i++){
          VAnswerItems.push({element: Elements[elementsIndex[i]], index: elementsIndex[i]+1});
      }
      
      state.DataTable = DataTable
      state.ChemicalItems = VChemicalItems
      state.AnswerItems = VAnswerItems
      state.Actions = Vactions
      state.ResultItems = []
      state.selected = 1
      state.count = 0
      
      console.log(state.ChemicalItems)
      console.log(state.AnswerItems)
      console.log(state.DataTable[0][0])
      console.log("Initialize!!!")
    },
    AddResult (state, payload){
      state.ResultItems.push({
        action: state.DataTable[payload.value][0],
        ion1: state.DataTable[payload.value][state.AnswerItems[0].index],
        ion2: state.DataTable[payload.value][state.AnswerItems[1].index],
        ion3: state.DataTable[payload.value][state.AnswerItems[2].index],
        ion4: state.DataTable[payload.value][state.AnswerItems[3].index],
        ion5: state.DataTable[payload.value][state.AnswerItems[4].index],
      })
      state.count++;
      console.log("AddResult!!!")

    }
  },
  actions: {
  },
  modules: {
  }
});

// useStoreを使う時にキーの指定を省略するためのラッパー関数
export const useStore = () => {
  return baseUseStore(key);
}
