import {Header} from './components/Header';
import { Post } from './Post';

import './global.css';


export function App() {
  return (
    <div>
      <Header />
    <Post  
    author="Sergio Rosa" 
    content="Lorem ipsum dolor sit amet consectetur adipisicing elit.Itaque officia ea at ratione nemo explicabo distinctio.
    Cum illo asperiores, impedit dolor ea animi optio corrupti ullam soluta ab est totam!"
    />


    <Post  
      author="Joe Mike" 
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
    />
    
    </div>
  )
}


