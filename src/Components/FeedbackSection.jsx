import React from 'react';

const feedbackPoints = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5eba08426d551374c6836fa85f5d52cdfa8e89f8ca62f263a413a389640c705?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde",
    title: "Improve our services",
    description: "Identify areas of improvement and new functionalities."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5eba08426d551374c6836fa85f5d52cdfa8e89f8ca62f263a413a389640c705?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde",
    title: "Personalize the experience",
    description: "Adapt the application to your needs and preferences."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/07ea247ce785f2860c0b81406a276263266235a3d2a1832089d56b4f38bb29b5?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde",
    title: "Continuously innovate",
    description: "Develop innovative solutions based on your feedback."
  }
];

function FeedbackSection() {
    return (
        <section className="rounded-[30px] px-4">
          <div className="flex gap-5 flex-wrap md:flex-nowrap">
            <div className="flex flex-col w-full md:w-6/12">
              <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0942c1f77e15c216c62efb68a78f17c3d1e1b3e650ea1d4a4e7cfe30990f773?placeholderIfAbsent=true&apiKey=c1946530cef5422ab7dda9568063bfde" 
                alt="Feedback illustration" 
                className="object-contain grow w-full rounded-2xl aspect-[1.05] max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-0 md:ml-5 w-full md:w-6/12">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                <header className="flex flex-col w-full">
                  <h1 className="text-4xl md:text-6xl font-semibold text-sky-600 capitalize leading-[51px] md:leading-[74px]">
                    <span className="font-medium">Your opinion is </span>
                    <br />
                    <span className="font-medium text-sky-600">important</span>{" "}
                    <span className="font-medium text-sky-600">to us!</span>
                  </h1>
                  <p className="mt-6 md:mt-10 text-base md:text-lg tracking-normal leading-6 md:leading-8 text-neutral-600">
                    At Giddy Up, we value feedback from our users and visitors. We'd love to hear from you about our app and how we can improve to give you a better experience. We invite you to participate in our questionnaire and share your thoughts and suggestions.
                  </p>
                </header>
                <div className="flex flex-col mt-10 md:mt-20 capitalize w-full">
                  <h2 className="text-2xl md:text-3xl font-medium text-sky-600">
                    Your collaboration will{" "}
                    <span className="text-sky-600">help us</span>:
                  </h2>
                  <ul className="flex flex-col mt-6 md:mt-10 w-full text-xl md:text-2xl leading-8 md:leading-10 text-neutral-700">
                    {feedbackPoints.map((point, index) => (
                      <li key={index} className="flex flex-wrap gap-3 mt-6 md:mt-9 first:mt-0">
                        <img 
                          loading="lazy" 
                          src={point.icon} 
                          alt="" 
                          className="object-contain shrink-0 w-6 md:w-8 aspect-square"
                        />
                        <div className="flex-auto underline">
                          <span className="underline">{point.title}</span>{" "}:{" "}
                          <span className="font-medium">{point.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
         
}

export default FeedbackSection;
