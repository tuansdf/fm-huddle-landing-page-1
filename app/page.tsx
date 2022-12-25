import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Button from "/app/button";
import { headFont } from "/app/fonts";
import ImageSwitch from "/app/image-switch";
import Section from "/app/section";
import SectionText from "/app/section-text";

import bgFooterTopMobile from "/public/bg-footer-top-mobile.svg";
import bgSectionBottomMobile1 from "/public/bg-section-bottom-mobile-1.svg";
import bgSectionBottomMobile2 from "/public/bg-section-bottom-mobile-2.svg";
import bgSectionTopMobile1 from "/public/bg-section-top-mobile-1.svg";
import bgSectionTopMobile2 from "/public/bg-section-top-mobile-2.svg";

import bgFooterTopDesktop from "/public/bg-footer-top-desktop.svg";
import bgSectionBottomDesktop1 from "/public/bg-section-bottom-desktop-1.svg";
import bgSectionBottomDesktop2 from "/public/bg-section-bottom-desktop-2.svg";
import bgSectionTopDesktop1 from "/public/bg-section-top-desktop-1.svg";
import bgSectionTopDesktop2 from "/public/bg-section-top-desktop-2.svg";

import iconCommunities from "/public/icon-communities.svg";
import iconEmail from "/public/icon-email.svg";
import iconMessages from "/public/icon-messages.svg";
import iconPhone from "/public/icon-phone.svg";
import imgSection3 from "/public/illustration-flowing-conversation.svg";
import imgSection2 from "/public/illustration-grow-together.svg";
import imgSection4 from "/public/illustration-your-users.svg";
import logo from "/public/logo.svg";
import imgSection1 from "/public/screen-mockups.svg";

export default function Page() {
  return (
    <div className="">
      <Section className="pt-20 pb-40 text-center">
        <h1
          className={
            headFont.className +
            " mb-8 text-3xl font-bold capitalize leading-10 lg:text-4xl"
          }
        >
          Build the community your fans will love
        </h1>
        <p className="mx-auto mb-12 max-w-prose">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as your
          engage in genuine discussion.
        </p>
        <Button className="mb-24" pill>
          Get started for free
        </Button>

        <Image
          src={imgSection1}
          alt="mockups"
          className="mx-auto w-full lg:max-w-screen-md"
          priority
        />
      </Section>

      <Section className="w-max grid-cols-2 place-items-center gap-48 space-y-8 text-center lg:grid lg:space-y-0 lg:pb-40">
        <div className="space-y-4">
          <Image src={iconCommunities} alt="" className="w-8 lg:w-10" />
          <div className="text-6xl font-bold lg:text-7xl">1.4k+</div>
          <div className="text-lg text-gray-500">Communities Formed</div>
        </div>
        <div className="space-y-4">
          <Image src={iconMessages} alt="" className="w-8 lg:w-10" />
          <div className="text-6xl font-bold lg:text-7xl">2.7m+</div>
          <div className="text-lg text-gray-500">Messages Sent</div>
        </div>
      </Section>

      <ImageSwitch
        mobileSrc={bgSectionTopMobile1}
        desktopSrc={bgSectionTopDesktop1}
      />
      <Section
        theme="lightblue"
        className="grid-cols-2 place-items-center gap-16 py-20 text-center lg:grid lg:pb-10 lg:pt-20 lg:text-start"
      >
        <Image src={imgSection2} alt="" />
        <SectionText
          title="Grow together"
          subtitle="Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form."
          className="order-first"
        />
      </Section>
      <ImageSwitch
        mobileSrc={bgSectionBottomMobile1}
        desktopSrc={bgSectionBottomDesktop1}
      />

      <Section className="lg: grid-cols-2 place-items-center gap-16 py-40 text-center lg:grid lg:pb-24 lg:pt-40 lg:text-start">
        <Image src={imgSection3} alt="" />
        <SectionText
          title="Flowing conversations"
          subtitle="You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow."
        />
      </Section>

      <ImageSwitch
        mobileSrc={bgSectionTopMobile2}
        desktopSrc={bgSectionTopDesktop2}
      />
      <Section
        theme="lightblue"
        className="grid-cols-2 place-items-center gap-16 pb-40 text-center lg:grid lg:pb-10 lg:text-start"
      >
        <Image src={imgSection4} alt="" />
        <SectionText
          title="Your users"
          subtitle="It takes no time at all to integrate Huddle with your app's
            Authentication solution. This means, once signed in to your app,
            your users can start chatting immediately."
          className="order-first"
        />
      </Section>
      <ImageSwitch
        mobileSrc={bgSectionBottomMobile2}
        desktopSrc={bgSectionBottomDesktop2}
      />

      <Section className="space-y-8 pt-20 pb-80 text-center lg:space-y-16 lg:py-40">
        <h1 className="text-3xl font-bold capitalize leading-10 lg:text-4xl">
          Ready to build your community?
        </h1>
        <Button pill>Get Started For Free</Button>
      </Section>

      <ImageSwitch
        mobileSrc={bgFooterTopMobile}
        desktopSrc={bgFooterTopDesktop}
      />
      <Section
        theme="dark"
        className="grid-cols-2 gap-8 space-y-16 py-16 lg:grid lg:space-y-0 lg:py-20"
      >
        <div className="order-last">
          <h1 className={headFont.className + " text-lg font-bold uppercase"}>
            Newsletter
          </h1>
          <p className="mt-4 max-w-sm text-sm font-medium leading-6 tracking-wide">
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We&apos;ll never send yo spam or pass on your email
            address
          </p>
          <div className="gap-8 lg:mt-8 lg:flex lg:items-center">
            <input
              type="text"
              className="mt-8 w-full rounded p-2.5 lg:mt-0 lg:p-3.5"
            />
            <div className="mt-4 flex justify-end lg:mt-0">
              <Button>Subcribe</Button>
            </div>
          </div>
        </div>

        <div>
          <Image src={logo} alt="" />
          <p className="my-6 max-w-xs text-sm font-medium leading-6 tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          </p>

          <div className="mb-4 flex items-center gap-4">
            <Image src={iconPhone} alt="" />
            <div>Phone: +1-543-123-4567</div>
          </div>

          <div className="flex items-center gap-4">
            <Image src={iconEmail} alt="" />
            <div>example@company.com</div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <FaFacebook size={24} />
            <FaInstagram size={24} />
            <FaTwitter size={24} />
          </div>
        </div>
      </Section>
    </div>
  );
}
