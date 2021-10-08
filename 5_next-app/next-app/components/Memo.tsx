import style from '../styles/scss/main/modal.module.scss';

interface Props {
  comment: string;
  handleModalClose: () => void;
}

const Memo: React.FC<Props> = ({ comment, handleModalClose }) => {
  return (
    <div className={style.box}>
      <div className={style.title}> 作ったメモ　</div>
      <div className={style.content}>{comment}</div>
      <button onClick={handleModalClose}>閉じる</button>
    </div>
  );
};

export default Memo;
