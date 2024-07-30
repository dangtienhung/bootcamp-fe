import { ArrowDownIcon, BarIcon, EnglishIcon, NotificationIcon } from '@/components/icons'
import { Button, Dropdown, MenuProps, Space } from 'antd'

import { useLanguageContext } from '@/contexts/language-context'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'English',
    icon: <EnglishIcon className='rounded-sm' />
  },
  {
    key: '2',
    label: 'Vietnamese',
    icon: <EnglishIcon className='rounded-sm' />
  }
]

interface Props {
  onToggleCollapsed: () => void
}

const Header = ({ onToggleCollapsed }: Props) => {
  const { t } = useLanguageContext()

  return (
    <div className='flex items-center justify-between w-full h-full'>
      <button onClick={onToggleCollapsed}>
        <BarIcon />
      </button>
      <div className='flex items-center h-full gap-4'>
        <NotificationIcon />

        <Dropdown menu={{ items }}>
          <Button className='border-none'>
            <Space className='flex items-center'>
              <EnglishIcon className='rounded-sm' />
              {t('title')}
              <ArrowDownIcon className='mt-1' />
            </Space>
          </Button>
        </Dropdown>
      </div>
    </div>
  )
}

export default Header
