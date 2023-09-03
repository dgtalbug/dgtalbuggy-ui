import _ from 'lodash';
import { useEffect } from 'react';

import { useSelector } from '@/store/hooks';
import { AppState } from '@/store/store';
import * as locales from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';

import components from './Components';
import { DarkThemeColors } from './DarkThemeColors';
import { baseDarkTheme, baselightTheme } from './DefaultColors';
import { LightThemeColors } from './LightThemeColors';
import { darkshadows, shadows } from './Shadows';
import typography from './Typography';

export const BuildTheme = (config: any = {}) => {
  const themeOptions = LightThemeColors.find((theme) => theme.name === config.theme);
  const darkthemeOptions = DarkThemeColors.find((theme) => theme.name === config.theme);
  const styler = useSelector((state: AppState) => state.styler);
  const defaultTheme = styler.activeMode === 'dark' ? baseDarkTheme : baselightTheme;
  const defaultShadow = styler.activeMode === 'dark' ? darkshadows : shadows;
  const themeSelect = styler.activeMode === 'dark' ? darkthemeOptions : themeOptions;
  const baseMode = {
    palette: {
      mode: styler.activeMode,
    },
    shape: {
      borderRadius: styler.borderRadius,
    },
    shadows: defaultShadow,
    typography: typography,
  };
  const theme = createTheme(
    _.merge({}, baseMode, defaultTheme, locales, themeSelect),
  );
  theme.components = components(theme);

  return theme;
};

const ThemeSettings = () => {
  const activeTheme = useSelector((state: AppState) => state.styler.activeTheme);
  const theme = BuildTheme({
    theme: activeTheme,
  });
  return theme;
};


export { ThemeSettings };
