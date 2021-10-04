declare namespace Data {
    export type favoriteRecipes = {
        id: number;
        recipeid: number;
        username: string;
        icon: string;
        insert_date: string;
        recipename: string;
        cookingtime: number;
        explain: string;
        img: string;
        category: string;
        chefid: number;
        comment: string;
        flag: boolean;
        chefname:string;
    }
    export type ApiResponse = favoriteRecipes[];   
    
}

