import React from "react";
import dynamic from "next/dynamic";
import styles from "../styles/careers.module.css";
import { FaChevronRight } from "react-icons/fa";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// const $ = dynamic(import("jquery"), { ssr: false });
import useMeta from "../HOC/useMeta";

const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const Careers = () => {
  React.useEffect(() => {
    jQuery("video").prop("muted", true);
    // @ts-ignore
    jQuery("video").prop("autoPaly", true);
  }, []);
  const onChangeCarousel = () => {
    // @ts-ignore
    jQuery("video").prop("muted", true);
    // @ts-ignore
    jQuery("video").prop("autoPaly", true);
  };

  return (
    <article style={{ background: "", minHeight: "100vh", paddingTop: "10vh" }}>
      <div
        className="d-flex align-items-center justify-content-center flex-column"
        style={{ height: 560 }}
      >
        <h1
          className=" m-0"
          style={{
            fontSize: 48,
            color: "#11141c",
            fontWeight: "bold",
            opacity: 0.8,
          }}
        >
          {" "}
          opportunities are infinite.
        </h1>
        <button
          className={`${styles.careerButton} d-flex align-items-center justify-content-center`}
        >
          find yours
          <FaChevronRight style={{ marginLeft: 10, fontWeight: "bolder" }} />
          {/* <img className={styles.arrowIcon} src={"/icons/Arrow.png"} /> */}
        </button>
      </div>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <div className={styles.imageGallery}>
          <img src={"https://careers.cred.club/Images/landingPage_1.jpg"} />
          <img src={"https://careers.cred.club/Images/landingPage_2.jpg"} />
          <img
            src={"https://careers.cred.club/Images/landingPage_3.jpg"}
            style={{ width: 500 }}
          />
        </div>
        <div className={styles.imageGallery} style={{ alignItems: "start" }}>
          <img
            src={"https://careers.cred.club/Images/landingPage_4.jpg"}
            style={{ width: 347 }}
          />
          <img
            src={"https://careers.cred.club/Images/landingPage_5.jpg"}
            style={{ width: 364 }}
          />
          <img
            src={"https://careers.cred.club/Images/landingPage_6.jpg"}
            style={{ width: 173 }}
          />
        </div>
      </div>

      <div className={styles.credSection}>
        <h1 className={styles.cardSectionTitle}>Why CRED?</h1>
        <br />
        <br />
        <h1
          style={{
            marginTop: 50,
            fontSize: 24,
            textAlign: "center",
            fontWeight: "600 !important",
            margin: "0 auto",
            width: 804,
            lineHeight: 1.5,
          }}
        >
          simply because, CRED is the nucleus of all great minds at work. to
          elaborate more on the why, here’s a thought experiment for you:
        </h1>
        <div className={styles.pointBox}>
          <span className={styles.circle}>1</span>
          <div className={styles.descp} style={{ width: 500, marginTop: 20 }}>
            <p>
              put a group of incredibly passionate, driven individuals together.
            </p>
          </div>
        </div>
        <div className={styles.pointBox}>
          <span className={styles.circle}>2</span>
          <div className={styles.descp} style={{ width: 500, marginTop: 20 }}>
            <p>
              give them the complete freedom to chase down their goals in a
              complete uninhibited manner.
            </p>
          </div>
        </div>
        <div className={styles.pointBox}>
          <span className={styles.circle}>3</span>
          <div className={styles.descp} style={{ width: 500, marginTop: 20 }}>
            <p>you will have CRED.</p>
          </div>
        </div>
        <p
          className={styles.descp}
          style={{
            fontSize: 20,
            width: 804,
            textAlign: "center",
            marginTop: 80,
          }}
        >
          the CRED manifesto is crowd sourced from these very people, all rooted
          in different backgrounds but sharing the same ethos; to continuously
          push oneself and in the process, the community.
        </p>
      </div>
      {/* New Section sTArted */}
      <div className="d-flex align-items-center justify-content-center">
        <div
          className={`${styles.knowCRED} d-flex align-items-start justify-content-between flex-row `}
        >
          <div style={{ width: "50%" }}>
            <h1>want to know what it's like to work at CRED?</h1>
          </div>
          <div style={{ width: "50%" }}>
            <p style={{ fontSize: 20 }} className="">
              hard truths: pushing oneself comes with the role. and we realise
              pushing oneself is hard work. which is why CRED is in the
              continuous process of building an environment that helps the team
              rejuvenate oneself.
            </p>
          </div>
        </div>
      </div>

      {/* Boxes */}
      <br />
      <br />
      <br />
      <br />
      <div className="container ">
        <div className="row">
          <div className="col-5">
            <div className="row">
              <div
                className="col-3 d-flex align-items-center"
                style={{ justifyContent: "end" }}
              >
                <img src={"https://careers.cred.club/Images/knife&fork.png"} />
              </div>
              <div className="col-6">
                <p className={styles.workCREDTitle}>
                  kill deadlines, not your appetite.
                </p>
                <br />
                <p className={styles.workCREDDesc}>
                  a stacked pantry with an all you can eat lunch & dinner.
                </p>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="row">
              <div
                className="col-3 d-flex align-items-center"
                style={{ justifyContent: "end" }}
              >
                <img src={"https://careers.cred.club/Images/gift.png"} />
              </div>
              <div className="col-6">
                <p className={styles.workCREDTitle}>
                  we have your back...and your health.
                </p>
                <br />
                <p className={styles.workCREDDesc}>
                  paid sick leaves, because your health comes first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container " style={{ marginTop: 180 }}>
        <div className="row">
          <div className="col-5">
            <div className="row">
              <div
                className="col-3 d-flex align-items-center"
                style={{ justifyContent: "end" }}
              >
                <img src={"https://careers.cred.club/Images/half-heart.png"} />
              </div>
              <div className="col-6">
                <p className={styles.workCREDTitle}>
                  remember, you can’t respawn in real life.
                </p>
                <br />
                <p className={styles.workCREDDesc}>
                  a comprehensive health insurance, so you can focus on the
                  healing instead of never ending hospital bills.
                </p>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="row">
              <div
                className="col-3 d-flex align-items-center"
                style={{ justifyContent: "end" }}
              >
                <img src={"https://careers.cred.club/Images/clock.png"} />
              </div>
              <div className="col-6">
                <p className={styles.workCREDTitle}>
                  what einstein said about time.
                </p>
                <br />
                <p className={styles.workCREDDesc}>
                  no work timings. because you can’t time a creative process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Section */}
      <div style={{ height: 200 }} />
      <div style={{ width: 900, margin: "0 auto" }}>
        <h1
          style={{
            color: "#3a44a1",
            fontSize: 50,
            lineHeight: 1.3,
            fontWeight: "bold",
          }}
        >
          listen to their
          <br /> stories
        </h1>
        <br />
        <br />
        <br />
        <br />
        <div style={{ borderRadius: 20 }}>
          {OwlCarousel && (
            <OwlCarousel
              className="owl-theme"
              loop
              margin={10}
              nav
              items={1}
              onChange={onChangeCarousel}
            >
              {[0, 1, 2, 3, 4].map((item) => {
                return (
                  <div
                    className="item"
                    style={{
                      borderRadius: 20,
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <video
                      className="video-fluid"
                      id="video6"
                      autoPlay
                      muted
                      width="100%"
                      controls
                    >
                      <source
                        src="https://careers.cred.club/Videos/6.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                );
              })}
            </OwlCarousel>
          )}
        </div>
      </div>

      <Footer />
    </article>
  );
};

/**
 * A footer component that displays the CRED logo and a link to the CRED website.
 * @returns None
 */
function Footer() {
  return (
    <div style={{ background: "#F3F3F3", marginTop: 100 }}>
      <div className="container" style={{ padding: "100px 0" }}>
        <div className="row ">
          <div className="col-8">
            <h1 style={{ fontWeight: "bold" }}>apply to be a CRED member</h1>
            <br />
            <h1 style={{ fontWeight: "normal", lineHeight: 1.4 }}>
              CRED is a members-only app that offers you <br /> exclusive
              rewards for paying your credit card bill.
              <br />
              <br /> copyright © 2020 Dreamplug Technologies Pvt Ltd.
            </h1>
          </div>
          <div className="col-3">
            <h1 style={{ fontWeight: "normal" }}>
              download the app and apply to be a member
            </h1>
            <div style={{ marginTop: 30, cursor: "pointer" }}>
              <img
                src={"https://careers.cred.club/Images/Play%20Store%20Icon.png"}
                style={{ width: 45 }}
              />
              <img
                src={"https://careers.cred.club/Images/App%20Store%20Icon.png"}
                style={{ marginLeft: 30, width: 45 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default useMeta(Careers, {
  title: "Helium Careers",
});
