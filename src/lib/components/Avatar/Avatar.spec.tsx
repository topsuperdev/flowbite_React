import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Avatar } from '.';
import { Flowbite } from '../Flowbite';
import type { CustomFlowbiteTheme } from '../Flowbite/FlowbiteTheme';

describe.concurrent('Components / Avatar', () => {
  describe.concurrent('Theme', () => {
    it('should use custom classes', () => {
      const theme: CustomFlowbiteTheme = {
        avatar: {
          size: {
            xxl: 'h-64 w-64',
          },
        },
      };
      render(
        <Flowbite theme={{ theme }}>
          <Avatar size="xxl" />
        </Flowbite>,
      );

      expect(img()).toHaveClass('h-64 w-64');
    });
  });
});

const img = () => screen.getByTestId('flowbite-avatar-img');
