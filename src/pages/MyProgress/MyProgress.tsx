import { useParams } from 'react-router-dom';
import { Typography } from '@alfalab/core-components/typography';
import EmployeeCard from '../../components/EmployeeCard';
import styles from './styles.module.scss';

export default function MyProgress() {
  const { userId } = useParams();

  return (
    <div className={styles.progress}>
      <Typography.Title
        tag="h1"
        weight="bold"
        view="large"
        className={styles.progress__title}
      >
        Индивидуальный план развития {userId}
      </Typography.Title>
      <EmployeeCard />
    </div>
  );
}
