import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      side_grey: string;
      main_white: string;
      main_black: string;
      main_pink: string;
      main_yellow: string;
      sub_yellow: string;
      main_green: string;
    };
  }
}
