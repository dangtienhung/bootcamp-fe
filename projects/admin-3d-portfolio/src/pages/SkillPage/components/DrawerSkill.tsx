import { Drawer, Typography } from '@material-tailwind/react';

interface DrawerSkillProps {
  open: boolean;
  closeDrawer: () => void;
}

const DrawerSkill = ({ open, closeDrawer }: DrawerSkillProps) => {
  return (
    <Drawer
      placement="right"
      size={400}
      open={open}
      onClose={closeDrawer}
      className="p-4"
    >
      <div className="flex items-center justify-between mb-6">
        <Typography variant="h5" color="blue-gray">
          Add Skill
        </Typography>
        <button onClick={closeDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <form action="#">
        <div className="">
          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Subject
            </label>
            <input
              type="text"
              placeholder="Select subject"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2.5 block text-black dark:text-white">
              Message
            </label>
            <textarea
              rows={6}
              placeholder="Type your message"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            ></textarea>
          </div>

          <button className="flex justify-center w-full p-3 font-medium rounded bg-primary text-gray hover:bg-opacity-90">
            Send Message
          </button>
        </div>
      </form>
    </Drawer>
  );
};

export default DrawerSkill;
