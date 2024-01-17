import React, { useEffect, useState }  from 'react';
import Page from '../layouts/Page/Page';
import Container from '../layouts/Container/Container';
import avatarNav from '../assets/avatarHeader.png';

import { chatData } from '../stores/chatData';
import Aside from '../components/aside/Aside';

function Chat() {
    const [data, setData] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [text, setText] = useState("");
    const [message, setMessage] = useState([]);
    const [fileAttached, setFileAttached] = useState(false);

    useEffect(()=>{
        chatData ? setData(chatData) : setData([]);
    },[]);

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setSelectedFile(file);
          setFileAttached(true); 
        }
    };

    const handleAttachFileClick = () => {
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.click();
        }
    };

    const handleTextInput = (e) => {
        setText(e.target.value);   
    }

    const handleComplitedMessage = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const newMessage = {
            name: '',
            time: currentTime,
            text: text,
            avatar: '',
            status: 'Delivered',
            file: selectedFile, 
            isResponse: true,
          };
      
          setMessage((prevMessages) => [...prevMessages, newMessage]);
      
          setText('');
          setFileAttached(false); 
        }
    };

    console.log(message)

    return (
        <Page>
             <section className='bg-secBg w-full py-14 flex flex-col xl:flex-row items-center justify-center px-5 xl:px-0'>
                <Container>
                    <div className='w-full flex flex-col-reverse xl:flex-row gap-5 xl:gap-32 items-center xl:items-start'>
                        <div className='flex flex-col w-full h-fit'>
                            <h1 className='text-white font-bold text-3xl mb-8 text-left'>Chat</h1>
                            <div className='mt-8 flex w-full flex-col rounded-xl border pt-7 bg-thrBg' style={{borderColor: '#171b21'}}>
                                {data.map((message, index) => (
                                    <div key={index} className={`chat ${message.isResponse === true ? 'chat-end flex justify-end' : 'chat-start'} flex gap-4 px-3`}>
                                        <div className={`chat ${message.isResponse === true ? 'flex flex-row-reverse' : 'flex'} gap-4`}>
                                            <div className="chat-image avatar">
                                                <div className="w-10 rounded-full mb-5">
                                                    <img src={avatarNav} alt="userAvatar" />
                                                </div>
                                            </div>
                                            <div className={`chat flex flex-col ${message.isResponse === true ? 'items-end' : 'items-start'} gap-4`}>
                                                <div className="chat-header text-white font-medium">
                                                    {message.name}
                                                    <time className="text-sm font-normal opacity-50 ml-2">{message.time}</time>
                                                </div>
                                                <div className={`chat-bubble max-w-xs ${message.isResponse === true ? 'bg-chatMsg' : 'bg-base-100'} text-white`}>
                                                    {message.text}
                                                </div>
                                                <div className="chat-footer text-sm font-normal">
                                                    {message.status}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className='bg-mainCard px-8 pb-4 pt-3 rounded-b-xl mt-10 flex items-center w-full gap-6'>
                                    {fileAttached  && (
                                            <div className="tooltip tooltip-open absolute before:bg-base-100 before:text-white attach" data-tip={'Attched ✔'} />
                                        )}
                                        <button 
                                            onClick={handleAttachFileClick}
                                            className='hover:scale-105 transition-all text-gray-400 hover:text-gray-500'
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                                            </svg>
                                        </button>
                                        <input
                                            type="file"
                                            id="fileInput"
                                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                            style={{ display: 'none' }}
                                            onChange={handleFileInputChange}
                                        />
                                    <form className='w-full'>
                                        <input 
                                            type="text" 
                                            placeholder="Write a message..." 
                                            className="input input-bordered w-full bg-white rounded-3xl text-gray-900"
                                            value={text}
                                            onChange={handleTextInput}
                                            onKeyPress={handleComplitedMessage}
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <Aside />
                    </div>
                </Container>
             </section>
        </Page>
    );
}

export default Chat;