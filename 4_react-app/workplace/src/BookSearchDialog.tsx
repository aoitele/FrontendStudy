import { INSPECT_MAX_BYTES } from "buffer";
import React ,{useState, useEffect} from "react";
import {BookDescription} from "./BookDescription";
import BookSearchItem from "./BookSearchItem";

// APIのURLを組み立てる関数
function buildSearchUrl(title: string, author: string, maxResults:number):string{
     let url ="https://www.googleapis.com/books/v1/volumes?q=";
     const condition: string[]= []
    if(title){
        //URLの中にテンプレートリテラルで埋め込んでいる
         condition.push(`intitle:${title}`);
     }
    if(author){
         condition.push(`inauthor:${author}`);
     }
    
    return url + condition.join('+') + `&maxResults=${maxResults}`;
}
//APIの呼び出し結果(JSON)からコンポーネントが欲しい形でデータを抽出する関数
function extractBooks(json: any):BookDescription[]{
    
    const items: any[]= json.items;
    return items.map((item: any)=>{
        const volumeInfo: any= item.volumeInfo;

        return{
            title: volumeInfo.title,
            authors: volumeInfo.authors ? volumeInfo.authors.join(','):"",
            thumbnail: volumeInfo.imageLinks ? volumeInfo.imageLinks.smallThumbnail : "",
            
        }
    });
}


type BookSearchDialogProps ={
    maxResults: number;
    onBookAdd: (book: BookDescription) => void;
}

const BookSearchDialog =(props: BookSearchDialogProps)=>{
   const [books, setBooks]= useState<BookDescription[]>([]); 
   const [title, setTitle]= useState<string>("");
   const [author, setAuthor]= useState<string>("");
   const[isSearching, setIsSearching]= useState<boolean>(false);

   useEffect(()=>{
     if(isSearching){
       const url:string= buildSearchUrl(title, author, props.maxResults);
       fetch(url)
       .then((res)=>
       {
       return res.json();
       })
       .then((json)=>{
           return extractBooks(json);
       })
       .then((books)=>{
         
           setBooks(books);
       })
       .catch((err)=>{
           console.error(err);
       })
     }
     setIsSearching(false);
   },[isSearching]);

   const handleSearchClick= ()=>{
       if(!title && !author){
           alert("条件を入力してください");
           return;
       }
       //検索ボタンクリックで、検索処理実行モードをオン
       setIsSearching(true);
   }

   const handleTitleInputChange= (e: React.ChangeEvent<HTMLInputElement>)=>{
     setTitle(e.currentTarget.value);
   };
   const handleAuthorInputChange= (e: React.ChangeEvent<HTMLInputElement>)=>{
    setAuthor(e.currentTarget.value);
  };

   const handleBookAdd=(book:BookDescription)=>{
     props.onBookAdd(book);
   }

   const bookItems= books.map((book: BookDescription, index:number)=>{
    return(
        <div>
            <BookSearchItem 
            description={book}
            onBookAdd={(book)=>handleBookAdd(book)}
            key={index}
            />
        </div>
    )
   });

   return(
       <div className="dialog">
           <div className="Operation">
               <div className="condition">
                   <input type="text" name="title" onChange={(e)=>handleTitleInputChange(e)} placeholder="タイトルで検索"/>
                   <input type="text" name="author" onChange={(e)=>handleAuthorInputChange(e)} placeholder="著者名で検索"/>
               </div>
               <div className="button-like" onClick={handleSearchClick}>検索</div>
               <div className="search-results">{bookItems}</div>
           </div>
       </div>
   );
};

export default BookSearchDialog;