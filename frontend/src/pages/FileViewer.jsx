import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const FileViewer = () => {
  const hash = window.location.pathname.slice(1)
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [authenticated, setAuthenticated] = useState(true)
  const [files, setFiles] = useState([
    {
      name: 'File 1',
      url: 'http://link.to/file1'
    }
  ])
  

  const accessFiles = async(e) => {
    e.preventDefault()

    const payload = {
      hash: hash,
      password: password
    }

    try {
      const response = await axios.post('http://localhost:1234/access', payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      if(response.ok) {
        setAuthenticated(true)
        // setFiles(response.data.files)
      } else if(response.status === 401) {
        setErrorMsg('Invalid password')
      } else {
        
      }
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <>
      {
        authenticated ? (
          <div className='flex items-center justify-center h-screen'>
            {/* file viewer */}
            <div className="h-[500px] shadow-2xl border border-blue-500 rounded-lg table-auto p-3 w-2/5 overflow-y-auto">
              <table className='w-full'>
                <caption className="text-center text-2xl font-semibold mb-2">Files</caption>
                <tbody>
                  {
                    files.map((file, index) => {
                      return (
                        <tr key={index}>
                          <td className="border px-4 py-2">{file.name}</td>
                          <td className="border px-4 py-2 text-right">
                            <a
                              href={file.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:text-blue-700"
                            >
                              <FontAwesomeIcon icon={faDownload} />
                            </a>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className='flex items-center justify-center h-screen'>
            {/* request password */}
            <form className='border border-blue-500 px-5 py-5 w-1/3 rounded-md' onSubmit={accessFiles}>
              <input
                type='password'
                name='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                className='w-full py-3 px-3 border border-gray-500 rounded-md mb-3'
                required
              />
              {
                errorMsg.length > 0 && (
                  <p className='text-red font-bold py-2'>
                    {errorMsg}
                  </p>
                )
              }
              <input 
                type='submit'
                value='Access files'
                className='w-full bg-blue-700 hover:bg-blue-900 rounded-md text-white py-3'
              />
            </form>
          </div>
        )
      }
    </>
  )
}

export default FileViewer
