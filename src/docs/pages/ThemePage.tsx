import type { FC } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { HiInformationCircle } from 'react-icons/hi';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Alert, Card, DarkThemeToggle } from '../../lib';
import { Flowbite } from '../../lib/components';
import type { CustomFlowbiteTheme } from '../../lib/components/Flowbite/FlowbiteTheme';

const ThemePage: FC = () => {
  const theme: CustomFlowbiteTheme = { alert: { root: { color: { info: 'bg-primary' } } } };

  return (
    <div className="flex flex-col max-w-4xl gap-8 mx-auto dark:text-white">
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Theme</span>
        <div className="py-4">
          <Alert color="yellow" icon={HiInformationCircle}>
            This feature is highly experimental. In the future, it could be deprecated or even suffer several changes.
          </Alert>
          <p className="mt-4">
            Sometimes you want to give your web application a little more personality and customize some aspects of
            Flowbite. This is possible thanks to the support we offer for themes. To use our theme support, your
            application needs to be surrounded by the Flowbite component, and you must tell this component which theme
            you want to load for your application.
          </p>
        </div>
        <Card>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {reactElementToJSXString(<Flowbite theme={{ theme }}>...</Flowbite>, {
              showFunctions: true,
              functionValue: (fn) => fn.name,
              sortProps: false,
              useBooleanShorthandSyntax: false,
              useFragmentShortSyntax: false,
            })}
          </SyntaxHighlighter>
        </Card>
      </div>
      <span className="text-xl font-bold">Switch to dark theme</span>
      <p>
        Since the Flowbite component creates and context to manage the theme, it also enables your application to use
        the <strong>DarkThemeToggle</strong> component.
      </p>
      <Card>
        <SyntaxHighlighter language="tsx" style={dracula}>
          {reactElementToJSXString(
            <Flowbite>
              <DarkThemeToggle />
            </Flowbite>,
            {
              showFunctions: true,
              functionValue: (fn) => fn.name,
              sortProps: false,
              useBooleanShorthandSyntax: false,
              useFragmentShortSyntax: false,
            },
          )}
        </SyntaxHighlighter>
      </Card>
      <span className="text-xl font-bold">Get the theme</span>
      <p>
        For more customizations, there is the possibility to get the theme with the <strong>useTheme</strong> hook and
        its mode with the <strong>useThemeMode</strong> hook.
      </p>
      <Card>
        <SyntaxHighlighter language="tsx" style={dracula}>
          const theme = useTheme().theme.button;
        </SyntaxHighlighter>
        <SyntaxHighlighter language="tsx" style={dracula}>
          const [mode, setMode, toggleMode] = useThemeMode(usePreferences);
        </SyntaxHighlighter>
      </Card>
    </div>
  );
};

export default ThemePage;
