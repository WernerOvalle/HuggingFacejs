'use client'
import { useEffect, useState } from 'react';
import { HfInference } from '@huggingface/inference';

export default function Home() {
  const [text, setText] = useState('');

  useEffect(() => {
    const generateText = async () => {
      const hf = new HfInference('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');
      const response = await hf.textToImage({
        inputs: 'perica australiana color azul',
        model: 'stabilityai/stable-diffusion-2',
        parameters: {
          negative_prompt: 'blurry',
        }
      });
   
        
      setText(URL.createObjectURL(response));
     
     
    };

    generateText();
  }, []);

  return (
    <div>
      {text && <img src={text} alt="" />}
  
    </div>
  );
}