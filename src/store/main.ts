import {characterType} from "../types/global.types";
import axios from "axios";

interface stateType {
    ModalState: boolean
    isError: boolean
    Navigation: Array<{
        Title: string,
        Icon: string,
        Link: string
    }>
    Characters: characterType[],
    searchValue: string,
}

export const useMain = defineStore('main', {
    state: (): stateType => ({
        isError: false,
        ModalState: false,
        Navigation: [
            {
                Title: "Карта",
                Icon: "Navigation.svg",
                Link: "/map",
            },
            {
                Title: "Чаты",
                Icon: "Comment.svg",
                Link: "/chat",
            },
            {
                Title: "Мои встречи",
                Icon: "Clock.svg",
                Link: "/meet",
            },
            {
                Title: "Профиль",
                Icon: "User.svg",
                Link: "/user",
            },
        ],
        Characters: [],
        searchValue: ""
    }),
    getters: {
        filteredCharacters: (state) => {
            return () =>
                state.searchValue
                    ? state.Characters.filter((p) =>
                        p.name.toLowerCase().includes(state.searchValue.toLowerCase())
                    )
                    : state.Characters;
        },
    },
    actions: {

        async fetchCharacters(page: string) {
            try {
                const snap = await axios.get('https://rickandmortyapi.com/api/character/', {
                    params: {
                        page: page
                    }
                })

                this.Characters.push(...snap.data.results)

            } catch (e) {
                this.isError = true
            }
        }
    }

})