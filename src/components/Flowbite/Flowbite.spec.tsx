import { act, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Flowbite, useTheme } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';
import type { ThemeContextProps } from './ThemeContext';

describe('Components / Flowbite', () => {
  describe('hook / useTheme', () => {
    it('should return default values', () => {
      render(<TestComponent />);

      const { theme, mode, toggleMode } = context;

      expect(theme).toEqual(theme);
      expect(mode).toBeUndefined();
      expect(toggleMode).toBeUndefined();
    });
  });

  describe('Flowbite', () => {
    it('should return default values', () => {
      render(
        <Flowbite>
          <TestComponent />
        </Flowbite>,
      );

      const { theme, mode, toggleMode } = context;
      expect(theme).toEqual(theme);
      expect(mode).toBe('light');
      expect(toggleMode).not.toBeUndefined();
    });

    it('should return custom theme', () => {
      render(
        <Flowbite theme={{ theme: customTheme }}>
          <TestComponent />
        </Flowbite>,
      );

      const { theme } = context;
      const mergedTheme = mergeDeep(theme, customTheme);

      expect(theme).toEqual(mergedTheme);
    });

    it('should toggle mode', () => {
      render(
        <Flowbite>
          <TestComponent />
        </Flowbite>,
      );

      const { mode, toggleMode } = context;

      expect(mode).toBe('light');
      expect(documentEl()).not.toHaveClass('dark');

      act(() => {
        if (toggleMode) toggleMode();
      });

      const { mode: mode2 } = context;

      expect(mode2).toBe('dark');
      expect(documentEl()).toHaveClass('dark');
    });

    it('should return darkmode', () => {
      render(
        <Flowbite theme={{ dark: true }}>
          <TestComponent />
        </Flowbite>,
      );

      const { mode } = context;

      expect(mode).toBe('dark');
      expect(documentEl()).toHaveClass('dark');
    });
  });
});

let context: ThemeContextProps;
const TestComponent = () => {
  context = useTheme();
  return null;
};

const customTheme = {
  avatar: {
    root: {
      size: {
        xxl: 'h-64 w-64',
      },
    },
  },
};

const documentEl = () => document.documentElement;
