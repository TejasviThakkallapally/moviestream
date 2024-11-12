
import React from 'react';

function Footer() {
  return (
    <div className="bg-black text-white p-4">
      <div className="container mx-auto grid grid-cols-4 gap-4">
        {/* Company Section */}
        <div>
          <h2 className="text-lg font-medium">Company</h2>
          <ul>
            <li><a href="https://www.hotstar.com/about-us/in" aria-label="About us opens in new tab" target="_blank" rel="noopener noreferrer">About Us</a></li>
            <li><a href="https://careers.hotstar.com/" aria-label="careers opens in new tab" target="_blank" rel="noopener noreferrer">Careers</a></li>
          </ul>
        </div>

        {/* Need Help Section */}
        <div>
          <h2 className="text-lg font-medium">Need Help?</h2>
          <ul>
            <li><a href="https://help.hotstar.com/in/en/support/home" aria-label="Visit Help Center opens in new tab" target="_blank" rel="noopener noreferrer">Visit Help Center</a></li>
            <li><a href="https://help.hotstar.com/in/en/support/tickets/feedback" aria-label="Share Feedback opens in new tab" target="_blank" rel="noopener noreferrer">Share Feedback</a></li>
          </ul>
        </div>

        {/* Connect with Us Section */}
        <div>
          <h2 className="text-lg font-medium">Connect with Us</h2>
          <ul className="flex space-x-4">
            <li><a href="https://www.facebook.com/DisneyPlusHotstar" aria-label="Facebook opens in new tab"  target="_blank" rel="noopener noreferrer"><i className="icon-facebook"></i> Facebook</a></li>
            <li><a href="https://twitter.com/DisneyPlusHS" aria-label="Twitter opens in new tab"  target="_blank" rel="noopener noreferrer"><i className="icon-twitter"></i> Twitter</a></li>
          </ul>
        </div>

        {/* Google Play & App Store Section */}
        <div>
          <h2 className="text-lg font-medium">Get the App</h2>
          <div className="flex space-x-4">
            <a href="https://play.google.com/store/apps/details?id=in.startv.hotstar" aria-label="Get it on Google Play opens in new tab" target="_blank" rel="noopener noreferrer">
              <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/v1661346101/google-playstore" alt="Get it on Google Play" className="w-32" />
            </a>
            <a href="https://itunes.apple.com/in/app/hotstar/id934459219?mt=8" aria-label="Download on the App Store opens in new tab" target="_blank" rel="noopener noreferrer">
              <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/v1661346071/ios-appstore" alt="Download on the App Store" className="w-32" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
