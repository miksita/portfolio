
import Image from 'next/image';
import About from '../pages/about/page';
import Skills from '../pages/skills/page';
import Home from '../pages/home/page';
import MyServises from '../pages/myServises/page';
import Works from '../pages/works/page';
import Contacts from '../pages/contacts/page';
import BottonBorder from './components/BottonBorder';


export default function Page() {
    return (
      <>
        <Home />
        <About />
        <BottonBorder />
        <Skills />
        <BottonBorder />
        <MyServises />
        <Works />
        <BottonBorder />
        <Contacts />
        <BottonBorder />
      </>

    );
  }
  