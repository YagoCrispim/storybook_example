import { ButtonProps } from './Buttons.types'

export const Button = (props: ButtonProps) => {
  const { outlined = false, onClick } = props
  return (
    <div className="w-full h-full">
      <div className="flex h-full justify-center items-center">
        {outlined ? (
          <button onClick={onClick} className="p-4 border-2 border-blue-400 rounded-lg hover:bg-sky-700 hover:text-white">
            <span className="text-2xl text-blue-400 font-bold ">Button</span>
          </button>
        ) : (
          <button onClick={onClick} className="bg-blue-400 p-4 rounded-lg hover:bg-sky-700">
            <span className="text-2xl text-white font-bold">Button</span>
          </button>
        )}
      </div>
    </div>
  )
}
