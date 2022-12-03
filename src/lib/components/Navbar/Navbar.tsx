import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useState } from 'react';
import { FlowbiteBoolean } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import { NavbarBrand } from './NavbarBrand';
import { NavbarCollapse } from './NavbarCollapse';
import { NavbarContext } from './NavbarContext';
import { NavbarLink } from './NavbarLink';
import { NavbarToggle } from './NavbarToggle';

export interface FlowbiteNavbarTheme {
  base: string;
  rounded: FlowbiteBoolean;
  bordered: FlowbiteBoolean;
  inner: {
    base: string;
    fluid: FlowbiteBoolean;
  };
  brand: string;
  collapse: {
    base: string;
    list: string;
    hidden: FlowbiteBoolean;
  };
  link: {
    base: string;
    active: FlowbiteBoolean;
    disabled: FlowbiteBoolean;
  };
  toggle: {
    base: string;
    icon: string;
  };
}

export interface NavbarComponentProps extends PropsWithChildren<ComponentProps<'nav'>> {
  menuOpen?: boolean;
  fluid?: boolean;
  rounded?: boolean;
  border?: boolean;
}

const NavbarComponent: FC<NavbarComponentProps> = ({
  children,
  menuOpen,
  fluid = false,
  rounded,
  border,
  className,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(menuOpen);

  const theme = useTheme().theme.navbar;

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      <nav
        className={classNames(
          theme.base,
          theme.bordered[border ? 'on' : 'off'],
          theme.rounded[rounded ? 'on' : 'off'],
          className,
        )}
        {...props}
      >
        <div className={classNames(theme.inner.base, theme.inner.fluid[fluid ? 'on' : 'off'])}>{children}</div>
      </nav>
    </NavbarContext.Provider>
  );
};

NavbarComponent.displayName = 'Navbar';
NavbarBrand.displayName = 'Navbar.Brand';
NavbarCollapse.displayName = 'Navbar.Collapse';
NavbarLink.displayName = 'Navbar.Link';
NavbarToggle.displayName = 'Navbar.Toggle';

export const Navbar = Object.assign(NavbarComponent, {
  Brand: NavbarBrand,
  Collapse: NavbarCollapse,
  Link: NavbarLink,
  Toggle: NavbarToggle,
});
