import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import AvatarGroup from './AvatarGroup';
import AvatarGroupCounter from './AvatarGroupCounter';

export type AvatarProps = PropsWithChildren<{
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: boolean;
  bordered?: boolean;
  img?: string;
  status?: 'offline' | 'online' | 'away' | 'busy';
  statusPosition?: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
  stacked?: boolean;
}>;

const sizeClasses: Record<AvatarProps['size'] & string, string> = {
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-20 h-20',
  xl: 'w-36 h-36',
};

const statusClasses: Record<AvatarProps['status'] & string, string> = {
  offline: 'bg-gray-400',
  online: 'bg-green-400',
  away: 'bg-yellow-400',
  busy: 'bg-red-400',
};

const statusPositionClasses: Record<AvatarProps['statusPosition'] & string, string> = {
  'top-right': '-top-1 -right-1',
  'top-left': '-top-1 -left-1',
  'bottom-left': '-bottom-1 -left-1',
  'bottom-right': '-bottom-1 -right-1',
};

const AvatarComponent: FC<AvatarProps> = ({
  alt = '',
  img,
  status,
  children,
  statusPosition = 'top-left',
  size = 'md',
  rounded = false,
  bordered = false,
  stacked = false,
}) => {
  return (
    <div data-testid="avatar-element" className="flex items-center space-x-4">
      <div className="relative">
        {img ? (
          <img
            className={classNames(sizeClasses[size], {
              rounded: !rounded,
              'rounded-full': rounded,
              'ring-2 ring-gray-300 dark:ring-gray-500': bordered || stacked,
              'p-1': bordered,
            })}
            src={img}
            alt={alt}
          />
        ) : (
          <div
            className={classNames(`relative overflow-hidden bg-gray-100 dark:bg-gray-600`, sizeClasses[size], {
              rounded: !rounded,
              'rounded-full': rounded,
              'ring-2 ring-gray-300 dark:ring-gray-500': bordered || stacked,
              'p-1': bordered,
            })}
          >
            <svg
              className="absolute -bottom-1 h-auto w-auto text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        )}
        {status && (
          <span
            className={classNames(
              'absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800',
              statusClasses[status],
              statusPositionClasses[statusPosition],
            )}
          ></span>
        )}
      </div>
      {children && <div>{children}</div>}
    </div>
  );
};

AvatarComponent.displayName = 'Avatar';
export const Avatar = Object.assign(AvatarComponent, {
  Group: AvatarGroup,
  Counter: AvatarGroupCounter,
});
