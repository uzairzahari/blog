import { ReactNode } from 'react'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

interface Props {
  cardTitle: string,
  children: ReactNode,
  cardActions?: string
}

const Card = (props: Props) => {
  return (
    <div className='card bg-zinc-100 border'>
      <figure><img src="https://plus.unsplash.com/premium_photo-1661719628394-bac7898ac7c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className='h-48 w-full object-cover object-top' alt="Shoes" /></figure>
      <div className="card-body">
        <div className="card-title text-md text-zinc-700">
          <div className="flex flex-col gap-2 w-full">
            <div className="text-xs">
              Author · Today
            </div>
            <div className='flex'>
              <h5>{ props.cardTitle }</h5>
            </div>
          </div>
        </div>
        <>{ props.children }</>
        <div
          className='
            my-2
            flex
            items-center
            gap-3
            text-sm
            text-zinc-700
            font-bold
            decoration-sky-500
            duration-300
            cursor-pointer
            hover:text-zinc-900
            hover:tracking-wider
            hover:underline
            hover:decoration-5
          '
        >
          <ArrowUpRightIcon className='shrink-0 h-3 w-3 font-bold text-sky-500' />
          Read More
        </div>
        <div className="card-actions">
          <div className="badge badge-sm badge-outline hover:badge- p-2">Uzair</div>
          <div className="badge badge-sm badge-outline p-2">Koojie</div>
        </div>
      </div>
    </div>
  )
}

export default Card