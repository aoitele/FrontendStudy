import style from './process.module.scss';
import { ProcessData } from '../../../＠types/basicdata';

type Props = {
  processData: ProcessData;
};

const Process: React.FC<Props> = ({ processData }) => {
  const pointRemovedData = processData.slice(1);

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <h2>作り方</h2>
      </div>
      <div className={style.point}>
        <h6>Point !</h6>
        <p> {processData[0].process_explain}</p>
      </div>
      {pointRemovedData.map((data) => {
        return (
          <dl key={data.process_number} className={style.process}>
            <dt className={style.order}>{data.process_number}</dt>
            <dd>{data.process_explain}</dd>
          </dl>
        );
      })}
    </div>
  );
};

export default Process;
