import React from "react";
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";

const SocailIcon = () => {
  const footerSocial = [
    { icon: GrFacebookOption },
    { icon: GrTwitter },
    { icon: GrInstagram },
  ];

  const footerSocial2 = ["GrFacebookOption", "GrTwitter", "GrInstagram"];

  return (
    <>
      <div className="flex gap-4">
        {footerSocial.map((item, index) => (
          <div
            key={index}
            className="p-1 rounded-[.25rem] bg-gradient-to-r from-[#4e7240] to-[#727140]"
          >
            <item.icon />
          </div>
        ))}
      </div>
    </>
  );
};

export default SocailIcon;
