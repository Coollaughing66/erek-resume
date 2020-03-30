/**
 * @desc interface
 * @author pengdaokuan
 * @createDate 2020-03-28
 * @lastModify 2020-03-28
 */

export interface AbstructThemeItemProps {
  bgColor: string;
  textColor: string;
  hoverColor: string;
  uniqueKey: string;
}

export interface AbstructThemeListProps {
  [key: string]: any;
}

export interface AbstructGridItemProps {
  url: string;
  key: string;
  text: string;
}
