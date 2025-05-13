import React, { useEffect } from "react";

import { useTheme } from "@/hooks";

import * as styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  const [{ mode }] = useTheme();

  useEffect(() => {
    document.documentElement.className = mode;
  }, [mode]);

  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
