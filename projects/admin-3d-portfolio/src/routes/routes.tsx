import { Navigate, createBrowserRouter } from 'react-router-dom';

import Buttons from '~/pages/UiElements/Buttons';
import Chart from '~/pages/Chart';
import FormElements from '~/pages/Form/FormElements';
import FormLayout from '~/pages/Form/FormLayout';
import PageTitle from '~/components/PageTitle';
import Settings from '~/pages/Settings';
import SignIn from '~/pages/Authentication/SignIn';
import SignUp from '~/pages/Authentication/SignUp';
import Tables from '~/pages/Tables';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/auth/signin" />,
  },
  {
    path: '/auth/signup',
    element: (
      <>
        <PageTitle title="TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <SignUp />
      </>
    ),
  },
  {
    path: '/auth/signin',
    element: (
      <>
        <PageTitle title="TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <SignIn />
      </>
    ),
  },
  {
    path: '/ui/buttons',
    element: (
      <>
        <PageTitle title="TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <Buttons />
      </>
    ),
  },
  {
    path: '/chart',
    element: (
      <>
        <PageTitle title="TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <Chart />
      </>
    ),
  },
  {
    path: '/settings',
    element: (
      <>
        <PageTitle title="TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <Settings />
      </>
    ),
  },
  {
    path: '/tables',
    element: (
      <>
        <PageTitle title="TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <Tables />
      </>
    ),
  },
  {
    path: '/form/form-layout',
    element: (
      <>
        <PageTitle title="TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <FormLayout />
      </>
    ),
  },
  {
    path: '/forms/form-elements',
    element: (
      <>
        <PageTitle title="TailAdmin - Tailwind CSS Admin Dashboard Template" />
        <FormElements />
      </>
    ),
  },
]);
