import * as React from "react";

// Reusable component for a section with a title and content
function Section({ title, content }) {
  return (
    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
      <div className="bg-white relative flex w-full max-w-[368px] grow flex-col mx-auto pl-4 pr-5 pt-9 pb-12 rounded-md max-md:mt-3.5">
        <div className="text-red-600 text-center text-xl font-medium tracking-wide self-center whitespace-nowrap">
          {title}
        </div>
        <div className="text-black text-xs tracking-wide self-stretch mt-6">
          {content}
        </div>
      </div>
    </div>
  );
}

function HomePageLoggedIn(props) {
  return (
    <div className="bg-white flex flex-col">
      <div className="self-center w-full max-w-[1035px] mt-28 px-5 max-md:max-w-full max-md:mt-10">
        {/* Hero Section */}
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
            {/* Hero Content */}
            <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-red-600 text-5xl font-bold leading-10 tracking-wider self-start max-md:max-w-full max-md:text-4xl max-md:leading-10">
                <span className="text-black">Your Voice Against</span>
                <span className="text-red-600">Corruption</span>
              </div>
              <div className="text-neutral-700 text-base leading-4 tracking-wide mt-10 self-start max-md:max-w-full max-md:mt-10">
                Jiseti is your platform to bring critical issues to light, hold wrongdoers accountable, and drive progress in your community.
                <br />
                <br />
                Join the movement for Transparency and Justice today!
              </div>
              <div className="text-red-600 text-base whitespace-nowrap border bg-white w-[150px] max-w-full grow mt-11 pl-8 pr-9 py-3 rounded-3xl border-solid border-red-600 self-start max-md:mt-10 max-md:px-5">
                Learn More
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/439baa74-e115-4723-b1c5-1e1c2b603b1f?apiKey=838f7cc75ad348a9be211f9b2df2f096&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/439baa74-e115-4723-b1c5-1e1c2b603b1f?apiKey=838f7cc75ad348a9be211f9b2df2f096&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/439baa74-e115-4723-b1c5-1e1c2b603b1f?apiKey=838f7cc75ad348a9be211f9b2df2f096&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/439baa74-e115-4723-b1c5-1e1c2b603b1f?apiKey=838f7cc75ad348a9be211f9b2df2f096&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/439baa74-e115-4723-b1c5-1e1c2b603b1f?apiKey=838f7cc75ad348a9be211f9b2df2f096&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/439baa74-e115-4723-b1c5-1e1c2b603b1f?apiKey=838f7cc75ad348a9be211f9b2df2f096&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/439baa74-e115-4723-b1c5-1e1c2b603b1f?apiKey=838f7cc75ad348a9be211f9b2df2f096&width=2000 2000w"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/439baa74-e115-4723-b1c5-1e1c2b603b1f?apiKey=838f7cc75ad348a9be211f9b2df2f096"
              alt="Main Image"
              width="410"
              height="auto"
              className="rounded-xl max-md:max-w-full max-md:mt-3.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageLoggedIn;