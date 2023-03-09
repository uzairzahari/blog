import React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="footer p-10">
      <div>
        <span className="footer-title text-zinc-900">Services</span> 
        <a className="cursor-pointer text-zinc-700 duration-300 hover:font-bold">Branding</a>
        <a className="cursor-pointer text-zinc-700 duration-300 hover:font-bold">Design</a>
        <a className="cursor-pointer text-zinc-700 duration-300 hover:font-bold">Marketing</a>
        <a className="cursor-pointer text-zinc-700 duration-300 hover:font-bold">Advertisement</a>
      </div> 
      <div>
        <span className="footer-title text-zinc-900">Company</span> 
        <a className="cursor-pointer text-zinc-700 duration-300 hover:font-bold">About us</a>
        <a className="cursor-pointer text-zinc-700 duration-300 hover:font-bold">Contact</a>
        <a className="cursor-pointer text-zinc-700 duration-300 hover:font-bold">Jobs</a>
        <a className="cursor-pointer text-zinc-700 duration-300 hover:font-bold">Press kit</a>
      </div> 
      <div>
        <span className="footer-title text-zinc-900">Legal</span> 
        <a className="cursor-pointer text-zinc-700 duration-300 hover:font-bold">Terms of use</a>
        <a className="cursor-pointer text-zinc-700 duration-300 hover:font-bold">Privacy policy</a>
        <a className="cursor-pointer text-zinc-700 duration-300 hover:font-bold">Cookie policy</a>
      </div>
    </footer>
  )
}

export default Footer