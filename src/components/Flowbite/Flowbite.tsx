import type { FC, HTMLAttributes } from 'react';
import { useEffect, useMemo } from 'react';
import type { DeepPartial } from '~/src';
import { theme as defaultTheme } from '~/src';
import { mergeDeep } from '~/src/helpers/merge-deep';
import type { FlowbiteTheme } from './FlowbiteTheme';
import { ThemeContext, useTheme, useThemeMode } from './ThemeContext';

export interface ThemeProps {
  dark?: boolean;
  theme?: DeepPartial<FlowbiteTheme>;
}

interface FlowbiteProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  theme?: ThemeProps;
}

export const Flowbite: FC<FlowbiteProps> = ({ children, theme = {} }) => {
  const { theme: customTheme = {}, dark } = theme;
  const [mode, setMode, toggleMode] = useThemeMode();

  const mergedTheme = mergeDeep(defaultTheme, customTheme);

  useEffect(() => {
    if (dark) {
      setMode('dark');
      document.documentElement.classList.add('dark');
    } else {
      setMode('light');
      document.documentElement.classList.remove('dark');
    }
  }, [dark, setMode]);

  const themeContextValue = useMemo(
    () => ({
      theme: mergedTheme,
      mode,
      toggleMode,
    }),
    [mode, toggleMode, mergedTheme],
  );

  return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>;
};

Flowbite.displayName = 'Flowbite';

export type {
  CustomFlowbiteTheme,
  FlowbiteBoolean,
  FlowbiteColors,
  FlowbiteContentPositions,
  FlowbiteGradientColors,
  FlowbiteGradientDuoToneColors,
  FlowbiteHeadingLevel,
  FlowbitePositions,
  FlowbiteSizes,
  FlowbiteStateColors,
  FlowbiteTheme,
} from './FlowbiteTheme';
export { useTheme, useThemeMode };
