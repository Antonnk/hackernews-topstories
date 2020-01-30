export interface Item {
    id: number,
    title: string,
    url: string,
    score: number,
    by: string,
    time: number
    type: string
    descendants: number,
    kids: Array<number>
    user?: User
}

export interface User {
    id: string,
    karma: number,
    created: number,
}
