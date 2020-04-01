/**
 * @desc 版权组件
 * @author pengdaokuan
 * @createDate  2020-03-28
 * @lastModify  2020-03-29
 */
import React from "react";
import styles from "./index.module.css";
import { useStoreTheme } from "../../../common/hooks/useTheme";
import { copyright } from "../../../common/constants";

/**
 * @class Copyright
 * @summary 如果存在props，以props为主
 * @extends {React.Hooks}
 * @property {string} bgColor - 背景色
 * @property {string} textColor - 文案颜色
 */
interface Props {
  bgColor?: string;
  textColor?: string;
}

export default function Copyright(props: Props) {
  const [theme] = useStoreTheme();
  const bgColor = props.bgColor || theme.bgColor;
  const textColor = props.textColor || theme.textColor;

  return (
    <div
      className={styles.footer}
      style={{
        backgroundColor: bgColor,
        color: textColor
      }}
    >
      <p className={styles.copyright}>
        Copyright © {copyright.fromdate}-{copyright.endDate}
        All Rights Reserved. Copyright By pengdaokuan
      </p>
    </div>
  );
}