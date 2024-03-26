import { EditIcon, EyeIcon, TrashIcon } from '~/components/icons/icons';
import { useEffect, useState } from 'react';

import Breadcrumb from '~/components/Breadcrumbs/Breadcrumb';
import { Button } from '@material-tailwind/react';
import DefaultLayout from '~/layout/DefaultLayout';
import { IProject } from '~/types/project.type';
import { motion } from 'framer-motion';
import { useGetAllProjectsQuery } from '~/store/services/project.service';

const ProjectPage = () => {
  const { data } = useGetAllProjectsQuery();

  const [projects, setProjects] = useState<IProject[]>([]);
  console.log('🚀 ~ ProjectPage ~ projects:', projects);

  useEffect(() => {
    if (!data) return;
    setProjects(data.items);
  }, [data]);
  if (!data) return <div>Loading...</div>;

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Projects" />
      <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="py-6 px-4 md:px-6 xl:px-7.5 flex items-center justify-between">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Top Projects
          </h4>
          <Button className="text-white bg-primary">Add Project</Button>
        </div>

        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5">
          <div className="flex items-center col-span-2">
            <p className="font-medium">Project Name</p>
          </div>
          <div className="items-center hidden col-span-3 sm:flex">
            <p className="font-medium">Desc</p>
          </div>
          <div className="flex items-center col-span-1">
            <p className="font-medium">Actions</p>
          </div>
        </div>

        {projects &&
          projects.length > 0 &&
          projects.map((project) => (
            <div
              className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5"
              key={project.id}
            >
              <div className="flex items-center col-span-2">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <p className="text-sm text-black dark:text-white truncate  w-[400px]">
                    {project.title}
                  </p>
                </div>
              </div>
              <div className="items-center hidden col-span-3 sm:flex">
                <p className="text-sm text-black truncate dark:text-white w-[400px]">
                  {project.desc}
                </p>
              </div>
              <div className="flex items-center col-span-1">
                <div className="flex items-center space-x-3.5">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="hover:text-primary"
                  >
                    <EyeIcon />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="hover:text-primary"
                  >
                    <TrashIcon />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="hover:text-primary"
                  >
                    <EditIcon />
                  </motion.button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </DefaultLayout>
  );
};

export default ProjectPage;
