import _ from 'lodash'
import Default from '../layouts/default'
import Card from '../components/wrapper/card'

interface Blog {
  title: string,
  content: string,
  tag?: Array<string>
}

const TruncateContent = ({title, content}: Blog) => {
  const text = _.truncate(content, { length: 115, omission: '...' })
  return <span>{text}</span>
}

function App() {
  const blogs: Blog[] = [
    { title: 'Uzair', content: 'Uzair hensem' },
    {
      title: 'Badge — Tailwind CSS Components',
      content: `
        Maybe you have noticed that it’s not reusable as
        it explicitly defines Item type. We can do better,
        let’s use TypeScript Generics so the list is not
        coupled to the concrete Item interface
      `
    },
    { title: 'Ramas', content: 'Ramas goated' }
  ]
  return (
    <Default>
      <div className='grid grid-cols-3 gap-5'>
        {
          blogs.map((blog) => {
            return (
              <Card cardTitle={ blog.title } key={blog.title}>
                <div className="text-zinc-500 text-sm">
                  <TruncateContent title={blog.title} content={blog.content} />
                </div>
              </Card>
            )
          })
        }
      </div>
    </Default>
  )
}

export default App
