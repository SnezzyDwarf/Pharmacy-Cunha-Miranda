import styles from "./box.module.css";

export default function Box({
  title,
  children,
  image,
  alt,
  variant = "primary",
  className = "",
}) {
  const moduleClassName = `${styles.box} ${styles[variant] || ""} ${className}`;

  return (
    <div className={moduleClassName}>
      {image && (
        <div aria-label={alt} className={styles.image}>
          {image}
        </div>
      )}
      <div className={styles.content_text}>
        <div className={styles.text}>
          {title && <h3 className={styles.title}>{title}</h3>}
        </div>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
}
