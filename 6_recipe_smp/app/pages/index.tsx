import Head from 'next/head'
import Image from 'next/image'
import Error from 'next/error';
import { useRouter } from 'next/router';


export default function Home()  {

  const router = useRouter();
  const viewRecipeDetail=(num:number)=>{
    console.log(num, "num")
   router.push(`/mypage/${num}`);
  }

  
  
  return (
    <div>
      <h1>hello world!!</h1>
      {/* <ul onClick={(e)=>{viewRecipeDetail(Number(e.target.value))}}> */}
      <li value="1" >レシピ１</li>
      <li value="2" >レシピ２</li>
      <li value="3" >レシピ３</li>
    
      {/* </ul> */}
     </div>
  )
}
