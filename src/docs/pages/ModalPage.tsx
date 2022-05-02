import { FC, useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

import { CodeExample, DemoPage } from './DemoPage';
import { Button, Checkbox, Label, Modal, Select, TextInput } from '../../lib';

const ModalPage: FC = () => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [modalSize, setModalSize] = useState<string>('md');
  const [modalPlacement, setModalPlacement] = useState<string>('center');

  const examples: CodeExample[] = [
    {
      title: 'Default modal',
      code: (
        <>
          <Button onClick={() => setOpenModal('default')}>Toggle modal</Button>
          <Modal show={openModal === 'default'} onClose={() => setOpenModal(undefined)}>
            <Modal.Header>Terms of Service</Modal.Header>
            <Modal.Body className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy laws for its
                citizens, companies around the world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is
                meant to ensure a common set of data rights in the European Union. It requires organizations to notify
                users as soon as possible of high-risk data breaches that could personally affect them.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setOpenModal(undefined)}>I accept</Button>
              <Button color="alternative" onClick={() => setOpenModal(undefined)}>
                Decline
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ),
    },
    {
      title: 'Pop-up modal',
      code: (
        <>
          <Button onClick={() => setOpenModal('pop-up')}>Toggle modal</Button>
          <Modal show={openModal === 'pop-up'} size="md" popup onClose={() => setOpenModal(undefined)}>
            <Modal.Header />
            <Modal.Body className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this product?
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="red" onClick={() => setOpenModal(undefined)}>
                  {"Yes, I'm sure"}
                </Button>
                <Button color="alternative" onClick={() => setOpenModal(undefined)}>
                  No, cancel
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        </>
      ),
    },
    {
      title: 'Form elements',
      code: (
        <>
          <Button onClick={() => setOpenModal('form-elements')}>Toggle modal</Button>
          <Modal show={openModal === 'form-elements'} size="md" popup onClose={() => setOpenModal(undefined)}>
            <Modal.Header />
            <Modal.Body className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
              <div>
                <Label className="mb-2 block" htmlFor="email">
                  Your email
                </Label>
                <TextInput
                  id="email"
                  className="dark:border-gray-500 dark:bg-gray-600"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <Label className="mb-2 block" htmlFor="password">
                  Your password
                </Label>
                <TextInput id="password" className="dark:border-gray-500 dark:bg-gray-600" type="password" required />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" className="dark:border-gray-500 dark:bg-gray-600" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <a href="/modal" className="text-sm text-blue-700 hover:underline dark:text-blue-500">
                  Lost Password?
                </a>
              </div>
              <Button className="w-full">Log in to your account</Button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{' '}
                <a href="/modal" className="text-blue-700 hover:underline dark:text-blue-500">
                  Create account
                </a>
              </div>
            </Modal.Body>
          </Modal>
        </>
      ),
    },
    {
      title: 'Sizing',
      code: (
        <>
          <div className="flex flex-wrap gap-4">
            <Select className="w-40" defaultValue="md" onChange={(event) => setModalSize(event.target.value)}>
              <option value="sm">sm</option>
              <option value="md">md</option>
              <option value="lg">lg</option>
              <option value="xl">xl</option>
              <option value="2xl">2xl</option>
              <option value="3xl">3xl</option>
              <option value="4xl">4xl</option>
              <option value="5xl">5xl</option>
              <option value="6xl">6xl</option>
              <option value="7xl">7xl</option>
            </Select>
            <Button onClick={() => setOpenModal('size')}>Toggle modal</Button>
          </div>
          <Modal show={openModal === 'size'} size={modalSize as any} onClose={() => setOpenModal(undefined)}>
            <Modal.Header>Small modal</Modal.Header>
            <Modal.Body className="space-y-6 p-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy laws for its
                citizens, companies around the world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is
                meant to ensure a common set of data rights in the European Union. It requires organizations to notify
                users as soon as possible of high-risk data breaches that could personally affect them.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setOpenModal(undefined)}>I accept</Button>
              <Button color="alternative" onClick={() => setOpenModal(undefined)}>
                Decline
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ),
    },
    {
      title: 'Placement',
      code: (
        <>
          <div className="flex flex-wrap gap-4">
            <Select className="w-40" defaultValue="center" onChange={(event) => setModalPlacement(event.target.value)}>
              <option value="center">Center</option>
              <option value="top-left">Top left</option>
              <option value="top-center">Top center</option>
              <option value="top-right">Top right</option>
              <option value="center-left">Center left</option>
              <option value="center-right">Center right</option>
              <option value="bottom-right">Bottom right</option>
              <option value="bottom-center">Bottom center</option>
              <option value="bottom-left">Bottom left</option>
            </Select>
            <Button onClick={() => setOpenModal('placement')}>Toggle modal</Button>
          </div>
          <Modal
            show={openModal === 'placement'}
            placement={modalPlacement as any}
            onClose={() => setOpenModal(undefined)}
          >
            <Modal.Header>Small modal</Modal.Header>
            <Modal.Body className="space-y-6 p-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy laws for its
                citizens, companies around the world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is
                meant to ensure a common set of data rights in the European Union. It requires organizations to notify
                users as soon as possible of high-risk data breaches that could personally affect them.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setOpenModal(undefined)}>I accept</Button>
              <Button color="alternative" onClick={() => setOpenModal(undefined)}>
                Decline
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default ModalPage;
