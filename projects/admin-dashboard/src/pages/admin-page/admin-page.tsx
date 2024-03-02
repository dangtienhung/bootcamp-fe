import { Button, PenIcon, PlusIcon, Status, Title, TrashIcon } from '@/components'
import { deleteUser, getUsers } from '@/apis'
import { useEffect, useState } from 'react'

import { IUser } from '@/types'
import Swal from 'sweetalert2'
import { clsxm } from '@/utils'
import { toast } from 'react-toastify'

const AdminPage = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUsers()
        if (response.status === 200) {
          const data = response.data
          setUsers(data)
        }
      } catch (error) {
        toast.error('Get users failed')
      }
    }
    fetchData()
  }, [])

  const handleDelete = async (id: number) => {
    // Swal.fire({
    //   title: 'Confirm Delete',
    //   text: 'Are you sure you want to delete Admin permanently. You can’t undo this action.!',
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'DELETE!'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     deleteUser(id)
    //       .then(() => {
    //         Swal.fire({
    //           title: 'Deleted!',
    //           text: 'Your file has been deleted.',
    //           icon: 'success'
    //         })
    //         const newUsers = users.filter((user) => user.id !== id)
    //         setUsers(newUsers)
    //       })
    //       .catch(() => {
    //         Swal.fire({
    //           title: 'Error!',
    //           text: 'Delete user failed',
    //           icon: 'error'
    //         })
    //       })
    //   }
    // })
    try {
      const result = await Swal.fire({
        title: 'Confirm Delete',
        text: 'Are you sure you want to delete Admin permanently. You can’t undo this action.!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'DELETE!'
      })
      if (result.isConfirmed) {
        await deleteUser(id)
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success'
        })
        const newUsers = users.filter((user) => user.id !== id)
        setUsers(newUsers)
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Delete user failed',
        icon: 'error'
      })
    }
  }

  return (
    <div className='w-full h-full'>
      <div className='flex gap-3'>
        <Title title='Users' />
        <Button href='/admin/add-user' className='px-10 text-white w-fit bg-gray-l10' icon={<PlusIcon />}>
          Add New
        </Button>
      </div>

      <div className='grid grid-cols-13 mt-[14px] p-[3px] bg-gray-l1 flex-shrink rounded-[10px] border boder-[#5f5f5f]'>
        {['ID', 'Username', 'Email', 'Phone', 'Status', 'Created Date', 'Updated Date', 'Modify'].map((item) => (
          <div
            key={item}
            className={clsxm(
              `flex items-center justify-center p-2.5 text-xs font-semibold uppercase`,
              { 'col-span-2': item !== 'ID' },
              { 'col-span-1': item === 'ID' || item === 'Modify' || item === 'Status' },
              { 'border-r-gray-l9  border-r': item !== 'Modify' }
            )}
          >
            {item}
          </div>
        ))}
      </div>

      {users && users.length === 0 && <div className='mt-5 text-center'>No data</div>}

      {users &&
        users.length > 0 &&
        users.map((user, index) => (
          <div
            key={user.id}
            className='grid py-[5px] px-[3px] grid-cols-13 mt-[14px] gap-y-2.5 p-[3px] flex-shrink border-b'
          >
            <div className={clsxm('col-span-1 text-center border-r')}>{index + 1}</div>
            <div title='User1 asdfasdfkjlasdflasdkl' className={clsxm('col-span-2 text-left border-r truncate')}>
              {user.name}
            </div>
            <div className={clsxm('col-span-2 text-left border-r truncate px-4')}>{user.email}</div>
            <div className={clsxm('col-span-2 text-left border-r px-4')}>{user.mobileNumber}</div>
            <div className={clsxm('col-span-1 text-center border-r px-2')}>
              <Status
                className={clsxm(
                  'border w-full p-2.5 rounded-lg',
                  { 'border-blue-l1 text-blue-l1': user.status === true }, // status
                  { 'border-red text-red': user.status === false } // !status
                )}
                status={user.status ? 'Active' : 'InActive'}
              />
            </div>
            <div className={clsxm('col-span-2 text-center border-r')}>{user.created_at}</div>
            <div className={clsxm('col-span-2 text-center border-r')}>{user.updated_at}</div>
            <div className={clsxm('col-span-1 text-center flex items-center gap-2')}>
              <Button className='px-2 bg-gray-200 w-fit'>
                <PenIcon />
              </Button>
              <Button className='px-2 bg-gray-200 w-fit' onClick={() => handleDelete(user.id)}>
                <TrashIcon />
              </Button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default AdminPage
