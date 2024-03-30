import { Drawer, IconButton, Typography } from '@material-tailwind/react';

import ReactQuill from 'react-quill';
import { useState } from 'react';
import { uploadImage } from '../utils/upload-image';
import SelectV2 from '~/components/Forms/SelectGroup/select-v2';
// import { memberPosition, statusArray } from '../init';

interface FormProjectProps {
  open: boolean;
  closeDrawer: () => void;
}

const memberPosition = ['leader', 'member', 'tester']
const statusArray = ['progress', 'done', 'test']

const FormProject = ({ closeDrawer, open }: FormProjectProps) => {
  const [value, setValue] = useState('');
  const [images, setImages] = useState<string[]>([]);
  console.log("🚀 ~ FormProject ~ images:", images)

  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const result = await uploadImage(files)
    setImages(result)
  }

  /* select status */
  const [option, setOption] = useState(statusArray[0]);

  const handleChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setOption(value);
  };

  /* select position member */
  const [position, setPosition] = useState(memberPosition[0]);

  const handleChangePosition = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setPosition(value);
  };

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
          Create Project
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

      <form action="#" className="h-full pb-10 overflow-y-scroll">
        <div className="p-6.5">
          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Tên dự án
              </label>
              <input
                type="text"
                placeholder="Nhận tên dự án"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Link code
              </label>
              <input
                type="text"
                placeholder="Nhập link github"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Link demo
              </label>
              <input
                type="text"
                placeholder="Nhận Link demo"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Số thành viên
              </label>
              <input
                type="number"
                placeholder="Nhập số thành viên"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          {images.length > 0 && (
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              {images.map((image, index) => (
                  <img src={image} alt="image" className="w-[140px] h-[140px] object-cover rounded-full border shadow" />
              ))}
            </div>
          )}

          <div className="mb-4.5">
            <label className="block mb-3 text-black dark:text-white">
              Hình ảnh dự án
            </label>
            <input
              onChange={(e) => handleUploadImage(e)}
              type="file"
              multiple
              className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
            />
          </div>

          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Ngày bắt đầu
              </label>
              <input
                type="date"
                placeholder="Nhận Ngày bắt đầu"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Ngày kết thúc
              </label>
              <input
                type="date"
                placeholder="Nhập Ngày kết thúc"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Trạng thái dự án
              </label>
              <SelectV2 options={statusArray} selectedOption={option} onChange={handleChangeStatus} />
            </div>

            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Vị trí
              </label>
              <SelectV2 options={memberPosition} onChange={handleChangePosition} selectedOption={position} />
            </div>
          </div>

          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Số lượng thành viên
            </label>
            <input
              type="text"
              placeholder="Số lượng thành viên"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Công nghệ sử dụng fe
            </label>
            <input
              type="text"
              placeholder="Số lượng thành viên"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Công nghệ sử dụng be
            </label>
            <input
              type="text"
              placeholder="Số lượng thành viên"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Database
            </label>
            <input
              type="text"
              placeholder="Số lượng thành viên"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2.5 block text-black dark:text-white">
              Miêu tả ngắn gọn dự án
            </label>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </div>

          <div className="mb-6">
            <label className="mb-2.5 block text-black dark:text-white">
              Miêu tả chi tiết dự án
            </label>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </div>

          <button className="flex justify-center w-full p-3 font-medium rounded bg-primary text-gray hover:bg-opacity-90">
            Send Message
          </button>
        </div>
      </form>
    </Drawer>
  );
};

export default FormProject;
