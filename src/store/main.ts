interface stateType {
    ModalState: boolean
    isError: boolean
    Navigation: Array<{
        Title: string,
        Icon: string,
        Link: string
    }>
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
        ]
    }),
    getters: {},
    actions: {
        async ModalChanger(state: boolean) {
            this.ModalState = state
            overFlow(state)
        },
    }

})