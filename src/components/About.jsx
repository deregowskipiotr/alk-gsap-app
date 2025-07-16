import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
      opacity: 0, duration: 1.2, yPercent: 100, ease: 'expo.out', stagger: 0.1,
      })
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters
              <span className="text-white">-</span>
              from muddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Mix it up like a true bartender — turn your living room into a
              five-star cocktail lounge with our easy recipes!
            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p>More than +7,000 happy customers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy hover:opacity-0 duration-600 transition-all ease-in-out cursor-pointer" />
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy hover:opacity-0 duration-600 transition-all ease-in-out cursor-pointer" />
          <img src="/images/abt2.png" alt="grid-img-2" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy hover:opacity-0 duration-600 transition-all ease-in-out cursor-pointer" />
          <img src="/images/abt5.png" alt="grid-img-5" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-5">
          <div className="noisy hover:opacity-0 duration-600 transition-all ease-in-out cursor-pointer" />
          <img src="/images/abt3.png" alt="grid-img-3" />
        </div>

        <div className="md:col-span-3 text-center px-6 font-serif text-lime-600">
          <div className="noisy hover:opacity-0 duration-600 transition-all ease-in-out cursor-pointer" />
          <p className="md:mt-10 mt-5">
            Shake, stir, and dazzle your friends—because making killer drinks in
            your Home is way more fun than waiting in line at the bar!</p> <br />
           <p className="md:mt-5 mt-1"> Grab your shaker and ice—if you can open your fridge, you’re halfway
            to being the party's favorite home bartender!
          </p>
        </div>

        <div className="md:col-span-4">
          <div className="noisy hover:opacity-0 duration-600 transition-all ease-in-out cursor-pointer" />
          <img src="/images/abt4.png" alt="grid-img-4" />
        </div>
      </div>
    </div>
  );
}

export default About