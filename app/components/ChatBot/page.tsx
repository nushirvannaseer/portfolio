"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import ChatIcon from "@/app/assets/icons/Chat.svg";
import CloseIcon from "@/app/assets/icons/Close.svg";
import Image from "next/image";
import { askQuestion } from "@/app/Gemini/Gemini";
import { motion } from "framer-motion";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [questions, setQuestions] = useState([]) as any;
  const [answers, setAnswers] = useState([]) as any;
  const [currentQuestion, setCurrentQuestion] = useState("") as any;
  const endOfMessagesRef = useRef(null) as any;
  const [loading, setLoading] = useState(false);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRun = useCallback(() => {
    if (currentQuestion) {
      setQuestions((prev: any) => [...prev, currentQuestion]);
      setLoading(true);
      askQuestion(currentQuestion)
        .then((answer) => {
          setLoading(false);
          setAnswers((prev: any) => [...prev, answer]);
          setCurrentQuestion("");
          scrollToBottom();
        })
        .catch((e) => {
          setLoading(false);
          setAnswers((prev: any) => [...prev, e]);
          setCurrentQuestion("");
          scrollToBottom();
        });
    }
  }, [currentQuestion]);

  useEffect(() => {
    const keyHandler = (event: any) => {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default Enter key behavior
        handleRun();
      }
    };

    if (showChatbot) {
      document.addEventListener("keydown", keyHandler);
    }

    return () => {
      document.removeEventListener("keydown", keyHandler);
    };
  }, [handleRun, showChatbot]);

  useEffect(scrollToBottom, [questions, answers]);

  return (
    <>
      <div className="z-50 lg:right-[92.5%] fixed right-4 bottom-4">
        <AttentionSeeker effect="wobble">
          <Image
            onClick={() => setShowChatbot(!showChatbot)}
            height={35}
            src={ChatIcon}
            alt="ChatBot icon"
            className="mx-auto mt-5"
          />
        </AttentionSeeker>
      </div>
      {showChatbot && (
        <motion.div
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <div className="z-50 lg:right-[65%] fixed right-[2.5%] bottom-[9%] font-mono text-xs bg-black border-green-900 border-[0.5px] opacity-[100%] rounded-md h-[60vh] w-[80vw] md:h-[50vh] md:w-[40vw] lg:h-[60vh] lg:w-[30vw] overflow-hidden">
            <div className="flex flex-col z-50 h-full">
              <div className="flex flex-row justify-between bg-green-900 w-full h-10 p-5 items-center">
                <Image
                  onClick={() => setShowChatbot(!showChatbot)}
                  src={CloseIcon}
                  height={15}
                  alt="Close icon"
                />
                <span>assistant.chat</span>
              </div>
              <div className="z-50 flex flex-col h-full p-5">
                <div
                  className={`overflow-auto flex-1 text-wrap whitespace-pre-wrap ${
                    questions.length > 0 ? "" : "m-auto"
                  }`}
                >
                  {questions.length < 1 && (
                    <span className="text-yellow-500 text-center">
                      {"Have a question about me?\nYou can ask my assistant"}
                    </span>
                  )}
                  {questions.map((question: string, index: number) => (
                    <div key={index} className="text-purple-400">
                      <span>{question + ": "}</span>
                      {!answers[index] && loading && (
                        <Fade>
                          <span>Typing...</span>
                        </Fade>
                      )}
                      <span className="text-yellow-300">{answers[index]}</span>
                    </div>
                  ))}
                  <div ref={endOfMessagesRef}></div>
                </div>
                <div className="flex items-center mt-2 gap-2">
                  <span className="text-yellow-500">{"guest_user "}</span>
                  <span className="text-green-300"> {"in "}</span>
                  <span className="text-purple-500">~: </span>
                  <input
                    className="text-white bg-black w-auto flex-1 border-0 focus:outline-none caret-green-500 ml-2"
                    value={currentQuestion}
                    onChange={(e) => setCurrentQuestion(e.target.value)}
                    placeholder="Type here..."
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Chatbot;
