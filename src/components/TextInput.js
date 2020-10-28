import React from 'react'
import {
    useRecoilState
} from 'recoil';
import {textState} from '../store/atoms'


const TextInput = () =>  {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div className="flex flex-col py-10 max-w-lg">
           <input className="shadow appearance-none border rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" value={text} type="text" onChange={onChange} />
           <p className="text-center font-bold py-5">ECHO</p>
            <p className="break-words">{text}</p>
      </div>
    );
}

export default TextInput
