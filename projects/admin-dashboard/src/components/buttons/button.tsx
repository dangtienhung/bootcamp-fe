import { EButtonVariant } from '@/types'
import { Link } from 'react-router-dom'
import { clsxm } from '@/utils'

interface IButtonProps {
  children: React.ReactNode
  className?: string
  variant?: EButtonVariant
  icon?: React.ReactNode
  href?: string
}

export const Button = ({ children, className, variant, icon, href }: IButtonProps) => {
  console.log('🚀 ~ Button ~ icon:', icon)
  if (href) {
    return (
      <Link
        to={href}
        className={clsxm(
          `w-full py-3 font-semibold rounded-md`,
          { 'bg-gray': variant === EButtonVariant.SECONDARY },
          { 'bg-red text-white': variant === EButtonVariant.PRIMARY },
          { 'flex items-center gap-2 justify-center': icon },
          { 'flex items-center justify-center': href },
          className
        )}
      >
        {icon ? icon : undefined} {children}
      </Link>
    )
  }

  return (
    <button
      className={clsxm(
        `w-full py-3 font-semibold rounded-md`,
        { 'bg-gray': variant === EButtonVariant.SECONDARY },
        { 'bg-red text-white': variant === EButtonVariant.PRIMARY },
        { 'flex items-center gap-2 justify-center': icon },
        className
      )}
    >
      {icon && icon} {children}
    </button>
  )
}
