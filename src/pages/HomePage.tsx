import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Credentials } from '../components/Credentials'
import { Experience } from '../components/Experience'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Credentials />
      <Contact />
    </>
  )
}
