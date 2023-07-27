import Image from 'next/image'
import NavigationBar from './NavigationBar/NavgationBar.js'

export default function Home() {
  return (
    <div className="App">
      <NavgationBar />
      <BookButtons />
      <AboutUs />
    </div>
  )
}
