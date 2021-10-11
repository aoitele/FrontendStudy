import style from '../../styles/scss/main/main.module.scss';
import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import Memo from '../Memo';

Modal.setAppElement('#__next');

interface Props {
  data: Data.ApiResponse;
  recipeDelete: (e: Data.favoriteRecipes) => void;
}

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(235, 230, 225, 0.3)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: 20,
    width: 400,
    height: 300,
    transform: 'translate(-50%, -50%)',
  },
};

const MainBox: React.FC<Props> = ({ data, recipeDelete }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [comment, setComment] = useState<string>('');
  const [items, setItems] = useState<Data.favoriteRecipes[]>(data);

  useEffect(() => {
    setItems(data);
  }, [data]);

  const handleClick = (item: Data.favoriteRecipes) => {
    setComment(item.comment);
    setModalIsOpen(true);
    // setModalIsOpen(true);
  };
  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const handleRecipeDelete = (item: Data.favoriteRecipes) => {
    recipeDelete(item);
  };

  const getDate = (item: string) => {
    let d = new Date(item);
    let year = d.getUTCFullYear(); // Hours
    let month = d.getUTCMonth() + 1;
    let date = d.getUTCDate();
    //console.log(d)
    return (
      <div>
        追加日 {year}年{month}月{date}日
      </div>
    );
  };

  return (
    <div className={style.mainBox}>
      {items.map((item) => {
        if (item.display_flag == true) {
          return (
            <div className={style.recipeBox}>
              <div className={style.img}>
                <img src={item.img}></img>

                <div className={style.chefInfo}>
                  <span>{item.chefname}</span>
                  <img src={item.icon}></img>
                </div>
              </div>
              <div className={style.content}>
                <h5 className={style.title}>{item.recipename}</h5>
                <div className={style.cookingtime}>{item.cookingtime}分</div>
                <div className={style.tag}>{item.category}</div>
                <p className={style.explain}>{item.explain}</p>
                <div className={style.buttons}>
                  <button onClick={() => handleClick(item)}>作ったメモ</button>
                  <button onClick={(e) => handleRecipeDelete(item)}>
                    削除
                  </button>
                </div>
                <p className={style.date}>{getDate(item.insert_date)}</p>
              </div>
            </div>
          );
        }
      })}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        style={customStyles}
      >
        <Memo handleModalClose={handleModalClose} comment={comment}></Memo>
      </Modal>
    </div>
  );
};

export default MainBox;
