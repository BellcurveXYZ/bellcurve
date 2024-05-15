import Navbar from './Navbar'

const Header = (props) => {
  return (
    <header className="fixed left-1/2 top-6 z-50 flex w-fit translate-x-[-50%] items-center justify-between rounded-2xl bg-zinc-700/50 px-6 py-2">
      <Navbar menuOpen={props.menuOpen} toggleMenuOpen={props.toggleMenuOpen} />
    </header>
  )
}

export default Header
