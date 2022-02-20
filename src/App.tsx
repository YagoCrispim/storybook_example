import { Main } from 'views'
import 'App.css'

export default function App() {
  return (
    <div className="w-screen h-screen bg-gray-200">
      <div className="w-full h-screen flex justify-center align-center">
        <div className="w-full flex justify-center align-center max-w-screen-xl">
          <Main />
        </div>
      </div>
    </div>
  )
}
