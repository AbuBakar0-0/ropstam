import React from 'react';

function RecoveryDelivered() {
    return (
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-12 px-5 lg:px-20 gap-8">
            {/* Text Content */}
            <div className="w-full sm:w-1/2 flex flex-col gap-4 text-center sm:text-left">
                <h3 className="uppercase text-primary text-lg sm:text-xl">
                    Welcome To Recovery Delivered
                </h3>
                <h2 className="text-3xl sm:text-5xl font-medium leading-tight">
                    Your Fully Online Suboxone Treatment Platform
                </h2>
                <p className="text-lg">
                    100% online opioid treatment with licensed buprenorphine providers starts at just $99/month.
                </p>
                <p className="text-lg">
                    With monthly and weekly meetings based on where you are in your recovery. Get a same-day appointment and script.
                </p>
            </div>

            {/* Image Section */}
            <div className="w-full sm:w-1/2 flex justify-center items-center">
                <img src="/assets/hero-bg.png" alt="Recovery Delivered" className="w-full max-w-sm sm:max-w-full rounded-lg shadow-lg" />
            </div>
        </div>
    );
}

export default RecoveryDelivered;
