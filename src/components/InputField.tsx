import React, {useRef} from 'react'
import './styles.css'

interface Props {
  todo:string,
  setTodo:React.Dispatch<React.SetStateAction<string>>,
  handleAdd: (e:React.FormEvent) => void
}

const InputField:React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='input' onSubmit={(e) => {
      handleAdd(e);
      inputRef.current?.blur();
    }}>
      <input 
        ref={inputRef}
        type='input' 
        placeholder='Enter the name of your task...' 
        className='inputBox' 
        value={todo}
        onChange={
          (e) => setTodo(e.target.value)
        }
      ></input>
      <button className='inputSubmit' type='submit'>Go</button>
    </form>
  )
}

export default InputField