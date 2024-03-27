"use client";
import { useState } from "react";
import { HfInference } from "@huggingface/inference";

export default function Home() {
  const [text, setText] = useState("");
  const [input, setInput] = useState("");

  const generateText = async () => {
    const hf = new HfInference("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");
    const response = await hf.textGeneration({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      inputs: input,
    });
    setText(response.generated_text);
  };

return (
    <>
        <div className="flex justify-center items-center mt-10">
            <h1 className="text-5xl animate-bounce font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                Text Generation
            </h1>
        </div>
        <div className="flex justify-center items-center mt-10">
            <div className="flex justify-center ">
                <input
                    type="text"
                    className="bg-blue-100 border border-blue-500 rounded py-2 px-4 text-black"
                    placeholder="Add Prompt Here"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={generateText}
                >
                    Generate Text
                </button>
            </div>
        </div>
        <div className="flex justify-center items-center mt-10">
            <p className="mx-10 font-bold ">{text}</p>
        </div>
    </>
);
}
