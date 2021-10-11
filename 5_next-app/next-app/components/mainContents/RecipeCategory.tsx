import style from '../../styles/scss/main/main.module.scss';
interface RecipeFilterProps {
  time_filter: number | null;
  category_filter: string | null | number;
}

interface Props {
  data: Data.ApiResponse;
  changeCategory: (e: any) => void;
  recipe_filters: RecipeFilterProps;
}

interface CategoryCountProps {
  [key: string]: number;
}

const RecipeCategory: React.FC<Props> = ({
  data,
  recipe_filters,
  changeCategory,
}) => {
  let displayItems: Data.ApiResponse = [];

  const countCategory = (data: Data.ApiResponse) => {
    // 表示するレシピ（調理時間とレシピ分類絞り込み後）のみ抽出
    if (recipe_filters.time_filter == null) {
      data.map((d) => {
        displayItems.push(d);
      });
    } else {
      data.map((d) => {
        if (d.cookingtime <= recipe_filters.time_filter!) {
          displayItems.push(d);
        }
      });
    } //表示されるレシピ数を数える
    let each_category_quantity: CategoryCountProps = {};
    for (let i = 0; i < displayItems.length; i++) {
      let category_name = displayItems[i].category;
      if (each_category_quantity[category_name]) {
        each_category_quantity[category_name] =
          each_category_quantity[category_name] + 1;
      } else {
        each_category_quantity[category_name] = 1;
      }
    }
    return each_category_quantity;
  };

  const countedCategory = countCategory(data);

  return (
    <select
      className={style.search_select}
      onChange={(e) => changeCategory(e.target.value)}
    >
      <option value='0'>指定なし ({displayItems.length})</option>
      {Object.entries(countedCategory).map((item) => {
        //Object.entriesは、 { id: 1, name: 'js' }を [ [ 'id', 1 ], [ 'name', 'js' ] ]の形で返す
        return (
          <option value={item[0]}>
            {item[0]} ({item[1]})
          </option>
        );
      })}
    </select>
  );
};
export default RecipeCategory;
