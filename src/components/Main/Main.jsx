import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context.jsx'

function Main() {

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);

  return (
      <div className= "main dark:bg-gray-900 dark:border-gray-800" >
          <div className='nav'>
              <p className='dark:text-white'>Gemini</p>
              <img src={assets.user_icon} loading='lazy'/>
          </div>

          <div className="main-container">
            
            {!showResult
            ?
              <>
                {/* top of the page */}
                <div className="greet">
                  <p><span>Hello, User.</span></p>
                  <p>How can I help you today?</p>
                </div>

                {/* main content of the page */}
                <div className="cards ">
                  <div className="card dark:bg-gray-800 dark:border-gray-700">
                    <p className='dark:text-white'>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                  </div>
                  <div className="card">
                    <p>Briefly summarize this concept: urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                  </div>
                  <div className="card">
                    <p>Brainstorm team bonding activites for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                  </div>
                  <div className="card">
                    <p>Improve the readability of the following code</p>
                    <img src={assets.code_icon} alt="" />
                  </div>
                </div>
              </>
              : <div className='result'>
                    <div className="result-title">
                      <img src={assets.user_icon} alt="" />
                      <p className='dark:text-white text-xl'>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                      <img src={assets.gemini_icon} alt="" />
                      {loading 
                      ? <div className="loader">
                          <hr />
                          <hr />
                          <hr />
                        </div>
                      : <p className='dark:text-white' dangerouslySetInnerHTML={{__html:resultData}}></p>
                      }
                    </div>
                </div>
            }
            
            

            {/* search bar of the page */}
            <div className="main-bottom">
              <div className="search-box">
                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
                <div>
                  <img src={assets.gallery_icon} alt=""/> 
                  <img src={assets.mic_icon} alt="" />
                  {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null }
                </div>
              </div>
              <p className="bottom-info dark:text-white">
                Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
              </p>
            </div>


          </div>

      </div>
  )
}

export default Main