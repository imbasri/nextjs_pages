import styles from '@/styles/404.module.scss'
const  Custom404 = () => {
  return (
  <div className={styles.error}>
      <img src="/404_not_found.svg" alt="404" className={styles.error__img}/>
    <h1 className='text-3xl'>404 | Halaman tidak ditemukan!</h1>
  </div>
  )
}

export default Custom404
