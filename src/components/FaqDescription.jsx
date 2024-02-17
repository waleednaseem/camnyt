import React from "react";
import fireIcon from "@/images/fireIcon.png"
import Image from 'next/image';
import Navbar from "./Navbar";
import Footer from "./Footer";

const faqData = [
  {
    question: "How do I begin viewing webcams?",
    answer: `To start viewing random people on webcam, simply press on "Allow" and then press on the large "Start" button.`,
  },
  {
    question: "Can I filter the people that I see?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar.",
  },
  {
    question: "How do I talk to strangers I meet?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar.",
  },
  {
    question:
      " I don't like the person I'm talking to - how do I meet someone new?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar.",
  },
  {
    question: "Can I stop seeing webcams without exiting the website?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar.",
  },
  {
    question: "What is your realtor sale commission?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar.",
  },
];

const FaqDescription = () => {
  return (
    <div>
      <Navbar/>
    <div className=" w-full font-inter max-w-screen-4xl bg-white">
      <div className="bg-gradient-to-tr from-[#F9E7EF] to-[#DFF1FE] w-full max-w-screen-5xl h-[55vh] flex justify-center items-center">
                <div>
                    <h1 className="text-5xl font-bold text-[#262626]">Video Chat FAQ</h1>
                    <p className="text-base font-semibold flex justify-center items-center my-5 text-[#262626]">Home / FAQ</p>
                </div>
            </div>

      <div className="max-w-[900px] mx-auto w-full  ">
        <div className="mt-10">
          <Image src={fireIcon} alt="fireicon" className="mx-auto " />
          <h2 className="text-3xl font-bold text-center my-2">
            Frequently asked questions
          </h2>
        </div>
        <p className="text-center">Whats happening around the World.</p>

        <div className="container mx-auto px-4 py-10 max-w-[750px] w-full ">

          <div className="divide-y p-4 my-10 divide-gray-100 rounded-xl  bg-white border-x-[#FF5887] border-y-[#1CA5FC]">
            {faqData.map((faq, index) => (
              <details
                key={index}
                className="!border-x-[#FF5887] !border-y-[#1CA5FC] my-4 group p-6 [&_summary::-webkit-details-marker]:hidden rounded-lg !border-2 !border-pink-500 !border-opacity-60 "
                open
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                  <h2 className="text-lg font-medium">{faq.question}</h2>

                  <span className="relative h-5 w-5 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 text-pink-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>


          <h2 className="font-bold text-3xl text-black">Common Issues</h2>
          <div className="divide-y my-10 mt-2 divide-gray-100 bg-white">
            <details
              className="group rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden !border-2 !border-pink-500 !border-opacity-60 !border-x-[#FF5887] !border-y-[#1CA5FC]"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-lg font-medium">
                  It says I'm from a different country.
                </h2>

                <span className="relative h-5 w-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                CamSurf determines your country according to your IP. The most
                common reason for your country being wrong is that you are using
                a proxy or you are using an IP that is based in a different
                country. If you are not using a proxy, please contact our
                support team for additional assistance.
              </p>
            </details>
          </div>

          <h2 className="font-bold text-3xl text-black">Webcam FAQs</h2>
          <div className="divide-y my-10 mt-2 divide-gray-100 bg-white" >
            <details
              className="group rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden !border-2 !border-pink-500 !border-opacity-60 !border-x-[#FF5887] !border-y-[#1CA5FC]"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-lg font-medium">
                  CamSurf isn't detecting my webcam.
                </h2>

                <span className="relative h-5 w-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                CamSurf determines your country according to your IP. The most
                common reason for your country being wrong is that you are using
                a proxy or you are using an IP that is based in a different
                country. If you are not using a proxy, please contact our
                support team for additional assistance.
              </p>
            </details>

            <details
              className="group rounded-lg my-4 p-6 [&_summary::-webkit-details-marker]:hidden !border-2 !border-pink-500 !border-opacity-60 !border-x-[#FF5887] !border-y-[#1CA5FC]"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-lg font-medium">
                  My webcam seems to be working fine, but others cannot see me
                </h2>

                <span className="relative h-5 w-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                CamSurf determines your country according to your IP. The most
                common reason for your country being wrong is that you are using
                a proxy or you are using an IP that is based in a different
                country. If you are not using a proxy, please contact our
                support team for additional assistance.
              </p>
            </details>
          </div>

          <h2 className="font-bold text-3xl text-black py-3">
            Terms and Community Guideline FAQ
          </h2>
          <p className="py-2">
            Below are some common questions regarding how CamSurf exercises
            their discretion to ban or suspend users for violating our Terms of
            Use, and how the examples given in our Community Guidelines are used
            to alert us that such a violation is threatened or imminent.
          </p>
          <div className="divide-y my-10 mt-2 divide-gray-100   bg-white">
            <details
              className="group p-6 [&_summary::-webkit-details-marker]:hidden rounded-lg border-2 !border-pink-500 !border-opacity-60 !border-x-[#FF5887] !border-y-[#1CA5FC]"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-lg font-medium">
                  Are users allowed to record the webcam of others and post it
                  online?
                </h2>

                <span className="relative h-5 w-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                CamSurf determines your country according to your IP. The most
                common reason for your country being wrong is that you are using
                a proxy or you are using an IP that is based in a different
                country. If you are not using a proxy, please contact our
                support team for additional assistance.
              </p>
            </details>

            <details
              className="group  my-4 p-6 [&_summary::-webkit-details-marker]:hidden rounded-lg !border-2 !border-pink-500 !border-opacity-60 !border-x-[#FF5887] !border-y-[#1CA5FC]"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-lg font-medium">
                  Can I save the text chats?
                </h2>

                <span className="relative h-5 w-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                CamSurf determines your country according to your IP. The most
                common reason for your country being wrong is that you are using
                a proxy or you are using an IP that is based in a different
                country. If you are not using a proxy, please contact our
                support team for additional assistance.
              </p>
            </details>
          </div>

          {/* Abouse Faqs
           */}

          <h2 className="font-bold text-3xl text-black">Abuse FAQs</h2>
          <div className="divide-y my-10 mt-2 divide-gray-100   bg-white">
            <details
              className="group p-6 [&_summary::-webkit-details-marker]:hidden rounded-lg !border-2 !border-pink-500 !border-opacity-60 !border-x-[#FF5887] !border-y-[#1CA5FC]"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-lg font-medium">
                  How do I report someone with an inappropriate behavior?
                </h2>

                <span className="relative h-5 w-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                CamSurf determines your country according to your IP. The most
                common reason for your country being wrong is that you are using
                a proxy or you are using an IP that is based in a different
                country. If you are not using a proxy, please contact our
                support team for additional assistance.
              </p>
            </details>

            <details
              className="group my-4 p-6 [&_summary::-webkit-details-marker]:hidden rounded-lg !border-2 !border-pink-500 !border-opacity-60 !border-x-[#FF5887] !border-y-[#1CA5FC]"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-lg font-medium">
                  What happens when I report someone for abuse?
                </h2>

                <span className="relative h-5 w-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                CamSurf determines your country according to your IP. The most
                common reason for your country being wrong is that you are using
                a proxy or you are using an IP that is based in a different
                country. If you are not using a proxy, please contact our
                support team for additional assistance.
              </p>
            </details>

            <details
              className="group rounded-lg my-4 p-6 [&_summary::-webkit-details-marker]:hidden  !border-2 !border-pink-500 !border-opacity-60 !border-x-[#FF5887] !border-y-[#1CA5FC]"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-lg font-medium">
                  What can I do if I was banned for abuse?
                </h2>

                <span className="relative h-5 w-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                CamSurf determines your country according to your IP. The most
                common reason for your country being wrong is that you are using
                a proxy or you are using an IP that is based in a different
                country. If you are not using a proxy, please contact our
                support team for additional assistance.
              </p>
            </details>
          </div>

          {/* Banning */}
          <h2 className="font-bold text-3xl text-black">Banning</h2>
          <div className="divide-y my-10 mt-2 divide-gray-100   bg-white">
            <details
              className="group rounded-lg p-6 [&_summary::-webkit-details-marker]:hidden !border !border-x-[#FF5887] !border-y-[#1CA5FC]"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-lg font-medium">
                  Why Do Users Get Banned?
                </h2>

                <span className="relative h-5 w-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                CamSurf determines your country according to your IP. The most
                common reason for your country being wrong is that you are using
                a proxy or you are using an IP that is based in a different
                country. If you are not using a proxy, please contact our
                support team for additional assistance.
              </p>
            </details>

            <details
              className="group rounded-lg my-4 p-6 [&_summary::-webkit-details-marker]:hidden !border !border-x-[#FF5887] !border-y-[#1CA5FC]"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-lg font-medium">How Can I Get Unbanned?</h2>

                <span className="relative h-5 w-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                CamSurf determines your country according to your IP. The most
                common reason for your country being wrong is that you are using
                a proxy or you are using an IP that is based in a different
                country. If you are not using a proxy, please contact our
                support team for additional assistance.
              </p>
            </details>

            <details
              className="group rounded-lg my-4 p-6 [&_summary::-webkit-details-marker]:hidden !border !border-x-[#FF5887] !border-y-[#1CA5FC]"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-lg font-medium">
                  How Long Does the Ban Last?
                </h2>

                <span className="relative h-5 w-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                CamSurf determines your country according to your IP. The most
                common reason for your country being wrong is that you are using
                a proxy or you are using an IP that is based in a different
                country. If you are not using a proxy, please contact our
                support team for additional assistance.
              </p>
            </details>
            <details
              className="group rounded-lg my-4 p-6 [&_summary::-webkit-details-marker]:hidden !border !border-x-[#FF5887] !border-y-[#1CA5FC]"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-lg font-medium">
                  Why are Some Bans Permanent?
                </h2>

                <span className="relative h-5 w-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                CamSurf determines your country according to your IP. The most
                common reason for your country being wrong is that you are using
                a proxy or you are using an IP that is based in a different
                country. If you are not using a proxy, please contact our
                support team for additional assistance.
              </p>
            </details>
            <details
              className="group rounded-lg my-4 p-6 [&_summary::-webkit-details-marker]:hidden !border !border-x-[#FF5887] !border-y-[#1CA5FC]"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-lg font-medium">
                  What If I Was Wrongly Banned?
                </h2>

                <span className="relative h-5 w-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                CamSurf determines your country according to your IP. The most
                common reason for your country being wrong is that you are using
                a proxy or you are using an IP that is based in a different
                country. If you are not using a proxy, please contact our
                support team for additional assistance.
              </p>
            </details>
          </div>

          <div className="text-center py-7 ">
            <h4 className="text-xl font-bold py-4">DISCLAIMER</h4>
            <p>
              All guidance, whether in the form of Guidelines, or Frequently
              Asked Questions, is meant to supplement or explain provisions in
              the Terms of Use. Nothing contained in this guidance should be
              construed to limit our Terms, in the event of any conflict between
              this guidance, and our Terms, the Terms control, nothing contained
              herein is presented as an exhaustive list of prohibited behaviors.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default FaqDescription;