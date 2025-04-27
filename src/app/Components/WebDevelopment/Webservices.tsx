import React from "react";

const Webservices = () => {
  return (
    <section id="services" className="py-16 bg-[#000000] text-neutral-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-10">
          Our Web Development Services
        </h2>
        <p className="text-lg text-neutral-400 max-w-3xl mx-auto mb-16">
          We offer a wide range of web development services, from custom design
          to responsive development. Our goal is to help your business thrive
          online with beautifully crafted websites that work seamlessly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="bg-[#222222] p-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">
              Custom Web Development
            </h3>
            <p className="text-neutral-400 mb-4">
              We specialize in building custom websites tailored to your
              business needs. From the ground up, our team works with you to
              create a site that perfectly represents your brand.
            </p>
            <a
              href="#contact"
              className="text-sm text-neutral-300 hover:text-neutral-100"
            >
              Learn More
            </a>
          </div>

          {/* Service 2 */}
          <div className="bg-[#222222] p-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">
              Responsive Design
            </h3>
            <p className="text-neutral-400 mb-4">
             {` Our designs ensure that your website looks great on all devices.
              We focus on creating fluid, responsive designs that adapt to your
              users' needs on mobile, tablet, and desktop.`}
            </p>
            <a
              href="#contact"
              className="text-sm text-neutral-300 hover:text-neutral-100"
            >
              Learn More
            </a>
          </div>

          {/* Service 3 */}
          <div className="bg-[#222222] p-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">
              E-Commerce Solutions
            </h3>
            <p className="text-neutral-400 mb-4">
              {`We build user-friendly e-commerce websites to help you sell your
              products online. Whether you need a simple store or a
              fully-fledged e-commerce platform, we've got you covered.`}
            </p>
            <a
              href="#contact"
              className="text-sm text-neutral-300 hover:text-neutral-100"
            >
              Learn More
            </a>
          </div>

          {/* Service 4 */}
          <div className="bg-[#222222] p-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">
              SEO Optimization
            </h3>
            <p className="text-neutral-400 mb-4">
             {` Boost your website's visibility with our SEO services. We optimize
              your website for search engines, helping you rank higher and get
              noticed by more potential customers.`}
            </p>
            <a
              href="#contact"
              className="text-sm text-neutral-300 hover:text-neutral-100"
            >
              Learn More
            </a>
          </div>

          {/* Service 5 */}
          <div className="bg-[#222222] p-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">
              Maintenance & Support
            </h3>
            <p className="text-neutral-400 mb-4">
             {` After your website is live, we provide ongoing maintenance and
              support to ensure everything runs smoothly. We're here to make
              updates, fix bugs, and offer help when you need it.`}
            </p>
            <a
              href="#contact"
              className="text-sm text-neutral-300 hover:text-neutral-100"
            >
              Learn More
            </a>
          </div>

          {/* Service 6 */}
          <div className="bg-[#222222] p-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-neutral-100 mb-4">
              Branding & Design
            </h3>
            <p className="text-neutral-400 mb-4">
              A website is nothing without great branding. We help develop
              unique logos, visual identities, and design strategies that
              elevate your brand presence.
            </p>
            <a
              href="#contact"
              className="text-sm text-neutral-300 hover:text-neutral-100"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Webservices;
