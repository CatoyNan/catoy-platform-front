import Guide from '@/components/Guide';
import services from '@/services/demo';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import React, { useEffect } from 'react';
import styles from './index.less';
const { test } = services.UserController;

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  useEffect(() => {
    test();
  }, []);
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
