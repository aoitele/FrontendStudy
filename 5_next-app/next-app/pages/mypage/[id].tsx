import { NextPage } from 'next';
import { AxiosClient } from '../../modules/request';
import React, { useEffect, useState } from 'react';
import Error from 'next/error';
import Layout from '../../components/layout/Layout';
import Content from '../../components/mainContents/Content';
import { useRouter } from 'next/router';
interface Props {
  data: Data.ApiResponse;
  errorCode: any;
}
interface RecipeFilterProps {
  time_filter: number | null;
  category_filter: string | null | number;
}

const MyPage: React.FC<Props> = ({ data, errorCode }) => {
  const [items, setItems] = useState<Data.ApiResponse>(data);
  const [recipe_filters, setRecipeFilters] = useState<RecipeFilterProps>({
    time_filter: null,
    category_filter: null,
  });
  const router = useRouter();
  const changeUser = (userid: string) => {
    console.log(userid);
    if (userid !== '0') {
      router.push(`/mypage/${userid}`);
      setRecipeFilters({ time_filter: null, category_filter: null });
    }
  };

  //　調理時間とレシピ分類で絞り込み。表示するレシピはflag trueにする
  const changeDisplayFlag = (item: Data.favoriteRecipes) => {
    if (
      recipe_filters.time_filter !== null &&
      recipe_filters.category_filter !== null
    ) {
      if (
        item.cookingtime <= recipe_filters.time_filter &&
        item.category == recipe_filters.category_filter
      ) {
        item.display_flag = true;
      } else {
        item.display_flag = false;
      }
    } else if (
      recipe_filters.time_filter !== null &&
      recipe_filters.category_filter == null
    ) {
      if (item.cookingtime <= recipe_filters.time_filter) {
        item.display_flag = true;
      } else {
        item.display_flag = false;
      }
    } else if (
      recipe_filters.time_filter == null &&
      recipe_filters.category_filter !== null
    ) {
      if (item.category == recipe_filters.category_filter) {
        item.display_flag = true;
      } else {
        item.display_flag = false;
      }
    } else {
      item.display_flag = true;
    }

    return item;
  };
  //　表示するレシピのセット
  const setDispayItems = () => {
    const display_items = items.map((item) => {
      return changeDisplayFlag(item);
    });
    setItems(display_items);
  };
  //　時間の絞り込み
  const changeTime = (time: number) => {
    if (time == 0) {
      recipe_filters.time_filter = null;
    } else {
      recipe_filters.time_filter = time;
    }

    setRecipeFilters(recipe_filters);
    setDispayItems();
  };
  //　レシピ分類の絞り込み

  const changeCategory = (category: string | number) => {
    if (category == 0) {
      recipe_filters.category_filter = null;
    } else {
      recipe_filters.category_filter = category;
    }
    setRecipeFilters(recipe_filters);
    setDispayItems();
  };
  //　dataを監視し、変更があれば、更新をかける
  useEffect(() => {
    setItems(data);
  }, [data]);

  // レシピの削除

  const recipeDelete = (delete_item: Data.favoriteRecipes) => {
    if (confirm('このレシピをお気に入り一覧から削除する')) {
      const axios = AxiosClient();
      axios
        .delete('delete', { params: delete_item })
        .then((res) => {
          console.log(res.data, 'delete successfully');
          const deleted_recipeid = delete_item.recipeid;

          const newItems = items.filter((item) => {
            return item.recipeid !== deleted_recipeid;
          });
          setItems(newItems);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <div>
      <Layout>
        <main>
          <Content
            data={items}
            recipe_filters={recipe_filters}
            changeUser={changeUser}
            changeTime={changeTime}
            changeCategory={changeCategory}
            recipeDelete={recipeDelete}
          ></Content>
        </main>
      </Layout>
    </div>
  );
};

export const getServerSideProps = async (ctx: any) => {
  try {
    const params = ctx.params.id;
    const axios = AxiosClient();
    const res = await axios.get('data', { params: { userid: params } });
    console.log(res, 'serversideprops');

    for (const element of res.data.data) {
      element.display_flag = true;
    }

    return { props: { data: res.data.data } };

    //このpropsは上のPageコンポーネントに渡される
  } catch (err) {
    const errorCode = err.response.status;
    return { props: { errorCode } };
  }
};
export default MyPage;
