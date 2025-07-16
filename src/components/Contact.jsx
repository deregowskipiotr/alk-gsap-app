import React from 'react'
import { openingHours, socials } from '../../constants';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: 'words' });

    const timeline  = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.out",
    });

    timeline
      .from(titleSplit.words, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.2,
      })

      .from('#contact h3, #contact p', {
        yPercent: 100,
        opacity: 0,
        stagger: 0.2,
      })

      .to('#f-left-leaf', {
        y: '-50',
        duration: 1,
        ease: 'power1.out',
      })

      .to('#f-right-leaf', {
        y: '-50',
        duration: 1,
        ease: 'power1.out',
      });
  });

  return (
    <footer id="contact">
      <img
        src="./images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="./images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our ShowRoom</h3>
          <p>452, Raq Blvd. #301, Los Angeles, CA 90067</p>
        </div>

        <div className="mt-[-50px] md:mt-0">
          <h3>Contact Us</h3>
          <p href="tel:+18005551234">+1 (800) 555-1234</p>
          <p href="mailto:info@alk.com">info@alk.com</p>
        </div>

        <div className="mt-[-50px] md:mt-0">
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day}: {time.time}
            </p>
          ))}
        </div>

        <div className="mt-[-50px] md:mt-0">
          <h3>Social Media</h3>

          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt="socials-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact