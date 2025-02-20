import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Button } from '../../components/ui/Button';

function SuboxoneTreatment() {
    return (
        <div className="bg-gradient-to-tl from-primary/50 to-white/50 py-10 mt-10">
            <div className="container mx-auto  px-5 lg:px-20 space-y-8">
                <div className="flex flex-col gap-4 text-center lg:text-left">
                    <h3 className="uppercase text-primary">Get same-day online</h3>
                    <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-4">
                        <h2 className="text-3xl md:text-5xl font-medium">
                            Suboxone Treatment In 10 Minutes
                        </h2>
                        <Button
                            title={"Download the app today"}
                            icon={<FiArrowUpRight />}
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col justify-between items-center gap-8">
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="w-full md:w-1/3 flex flex-col justify-between items-center gap-8">
                            <div className="w-full flex flex-col gap-4 bg-white rounded-lg p-8 border-[1px] border-primary">
                                <h3 className="text-lg font-medium">Step 1 - Download The App</h3>
                                <p>Click the link to download our app to get started.</p>
                            </div>
                            <div className="w-full flex flex-col gap-4 bg-white rounded-lg p-8 border-[1px] border-primary">
                                <h3 className="text-lg font-medium">Step 3 - Schedule Your First Visit</h3>
                                <p>
                                    Our onboarding team will send you a link to book your first
                                    meeting. Many times, this is the same day.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-center">
                            <img
                                src="/assets/rotating-ball.gif"
                                alt=""
                                className="mix-blend-darken max-w-full"
                            />
                        </div>
                        <div className="w-full md:w-1/3 flex flex-col justify-between items-center gap-8">
                            <div className="w-full flex flex-col gap-4 bg-white rounded-lg p-8 border-[1px] border-primary">
                                <h3 className="text-lg font-medium">Step 2 - Complete Onboarding Process & Documents</h3>
                                <p>Provide medical history and sign treatment forms.</p>
                            </div>
                            <div className="w-full flex flex-col gap-4 bg-white rounded-lg p-8 border-[1px] border-primary">
                                <h3 className="text-lg font-medium">Step 4 - Meet With Licensed Provider</h3>
                                <p>
                                    At the time of your appointment, open the app on your phone
                                    to have your visit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <div className="w-full md:w-2/3 flex flex-col gap-4 bg-white rounded-lg p-8 border-[1px] border-primary text-center">
                            <h3 className="text-lg font-medium">Step 5 - Pick Up Medication</h3>
                            <p>
                                Your script will be sent to your pharmacy of choice for pick
                                up the same day.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuboxoneTreatment;
