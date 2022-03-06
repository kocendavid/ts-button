export interface User {
    id: string,
    name: string,
    email:string,
    type: string,
    reviews: [],
    chat: [],
    billingInfo: {},
    location: string,
    preferences: {
        language: string,
    }
}
