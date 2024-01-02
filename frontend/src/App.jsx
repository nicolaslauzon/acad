import Footer from './Footer'
import Navbar from './Navbar'

function App() {
  return (
    <>
      <div className="min-h-[100vh] bg-white font-Overpass text-black">
        <div id="wrapper" className="min-h-[90vh]">
          <Navbar />
        </div>
        <Footer class="px-[15%]"></Footer>
      </div>
    </>
  )
}

export default App
