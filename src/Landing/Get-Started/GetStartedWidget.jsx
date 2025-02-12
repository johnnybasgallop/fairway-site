import { Widget } from "@typeform/embed-react";

const GetStartedWidget = () => {
  return (
    <section
      id="getstarted"
      className="px-[20px] md:px-[30px] lg:px-[40px] xl:px-[80px] py-12 bg-white text-left w-full py-12 lg:py-[60px] xl:py-[100px] 2xl:py-[120px]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="text-left">
          <h3 className="text-transparent bg-clip-text bg-green-gradient font-bold text-md pt-2 uppercase">
            Get started
          </h3>
          <h2 className="text-3xl md:text-6xl tracking-wide font-semibold py-4">
            Get Started
          </h2>
          <p className="text-gray-600 mb-8 w-full md:w-[90%] py-2 md:pt-[30px] md:px-2">
            At Fairway Capital, we believe that success starts with a
            conversation. Whether you’re ready to invest or just exploring your
            options, our team is here to guide you every step of the way. Book a
            personalized consultation to discuss your goals, or complete the
            form to provide us with a brief overview of your investment needs.
            Together, we’ll craft a strategy tailored to secure your growth and
            success. Take the first step toward a brighter financial
            future—let’s get started today.
          </p>

          <div className="space-y-[40px] pt-[20px] md:space-y-[80px] md:pt-[40px]">
            <div className="w-full space-y-5 md:space-y-3">
              <p className="text-md text-transparent bg-clip-text bg-green-gradient font-bold hover:font-extrabold mb-3 lg:mb-4">
                Ready to talk?
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://calendly.com/fairwaycapitalpartners-info/onboarding?month=2025-01"
              >
                <button className="w-[75%] py-3 md:w-[60%] lg:w-[40%] 2xl:py-4 bg-green-gradient text-white rounded-full font-medium lg:text-md 2xl:text-lg hover:bg-green-700">
                  Book a call
                </button>
              </a>
            </div>
            <div>
              <p className="text-md text-transparent bg-clip-text bg-green-gradient font-bold hover:font-extrabold">
                Let us learn more about you
              </p>
              <p className="text-gray-600 w-full md:w-[90%] py-2">
                Complete our quick form to help us understand your priorities.
                We’ll be in touch to discuss how we can support your growth.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8">
          <Widget
            id="PtAggMKR"
            // style={{ width: "100%" }}
            className="w-full h-[300px] md:h-[600px] rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default GetStartedWidget;
