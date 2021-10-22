import React from "react";
import {BookDescription}  from "./BookDescription";

type BookSearchItemProps ={
    description: BookDescription;
    onBookAdd: (book: BookDescription)=> void;
};

const BookSearchItem =(props: BookSearchItemProps)=>{
    // propsは検索結果として出てきた本の情報（mapで回しているので、一冊分）
        const {title, authors, thumbnail} =props.description;
        const handleAddBookClick= ()=>{
            props.onBookAdd(props.description);
        };
       return(
           <div className="book-search-item">
               <h2 title={title}>{title}</h2>
               <div className="authors" title={authors}>{authors}</div>
               {thumbnail ? <img src={thumbnail} alt=""/>:null }
               <div className="add-book" onClick={handleAddBookClick}>　
               <span>　+　</span>　</div>
           </div>

       ) 
};

export default BookSearchItem;