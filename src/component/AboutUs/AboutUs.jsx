import { useEffect, useState, useRef } from "react";
import { FaCertificate, FaCodeBranch, FaGlobeAmericas, FaReact } from "react-icons/fa";

const counterData = [
    {
        icon: <FaReact className="f-60 text-white mb-2" />,
        target: 12,
        label: "Nationalities",
    },
    {
        icon: <FaGlobeAmericas className="f-60 text-white mb-2" />,
        target: 22,
        label: "Countries",
    },
    {
        icon: <FaCertificate className="f-60 text-white mb-2" />,
        target: 2000,
        label: "Certificates",
    },
    {
        icon: <FaCodeBranch className="f-60 text-white mb-2" />,
        target: 5,
        label: "Branch",
    },
];

const AboutUs = () => {
    const [counts, setCounts] = useState(counterData.map(() => 0));
    const [hasStarted, setHasStarted] = useState(false);
    const sectionRef = useRef(null); // Section reference

    useEffect(() => {
        const section = sectionRef.current;

        // IntersectionObserver setup
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                    startCounters();
                }
            },
            { threshold: 0.3 } // 30% of section visible
        );

        observer.observe(section); // Observe the section

        return () => observer.disconnect(); // Cleanup on unmount
    }, [hasStarted]);

    const startCounters = () => {
        const duration = 2000;
        const incrementTime = 50;
        const steps = counterData.map((item) =>
            Math.ceil(item.target / (duration / incrementTime))
        );

        const interval = setInterval(() => {
            setCounts((prevCounts) =>
                prevCounts.map((count, i) => {
                    const newCount = count + steps[i];
                    return newCount >= counterData[i].target ? counterData[i].target : newCount;
                })
            );
        }, incrementTime);

        const stopTimer = setTimeout(() => clearInterval(interval), duration + 200);
        return () => {
            clearInterval(interval);
            clearTimeout(stopTimer);
        };
    };

    return (
        <section className="aboutus_sec" ref={sectionRef}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="txt text-center">
                            <h2 className="f-40 f700 text-white">We have Over 15 Years of Experience</h2>
                            <p className="text-white f-16">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea suscipit impedit
                                qui! Nihil, obcaecati laboriosam, at corrupti ipsam et earum non ratione ad in
                                dicta? Quo porro fugit laboriosam dolorem!
                            </p>
                            <p className="text-white f-16 uppercase mb-5">
                                "We Will Do Not Sell, We Certify"
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {counterData.map((item, index) => (
                        <div className="col-lg-3 col-md-6 col-12" key={index}>
                            <div className="text-center">
                                {item.icon}
                                <div className="txt">
                                    <h3 className="gredient-text f-40 f700">{counts[index]} +</h3>
                                    <p className="f-16 f400 text-white uppercase l1 mb-0">{item.label}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
