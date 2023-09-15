import React, { useState } from 'react';
import Modal from 'react-modal';

export default function Newsletter() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [sampleInputs, setSampleInputs] = useState([{ input: '', output: '' }]);

  const addSampleInput = () => {
    setSampleInputs([...sampleInputs, { input: '', output: '' }]);
  };

  const removeSampleInput = (index: number) => {
    setSampleInputs(sampleInputs.filter((_, i) => i !== index));
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#4C4C4C" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                    <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                    <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                    <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Want a custom prompt?</h3>
                <p className="text-gray-300 text-lg mb-6">You can now order a custom prompt for your custom use. </p>

                <button type="button" className="btn text-white bg-blue-600 hover:bg-blue-700 shadow" onClick={() => setModalIsOpen(true)}>Order for $10</button>
              <p className="text-sm text-gray-100 mt-3">Prompts are built to order and delivered within 7 days.</p>

                <Modal
  isOpen={modalIsOpen}
  onRequestClose={() => setModalIsOpen(false)}
  contentLabel="Order Form"
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
      color: 'lightsteelblue',
      background: '#f1f1f1',
      borderRadius: '4px',
      border: '1px solid #ccc',
      padding: '20px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxHeight: '90%', // Set max-height
      overflow: 'auto', // Add overflow
      WebkitOverflowScrolling: 'touch'
    }
  }}
>
                  <form className="w-full" action="/api/buy" method="POST">
                    <div className="flex flex-col items-center max-w-xs mx-auto">
                      <h1 className="text-2xl font-semibold text-gray-800">Basic Information</h1>
                      <p className="text-gray-600">We can discuss more specific details after you submit this form.</p>
                      <input type="email" className="form-input w-full appearance-none bg-white border border-gray-700 focus:border-blue-600 rounded-lg px-4 py-3 mb-2 text-black placeholder-gray-500" placeholder="Your email…" aria-label="Your email…" required name='email' maxLength={500} />
                      <textarea className="form-input w-full appearance-none bg-white border border-gray-700 focus:border-blue-600 rounded-lg px-4 py-3 mb-2 text-black placeholder-gray-500" placeholder="Prompt description…" aria-label="Prompt description…" required name='description' maxLength={500} />
                      <div id="sampleInputs">
                        {sampleInputs.map((_, i) => (
                          <div key={i} className="sampleInput">
                            <input type="text" className="form-input w-full appearance-none bg-white border border-gray-700 focus:border-blue-600 rounded-lg px-4 py-3 mb-2 text-black placeholder-gray-500" placeholder={"Sample input "+(i+1)} aria-label="Sample input…" name={'sampleInput'+(i+1)} required maxLength={500} />
                            <input type="text" className="form-input w-full appearance-none bg-white border border-gray-700 focus:border-blue-600 rounded-lg px-4 py-3 mb-2 text-black placeholder-gray-500" placeholder={"Sample output "+(i+1)} aria-label="Sample output…" name={'sampleOutput'+(i+1)} required maxLength={500} />
                            <button type="button" className="btn text-white bg-blue-600 hover:bg-blue-700 shadow mx-auto" onClick={() => removeSampleInput(i)}>Remove</button>
                          </div>
                        ))}
                        <button type="button" className="btn text-white bg-blue-600 hover:bg-blue-700 shadow mx-auto" onClick={addSampleInput}>Add Sample Input</button>
                      </div>
                      <button type="submit" className="btn text-white bg-blue-600 hover:bg-blue-700 shadow mx-auto">Submit</button>
                    </div>
                  </form>
                </Modal>
              </div>

              </div>


          </div>

        </div>
      </div>
    </section>
  )
}