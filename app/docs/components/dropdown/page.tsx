import type { Metadata, NextPage } from 'next';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import DropdownPageContent from '.';

export const metadata: Metadata = {
  description:
    'Get started with the dropdown component to show a list of menu items when clicking on the trigger element based on multiple layouts, styles, and placements',
  title: 'React Dropdown - Flowbite',
};

const DropdownPage: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <DropdownPageContent />
    </DocsContentLayout>
  );
};

export default DropdownPage;
