import { ComponentProps, FC } from 'react';
import classNames from 'classnames';
import { HiChevronDown } from 'react-icons/hi';
import { useAccordionContext } from './AccordionPanelContext';
import { useTheme } from '../Flowbite/ThemeContext';
import { excludeClassName } from '../../helpers/exclude';
import { HeadingLevel } from '../Flowbite/FlowbiteTheme';

export interface AccordionTitleProps extends ComponentProps<'button'> {
  arrowIcon?: FC<ComponentProps<'svg'>>;
  as?: HeadingLevel;
}

export const AccordionTitle: FC<AccordionTitleProps> = ({
  arrowIcon: ArrowIcon = HiChevronDown,
  as: Heading = 'h2',
  children,
  ...props
}): JSX.Element => {
  const theirProps = excludeClassName(props);

  const { flush, isOpen, setIsOpen } = useAccordionContext();
  const theme = useTheme().theme.accordion.title;

  const onClick = () => setIsOpen(!isOpen);

  return (
    <button
      className={classNames(theme.base, theme.flush[flush ? 'on' : 'off'], theme.open[isOpen ? 'on' : 'off'])}
      onClick={onClick}
      type="button"
      {...theirProps}
    >
      <Heading data-testid="flowbite-accordion-heading">{children}</Heading>
      <ArrowIcon aria-hidden className={classNames(theme.arrow.base, isOpen && theme.arrow.open)} />
    </button>
  );
};
