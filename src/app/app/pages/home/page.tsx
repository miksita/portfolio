import Image from 'next/image';

export default function Home() {
  return (
    <div className='py-16'>
        <h1>Home</h1>
        <p className="mt-4">Ну приветик чтоли</p>
        {/* <div className=" w-screen h-96">
                  <Image
                    src="/gradient-header.png"
                    alt="My Image"
                    fill 
                    className="absolute top-0 right-0 w-24 h-24"
                  />
                </div>
                <div className=" w-screen h-96">
                  <Image
                    src="/gradient-hero.png"
                    alt="My Image"
                    fill 
                    className="absolute top-0 right-0 w-24 h-24"
                  />
                </div> */}
    </div>
  );
}
