import { NextPage } from 'next'
import { AxiosClient } from "../../modules/request";
import React ,{useEffect, useState} from "react";
import Error from "next/error"
import Layout from '../../components/Layout';
import Content from "../../components/Content"
import {useRouter} from 'next/router'
interface Props {
   data: Data.ApiResponse;
   errorCode: any;
}
interface FilterProps {
   cookingtime: number | null;
   category: string | null| number;
}

const MyPage: React.FC<Props>= ({data,errorCode}) => {
      
   const [items, setItems] =useState<Data.favoriteRecipes[]>(data);
   const [filters, setFilters]=useState<FilterProps>({cookingtime: null,category:null});
    //console.log(items,"mypage");
    const router=useRouter();
    const changeUser=(e:any)=>{
               router.push(`/mypage/${e}`)
               setFilters({cookingtime: null,category:null})
      }

      const changeFlag=(item: Data.favoriteRecipes)=>{
         if(filters.cookingtime !== null && filters.category !== null){
                  if(item.cookingtime <= filters.cookingtime && item.category == filters.category){
                     item.flag=true;
                  }else{
                     item.flag=false;
                  }
         }else if(filters.cookingtime !== null && filters.category == null){
                  if(item.cookingtime <= filters.cookingtime){
                     item.flag=true;
                  }else{
                     item.flag=false;
                  }
         }else if(filters.cookingtime == null && filters.category !== null){
                  if(item.category == filters.category){
                     item.flag=true;
                  }else{
                     item.flag=false;
                  }   
         }else{
            item.flag=true
         }
        
          return item
      }

    const changeTime= (time:number)=>{
       if(time==0){
          filters.cookingtime=null;
       }else{ filters.cookingtime=time;
         }
         setFilters(filters);
         const t=items.map((item) => { return changeFlag(item)});
         setItems(t);
   }
      
    const changeCategory=(category:string|number) =>{
      if(category==0){
         filters.category=null;
      }else{ filters.category=category;
         }
         setFilters(filters);
         const c=items.map((item)=>{return changeFlag(item)});
           setItems(c);
    }     
       
   useEffect(()=>
        {setItems(data);
        },[data]
    )
   //  useEffect(()=>
   //      {console.log(items,"変化があったときのみ実行cookigtime");
         
   //      },[items]
   //  )
   const recipeDelete=(item:Data.favoriteRecipes)=>{ 
      if(confirm("このレシピをお気に入り一覧から削除する")){
      const axios = AxiosClient();
      axios.delete("delete",{item})
      .then(
        (res)=>{
            console.log(res.data, "delete successfully")
            const recipeid=item.recipeid;
            
           const newItems =items.filter((item)=>{
              return item.recipeid !== recipeid});
              setItems(newItems);
          
         
        }).catch((err)=>{
        console.log(err)
      })}
   }
   if(errorCode){
      return <Error statusCode={errorCode}/>
   }
  
   return (
      <div>
       <Layout>
       <main>
          <Content data={items} filters={filters} changeUser={changeUser} changeTime={changeTime} changeCategory={changeCategory} recipeDelete={recipeDelete}></Content>
       </main>
         
       </Layout>
      </div>
   )
}

export const getServerSideProps = async (ctx: any) => {
   
	try{
      const params=ctx.params.id;
      const axios = AxiosClient();
      const res = await axios.get("data",{params:{userid: params}});
      // console.log(res.data.data, "serversideprops")

     
      for(const element of res.data.data ){
         element.flag=true;
    }

      return { props:{data: res.data.data }}
      
      //このpropsは上のPageコンポーネントに渡される
   }catch(err){
      const errorCode =err.response.status;
    return{ props:{errorCode}}
    
  }
   
}
export default MyPage