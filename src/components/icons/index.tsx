import React from 'react'

export const HamburgerIcon = ({
  props,
}: {
  props?: {
    svgProps?: React.SVGProps<SVGSVGElement>
    lineProps?: React.SVGProps<SVGLineElement>
  }
  iconColor?: string
  width?: number
  height?: number
}) => {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props?.svgProps}>
      <line x1="2.01597e-09" y1="1" x2="18" y2="1" stroke="#00246B" strokeWidth="2" {...props?.lineProps} />
      <line x1="2.01597e-09" y1="6" x2="18" y2="6" stroke="#00246B" strokeWidth="2" {...props?.lineProps} />
      <line x1="2.01597e-09" y1="11" x2="12" y2="11" stroke="#00246B" strokeWidth="2" {...props?.lineProps} />
    </svg>
  )
}

export const SignInIcon = ({
  props,
}: {
  props?: {
    svgProps?: React.SVGProps<SVGSVGElement>
    pathProps?: React.SVGProps<SVGPathElement>
  }
  iconColor?: string
  width?: number
  height?: number
}) => {
  return (
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props?.svgProps}>
      <path
        d="M8.16675 3.83333L7.00008 5L9.16675 7.16667H0.666748V8.83333H9.16675L7.00008 11L8.16675 12.1667L12.3334 8L8.16675 3.83333ZM15.6667 13.8333H9.00008V15.5H15.6667C16.5834 15.5 17.3334 14.75 17.3334 13.8333V2.16667C17.3334 1.25 16.5834 0.5 15.6667 0.5H9.00008V2.16667H15.6667V13.8333Z"
        fill="#00246B"
        {...props?.pathProps}
      />
    </svg>
  )
}

export const searchIcon = ({
  props,
  iconColor,
  height,
  width,
}: {
  props?: {
    svgProps?: React.SVGProps<SVGSVGElement>
    pathProps?: React.SVGProps<SVGPathElement>
  }
  iconColor?: string
  width?: number
  height?: number
}) => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props?.svgProps}>
      <g clipPath="url(#clip0_428_11302)">
        <path
          d="M16.1458 14.5833H15.3229L15.0312 14.3021C16.0521 13.1146 16.6667 11.5729 16.6667 9.89583C16.6667 6.15625 13.6354 3.125 9.89583 3.125C6.15625 3.125 3.125 6.15625 3.125 9.89583C3.125 13.6354 6.15625 16.6667 9.89583 16.6667C11.5729 16.6667 13.1146 16.0521 14.3021 15.0312L14.5833 15.3229V16.1458L19.7917 21.3438L21.3438 19.7917L16.1458 14.5833ZM9.89583 14.5833C7.30208 14.5833 5.20833 12.4896 5.20833 9.89583C5.20833 7.30208 7.30208 5.20833 9.89583 5.20833C12.4896 5.20833 14.5833 7.30208 14.5833 9.89583C14.5833 12.4896 12.4896 14.5833 9.89583 14.5833Z"
          fill="#00246B"
          {...props?.pathProps}
        />
      </g>
      <defs>
        <clipPath id="clip0_428_11302">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const PhoneIcon = ({
  props,
  iconColor,
  height,
  width,
}: {
  props?: {
    svgProps?: React.SVGProps<SVGSVGElement>
    pathProps?: React.SVGProps<SVGPathElement>
  }
  iconColor?: string
  width?: number
  height?: number
}) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props?.svgProps}>
      <g clipPath="url(#clip0_428_11304)">
        <path
          d="M5.45 4.16667C5.5 4.90833 5.625 5.63333 5.825 6.325L4.825 7.325C4.48333 6.325 4.26667 5.26667 4.19167 4.16667H5.45ZM13.6667 14.1833C14.375 14.3833 15.1 14.5083 15.8333 14.5583V15.8C14.7333 15.725 13.675 15.5083 12.6667 15.175L13.6667 14.1833ZM6.25 2.5H3.33333C2.875 2.5 2.5 2.875 2.5 3.33333C2.5 11.1583 8.84167 17.5 16.6667 17.5C17.125 17.5 17.5 17.125 17.5 16.6667V13.7583C17.5 13.3 17.125 12.925 16.6667 12.925C15.6333 12.925 14.625 12.7583 13.6917 12.45C13.6083 12.4167 13.5167 12.4083 13.4333 12.4083C13.2167 12.4083 13.0083 12.4917 12.8417 12.65L11.0083 14.4833C8.65 13.275 6.71667 11.35 5.51667 8.99167L7.35 7.15833C7.58333 6.925 7.65 6.6 7.55833 6.30833C7.25 5.375 7.08333 4.375 7.08333 3.33333C7.08333 2.875 6.70833 2.5 6.25 2.5Z"
          fill="#00246B"
          {...props?.pathProps}
        />
      </g>
      <defs>
        <clipPath id="clip0_428_11304">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const InstagramIcon = ({
  props,
  iconColor,
  height,
  width,
}: {
  props?: {
    svgProps?: React.SVGProps<SVGSVGElement>
    pathProps?: React.SVGProps<SVGPathElement>
  }
  iconColor?: string
  width?: number
  height?: number
}) => {
  return (
    <svg
      width={width ? width : 16}
      height={height ? height : 16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props?.svgProps}
    >
      <g clipPath="url(#clip0_428_11303)">
        <path
          d="M8 1.44062C10.1375 1.44062 10.3906 1.45 11.2313 1.4875C12.0125 1.52187 12.4344 1.65313 12.7156 1.7625C13.0875 1.90625 13.3563 2.08125 13.6344 2.35938C13.9156 2.64062 14.0875 2.90625 14.2313 3.27813C14.3406 3.55938 14.4719 3.98438 14.5063 4.7625C14.5438 5.60625 14.5531 5.85938 14.5531 7.99375C14.5531 10.1313 14.5438 10.3844 14.5063 11.225C14.4719 12.0063 14.3406 12.4281 14.2313 12.7094C14.0875 13.0813 13.9125 13.35 13.6344 13.6281C13.3531 13.9094 13.0875 14.0813 12.7156 14.225C12.4344 14.3344 12.0094 14.4656 11.2313 14.5C10.3875 14.5375 10.1344 14.5469 8 14.5469C5.8625 14.5469 5.60938 14.5375 4.76875 14.5C3.9875 14.4656 3.56563 14.3344 3.28438 14.225C2.9125 14.0813 2.64375 13.9063 2.36563 13.6281C2.08438 13.3469 1.9125 13.0813 1.76875 12.7094C1.65938 12.4281 1.52813 12.0031 1.49375 11.225C1.45625 10.3813 1.44688 10.1281 1.44688 7.99375C1.44688 5.85625 1.45625 5.60313 1.49375 4.7625C1.52813 3.98125 1.65938 3.55938 1.76875 3.27813C1.9125 2.90625 2.0875 2.6375 2.36563 2.35938C2.64688 2.07812 2.9125 1.90625 3.28438 1.7625C3.56563 1.65313 3.99063 1.52187 4.76875 1.4875C5.60938 1.45 5.8625 1.44062 8 1.44062ZM8 0C5.82813 0 5.55625 0.009375 4.70313 0.046875C3.85313 0.084375 3.26875 0.221875 2.7625 0.41875C2.23438 0.625 1.7875 0.896875 1.34375 1.34375C0.896875 1.7875 0.625 2.23438 0.41875 2.75938C0.221875 3.26875 0.084375 3.85 0.046875 4.7C0.009375 5.55625 0 5.82812 0 8C0 10.1719 0.009375 10.4438 0.046875 11.2969C0.084375 12.1469 0.221875 12.7313 0.41875 13.2375C0.625 13.7656 0.896875 14.2125 1.34375 14.6562C1.7875 15.1 2.23438 15.375 2.75938 15.5781C3.26875 15.775 3.85 15.9125 4.7 15.95C5.55313 15.9875 5.825 15.9969 7.99688 15.9969C10.1688 15.9969 10.4406 15.9875 11.2938 15.95C12.1438 15.9125 12.7281 15.775 13.2344 15.5781C13.7594 15.375 14.2063 15.1 14.65 14.6562C15.0938 14.2125 15.3688 13.7656 15.5719 13.2406C15.7688 12.7313 15.9063 12.15 15.9438 11.3C15.9813 10.4469 15.9906 10.175 15.9906 8.00313C15.9906 5.83125 15.9813 5.55938 15.9438 4.70625C15.9063 3.85625 15.7688 3.27188 15.5719 2.76562C15.375 2.23438 15.1031 1.7875 14.6563 1.34375C14.2125 0.9 13.7656 0.625 13.2406 0.421875C12.7313 0.225 12.15 0.0875 11.3 0.05C10.4438 0.009375 10.1719 0 8 0Z"
          fill={iconColor ? iconColor : '#00246B'}
          {...props?.pathProps}
        />
        <path
          d="M8 3.89062C5.73125 3.89062 3.89062 5.73125 3.89062 8C3.89062 10.2688 5.73125 12.1094 8 12.1094C10.2688 12.1094 12.1094 10.2688 12.1094 8C12.1094 5.73125 10.2688 3.89062 8 3.89062ZM8 10.6656C6.52813 10.6656 5.33437 9.47188 5.33437 8C5.33437 6.52813 6.52813 5.33437 8 5.33437C9.47188 5.33437 10.6656 6.52813 10.6656 8C10.6656 9.47188 9.47188 10.6656 8 10.6656Z"
          fill={iconColor ? iconColor : '#00246B'}
          {...props?.pathProps}
        />
        <path
          d="M13.2312 3.72793C13.2312 4.25918 12.8 4.68731 12.2719 4.68731C11.7406 4.68731 11.3125 4.25606 11.3125 3.72793C11.3125 3.19668 11.7438 2.76855 12.2719 2.76855C12.8 2.76855 13.2312 3.19981 13.2312 3.72793Z"
          fill={iconColor ? iconColor : '#00246B'}
          {...props?.pathProps}
        />
      </g>
      <defs>
        <clipPath id="clip0_428_11303">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const ShoppingCartIcon = ({
  props,
  iconColor,
  height,
  width,
}: {
  props?: {
    svgProps?: React.SVGProps<SVGSVGElement>
    pathProps?: React.SVGProps<SVGPathElement>
  }
  iconColor?: string
  width?: number
  height?: number
}) => {
  return (
    <svg
      width={width ? width : 20}
      height={height ? height : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props?.svgProps}
    >
      <g clipPath="url(#clip0_428_9194)">
        <path
          d="M12.9584 10.8337C13.5834 10.8337 14.1334 10.492 14.4167 9.97533L17.4 4.56699C17.7084 4.01699 17.3084 3.33366 16.675 3.33366H4.34171L3.55837 1.66699H0.833374V3.33366H2.50004L5.50004 9.65866L4.37504 11.692C3.76671 12.8087 4.56671 14.167 5.83337 14.167H15.8334V12.5003H5.83337L6.75004 10.8337H12.9584ZM5.13337 5.00033H15.2584L12.9584 9.16699H7.10837L5.13337 5.00033ZM5.83337 15.0003C4.91671 15.0003 4.17504 15.7503 4.17504 16.667C4.17504 17.5837 4.91671 18.3337 5.83337 18.3337C6.75004 18.3337 7.50004 17.5837 7.50004 16.667C7.50004 15.7503 6.75004 15.0003 5.83337 15.0003ZM14.1667 15.0003C13.25 15.0003 12.5084 15.7503 12.5084 16.667C12.5084 17.5837 13.25 18.3337 14.1667 18.3337C15.0834 18.3337 15.8334 17.5837 15.8334 16.667C15.8334 15.7503 15.0834 15.0003 14.1667 15.0003Z"
          fill={iconColor ? iconColor : '#00246B'}
          {...props?.pathProps}
        />
      </g>
      <defs>
        <clipPath id="clip0_428_9194">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const NotificationIcon = ({
  props,
  iconColor,
  height,
  width,
}: {
  props?: {
    svgProps?: React.SVGProps<SVGSVGElement>
    pathProps?: React.SVGProps<SVGPathElement>
  }
  iconColor?: string
  width?: number
  height?: number
}) => {
  return (
    <svg
      width={width ? width : 20}
      height={height ? height : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props?.svgProps}
    >
      <g clipPath="url(#clip0_428_9193)">
        <path
          d="M10 18.333C10.9167 18.333 11.6667 17.583 11.6667 16.6663H8.33337C8.33337 17.583 9.08337 18.333 10 18.333ZM15 13.333V9.16634C15 6.60801 13.6417 4.46634 11.25 3.89967V3.33301C11.25 2.64134 10.6917 2.08301 10 2.08301C9.30837 2.08301 8.75004 2.64134 8.75004 3.33301V3.89967C6.36671 4.46634 5.00004 6.59967 5.00004 9.16634V13.333L3.33337 14.9997V15.833H16.6667V14.9997L15 13.333ZM13.3334 14.1663H6.66671V9.16634C6.66671 7.09967 7.92504 5.41634 10 5.41634C12.075 5.41634 13.3334 7.09967 13.3334 9.16634V14.1663Z"
          fill={iconColor ? iconColor : '#00246B'}
          {...props?.pathProps}
        />
      </g>
      <defs>
        <clipPath id="clip0_428_9193">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const FacebookIcon = ({
  props,
  iconColor,
  height,
  width,
}: {
  props?: React.SVGProps<SVGSVGElement>
  iconColor?: string
  width?: number
  height?: number
}) => {
  return (
    <svg
      width={width ? width : 15}
      height={height ? height : 15}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_428_7386)">
        <path
          d="M7.5 0C3.3579 0 0 3.3579 0 7.5C0 11.0172 2.4216 13.9686 5.6883 14.7792V9.792H4.1418V7.5H5.6883V6.5124C5.6883 3.9597 6.8436 2.7765 9.3498 2.7765C9.825 2.7765 10.6449 2.8698 10.9803 2.9628V5.0403C10.8033 5.0217 10.4958 5.0124 10.1139 5.0124C8.8842 5.0124 8.409 5.4783 8.409 6.6894V7.5H10.8588L10.4379 9.792H8.409V14.9451C12.1227 14.4966 15.0003 11.3346 15.0003 7.5C15 3.3579 11.6421 0 7.5 0Z"
          fill={iconColor ? iconColor : '#fff'}
        />
      </g>
      <defs>
        <clipPath id="clip0_428_7386">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const WhatsappIcon = ({
  props,
  iconColor,
  height,
  width,
}: {
  props?: React.SVGProps<SVGSVGElement>
  iconColor?: string
  width?: number
  height?: number
}) => {
  return (
    <svg
      width={width ? width : 15}
      height={height ? height : 15}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 15L1.05437 11.1481C0.403749 10.0206 0.0618749 8.74248 0.0624999 7.43186C0.0643749 3.33437 3.39874 0 7.49561 0C9.48373 0.000624999 11.35 0.774998 12.7537 2.17999C14.1568 3.58499 14.9293 5.45249 14.9287 7.43873C14.9268 11.5368 11.5925 14.8712 7.49561 14.8712C6.25186 14.8706 5.02624 14.5587 3.94062 13.9662L0 15ZM4.12312 12.6206C5.17061 13.2425 6.17061 13.615 7.49311 13.6156C10.8981 13.6156 13.6718 10.8443 13.6737 7.43748C13.675 4.02374 10.9144 1.25625 7.49811 1.255C4.09062 1.255 1.31875 4.02624 1.3175 7.43248C1.31687 8.8231 1.72437 9.86435 2.40874 10.9537L1.78437 13.2337L4.12312 12.6206ZM11.24 9.2056C11.1937 9.1281 11.07 9.08185 10.8837 8.98873C10.6981 8.8956 9.78498 8.44623 9.61435 8.38435C9.44435 8.32248 9.3206 8.29123 9.19623 8.47748C9.07248 8.6631 8.71623 9.08185 8.60811 9.2056C8.49998 9.32935 8.39123 9.34498 8.20561 9.25185C8.01998 9.15873 7.42123 8.9631 6.71186 8.32998C6.15999 7.83748 5.78686 7.22936 5.67874 7.04311C5.57061 6.85748 5.66749 6.75686 5.75999 6.66436C5.84374 6.58123 5.94561 6.44748 6.03874 6.33874C6.13311 6.23124 6.16374 6.15374 6.22624 6.02936C6.28811 5.90561 6.25749 5.79686 6.21061 5.70374C6.16374 5.61124 5.79249 4.69686 5.63811 4.32499C5.48686 3.96312 5.33374 4.01187 5.21999 4.00624L4.86374 3.99999C4.73999 3.99999 4.53874 4.04624 4.36874 4.23249C4.19874 4.41874 3.71874 4.86749 3.71874 5.78186C3.71874 6.69623 4.38437 7.57936 4.47686 7.70311C4.56999 7.82686 5.78624 9.7031 7.64936 10.5075C8.09248 10.6987 8.43873 10.8131 8.70811 10.8987C9.1531 11.04 9.5581 11.02 9.8781 10.9725C10.235 10.9193 10.9769 10.5231 11.1319 10.0894C11.2869 9.65498 11.2869 9.2831 11.24 9.2056Z"
        fill={iconColor ? iconColor : '#fff'}
      />
    </svg>
  )
}

export const CloseIcon = ({
  props,
  iconColor,
  height,
  width,
}: {
  props?: {
    svgProps?: React.SVGProps<SVGSVGElement>
    pathProps?: React.SVGProps<SVGPathElement>
  }
  iconColor?: string
  width?: number
  height?: number
}) => {
  return (
    <svg
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props?.svgProps}
    >
      <g clipPath="url(#clip0_268_4111)">
        <path
          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          fill={iconColor ? iconColor : '#323232'}
          {...props?.pathProps}
        />
      </g>
      <defs>
        <clipPath id="clip0_268_4111">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const GoogleIcon = ({
  props,
}: {
  props?: {
    svgProps?: React.SVGProps<SVGSVGElement>
  }
}) => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props?.svgProps}>
      <g clipPath="url(#clip0_268_7399)">
        <path
          d="M23.9995 19.6363V28.9309H36.9158C36.3487 31.9199 34.6466 34.4509 32.094 36.1527L39.883 42.1964C44.4212 38.0075 47.0394 31.8547 47.0394 24.5456C47.0394 22.8438 46.8867 21.2073 46.603 19.6366L23.9995 19.6363Z"
          fill="#4285F4"
        />
        <path
          d="M10.5492 28.5681L8.7925 29.9128L2.57422 34.7564C6.5233 42.589 14.6172 48 23.999 48C30.4788 48 35.9115 45.8618 39.8825 42.1965L32.0934 36.1528C29.9552 37.5928 27.2279 38.4656 23.999 38.4656C17.759 38.4656 12.4574 34.2547 10.559 28.5819L10.5492 28.5681Z"
          fill="#34A853"
        />
        <path
          d="M2.57436 13.2437C0.938084 16.4726 0 20.1163 0 23.9999C0 27.8834 0.938084 31.5271 2.57436 34.7561C2.57436 34.7778 10.5599 28.5597 10.5599 28.5597C10.08 27.1197 9.79624 25.5926 9.79624 23.9996C9.79624 22.4067 10.08 20.8795 10.5599 19.4395L2.57436 13.2437Z"
          fill="#FBBC05"
        />
        <path
          d="M23.9995 9.55636C27.5341 9.55636 30.6758 10.7781 33.1849 13.1345L40.0576 6.2619C35.8903 2.37833 30.4796 0 23.9995 0C14.6177 0 6.5233 5.38908 2.57422 13.2437L10.5596 19.44C12.4576 13.7672 17.7595 9.55636 23.9995 9.55636Z"
          fill="#EA4335"
        />
      </g>
      <defs>
        <clipPath id="clip0_268_7399">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const EyeIcon = ({
  props,
  iconColor,
  height,
  width,
}: {
  props?: {
    svgProps?: React.SVGProps<SVGSVGElement>
    pathProps?: React.SVGProps<SVGPathElement>
  }
  iconColor?: string
  width?: number
  height?: number
}) => {
  return (
    <svg
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props?.svgProps}
    >
      <g clipPath="url(#clip0_268_5446)">
        <path
          d="M12 6.5C15.79 6.5 19.17 8.63 20.82 12C19.17 15.37 15.8 17.5 12 17.5C8.2 17.5 4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5ZM12 7.5C9.52 7.5 7.5 9.52 7.5 12C7.5 14.48 9.52 16.5 12 16.5C14.48 16.5 16.5 14.48 16.5 12C16.5 9.52 14.48 7.5 12 7.5Z"
          fill={iconColor ? iconColor : '#323232'}
        />
      </g>
      <defs>
        <clipPath id="clip0_268_5446">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const CheckIcon = ({
  props,
  iconColor,
  height,
  width,
}: {
  props?: {
    svgProps?: React.SVGProps<SVGSVGElement>
    pathProps?: React.SVGProps<SVGPathElement>
  }
  iconColor?: string
  width?: number
  height?: number
}) => {
  return (
    <svg
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props?.svgProps}
    >
      <g clipPath="url(#clip0_268_2487)">
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
          fill={iconColor ? iconColor : '#323232'}
          {...props?.pathProps}
        />
      </g>
      <defs>
        <clipPath id="clip0_268_2487">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const FailedIcon = ({
  props,
  iconColor,
  height,
  width,
}: {
  props?: {
    svgProps?: React.SVGProps<SVGSVGElement>
    pathProps?: React.SVGProps<SVGPathElement>
  }
  iconColor?: string
  width?: number
  height?: number
}) => {
  return (
    <svg
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props?.svgProps}
    >
      <g clipPath="url(#clip0_268_6268)">
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM7 11H17V13H7V11Z"
          fill={iconColor ? iconColor : '#323232'}
          {...props?.pathProps}
        />
      </g>
      <defs>
        <clipPath id="clip0_268_6268">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const ArrowBackIcon = ({
  props,
  iconColor,
  height,
  width,
}: {
  props?: {
    svgProps?: React.SVGProps<SVGSVGElement>
    pathProps?: React.SVGProps<SVGPathElement>
  }
  iconColor?: string
  width?: number
  height?: number
}) => {
  return (
    <svg
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props?.svgProps}
    >
      <g clipPath="url(#clip0_268_6062)">
        <path
          d="M17.51 3.87L15.73 2.1L5.83997 12L15.74 21.9L17.51 20.13L9.37997 12L17.51 3.87Z"
          fill={iconColor ? iconColor : '#323232'}
          {...props?.pathProps}
        />
      </g>
      <defs>
        <clipPath id="clip0_268_6062">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const PersonIcon = ({
  props,
  iconColor,
  height,
  width,
}: {
  props?: {
    svgProps?: React.SVGProps<SVGSVGElement>
    pathProps?: React.SVGProps<SVGPathElement>
  }
  iconColor?: string
  width?: number
  height?: number
}) => {
  return (
    <svg
      width={width ? width : 14}
      height={height ? height : 14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props?.svgProps}
    >
      <g clipPath="url(#clip0_428_7680)">
        <path
          d="M6.77776 3.88894C7.38887 3.88894 7.88887 4.38894 7.88887 5.00005C7.88887 5.61117 7.38887 6.11117 6.77776 6.11117C6.16665 6.11117 5.66665 5.61117 5.66665 5.00005C5.66665 4.38894 6.16665 3.88894 6.77776 3.88894ZM6.77776 9.4445C8.27776 9.4445 9.99998 10.1612 10.1111 10.5556H3.44442C3.5722 10.1556 5.28331 9.4445 6.77776 9.4445ZM6.77776 2.77783C5.54998 2.77783 4.55554 3.77228 4.55554 5.00005C4.55554 6.22783 5.54998 7.22228 6.77776 7.22228C8.00554 7.22228 8.99998 6.22783 8.99998 5.00005C8.99998 3.77228 8.00554 2.77783 6.77776 2.77783ZM6.77776 8.33339C5.29443 8.33339 2.33331 9.07783 2.33331 10.5556V11.6667H11.2222V10.5556C11.2222 9.07783 8.26109 8.33339 6.77776 8.33339Z"
          fill={iconColor ? iconColor : '#D9D9D9'}
          {...props?.pathProps}
        />
      </g>
      <defs>
        <clipPath id="clip0_428_7680">
          <rect width="13.3333" height="13.3333" fill="white" transform="translate(0.111084 0.555664)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const HouseIcon = ({
  props,
  iconColor,
  height,
  width,
}: {
  props?: {
    svgProps?: React.SVGProps<SVGSVGElement>
    pathProps?: React.SVGProps<SVGPathElement>
  }
  iconColor?: string
  width?: number
  height?: number
}) => {
  return (
    <svg
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props?.svgProps}
    >
      <g clipPath="url(#clip0_268_6668)">
        <path
          d="M12 3L2 12H5V20H19V12H22L12 3ZM7 18V10.19L12 5.69L17 10.19V18H7ZM14 14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14C10 12.9 12 10 12 10C12 10 14 12.9 14 14Z"
          fill={iconColor ? iconColor : '#323232'}
          {...props?.pathProps}
        />
      </g>
      <defs>
        <clipPath id="clip0_268_6668">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const DashboardIcon = ({
  props,
  iconColor,
  height,
  width,
}: {
  props?: {
    svgProps?: React.SVGProps<SVGSVGElement>
    pathProps?: React.SVGProps<SVGPathElement>
  }
  iconColor?: string
  width?: number
  height?: number
}) => {
  return (
    <svg
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props?.svgProps}
    >
      <g clipPath="url(#clip0_268_2539)">
        <path
          d="M19 5V7H15V5H19ZM9 5V11H5V5H9ZM19 13V19H15V13H19ZM9 17V19H5V17H9ZM21 3H13V9H21V3ZM11 3H3V13H11V3ZM21 11H13V21H21V11ZM11 15H3V21H11V15Z"
          fill={iconColor ? iconColor : '#323232'}
          {...props?.pathProps}
        />
      </g>
      <defs>
        <clipPath id="clip0_268_2539">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const StorefrontIcon = ({
  props,
  iconColor,
  height,
  width,
}: {
  props?: {
    svgProps?: React.SVGProps<SVGSVGElement>
    pathProps?: React.SVGProps<SVGPathElement>
  }
  iconColor?: string
  width?: number
  height?: number
}) => {
  return (
    <svg
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props?.svgProps}
    >
      <g clipPath="url(#clip0_268_6643)">
        <path
          d="M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM13 5H14.96L15.5 9.52C15.55 9.91 15.43 10.3 15.17 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5ZM8.49001 9.52L9.04001 5H11V9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52ZM4.04001 9.36L5.05001 5H7.02001L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.03001 10.21 3.94001 9.78 4.04001 9.36ZM5.00001 19V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V19H5.00001Z"
          fill={iconColor ? iconColor : '#323232'}
          {...props?.pathProps}
        />
      </g>
      <defs>
        <clipPath id="clip0_268_6643">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const TuneIcon = ({
  props,
  iconColor,
  height,
  width,
}: {
  props?: {
    svgProps?: React.SVGProps<SVGSVGElement>
    pathProps?: React.SVGProps<SVGPathElement>
  }
  iconColor?: string
  width?: number
  height?: number
}) => {
  return (
    <svg
      width={width ? width : 20}
      height={height ? height : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props?.svgProps}
    >
      <g clip-path="url(#clip0_428_6638)">
        <path
          d="M14.1667 17.5H15.8333L15.8333 12.5H14.1667L14.1667 17.5ZM4.16667 17.5H5.83333L5.83333 9.16667H4.16667L4.16667 17.5ZM17.5 9.16667H15.8333L15.8333 2.5L14.1667 2.5L14.1667 9.16667H12.5V10.8333H17.5V9.16667ZM7.5 14.1667H9.16667V17.5L10.8333 17.5V14.1667H12.5L12.5 12.5L7.5 12.5V14.1667ZM10.8333 2.5H9.16667L9.16667 10.8333H10.8333L10.8333 2.5ZM7.5 7.5V5.83333L5.83333 5.83333L5.83333 2.5H4.16667L4.16667 5.83333H2.5L2.5 7.5L7.5 7.5Z"
          fill={iconColor ? iconColor : '#D9D9D9'}
          {...props?.pathProps}
        />
      </g>
      <defs>
        <clipPath id="clip0_428_6638">
          <rect width="20" height="20" fill="white" transform="matrix(0 -1 1 0 0 20)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const InboxIcon = ({
  props,
  iconColor,
  height,
  width,
}: {
  props?: {
    svgProps?: React.SVGProps<SVGSVGElement>
    pathProps?: React.SVGProps<SVGPathElement>
  }
  iconColor?: string
  width?: number
  height?: number
}) => {
  return (
    <svg
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props?.svgProps}
    >
      <g clipPath="url(#clip0_268_4169)">
        <path
          d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V16H8.56C9.25 17.19 10.53 18 12.01 18C13.49 18 14.76 17.19 15.46 16H19V19ZM19 14H14.01C14.01 15.1 13.11 16 12.01 16C10.91 16 10.01 15.1 10.01 14H5V5H19V14Z"
          fill={iconColor ? iconColor : '#323232'}
          {...props?.pathProps}
        />
      </g>
      <defs>
        <clipPath id="clip0_268_4169">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const WeekendIcon = ({
  props,
  iconColor,
  height,
  width,
}: {
  props?: {
    svgProps?: React.SVGProps<SVGSVGElement>
    pathProps?: React.SVGProps<SVGPathElement>
  }
  iconColor?: string
  width?: number
  height?: number
}) => {
  return (
    <svg
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props?.svgProps}
    >
      <g clipPath="url(#clip0_268_4281)">
        <path
          d="M21 9V7C21 5.35 19.65 4 18 4H6C4.35 4 3 5.35 3 7V9C1.35 9 0 10.35 0 12V17C0 18.65 1.35 20 3 20H21C22.65 20 24 18.65 24 17V12C24 10.35 22.65 9 21 9ZM5 7C5 6.45 5.45 6 6 6H18C18.55 6 19 6.45 19 7V9.78C18.39 10.33 18 11.12 18 12V14H6V12C6 11.12 5.61 10.33 5 9.78V7ZM22 17C22 17.55 21.55 18 21 18H3C2.45 18 2 17.55 2 17V12C2 11.45 2.45 11 3 11C3.55 11 4 11.45 4 12V16H20V12C20 11.45 20.45 11 21 11C21.55 11 22 11.45 22 12V17Z"
          fill={iconColor ? iconColor : '#323232'}
          {...props?.pathProps}
        />
      </g>
      <defs>
        <clipPath id="clip0_268_4281">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const Eclipse = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="111" height="107" viewBox="0 0 111 107" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <ellipse cx="5.86364" cy="5.99999" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="5.86364" cy="25" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="5.86364" cy="44" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="5.86364" cy="63" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="5.86364" cy="82" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="5.86364" cy="101" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="25.5909" cy="5.99999" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="25.5909" cy="25" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="25.5909" cy="44" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="25.5909" cy="63" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="25.5909" cy="82" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="25.5909" cy="101" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="45.3182" cy="5.99999" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="45.3182" cy="25" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="45.3182" cy="44" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="45.3182" cy="63" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="45.3182" cy="82" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="45.3182" cy="101" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="65.0455" cy="5.99999" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="65.0455" cy="25" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="65.0455" cy="44" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="65.0455" cy="63" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="65.0455" cy="82" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="65.0455" cy="101" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="84.7728" cy="5.99999" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="84.7728" cy="25" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="84.7728" cy="44" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="84.7728" cy="63" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="84.7728" cy="82" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="84.7728" cy="101" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="104.5" cy="5.99999" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="104.5" cy="25" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="104.5" cy="44" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="104.5" cy="63" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="104.5" cy="82" rx="5.86364" ry="5.99999" fill="#00246B" />
      <ellipse cx="104.5" cy="101" rx="5.86364" ry="5.99999" fill="#00246B" />
    </svg>
  )
}

export const ArrowLeft = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="10.0343" cy="10.0341" r="10" transform="rotate(-179.804 10.0343 10.0341)" fill="#00246B" />
      <path
        d="M12.365 6.21717L9.00392 10.0307L12.3387 13.8671L11.304 15.0386L6.93522 10.0236L11.3383 5.03864L12.365 6.21717Z"
        fill="#F3F3F3"
      />
    </svg>
  )
}

export const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="10" cy="10" r="10" fill="#00246B" />
      <g clipPath="url(#clip0_428_7226)">
        <path
          d="M7.68262 13.825L11.0306 10L7.68262 6.175L8.71332 5L13.0993 10L8.71332 15L7.68262 13.825Z"
          fill="#F3F3F3"
        />
      </g>
      <defs>
        <clipPath id="clip0_428_7226">
          <rect width="17.5439" height="20" fill="white" transform="translate(1.40332)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const ArrowUpward = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6.01195 6.82776L6.07561 7.91355L10.3767 7.66524L5.96554 12.6258L6.78076 13.3508L11.1919 8.39016L11.4402 12.6912L12.5337 12.6271L12.1725 6.46656L6.01195 6.82776Z"
        fill="#F3F3F3"
      />
    </svg>
  )
}

export const ShoppingBagIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_428_7241)">
        <path
          d="M13.9736 4.99996H12.421C12.421 3.15829 11.0314 1.66663 9.31575 1.66663C7.60009 1.66663 6.21049 3.15829 6.21049 4.99996H4.65786C3.80391 4.99996 3.10522 5.74996 3.10522 6.66663V16.6666C3.10522 17.5833 3.80391 18.3333 4.65786 18.3333H13.9736C14.8276 18.3333 15.5263 17.5833 15.5263 16.6666V6.66663C15.5263 5.74996 14.8276 4.99996 13.9736 4.99996ZM9.31575 3.33329C10.1697 3.33329 10.8684 4.08329 10.8684 4.99996H7.76312C7.76312 4.08329 8.4618 3.33329 9.31575 3.33329ZM13.9736 16.6666H4.65786V6.66663H6.21049V8.33329C6.21049 8.79163 6.55983 9.16663 6.9868 9.16663C7.41378 9.16663 7.76312 8.79163 7.76312 8.33329V6.66663H10.8684V8.33329C10.8684 8.79163 11.2177 9.16663 11.6447 9.16663C12.0717 9.16663 12.421 8.79163 12.421 8.33329V6.66663H13.9736V16.6666Z"
          fill="#F3F3F3"
        />
      </g>
      <defs>
        <clipPath id="clip0_428_7241">
          <rect width="18.6316" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const TimerIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_428_7245)">
        <path
          d="M11.9304 0.799561H7.18042V2.38289H11.9304V0.799561ZM8.76375 11.0912H10.3471V6.34123H8.76375V11.0912ZM15.1208 5.85039L16.245 4.72623C15.9046 4.32248 15.5325 3.94248 15.1288 3.60998L14.0046 4.73414C12.7775 3.75248 11.2338 3.16664 9.55542 3.16664C5.62084 3.16664 2.43042 6.35706 2.43042 10.2916C2.43042 14.2262 5.61292 17.4166 9.55542 17.4166C13.4979 17.4166 16.6804 14.2262 16.6804 10.2916C16.6804 8.62123 16.0946 7.07748 15.1208 5.85039ZM9.55542 15.8412C6.49167 15.8412 4.01375 13.3633 4.01375 10.2996C4.01375 7.23581 6.49167 4.75789 9.55542 4.75789C12.6192 4.75789 15.0971 7.23581 15.0971 10.2996C15.0971 13.3633 12.6192 15.8412 9.55542 15.8412Z"
          fill="#F3F3F3"
        />
      </g>
      <defs>
        <clipPath id="clip0_428_7245">
          <rect width="19" height="19" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const VerifiedIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_428_7249)">
        <path
          d="M9.3157 0.833374L2.32886 4.16671V9.16671C2.32886 13.7917 5.30991 18.1167 9.3157 19.1667C13.3215 18.1167 16.3025 13.7917 16.3025 9.16671V4.16671L9.3157 0.833374ZM14.7499 9.16671C14.7499 12.9334 12.4365 16.4084 9.3157 17.4417C6.19491 16.4084 3.88149 12.9334 3.88149 9.16671V5.25004L9.3157 2.65837L14.7499 5.25004V9.16671ZM5.75241 9.65837L4.6578 10.8334L7.76307 14.1667L13.9736 7.50004L12.879 6.31671L7.76307 11.8084L5.75241 9.65837Z"
          fill="#F3F3F3"
        />
      </g>
      <defs>
        <clipPath id="clip0_428_7249">
          <rect width="18.6316" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const BookmarkBorderIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_428_7269)">
        <path
          d="M7.08325 1.25H2.91659C2.45825 1.25 2.08325 1.625 2.08325 2.08333V8.75L4.99992 7.5L7.91658 8.75V2.08333C7.91658 1.625 7.54158 1.25 7.08325 1.25ZM7.08325 7.5L4.99992 6.59167L2.91659 7.5V2.08333H7.08325V7.5Z"
          fill="#00246B"
        />
      </g>
      <defs>
        <clipPath id="clip0_428_7269">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const BookmarkIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_428_7254)">
        <path
          d="M7.08325 1.25H2.91659C2.45825 1.25 2.08325 1.625 2.08325 2.08333V8.75L4.99992 7.5L7.91658 8.75V2.08333C7.91658 1.625 7.54158 1.25 7.08325 1.25Z"
          fill="#00246B"
        />
      </g>
      <defs>
        <clipPath id="clip0_428_7254">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const StarIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_428_7264)">
        <path
          d="M5.69219 3.80829L4.88744 2.15235L4.12097 3.84399L2.10784 4.04474L3.64925 5.19813L3.21462 6.97395L4.93144 6.00081L6.67079 6.90128L6.19255 5.14086L7.70734 3.91768L5.69219 3.80829Z"
          fill="#AF7500"
        />
      </g>
      <defs>
        <clipPath id="clip0_428_7264">
          <rect
            width="6.46"
            height="6.31815"
            fill="white"
            transform="matrix(-0.847606 -0.530626 0.616323 -0.787494 5.62793 9.10254)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
