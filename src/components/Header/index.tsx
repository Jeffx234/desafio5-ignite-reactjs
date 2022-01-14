import Link from 'next/link';
import Head from 'next/head';

import styles from './header.module.scss';

interface IHeader {
  pageTitle: string;
}

export default function Header({ pageTitle }: IHeader) {
  return (
    <header className={styles.headerContainer}>
      <Head>
        <title>{pageTitle} | spacetraveling</title>
      </Head>

      <Link href="/">
        <a>
          <img src="/images/logo.svg" alt="logo" />
        </a>
      </Link>
    </header>
  );
}