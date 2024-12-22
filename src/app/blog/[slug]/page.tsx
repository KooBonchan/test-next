import styles from './styles.module.css';
import Image from 'next/image';

export default function DocumentView() {
  return (
    <>
      <div className={styles['image-wrapper']}>
        <Image
          src="/next.svg"
          alt="NEXTJS IMAGE"
          width={180}
          height={38}
        />
      </div>
    </>
  );
}