import {User, Item} from "./Interfaces";

export class Service {

    baseUri = `https://hacker-news.firebaseio.com/v0/`;


    async fetchTopstories(slice?: [number, number]): Promise<number[]> {
        return await this.fetch(`${this.baseUri}topstories.json`);
    }

    async fetchItem(id: number): Promise<Item> {
        return await this.fetch(`${this.baseUri}item/${id}.json`);
    }

    async fetchUser(id: string): Promise<User> {
        return await this.fetch(`${this.baseUri}user/${id}.json`);
    }

    async fetch(uri: string): Promise<any> {
        const response = await fetch(uri);
        return await response.json();
    }

}