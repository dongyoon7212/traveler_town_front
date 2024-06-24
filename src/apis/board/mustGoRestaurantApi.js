import { instance } from "../utils/instance"

export const getMustGoRestaurantAll = async () => {
    return await instance.get("/restaurant/boards");
}

export const getMustGoRestaurantAllBySearch = async (params) => {
    return await instance.get("/restaurant/board", {params});
}

export const addMustGoRestaurant = async (data) => {
    return await instance.post("/restaurant/new", data);
}