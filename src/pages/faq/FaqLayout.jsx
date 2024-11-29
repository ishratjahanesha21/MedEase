import React from 'react';

const FaqLayout = () => {
    return (
        <div className="w-full md:w-10/12 mx-auto mt-24 ">
            <div className="container px-6 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl ">
                    Why you choose us ?.
                </h1>

                <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    {faqData.map((item, index) => (
                        <div key={index}>
                            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>

                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 ">
                                    {item.question}
                                </h1>
                                <p className="mt-2 text-sm text-gray-500 ">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const faqData = [
    {
        question: 'What can I expect at my first consultation?',
        answer:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat, consequatur eveniet veritatis quos dignissimos beatae dolores exercitationem laboriosam officia magnam atque blanditiis illum doloremque magni ex corrupti tempora quis.',
    },
    {
        question: 'What are your opening hours?',
        answer:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat, consequatur eveniet veritatis quos dignissimos beatae dolores exercitationem laboriosam officia magnam atque blanditiis illum doloremque magni ex corrupti tempora quis.',
    },
    {
        question: 'Do I need a referral?',
        answer:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat, consequatur eveniet veritatis quos dignissimos beatae dolores exercitationem laboriosam officia magnam atque blanditiis illum doloremque magni ex corrupti tempora quis.',
    },
    {
        question:
            'Is the cost of the appointment covered by private health insurance?',
        answer:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat, consequatur eveniet veritatis quos dignissimos beatae dolores exercitationem laboriosam officia magnam atque blanditiis illum doloremque magni ex corrupti tempora quis.',
    },
    {
        question: 'What is your cancellation policy?',
        answer:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat, consequatur eveniet veritatis quos dignissimos beatae dolores exercitationem laboriosam officia magnam atque blanditiis illum doloremque magni ex corrupti tempora quis.',
    },
    {
        question: 'What are the parking and public transport options?',
        answer:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat, consequatur eveniet veritatis quos dignissimos beatae dolores exercitationem laboriosam officia magnam atque blanditiis illum doloremque magni ex corrupti tempora quis.',
    },
];

export default FaqLayout;