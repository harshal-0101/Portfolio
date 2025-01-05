import React from 'react'

export default function Ourservice() {
  return (
    <div>
      <div className="service-container">
      <h1 className='serviceTitle'>Service <i className="fa-solid fa-arrow-left"></i></h1>
        <div className="service">
            <div className="website">
              <div className="icon">
              <i class="fa-solid fa-globe"></i>
              </div>
              <div className="text-contain">
                <h1>Website development</h1>
                <p>
                "Transform your ideas into powerful online experiences with our expert web development services. We specialize in creating responsive, scalable, and high-performance websites tailored to meet your unique needs. Whether you're launching a new business, enhancing your existing website, or need a custom solution, we ensure your site is visually appealing, user-friendly, and built with the latest technologies. From content management systems (CMS) to e-commerce platforms, we handle it all—creating seamless experiences for your users across all devices."
                </p>
              </div>
            </div>
            <div className="app">
            <div className="icon">
            <i class="fa-brands fa-android"></i>
              </div>
              <div className="text-contain">
                <h1>Application development</h1>
                <p>
                "Take your business to the next level with a mobile app that stands out in the market. Our team of experienced developers builds intuitive, fast, and secure mobile applications for both iOS and Android platforms. Whether you're looking for a simple app or a complex, multi-feature solution, we work closely with you to bring your vision to life. With a focus on performance, user experience, and scalability, we ensure your app meets the demands of today’s mobile-first world."
                </p>
              </div>
            </div>
            <div className="design">
            <div className="icon">
            <i class="fa-solid fa-pen-nib"></i>
              </div>
              <div className="text-contain">
                <h1>Website & app Design</h1>
                <p>"First impressions matter, and our design services ensure your digital presence is visually compelling and aligned with your brand. We offer creative, user-focused design solutions for websites, apps, and branding that not only capture attention but also provide an exceptional user experience. Our designs are clean, modern, and optimized to achieve your business goals—whether it's a sleek website, a functional app interface, or a full brand overhaul."</p>
              </div>

            </div>
        </div>
      </div>
    </div>
  )
}
