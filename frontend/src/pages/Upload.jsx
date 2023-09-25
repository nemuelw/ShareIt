import React, {useState} from 'react'
import axios from 'axios'

const Upload = () => {
    const [uploaded, setUploaded] = useState(false)
    const [password, setPassword] = useState('')
    const [link, setLink] = useState('')

    const handleFileUpload = async(e) => {
        e.preventDefault()
        const files = document.getElementsByName('files')[0].files
        const formData = new FormData()
        for(let i=0; i < files.length; i++) {
            formData.append('files', files[i])
        }
        formData.append('password', password)

        try {
            const response = await axios.post("http://localhost:1234/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            console.log(response.data)
        } catch(err) {
            console.error(err)
        }
    }

    const copyLink = () => {
        navigator.clipboard.writeText(link)
        const copyBtn = document.getElementById('copy')
        copyBtn.innerHTML = "Copied!"
        setTimeout(() => {
            copyBtn.innerHTML = "Copy"
        }, 5000)
    }

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='border border-blue-200 rounded-md p-3 w-1/3'>
                <form onSubmit={handleFileUpload}>
                    <input 
                        type='file'
                        name='files'
                        multiple
                        className='mb-2 border border-gray-300 rounded-md w-full py-3 px-3'
                        required
                    />
                    <input 
                        type='password'
                        name='password'
                        placeholder='Password'
                        className='mb-2 border border-gray-300 rounded-md w-full py-3 px-3'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type='submit'
                        value="Upload"
                        className='w-full bg-blue-700 hover:bg-blue-900 text-white py-3 px-3 rounded-md'
                    />
                </form>
                {
                    uploaded && (
                        <div
                            className='flex items-center justify-between rounded-md text-white mt-5 px-3 py-3 bg-green-500 w-full'
                        >
                            <p
                                className='text-xl'
                            >
                                Success
                            </p>
                            <button
                                id='copy'
                                className='p-1 bg-white rounded-md shadow-2xl text-green-500'
                                onClick={copyLink}
                            >
                                Copy link
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Upload
