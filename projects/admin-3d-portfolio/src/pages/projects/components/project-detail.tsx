import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from '@material-tailwind/react';

interface ProjectDetailProps {
  open: boolean;
  closeDrawer: () => void;
}

const ProjectDetail = ({ open, closeDrawer }: ProjectDetailProps) => {
  return (
    <Drawer
      open={open}
      onClose={closeDrawer}
      className="p-4"
      placement="right"
      size={700}
    >
      <div className="flex items-center justify-between mb-6">
        <Typography variant="h5" color="blue-gray">
          Material Tailwind
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
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
        </IconButton>
      </div>
      <Typography color="gray" className="pr-4 mb-8 font-normal">
        Material Tailwind features multiple React and HTML components, all
        written with Tailwind CSS classes and Material Design guidelines.
      </Typography>
      <div className="flex gap-2">
        <Button size="sm" variant="outlined">
          Documentation
        </Button>
        <Button size="sm">Get Started</Button>
      </div>
    </Drawer>
  );
};

export default ProjectDetail;
