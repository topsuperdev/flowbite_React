import { DeepPartial } from '..';
import { FlowbiteAccordionTheme } from '../Accordion';
import { FlowbiteAlertTheme } from '../Alert';
import { FlowbiteAvatarGroupCounterTheme, FlowbiteAvatarGroupTheme, FlowbiteAvatarTheme } from '../Avatar';
import { FlowbiteBadgeTheme } from '../Badge';
import { FlowbiteBreadcrumbTheme } from '../Breadcrumb';
import { FlowbiteButtonGroupTheme, FlowbiteButtonTheme } from '../Button';
import { FlowbiteCardTheme } from '../Card';
import { FlowbiteCarouselTheme } from '../Carousel';
import { FlowbiteDarkThemeToggleTheme } from '../DarkThemeToggle';
import { FlowbiteDropdownTheme } from '../Dropdown';
import { FlowbiteFooterTheme } from '../Footer';
import { FlowbiteFormControlsTheme } from '../FormControls';
import { FlowbiteListGroupTheme } from '../ListGroup';
import { FlowbiteModalTheme } from '../Modal';
import { FlowbiteNavbarTheme } from '../Navbar';
import { FlowbitePaginationTheme } from '../Pagination';
import { FlowbiteProgressTheme } from '../Progress';
import { FlowbiteRatingTheme } from '../Rating';
import { FlowbiteSidebarTheme } from '../Sidebar';
import { FlowbiteSpinnerTheme } from '../Spinner';
import { FlowbiteTabTheme } from '../Tab';
import { FlowbiteToastTheme } from '../Toast';
import { FlowbiteTooltipTheme } from '../Tooltip';

export type CustomFlowbiteTheme = DeepPartial<FlowbiteTheme>;

export interface FlowbiteTheme extends Record<string, unknown> {
  accordion: FlowbiteAccordionTheme;
  alert: FlowbiteAlertTheme;
  avatar: FlowbiteAvatarTheme;
  avatarGroupCounter: FlowbiteAvatarGroupCounterTheme;
  avatarGroup: FlowbiteAvatarGroupTheme;
  badge: FlowbiteBadgeTheme;
  breadcrumb: FlowbiteBreadcrumbTheme;
  button: FlowbiteButtonTheme;
  buttonGroup: FlowbiteButtonGroupTheme;
  card: FlowbiteCardTheme;
  carousel: FlowbiteCarouselTheme;
  darkThemeToggle: FlowbiteDarkThemeToggleTheme;
  footer: FlowbiteFooterTheme;
  formControls: FlowbiteFormControlsTheme;
  listGroup: FlowbiteListGroupTheme;
  modal: FlowbiteModalTheme;
  navbar: FlowbiteNavbarTheme;
  rating: FlowbiteRatingTheme;
  pagination: FlowbitePaginationTheme;
  sidebar: FlowbiteSidebarTheme;
  progress: FlowbiteProgressTheme;
  spinner: FlowbiteSpinnerTheme;
  tab: FlowbiteTabTheme;
  toast: FlowbiteToastTheme;
  tooltip: FlowbiteTooltipTheme;
  dropdown: FlowbiteDropdownTheme;
}

export interface FlowbiteBoolean {
  off: string;
  on: string;
}

export interface FlowbiteStateColors {
  info: string;
  failure: string;
  success: string;
  warning: string;
}

export interface FlowbiteColors extends FlowbiteStateColors {
  [key: string]: string;
  blue: string;
  cyan: string;
  dark: string;
  gray: string;
  green: string;
  indigo: string;
  light: string;
  lime: string;
  pink: string;
  purple: string;
  red: string;
  teal: string;
  yellow: string;
}

export interface FlowbiteGradientColors extends Omit<FlowbiteStateColors, 'warning'> {
  [key: string]: string;
  cyan: string;
  lime: string;
  pink: string;
  purple: string;
  teal: string;
}

export interface FlowbiteGradientDuoToneColors {
  cyanToBlue: string;
  greenToBlue: string;
  pinkToOrange: string;
  purpleToBlue: string;
  purpleToPink: string;
  redToYellow: string;
  tealToLime: string;
}

export type FlowbiteHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface FlowbitePositions {
  'bottom-left': string;
  'bottom-right': string;
  'bottom-center': string;
  'top-left': string;
  'top-center': string;
  'top-right': string;
  'center-left': string;
  center: string;
  'center-right': string;
}

export interface FlowbiteSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
  '7xl': string;
}

export interface FlowbiteContentPositions {
  center: string;
}
