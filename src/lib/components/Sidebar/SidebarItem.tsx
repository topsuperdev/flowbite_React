import classNames from 'classnames';
import { ComponentProps, ElementType, FC, forwardRef, PropsWithChildren, ReactNode, useId } from 'react';
import { Badge } from '../Badge';
import type { FlowbiteColors } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import { Tooltip } from '../Tooltip';
import { useSidebarContext } from './SidebarContext';
import { useSidebarItemContext } from './SidebarItemContext';

export interface SidebarItemProps
  extends PropsWithChildren<Omit<ComponentProps<'div'>, 'ref'> & Record<string, unknown>> {
  active?: boolean;
  as?: ElementType;
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
  label?: string;
  labelColor?: keyof SidebarItemLabelColors;
}

export interface SidebarItemLabelColors extends Pick<FlowbiteColors, 'gray'> {
  [key: string]: string;
}

const ListItem: FC<PropsWithChildren<{ id: string; isCollapsed: boolean; tooltipChildren: ReactNode | undefined }>> = ({
  id,
  isCollapsed,
  tooltipChildren,
  children: wrapperChildren,
}) => (
  <li>
    {isCollapsed ? (
      <Tooltip content={<TooltipContent id={id}>{tooltipChildren}</TooltipContent>} placement="right">
        {wrapperChildren}
      </Tooltip>
    ) : (
      wrapperChildren
    )}
  </li>
);

const TooltipContent: FC<PropsWithChildren<{ id: string }>> = ({ id, children }) => (
  <Children id={id}>{children}</Children>
);

const Children: FC<PropsWithChildren<{ id: string }>> = ({ id, children }) => {
  const theme = useTheme().theme.sidebar.item;

  return (
    <span
      className={classNames(theme.content.base)}
      data-testid="flowbite-sidebar-item-content"
      id={`flowbite-sidebar-item-${id}`}
    >
      {children}
    </span>
  );
};

const SidebarItem = forwardRef<Element, SidebarItemProps>(
  (
    { as: Component = 'a', children, icon: Icon, active: isActive, label, labelColor = 'info', className, ...props },
    ref,
  ) => {
    const id = useId();
    const { isCollapsed } = useSidebarContext();
    const { isInsideCollapse } = useSidebarItemContext();
    const theme = useTheme().theme.sidebar.item;

    return (
      <ListItem id={id} isCollapsed={isCollapsed} tooltipChildren={children}>
        <Component
          aria-labelledby={`flowbite-sidebar-item-${id}`}
          className={classNames(
            theme.base,
            isActive && theme.active,
            !isCollapsed && isInsideCollapse && theme.collapsed.insideCollapse,
            className,
          )}
          ref={ref}
          {...props}
        >
          {Icon && (
            <Icon
              aria-hidden
              className={classNames(theme.icon.base, isActive && theme.icon.active)}
              data-testid="flowbite-sidebar-item-icon"
            />
          )}
          {isCollapsed && !Icon && (
            <span className={theme.collapsed.noIcon}>{(children as string).charAt(0).toLocaleUpperCase() ?? '?'}</span>
          )}
          {!isCollapsed && <Children id={id}>{children}</Children>}
          {!isCollapsed && label && (
            <Badge color={labelColor} data-testid="flowbite-sidebar-label" hidden={isCollapsed} className={theme.label}>
              {label}
            </Badge>
          )}
        </Component>
      </ListItem>
    );
  },
);

SidebarItem.displayName = 'Sidebar.Item';
export default SidebarItem;
