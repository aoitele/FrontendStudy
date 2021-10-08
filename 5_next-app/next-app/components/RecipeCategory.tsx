import style from '../styles/scss/main/main.module.scss';
interface FilterProps {
  cookingtime: number | null;
  category: string | null | number;
}

interface Props {
  data: Data.ApiResponse;
  handleChangeCategory: (e: any) => void;
  filters: FilterProps;
}

const RecipeCategory: React.FC<Props> = ({
  data,
  filters,
  handleChangeCategory,
}) => {
  let newData: string[] = [];
  const countCategory = (data: Data.ApiResponse) => {
    if (filters.cookingtime == null) {
      data.map((d) => {
        newData.push(d);
      });
    } else {
      data.map((d) => {
        if (d.cookingtime <= filters.cookingtime) {
          newData.push(d);
        }
      });
    }

    let count = {};
    for (let i = 0; i < newData.length; i++) {
      let elm = newData[i].category;
      count[elm] = count[elm] ? count[elm] + 1 : 1;
    }
    return count;
  };

  const countArray = countCategory(data);

  return (
    <select className={style.search_select} onChange={handleChangeCategory}>
      <option value='0'>指定なし ({newData.length})</option>
      {Object.entries(countArray).map((item) => {
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
