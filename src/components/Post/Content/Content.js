import React from "react";

import * as styles from "./Content.module.scss";

const Content = ({ body, title }) => (
  <div className={styles.content}>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.body} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
