import Breadcrumb from '~/components/Breadcrumbs/Breadcrumb';
import { Button } from '@material-tailwind/react';
import DefaultLayout from '~/layout/DefaultLayout';

const ExperiencePage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Experience" />

      <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="py-6 px-4 md:px-6 xl:px-7.5 flex items-center justify-between">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Top Experience
          </h4>
          <Button className="text-white bg-primary">Add Experience</Button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ExperiencePage;
