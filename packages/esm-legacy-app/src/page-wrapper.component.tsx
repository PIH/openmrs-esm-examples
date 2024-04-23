import React from 'react';
import styles from './page-wrapper-component.scss';

interface WrapperProps {
  path: string;
}

const Wrapper: React.FC<WrapperProps> = ({ path }: WrapperProps) => {
  return <iframe className={styles.container} src={window.openmrsBase + path} />;
};

export default Wrapper;
