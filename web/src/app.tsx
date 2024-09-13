import { Plus } from 'lucide-react'

import logo from './assets/logo-in-orbit.svg'
import letsStart from './assets/lets-start-illustration.svg'
import { Button } from './components/ui/button'

export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in-orbit" />
      <img src={letsStart} alt="in-orbit" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        You haven't set any goals yet. How about setting one right now?
      </p>

      <Button>
        <Plus className="size-4" />
        Create a goal
      </Button>

      {/* <button
        type="button"
        className="px-4 py-2.5 rounded-lg bg-violet-500 text-violet-50 flex items-center gap-2 text-sm font-medium tracking-tight hover:bg-violet-600"
      >
        <Plus className="size-4" />
        Create a goal
      </button> */}
    </div>
  )
}
