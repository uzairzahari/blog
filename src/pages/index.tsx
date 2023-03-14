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
      <div className="hero min-h-min py-10">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl text-zinc-800 font-bold">
              Hey, we are <span className="animate-pulse">Brow.</span> See our thoughts, stories and ideas.
            </h1>
            <p className="text-zinc-600 py-6">
            Brow represents a group of individuals who are known for their
            insightful thoughts, captivating stories, and innovative ideas.
            They are visionaries who constantly push the boundaries of what
            is possible and inspire others to do the same.
            </p>
          </div>
        </div>
      </div>
      <div className="text-zinc-600 text-center mb-5 font-semibold">
        All Blog Posts
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 nd:grid-cols-3 xl:grid-cols-4 gap-5'>
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
      <div className="flex justify-end">
        <div className="mt-10 btn-group">
          <button className="btn btn-sm btn-outline">«</button>
          <button className="btn btn-sm btn-outline">22</button>
          <button className="btn btn-sm btn-outline">»</button>
        </div>
      </div>
    </Default>
  )
}

export default App
