import Image from "next/image";
import Button from "/app/button";
import Section from "/app/section";

import bgFooterTopMobile from "/public/bg-footer-top-mobile.svg";
import bgSectionBottomMobile1 from "/public/bg-section-bottom-mobile-1.svg";
import bgSectionBottomMobile2 from "/public/bg-section-bottom-mobile-2.svg";
import bgSectionTopMobile1 from "/public/bg-section-top-mobile-1.svg";
import bgSectionTopMobile2 from "/public/bg-section-top-mobile-2.svg";
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
      <Section isCentered className="my-32">
        <h1 className="mb-8 text-3xl font-bold">
          Build the community your fans will love
        </h1>
        <p className="mb-12">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as your
          engage in genuine discussion.
        </p>
        <Button className="mb-24">Get started for free</Button>

        <Image src={imgSection1} alt="mockups" />
      </Section>

      <Section isCentered className="w-max space-y-8 py-32">
        <div className="space-y-4">
          <Image src={iconCommunities} alt="" width={32} />
          <div className="text-6xl font-bold">1.4k+</div>
          <div className="text-gray-500">Communities Formed</div>
        </div>
        <div className="space-y-4">
          <Image src={iconMessages} alt="" width={32} />
          <div className="text-6xl font-bold">2.7m+</div>
          <div className="text-gray-500">Messages sent</div>
        </div>
      </Section>

      <Image src={bgSectionTopMobile1} alt="" className="w-full" />
      <Section isCentered theme="lightblue" className="py-32">
        <Image src={imgSection2} alt="" />
        <h1 className="mt-16 mb-4 text-xl font-bold">Grow together</h1>
        <p>
          Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form.
        </p>
      </Section>
      <Image src={bgSectionBottomMobile1} alt="" className="w-full" />

      <Section isCentered className="py-32">
        <Image src={imgSection3} alt="" />
        <h1 className="mt-16 mb-4 text-xl font-bold">
          Flowing conversionsations
        </h1>
        <p>
          You wouldn&apos;t paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </p>
      </Section>

      <Image src={bgSectionTopMobile2} alt="" className="w-full" />
      <Section isCentered theme="lightblue" className="py-32">
        <Image src={imgSection4} alt="" />
        <h1 className="mt-16 mb-4 text-xl font-bold">Your Users</h1>
        <p>
          It takes no time at all to integrate Huddle with your app&apos;s
          Authentication solution. This means, once signed in to your app, your
          users can start chatting immediately.
        </p>
      </Section>
      <Image src={bgSectionBottomMobile2} alt="" className="w-full" />

      <Section isCentered className="my-40 space-y-8">
        <h1 className="text-3xl font-bold leading-10">
          Ready to Build Your Community?
        </h1>
        <Button>Get Started For Free</Button>
      </Section>

      <Image src={bgFooterTopMobile} alt="" className="w-full" />
      <Section theme="dark" className="space-y-6 py-16">
        <h1 className="text-lg font-bold uppercase">Newsletter</h1>
        <p className="text-sm font-medium leading-6 tracking-wide">
          To recieve tips on how to grow your community, sign up to our weekly
          newsletter. We&apos;ll never send yo spam or pass on your email
          address
        </p>
        <input type="text" className="w-full rounded p-2" />
        <div className="flex justify-end">
          <Button>Subcribe</Button>
        </div>
      </Section>

      <Section theme="dark" className="space-y-4 pb-8">
        <Image src={logo} alt="" />
        <p className="text-sm font-medium leading-6 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
          quam, hendrerit lacinia vestibulum a, ultrices quis sem.
        </p>
      </Section>

      <Section theme="dark" className=" space-y-4 pb-8">
        <div className="flex items-center gap-4">
          <Image src={iconPhone} alt="" />
          <div>Phone: +1-543-123-4567</div>
        </div>

        <div className="flex items-center gap-4">
          <Image src={iconEmail} alt="" />
          <div>example@company.com</div>
        </div>
      </Section>

      <div>
        {/* <Image src={iconFacebook} alt="" />
        <Image src={iconInstagram} alt="" />
        <Image src={iconTwitter} alt="" /> */}
      </div>
    </div>
  );
}
