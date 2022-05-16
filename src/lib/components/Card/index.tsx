import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

export type CardProps = PropsWithChildren<{
  className?: string;
  horizontal?: boolean;
  imgAlt?: string;
  imgSrc?: string;
}>;

export const Card: FC<CardProps> = ({ children, className, horizontal, imgAlt, imgSrc }) => {
  return (
    <div
      data-testid="card-element"
      className={classNames(
        'flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800',
        {
          'flex-col': !horizontal,
          'flex-col md:max-w-xl md:flex-row': horizontal,
        },
        className,
      )}
    >
      {imgSrc && (
        <img
          className={classNames({
            'rounded-t-lg': !horizontal,
            'h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg': horizontal,
          })}
          src={imgSrc}
          alt={imgAlt ?? ''}
        />
      )}
      <div className="flex h-full flex-col justify-center gap-4 p-6">{children}</div>
    </div>
  );
};
