import React, { useState } from 'react';

const Hero = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'What is Jiseti',
      answer:
        'Jiseti is a platform designed to combat corruption in Africa by allowing citizens to report incidents and request government intervention in various issues. It empowers users to contribute to transparency and accountability.',
    },
    {
      question: 'How can I create an account on Jiseti?',
      answer: 'You can create an account by following these steps...',
    },
    {
      question: 'What are Red Flags?',
      answer: 'Red Flags are...',
    },
    {
      question: 'How do I add geolocation to my records?',
      answer: 'To add geolocation to your records...',
    },
    {
      question: 'Can I change the geolocation of a record once it\'s submitted?',
      answer: 'Changing the geolocation of a submitted record is not possible...',
    },
  ]);

  const toggleFaq = (index) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index].expanded = !faqs[index].expanded;
    setFaqs(updatedFaqs);
  };

  return (
    <div className="bg-white flex flex-col">
      <div className="self-center w-full max-w-[1035px] mt-28 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <section className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <h1 className="text-red-600 text-5xl font-bold leading-10 tracking-wider max-md:max-w-full max-md:text-4xl max-md:leading-10">
                <span className="text-black"> Your Voice Against <br /></span>
                <span className="text-red-600">Corruption</span>
              </h1>
              <p className="text-neutral-700 text-base leading-4 tracking-wide mt-10 max-md:max-w-full max-md:mt-10">
                Jiseti is your platform to bring critical issues to light, hold wrongdoers accountable, and drive progress in your community.
                <br /><br />
                Join the movement for Transparency and Justice today!
              </p>
              <a href="#" className="border bg-white flex w-[150px] max-w-full grow flex-col mt-11 px-5 py-3 rounded-3xl border-solid border-red-600 self-start max-md:mt-10">
                <div className="text-red-600 text-base self-center whitespace-nowrap"> Learn More </div>
              </a>
            </div>
          </section>
          <section className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd768b40-584d-46d4-9f91-e1fdab5918c3?apiKey=838f7cc75ad348a9be211f9b2df2f096&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd768b40-584d-46d4-9f91-e1fdab5918c3?apiKey=838f7cc75ad348a9be211f9b2df2f096&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd768b40-584d-46d4-9f91-e1fdab5918c3?apiKey=838f7cc75ad348a9be211f9b2df2f096&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd768b40-584d-46d4-9f91-e1fdab5918c3?apiKey=838f7cc75ad348a9be211f9b2df2f096&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd768b40-584d-46d4-9f91-e1fdab5918c3?apiKey=838f7cc75ad348a9be211f9b2df2f096&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd768b40-584d-46d4-9f91-e1fdab5918c3?apiKey=838f7cc75ad348a9be211f9b2df2f096&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd768b40-584d-46d4-9f91-e1fdab5918c3?apiKey=838f7cc75ad348a9be211f9b2df2f096&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd768b40-584d-46d4-9f91-e1fdab5918c3?apiKey=838f7cc75ad348a9be211f9b2df2f096&"
              className="aspect-[1.02] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </section>
        </div>
      </div>
      <div className="flex-col overflow-hidden relative flex min-h-[476px] px-5">
  <img
    loading="lazy"
    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a4b4d818-112e-4520-a1a3-ecc4b1becf11?apiKey=838f7cc75ad348a9be211f9b2df2f096&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4b4d818-112e-4520-a1a3-ecc4b1becf11?apiKey=838f7cc75ad348a9be211f9b2df2f096&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4b4d818-112e-4520-a1a3-ecc4b1becf11?apiKey=838f7cc75ad348a9be211f9b2df2f096&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4b4d818-112e-4520-a1a3-ecc4b1becf11?apiKey=838f7cc75ad348a9be211f9b2df2f096&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4b4d818-112e-4520-a1a3-ecc4b1becf11?apiKey=838f7cc75ad348a9be211f9b2df2f096&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4b4d818-112e-4520-a1a3-ecc4b1becf11?apiKey=838f7cc75ad348a9be211f9b2df2f096&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4b4d818-112e-4520-a1a3-ecc4b1becf11?apiKey=838f7cc75ad348a9be211f9b2df2f096&width=2000 2000w"
    className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
  />
  <section className="relative text-zinc-300 text-xl font-semibold tracking-wide self-center whitespace-nowrap mt-20 max-md:mt-10" aria-label="About Us">
    ABOUT US
  </section>
  <div className="relative self-center w-full max-w-[1131px] mt-20 mb-24 max-md:max-w-full max-md:my-10">
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
        <div className="bg-white relative flex w-full grow flex-col flex-1 mx-auto pl-4 pr-5 pt-9 pb-12 rounded-md max-md:mt-3.5">
          <h2 className="text-red-600 text-center text-xl font-medium tracking-wide self-center whitespace-nowrap" aria-label="Who Are We?">
            Who Are We?
          </h2>
          <p className="text-black text-xs tracking-wide max-w-[339px] self-stretch mt-6">
            We are a passionate team committed to creating positive <br /> change in Africa by fighting corruption and promoting <br /> transparent, accountable governance. <br />
          </p>
        </div>
      </div>
      <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
        <div className="bg-white relative flex w-full grow flex-col flex-1 mx-auto pt-8 pb-12 px-5 rounded-md max-md:mt-3.5">
          <h2 className="text-red-600 text-center text-xl font-medium tracking-wide self-center whitespace-nowrap" aria-label="Our Mission">
            Our Mission
          </h2>
          <p className="text-black text-xs tracking-wide max-w-[315px] ml-3.5 mt-8 self-start max-md:ml-2.5">
            Empowering Africans to combat corruption and drive <br /> meaningful development through transparency <br /> and accountability.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
        <div className="bg-white relative flex w-full grow flex-col flex-1 mx-auto pl-5 pr-3 pt-8 pb-12 rounded-md max-md:mt-3.5">
          <h2 className="text-red-600 text-center text-xl font-medium tracking-wide self-center whitespace-nowrap" aria-label="Our Vision">
            Our Vision
          </h2>
          <p className="text-black text-xs tracking-wide max-w-[335px] self-stretch mt-8 max-md:ml-1.5">
            We envision a corruption-free Africa where communities <br /> flourish, and governments respond to the needs of <br /> their citizens with integrity.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="px-5">
  <section className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
    <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
      <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
        <div className="flex w-[367px] max-w-full flex-col self-end">
          <h1 className="text-stone-600 text-3xl font-bold tracking-wide">Have any Questions?</h1>
          <p className="text-black text-base tracking-wide mt-8 self-start">If you have inquiries for the Jiseti team or an <br /> interest in joining our mission to combat <br /> corruption in Africa, don't hesitate to get in touch!</p>
          <a href="#" className="border bg-white flex w-[157px] max-w-full grow flex-col ml-5 mt-7 px-5 py-3 rounded-3xl border-solid border-red-600 self-start max-md:ml-2.5">
            <span className="text-red-600 text-base self-center whitespace-nowrap">Contact Us</span>
          </a>
        </div>
        <img
  loading="lazy"
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/38240ec9-0775-43e0-b393-2f3f7e3913af?apiKey=838f7cc75ad348a9be211f9b2df2f096"
  width="90" 
  height="50"
  className="aspect-[2.1] object-contain object-center w-full overflow-hidden grow mt-5 flex justify-center items-center py-12 pl-20 max-md:max-w-full max-md:mt-5"
  />
      </div>
    </div>
    <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
      <div className="flex flex-col w-[559px] max-md:max-w-full max-md:mt-10">
        <h2 className="text-stone-600 text-3xl font-semibold tracking-wider self-center whitespace-nowrap">FAQs</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <section className="bg-stone-300 self-stretch flex w-full items-start justify-between gap-5 mt-8 pl-1 pr-8 py-5 rounded-md max-md:flex-wrap">
              <div className="text-neutral-700 text-opacity-80 text-base tracking-wide max-w-[501px] grow shrink-0 basis-auto self-start">
                <ul>
                  <li
                    onClick={() => toggleFaq(index)}
                    className="faq-question cursor-pointer"
                  >
                    {faq.question}
                  </li>
                  {faq.expanded && (
                    <div className="faq-answer text-stone-600 text-sm tracking-wide bg-white self-stretch pl-2 pr-3 py-5 max-md:max-w-full">
                      {faq.answer}
                    </div>
                  )}
                </ul>
              </div>
              <img
                loading="lazy"
                src={faq.imageUrl}
                className="aspect-[0.92] object-contain object-center w-[23px] overflow-hidden max-w-full self-start"
              />
            </section>
          </div>
        ))}
      </div>
    </div>
  </section>
</div>
</div>
  );
};

export default Hero;