import designsta from '../assets/designsta.png'

export default function Feed() {
  return (
        <main className="flex-1 border">
          <div className="tweet-container flex min-h-24">
            <div className="pp-container min-w-10 p-2">
              <img src={designsta} alt="Profile Picture" className='w-12' />
            </div>
            <div className="tw-details">
              <div className="tw-owner ">
                <div className='flex'>
                <span className='font-bold mr-2'>Designsta</span>
                <h1>@inner * 25m</h1>
                </div>
                <h1 className="tweet">Tweet Bu</h1>
              </div>
              <div className="tw-stats"></div>
            </div> 
          </div>
        </main>
        

  )
}
