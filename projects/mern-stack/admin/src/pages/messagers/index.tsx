import Content from './components/content'
import Sidebar from './components/sidebar'

const Messagers = () => {
  return (
    <div className='grid h-full grid-cols-4'>
      <Sidebar />

      <Content />
    </div>
  )
}

export default Messagers
