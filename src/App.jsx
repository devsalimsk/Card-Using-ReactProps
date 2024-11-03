import './App.css'
import UserCard from './components/UserCard'

import tiger from './assets/tiger.jpeg'
import cat from './assets/cat.jpg'
import eagle from './assets/eagle.jpg'


function App() {

  return (
    <div className='container'>
      <UserCard name='Royal Bengal Tiger' desc='The History of Royal Bengal Tiger' image= {tiger} />
      <UserCard name='Pussy Cat' desc='All about the Cat' image={cat}/>
      <UserCard name='The Eagle' desc='All about the Eagle' image={eagle}/>
    </div>
  )
}

export default App
