export type RecipeApiResponse = {
  recipeData: RecipeData;
  ingredientData: IngredientData;
  processData: ProcessData;
};

export type RecipeData = {
  id: number;
  recipe_name: string;
  cooking_time: number;
  explain: string;
  insert_date: string;
  img: string;
  user_name: string;
  user_introduction: string;
  icon: string;
  category_name: string;
  favorite_count: number;
};

export type IngredientData = {
  recipe_id: number;
  ingredient_name: string;
  ingredient_amount: string;
  ingredient_sort: string | null;
}[];

export type ProcessData = {
  recipe_id: number;
  process_number: number;
  process_explain: string;
}[];

export type LoginedUserData = {
  id: number;
  user_name: string;
  icon: string;
  p_token: string;
};
