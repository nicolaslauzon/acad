import Footer from './Footer'
import Navbar from './navbar'
import test from './bd'

function App() {
  const whenClicked = () => {
    test()
  }

  return (
    <>
      <div className="min-h-[100vh] bg-white font-Overpass text-black">
        <div id="wrapper" className="min-h-[90vh]">
          <Navbar />
          <button onClick={() => whenClicked()}>aaaaaaaaa</button>
        </div>
        <Footer class="px-[15%]"></Footer>
      </div>
    </>
  )
}

export default App
