import classNames from 'classnames';
import type { ComponentProps, FC, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { FlowbiteBoolean, FlowbiteColors, FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import { HelperText } from '../HelperText';

export interface FlowbiteSelectTheme {
  base: string;
  addon: string;
  field: {
    base: string;
    icon: {
      base: string;
      svg: string;
    };
    select: {
      base: string;
      withIcon: FlowbiteBoolean;
      withAddon: FlowbiteBoolean;
      withShadow: FlowbiteBoolean;
      sizes: SelectSizes;
      colors: SelectColors;
    };
  };
}

export interface SelectColors extends Pick<FlowbiteColors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
  [key: string]: string;
}

export interface SelectSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string;
}

export interface SelectProps extends Omit<ComponentProps<'select'>, 'color' | 'ref'> {
  sizing?: keyof SelectSizes;
  shadow?: boolean;
  helperText?: ReactNode;
  addon?: ReactNode;
  icon?: FC<ComponentProps<'svg'>>;
  color?: keyof SelectColors;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, sizing = 'md', shadow, helperText, addon, icon: Icon, color = 'gray', className, ...props }, ref) => {
    const theme = useTheme().theme.select;

    return (
      <div className={classNames(theme.base, className)}>
        {addon && <span className={theme.addon}>{addon}</span>}
        <div className={theme.field.base}>
          {Icon && (
            <div className={theme.field.icon.base}>
              <Icon className={theme.field.icon.svg} />
            </div>
          )}
          <select
            className={classNames(
              theme.field.select.base,
              theme.field.select.colors[color],
              theme.field.select.withIcon[Icon ? 'on' : 'off'],
              theme.field.select.withAddon[addon ? 'on' : 'off'],
              theme.field.select.withShadow[shadow ? 'on' : 'off'],
              theme.field.select.sizes[sizing],
            )}
            {...props}
            ref={ref}
          >
            {children}
          </select>
          {helperText && <HelperText color={color}>{helperText}</HelperText>}
        </div>
      </div>
    );
  },
);

Select.displayName = 'Select';
