import React, {useState, useEffect} from "react";
import "./page2.css";
import {BookToRead} from "./BookToRead";
import BookRow from "./BookRow";
import Modal from "react-modal";
import BookSearchDialog from "./BookSearchDialog";
import {BookDescription} from "./BookDescription";

Modal.setAppElement("#root");

const customStyles={
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)"
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      padding: 0,
      transform: "translate(-50%, -50%)"
}};


const APP_KEY= "react-hooks-tutorial"

export default function Page2(){
    const[books,setBooks]= useState<BookToRead[]>([]);
    const[modalIsOpen, setModalIsOpen]= useState<boolean>(false);

    useEffect(()=>{
    const storeBooks= localStorage.getItem(APP_KEY);
    if(storeBooks){
      setBooks(JSON.parse(storeBooks));
    }
    },[])

    useEffect(()=>{
      localStorage.setItem(APP_KEY, JSON.stringify(books));
    },[books]);

    const handleBookAdd = (book: BookDescription) =>{
     const newBook: BookToRead={...book, id: Date.now(), memo:""};
  
     const newBooks=[...books, newBook];
 
     setBooks(newBooks);
     setModalIsOpen(false);
    }

    const handleAddClick = () =>{
     setModalIsOpen(true);
    };
    const handleModalClose =() =>{
     setModalIsOpen(false);
    };
    const handleBookDelete= (id: number)=>{
      const newBooks = books.filter((book:BookToRead)=> book.id !== id);
      setBooks(newBooks);
    };
    const handleBookMemoChange = (id: number, memo: string)=>{
      //booksに格納されている書籍データの配列のうち、IDが合致する要素はメモを更新した値を、それ以外の要素はそのままの値で新しい配列に格納
      const newMemo = books.map((book:BookToRead)=>{
        return book.id === id
        ? {...book, memo: memo}
        :book
      });
      setBooks(newMemo);
    };
   
    const bookRows = books.map(book => {
      
        return(
            <BookRow book={book}
             key={book.id} 
             onDelete={(id)=>{handleBookDelete(id)}}
             onMemoChange={(id,memo)=>{handleBookMemoChange(id,memo)}} />
            );
    });
  return(
      <div className="Page2">
          <section className="nav">
    　　　　　<h1>読みたい本リスト</h1>
        　　　<div　className="button-like" onClick={handleAddClick}>本を追加</div>
          </section>
          <section className="main">{bookRows}</section>
          <Modal
           isOpen={modalIsOpen}
           onRequestClose={handleModalClose}
           style={customStyles}>
            <BookSearchDialog maxResults={20} onBookAdd={(book)=>{handleBookAdd(book)}}/>
          </Modal>
      </div>
  );

};