import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="bg-light text-black text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 label-li">
              <h5 className="text-uppercase">Jewelry Shop</h5>
              <p>
                Some text about the company. This section can include details
                like mission, vision, or a brief description.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 label-li">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/ring" className="text-black">
                    Ring
                  </a>
                </li>
                <li>
                  <a href="/necklace" className="text-black">
                    Necklace
                  </a>
                </li>
                <li>
                  <a href="/earring" className="text-black">
                    Earring
                  </a>
                </li>
                <li>
                  <a href="/bracelet" className="text-black">
                    Bracelet
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 label-li">
              <h5 className="text-uppercase">Social Media</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-black">
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black">
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
