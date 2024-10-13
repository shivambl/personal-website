import Link from './components/Link'
import Section from './components/Section'
import Paragraph from './components/Paragraph'

function App() {

  return (
    <>
      <div className='h-dvh bg-gray-200 flex p-8'>
        <div className='container bg-maroon rounded-[3rem] m-auto p-12 lg:pd-16'>

          <h1 className='text-5xl text-stone-50 mt-4 mb-16'>
            Hi! I'm Shivam.
          </h1>

          <Section>
            <Paragraph>
              I'm a software engineer currently working in <Link href='https://eightfold.ai/' isExternal>Eightfold AI</Link>
            </Paragraph>
            <Paragraph>
              Take a look at my <Link href='/resume'>resume ↓</Link> and <Link href='https://github.com/shivambl' isExternal>github</Link>
            </Paragraph>
          </Section>

          <Section>
            <Paragraph>
              Get in touch by <Link href='mailto:shivam.bansal@live.com'>email</Link> or <Link href='https://www.linkedin.com/in/shivambl' isExternal>linkedin</Link>
            </Paragraph>
          </Section>

        </div>
      </div>
    </>
  )
}

export default App
