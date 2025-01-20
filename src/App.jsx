import Banner from "./components/Banner"
import Cards from "./components/Cards"
import Header from "./components/Header"
import Recipes from "./components/Recipes"
import Sidebar from "./components/Sidebar"


function App() {

  return (
    <>
    <Header></Header>
    <Banner></Banner>
    <Recipes></Recipes>
   {/* card section */}
   <section className="flex flex-col md:flex-row w-11/12 mx-auto">
   <Cards></Cards>
   <Sidebar></Sidebar>
   </section>
    

    </>
  )
}

export default App
