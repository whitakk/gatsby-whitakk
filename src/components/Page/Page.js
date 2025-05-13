import React, { useEffect, useRef } from "react";

import * as styles from "./Page.module.scss";

const Page = ({ title, children }) => {
  const pageRef = useRef(null);

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView();
    }
  }, []);

  return (
    <div ref={pageRef} className={styles.page}>
      <div className={styles.inner}>
        {title && <h1 className={styles.title}>{title}</h1>}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default Page;
