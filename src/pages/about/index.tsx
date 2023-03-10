import { useState } from 'react'
import Default from '../../layouts/default'

function About() {
  return (
    <Default>
      <div className="flex flex-col gap-6">
        <div className='block md:flex gap-10'>
          <div className='min-w-fit font-black text-zinc-900 animate-pulse'>About Us</div>
          <div className='text-zinc-500 text-xl flex flex-col gap-6'>
            <p>Welcome to Brow! Our blog web application provides a place for you to share your thoughts, stories, and ideas with the world. We're a community of creative, passionate people who believe in the power of self-expression.</p>
            <p>We know that everyone has a unique perspective, and we want to give you a space to share yours. Whether you're an experienced writer or just starting out, Brow makes it easy to create and publish content that reflects your personal style.</p>
          </div>
        </div>
        <div className="block md:flex gap-10">
          <div className="text-zinc-500 text-xl flex flex-col gap-6">
            <p>Our user-friendly interface means you don't need to be a tech genius to use our platform. We've designed everything with simplicity and ease-of-use in mind, so you can focus on creating content that truly resonates with your audience.</p>
            <p>At Brow, we believe in the importance of community. By joining our platform, you'll be part of a supportive network of individuals who share your interests and values. We encourage you to connect with other users, share feedback, and inspire one another to achieve your goals.</p>
            <p>Ultimately, our goal at Brow is to provide a platform for people to create something meaningful. Whether you're writing about a personal experience, advocating for a cause, or sharing an idea that could change the world, we're here to support you every step of the way.</p>
            <p>So why not join us today and start creating something extraordinary? We can't wait to see what you come up with!</p>
          </div>
          <img className='hidden md:block max-w-lg object-cover' src="https://media.istockphoto.com/id/483396505/photo/unpleasant-meeting.jpg?s=612x612&w=0&k=20&c=1qzUEvNrGgQF2xeTvN1WTf_9yUekA1S5t1YdwxN3uRY=" />
        </div>
      </div>
    </Default>
  )
}

export default About
