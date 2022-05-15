import { cleanup, render } from '@testing-library/react';
import { Avatar } from '.';
import AvatarGroup from './AvatarGroup';

describe('Avatar Component should be able to render a', () => {
  afterEach(cleanup);

  it('avatar', () => {
    const { getByTestId } = render(<Avatar />);
    expect(getByTestId('avatar-element')).toBeTruthy();
  });

  it('avatar with image', () => {
    const { getByTestId } = render(
      <Avatar img='img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"' />,
    );
    expect(getByTestId('avatar-element')).toBeTruthy();
  });

  it('rounded avatar ', () => {
    const { getByTestId } = render(<Avatar rounded={true} />);
    expect(getByTestId('avatar-element').children[0].children[0].className).toContain('rounded-full');
  });

  it('bordered avatar', () => {
    const { getByTestId } = render(<Avatar bordered={true} />);
    expect(getByTestId('avatar-element').children[0].children[0].className).toContain(
      'ring-2 ring-gray-300 dark:ring-gray-500 p-1',
    );
  });

  describe('avatar size', () => {
    it('xs', () => {
      const { getByTestId } = render(<Avatar size="xs" />);
      expect(getByTestId('avatar-element').children[0].children[0].className).toContain('w-6 h-6');
    });

    it('sm', () => {
      const { getByTestId } = render(<Avatar size="sm" />);
      expect(getByTestId('avatar-element').children[0].children[0].className).toContain('w-8 h-8');
    });

    it('md', () => {
      const { getByTestId } = render(<Avatar size="md" />);
      expect(getByTestId('avatar-element').children[0].children[0].className).toContain('w-10 h-10');
    });

    it('lg', () => {
      const { getByTestId } = render(<Avatar size="lg" />);
      expect(getByTestId('avatar-element').children[0].children[0].className).toContain('w-20 h-20');
    });

    it('xl', () => {
      const { getByTestId } = render(<Avatar size="xl" />);
      expect(getByTestId('avatar-element').children[0].children[0].className).toContain('w-36 h-36');
    });
  });

  it('avatar group', () => {
    const { getByTestId } = render(
      <AvatarGroup>
        <Avatar />
        <Avatar />
      </AvatarGroup>,
    );
    expect(getByTestId('avatar-group-element')).toBeTruthy();
  });

  describe('dot indicator with status', () => {
    it('offline', () => {
      const { getByTestId } = render(<Avatar status="offline" />);
      expect(getByTestId('avatar-element').children[0].children[1].className.split(' ')).toEqual(
        expect.arrayContaining(['absolute', 'bg-gray-400']),
      );
    });

    it('online', () => {
      const { getByTestId } = render(<Avatar status="online" />);
      expect(getByTestId('avatar-element').children[0].children[1].className.split(' ')).toEqual(
        expect.arrayContaining(['absolute', 'bg-green-400']),
      );
    });

    it('away', () => {
      const { getByTestId } = render(<Avatar status="away" />);
      expect(getByTestId('avatar-element').children[0].children[1].className.split(' ')).toEqual(
        expect.arrayContaining(['absolute', 'bg-yellow-400']),
      );
    });

    it('busy', () => {
      const { getByTestId } = render(<Avatar status="busy" />);
      expect(getByTestId('avatar-element').children[0].children[1].className.split(' ')).toEqual(
        expect.arrayContaining(['absolute', 'bg-red-400']),
      );
    });

    describe('in position', () => {
      it('top-left', () => {
        const { getByTestId } = render(<Avatar status="offline" statusPosition="top-left" />);
        expect(getByTestId('avatar-element').children[0].children[1].className.split(' ')).toEqual(
          expect.arrayContaining(['absolute', '-top-1', '-left-1']),
        );
      });

      it('top-right', () => {
        const { getByTestId } = render(<Avatar status="offline" statusPosition="top-right" />);
        expect(getByTestId('avatar-element').children[0].children[1].className.split(' ')).toEqual(
          expect.arrayContaining(['absolute', '-top-1', '-right-1']),
        );
      });

      it('bottom-left', () => {
        const { getByTestId } = render(<Avatar status="offline" statusPosition="bottom-left" />);
        expect(getByTestId('avatar-element').children[0].children[1].className.split(' ')).toEqual(
          expect.arrayContaining(['absolute', '-bottom-1', '-left-1']),
        );
      });

      it('bottom-right', () => {
        const { getByTestId } = render(<Avatar status="offline" statusPosition="bottom-right" />);
        expect(getByTestId('avatar-element').children[0].children[1].className.split(' ')).toEqual(
          expect.arrayContaining(['absolute', '-bottom-1', '-right-1']),
        );
      });
    });
  });
});
