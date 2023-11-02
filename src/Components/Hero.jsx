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

      <div className="flex w-[559px] flex-col px-5">
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
  );
};

export default Hero;