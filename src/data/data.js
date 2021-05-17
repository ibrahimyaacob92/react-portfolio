import { AiFillGithub, AiTwotonePhone, AiFillLinkedin } from "react-icons/ai";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { FaGlobeAsia } from "react-icons/fa";

export const contactsData = [
  {
    icon: IoMail,
    label: "Email",
    value: "ibrahimyaacob92@yahoo.com",
    link: "mailto:ibrahimyaacob92@yahoo.com",
  },
  {
    icon: AiTwotonePhone,
    label: "Phone",
    value: "(+60)148403895",
    link: "https://api.whatsapp.com/send?phone=60148403895",
  },
  {
    icon: IoLocationSharp,
    label: "Location",
    value: "Johor Bahru, MY",
    link: "https://www.google.com/maps/place/Johor+Bahru,+Johor/@1.5448504,103.5695405,11z/data=!3m1!4b1!4m5!3m4!1s0x31da12c6d36b3a27:0xd5f4b21db593d4f5!8m2!3d1.492659!4d103.7413591",
  },
  {
    icon: FaGlobeAsia,
    label: "Portfolio",
    value: "ibrahimyaacob.xyz",
    link: "https://ibrahimyaacob.xyz/",
  },
  {
    icon: AiFillGithub,
    label: "GitHub",
    value: "github.com/ibrahimyaacob92",
    link: "https://github.com/ibrahimyaacob92",
    // value: "https://bit.ly/2SSBeH7",
  },
  {
    icon: AiFillLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ibrahimyaacob",
    link: "https://www.linkedin.com/in/ibrahim-yaacob",
    // value: "https://bit.ly/3tYkJpQ",
  },
];

// high level only
export const education = {
  course:"B. Mechanical Engineering",
  university:"University Technology Malaysia"
  
}