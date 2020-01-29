interface Story {
    id: number,
    title: string,
    url: string,
    score: number,
    by: string,
    time: number
    type: string
    descendants: number,
    kids: Array<number>
}

interface User {
    id: string,
    karma: number,
    created: number,
}

export class Service {


    async topstories(slice?: [number, number]): Promise<Story[]> {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        const topStoriesIds = await response.json();

        if (typeof slice === 'undefined') {
            slice = [0, 9];
        }

        return await Promise.all(topStoriesIds.slice(slice[0], slice[1]).map(this.getStory));
    }

    async getStory(id: number): Promise<Story> {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/item/' + id + '.json');
        return await response.json();
    }

    async getUser(id: string): Promise<User> {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/user/' + id + '.json');
        return await response.json();
    }

}