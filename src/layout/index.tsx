import Footer from './Footer'
import Header from './Header'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <Header />
      </div>
      <main className="mt-52">{children}</main>
      <Footer />
    </>
  )
}

export default Layout