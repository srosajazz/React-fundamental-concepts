import {Header} from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css';
import './global.css';



export function App() {
  return (
    <div>
      <Header />
   <div className={styles.wrapper}>
    <Sidebar />
    <main>
    <Post  
    author="Sergio Rosa" 
    content="Lorem ipsum dolor sit amet consectetur adipisicing elit.Itaque officia ea at ratione nemo explicabo distinctio.
    Cum illo asperiores, impedit dolor ea animi optio corrupti ullam soluta ab est totam!"
    />


    <Post  
      author="Joe Mike" 
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
    />
    </main>
   </div>
    
    </div>
  )
}


