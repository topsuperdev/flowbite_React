'use client';

import type { FC, SetStateAction } from 'react';
import { useRef, useState } from 'react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { CodePreview } from '~/app/components/code-preview';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import type { TabsRef } from '~/src';
import { Button, Tabs } from '~/src';

const TabsPage: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabsRef = useRef<TabsRef>(null);

  return (
    <DocsContentLayout
      title="React Tabs - Flowbite"
      description="Use these responsive tabs components to create a secondary navigational hierarchy for your website or toggle content inside a container"
    >
      <p>
        The tabs component can be used either as an extra navigational hierarchy complementing the main navbar or you
        can also use it to change content inside a container just below the tabs using the data attributes from
        Flowbite.
      </p>
      <CodePreview title="Default tabs">
        <Tabs.Group aria-label="Default tabs" style="default">
          <Tabs.Item active title="Profile">
            Profile content
          </Tabs.Item>
          <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
          <Tabs.Item title="Settings">Settings content</Tabs.Item>
          <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
          <Tabs.Item disabled title="Disabled">
            Disabled content
          </Tabs.Item>
        </Tabs.Group>
      </CodePreview>
      <CodePreview title="Tabs with underline">
        <Tabs.Group aria-label="Tabs with underline" style="underline">
          <Tabs.Item title="Profile">Profile content</Tabs.Item>
          <Tabs.Item active title="Dashboard">
            Dashboard content
          </Tabs.Item>
          <Tabs.Item title="Settings">Settings content</Tabs.Item>
          <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
          <Tabs.Item disabled title="Disabled">
            Disabled content
          </Tabs.Item>
        </Tabs.Group>
      </CodePreview>
      <CodePreview title="Tabs with icons">
        <Tabs.Group aria-label="Tabs with icons" style="underline">
          <Tabs.Item title="Profile" icon={HiUserCircle}>
            Profile content
          </Tabs.Item>
          <Tabs.Item active title="Dashboard" icon={MdDashboard}>
            Dashboard content
          </Tabs.Item>
          <Tabs.Item title="Settings" icon={HiAdjustments}>
            Settings content
          </Tabs.Item>
          <Tabs.Item title="Contacts" icon={HiClipboardList}>
            Contacts content
          </Tabs.Item>
          <Tabs.Item disabled title="Disabled">
            Disabled content
          </Tabs.Item>
        </Tabs.Group>
      </CodePreview>
      <CodePreview title="Pills tabs">
        <Tabs.Group aria-label="Pills" style="pills">
          <Tabs.Item active title="Tab 1">
            Content 1
          </Tabs.Item>
          <Tabs.Item title="Tab 2">Content 2</Tabs.Item>
          <Tabs.Item title="Tab 3">Content 3</Tabs.Item>
          <Tabs.Item title="Tab 4">Content 4</Tabs.Item>
          <Tabs.Item disabled title="Tab 5">
            Content 5
          </Tabs.Item>
        </Tabs.Group>
      </CodePreview>
      <CodePreview title="Full width tabs">
        <Tabs.Group aria-label="Full width tabs" style="fullWidth">
          <Tabs.Item title="Profile">Profile content</Tabs.Item>
          <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
          <Tabs.Item title="Settings">Settings content</Tabs.Item>
          <Tabs.Item title="Invoice">Invoice content</Tabs.Item>
        </Tabs.Group>
      </CodePreview>
      <CodePreview
        code={`const Tabs: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabsRef = useRef<TabsRef>(null);

  return (
    <>
      <Tabs.Group
        aria-label="Default tabs"
        style="default"
        ref={tabsRef}
        onActiveTabChange={tab => setActiveTab(tab)}
      >
        <Tabs.Item active title="Profile">
          Profile content
        </Tabs.Item>
        <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
        <Tabs.Item title="Settings">Settings content</Tabs.Item>
        <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
      </Tabs.Group>
      <div>Active tab: {activeTab}</div>
      <Button.Group>
        <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(0)}>
          Profile
        </Button>
        <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(1)}>
          Dashboard
        </Button>
        <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(2)}>
          Settings
        </Button>
        <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(3)}>
          Contacts
        </Button>
      </Button.Group>
    </>
  );
};`}
        title="Set active tab programmatically"
      >
        <Tabs.Group
          aria-label="Default tabs"
          style="default"
          ref={tabsRef}
          onActiveTabChange={(tab: SetStateAction<number>) => setActiveTab(tab)}
        >
          <Tabs.Item active title="Profile">
            Profile content
          </Tabs.Item>
          <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
          <Tabs.Item title="Settings">Settings content</Tabs.Item>
          <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
        </Tabs.Group>
        <div>Active tab: {activeTab}</div>
        <Button.Group>
          <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(0)}>
            Profile
          </Button>
          <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(1)}>
            Dashboard
          </Button>
          <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(2)}>
            Settings
          </Button>
          <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(3)}>
            Contacts
          </Button>
        </Button.Group>
      </CodePreview>
    </DocsContentLayout>
  );
};

export default TabsPage;
