import { Outlet } from 'react-router-dom'

export const LayoutDemo = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  )
}

const HeaderComponent = () => {
  return <div>Header</div>
}

const FooterComponent = () => {
  return <div>FooterComponent</div>
}

export const AhihiComponent = () => {
  return <div>AhihiComponent</div>
}

export const Ahehehe = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi velit unde nulla nobis, atque quasi eum in? Impedit,
      placeat commodi?
    </div>
  )
}
