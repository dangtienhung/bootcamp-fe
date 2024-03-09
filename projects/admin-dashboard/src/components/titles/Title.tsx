import { clsxm } from '@/utils'

interface ITitleProps {
  title: string
  className?: string
}

export const Title1 = ({ title, className }: ITitleProps) => {
  // return <h1 className={clsxm(`font-medium text-[20px]`, className)}>{title}</h1>
  return <Title2 title={'add new user'} className={clsxm(`font-medium text-[20px]`, className)} />
}

export const Title2 = ({ title = 'add new user', className }: ITitleProps) => {
  return <h1 className={clsxm(`font-medium text-[20px]`, className)}>{title}</h1>
}

export const Title3 = ({ title = 'add new user', className }: ITitleProps) => {
  return <h1 className={clsxm(`font-medium text-[20px]`, className)}>{title}</h1>
}

export const Title4 = ({ title = 'add new user', className }: ITitleProps) => {
  return <h1 className={clsxm(`font-medium text-[20px]`, className)}>{title}</h1>
}
