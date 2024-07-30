import React from 'react'

export const BarIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { width = 16, height = 16, className, ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      className={className}
      {...rest}
      viewBox='0 0 18 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.75 0.5625H17.25V1.9375H0.75V0.5625ZM0.75 6.0625H17.25V7.4375H0.75V6.0625ZM0.75 11.5625H17.25V12.9375H0.75V11.5625Z'
        fill='#202224'
      />
    </svg>
  )
}

export const NotificationIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { width = 16, height = 16, className, ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      className={className}
      {...rest}
      viewBox='0 0 24 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.0277 0C7.73472 0 5.80843 1.72411 5.55522 4.00306L4.5 13.5H1.5C0.671573 13.5 0 14.1716 0 15V16.5C0 17.3284 0.671573 18 1.5 18H22.5C23.3284 18 24 17.3284 24 16.5V15C24 14.1716 23.3284 13.5 22.5 13.5H19.5L18.4448 4.00306C18.1916 1.72411 16.2653 0 13.9723 0H10.0277Z'
        fill='#4880FF'
      />
      <rect opacity='0.3' x={9} y='19.5' width={6} height={6} rx='2.25' fill='#FF0000' />
    </svg>
  )
}

export const EnglishIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { width = 40, height = 27, className, ...rest } = props
  return (
    <svg
      width={40}
      height={27}
      className={className}
      {...rest}
      viewBox='0 0 40 27'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <rect width={40} height={27} fill='url(#pattern0_226_1673)' />
      <defs>
        <pattern id='pattern0_226_1673' patternContentUnits='objectBoundingBox' width={1} height={1}>
          <use xlinkHref='#image0_226_1673' transform='scale(0.0125 0.025)' />
        </pattern>
        <image
          id='image0_226_1673'
          width={80}
          height={40}
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  )
}

export const ArrowDownIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { width = 10, height = 6, className, ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      className={className}
      {...rest}
      viewBox='0 0 10 6'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.00008 3.92503L1.91256 0.837511C1.68475 0.609705 1.31541 0.609705 1.0876 0.837511C0.859797 1.06532 0.859797 1.43466 1.0876 1.66247L4.5876 5.16247C4.81541 5.39027 5.18475 5.39027 5.41256 5.16247L8.91256 1.66247C9.14037 1.43466 9.14037 1.06532 8.91256 0.837511C8.68475 0.609705 8.31541 0.609705 8.0876 0.837511L5.00008 3.92503Z'
        fill='#646464'
      />
      <mask
        id='mask0_226_1667'
        style={{ maskType: 'luminance' }}
        maskUnits='userSpaceOnUse'
        x={0}
        y={0}
        width={10}
        height={6}
      >
        <path
          d='M5.00008 3.92503L1.91256 0.837511C1.68475 0.609705 1.31541 0.609705 1.0876 0.837511C0.859797 1.06532 0.859797 1.43466 1.0876 1.66247L4.5876 5.16247C4.81541 5.39027 5.18475 5.39027 5.41256 5.16247L8.91256 1.66247C9.14037 1.43466 9.14037 1.06532 8.91256 0.837511C8.68475 0.609705 8.31541 0.609705 8.0876 0.837511L5.00008 3.92503Z'
          fill='white'
        />
      </mask>
      <g mask='url(#mask0_226_1667)' />
    </svg>
  )
}
