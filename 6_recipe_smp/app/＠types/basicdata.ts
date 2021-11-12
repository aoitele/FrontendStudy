export type basicdata = {
    recipeid: number;
    recipename: string;
    cookingtime: number;
    explain: string;
    insert_date: string;
    img: string;
    username: string;
    user_introduction: string;
    icon: string;
    categoryname: string;
    favorite_count: string;
 };

 export type ingredientdata={
   recipeid: number;
   ingredient_name: string;
   ingredient_amount: string;
   ingredient_sort: string | null;
 };

 export type processdata={
    recipeid: number;
    process_number: number;
    process_explain: string;
 };

 