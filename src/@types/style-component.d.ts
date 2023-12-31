import 'styled-components'
import 'styled-components/native';

import theme from '../global/theme'

type MyThemeType = typeof theme;

declare module 'styled-components/native' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends MyThemeType {}
}

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends MyThemeType {}
}