import React, { useState } from 'react';
import Layout from '../../components/Layout/index';
import Link from 'next/link';

const Dashboard: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <Layout signed>

    <div className="layout">
      {/* <main className="content">
        <header className="dashboard-header">
          <p>Friday 16, 2024</p>
          <h1>Good night, <span className="highlight">SALMAN 👋</span></h1>
          <p>Welcome to your Dashboard! Start creating and scheduling your content!</p>
        </header>
        <section className="video-library">
          <div className="video-text">
            <h2>Check out our <span className="highlight">Video Library</span> filled with Walkthroughs to Maximize your experience!</h2>
            <p>We have built a gigantic library of training videos to showcase all our tools and features for our alpha release!</p>
            <button className="watch-demo-btn">Watch Demo</button>
          </div>
          <div className="video-preview">
            <img src="/path/to/video-preview.png" alt="Video Library Preview" />
          </div>
        </section>
        <section className="avatar-selection">
          <h2>Avatar Selection</h2>
          <p>Select the Avatar you would like to create targeted content for here!</p>
          <div className="avatar-container">
            <div className="avatar-box">
              <span className="add-avatar">+</span>
            </div>
          </div>
        </section>
        <section className="marketing-center">
          <h2>Marketing Center</h2>
          <div className="categories">
            <button className="category active">All Categories</button>
            <button className="category">Website</button>
            <button className="category">Funnels</button>
            <button className="category">Emails</button>
            <button class="category">Social</button>
            <button className="category">Articles</button>
            <button className="category">VA Tools</button>
          </div>
          <div className="marketing-items">
            <div className="item">
              <img src="/path/to/icon1.png" alt="Blog Post" />
              <h3>Blog Post</h3>
              <p>Generate blogs SEO optimized for your business.</p>
              <button>Generate Posts</button>
            </div>
            <div className="item">
              <img src="/path/to/icon2.png" alt="Email Campaigns" />
              <h3>Email Campaigns</h3>
              <p>Create personalized, engaging, and goal-oriented email content, supporting a variety of campaign objectives.</p>
              <button>Start Campaign</button>
            </div>
            <div className="item">
              <img src="/path/to/icon3.png" alt="Youtube Script Wizard" />
              <h3>Youtube Script Wizard</h3>
              <p>Generate detailed script outlines that align with the user’s business goals and speak directly to their ideal client avatar.</p>
              <button>Generate Script</button>
            </div>
          </div>
        </section>
      </main> */}
      <div className="py-[52px] px-[42px]">
  <div className="flex items-center justify-between ">
    <div className="">
      <p className="text-xl leading-xl font-jakarta text-primary-700">
        Friday 16, 2024
      </p>
      <h3 className="text-h5 leading-h5 -tracking-[0.6px] xl:text-h4 xl:leading-h4 xl:-tracking-[0.72px] 2xl:text-h3 2xl:leading-h3 2xl:-tracking-[0.96px] font-aeonik font-bold text-black my-1">
        Good night, <span className="gradient-text-1">SALMAN</span>👋🏼
      </h3>
      <p className="text-md leading-md xl:text-l xl:leading-l 2xl:text-xl 2xl:leading-xl font-jakarta text-black">
        Welcome to the Your Dashboard! Start creating and scheduling your
        content!
      </p>
    </div>
  </div>
  <div className="bg-[#1C1A2C] rounded-lg pt-[14px] px-9 pb-8 mt-8">
    <div className="flex items-center justify-between">
      <div className="" />
      <button className="w-9 h-9">
        <svg
          width={36}
          height={36}
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M24.285 3H11.715C6.255 3 3 6.255 3 11.715V24.27C3 29.745 6.255 33 11.715 33H24.27C29.73 33 32.985 29.745 32.985 24.285V11.715C33 6.255 29.745 3 24.285 3Z"
            fill="#B6B6B8"
          />
          <path
            d="M24 19.125H12C11.385 19.125 10.875 18.615 10.875 18C10.875 17.385 11.385 16.875 12 16.875H24C24.615 16.875 25.125 17.385 25.125 18C25.125 18.615 24.615 19.125 24 19.125Z"
            fill="#B6B6B8"
          />
        </svg>
      </button>
    </div>
    <div className="mt-2.5 flex items-start justify-between">
      <div className="w-2/5 2xl:w-1/2">
        <h2 className="text-white text-h4 2xl:text-h3 leading-h4 2xl:leading-h3 font-bold tracking-[-0.96px] 2xl:tracking-[-0.72px] font-aeonik">
          Check out our{" "}
          <span className="gradient-text-3">Video Library filled</span> with
          Walkthroughs to Maximize your experience!
        </h2>
        <p className="text-white text-md xl:text-l 2xl:text-xl leading-md xl:leading-l 2xl:leading-xl tracking-[-0.96px] font-jakarta mt-[14px] mb-6">
          We have built a gigantic library of training videos to showcase all
          our tools and features for our alpha release!
        </p>
        <a
          className="inline-block"
          target="_blank"
          href="https://bizgen-io.gitbook.io/bizgen.io-product-documentation/fundamentals/video-tutorials-dashboard"
        >
          <div className="relative py-3 px-6 rounded-[10px] overflow-hidden">
            <div className="absolute left-0 w-full gradient from-primary-200 to-primary-300 bg-gradient-to-r top-0 h-full" />
            <span className="relative font-jakarta font-bold text-l text-white">
              Watch Demo
            </span>
          </div>
        </a>
      </div>
      <div className="w-3/5 2xl:w-1/2 flex items-start justify-end h-full">
        <div className="relative h-[328px] rounded-lg overflow-hidden aspect-video">
          <div
            className="wistia_responsive_padding"
            style={{ padding: "56.25% 0px 0px", position: "relative" }}
          >
            <div
              className="wistia_responsive_wrapper"
              style={{
                height: "100%",
                left: 0,
                position: "absolute",
                top: 0,
                width: "100%"
              }}
            >
              <div
                className="wistia_video_foam_dummy"
                data-source-container-id="wistia-ccb85flh3l-1"
                style={{
                  border: 0,
                  display: "block",
                  height: 0,
                  margin: 0,
                  padding: 0,
                  position: "static",
                  visibility: "hidden",
                  width: "auto"
                }}
              />
              <div
                className="wistia_embed wistia_async_ccb85flh3l seo=true videoFoam=true wistia_embed_initialized"
                id="wistia-ccb85flh3l-1"
                style={{ height: "100%", position: "relative", width: "100%" }}
              >
                <div
                  id="wistia_chrome_222"
                  className="w-chrome notranslate"
                  tabIndex={-1}
                  style={{
                    display: "inline-block",
                    height: "327.994px",
                    lineHeight: "normal",
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    verticalAlign: "top",
                    width: "583.1px",
                    outline: "none",
                    overflow: "hidden",
                    boxSizing: "content-box",
                    borderRadius: 0
                  }}
                >
                  <div
                    id="wistia_grid_228_wrapper"
                    style={{ display: "block" }}
                  >
                    <div id="wistia_grid_228_above" />
                    <div id="wistia_grid_228_main">
                      <div id="wistia_grid_228_behind" />
                      <div id="wistia_grid_228_center">
                        <div
                          className="w-video-wrapper w-css-reset"
                          style={{
                            width: "100%",
                            height: "100%",
                            opacity: 1,
                            backgroundColor: "rgb(0, 0, 0)"
                          }}
                        >
                          <video
                            id="wistia_simple_video_251"
                            crossOrigin="anonymous"
                            poster="https://fast.wistia.com/assets/images/blank.gif"
                            aria-label="Video"
                            src="blob:https://bizgen.io/1fbd10bb-ce68-4778-8c2e-da54e5ac4c60"
                            controlslist="nodownload"
                            playsInline=""
                            preload="metadata"
                            type="video/m3u8"
                            x-webkit-airplay="allow"
                            style={{
                              background: "transparent",
                              display: "block",
                              height: "100%",
                              maxHeight: "none",
                              maxWidth: "none",
                              position: "static",
                              visibility: "visible",
                              width: "100%",
                              objectFit: "contain"
                            }}
                          />
                        </div>
                        <div
                          className="w-ui-container"
                          style={{
                            height: "100%",
                            left: 0,
                            position: "absolute",
                            top: 0,
                            width: "100%",
                            opacity: 1
                          }}
                        >
                          <div
                            className="w-vulcan-v2 w-css-reset"
                            id="w-vulcan-v2-227"
                            style={{
                              borderRadius: 0,
                              boxSizing: "border-box",
                              cursor: "default",
                              direction: "ltr",
                              height: "100%",
                              left: 0,
                              position: "absolute",
                              visibility: "visible",
                              top: 0,
                              width: "100%"
                            }}
                          >
                            <div
                              className="w-vulcan--background w-css-reset"
                              style={{
                                height: "100%",
                                left: 0,
                                position: "absolute",
                                top: 0,
                                width: "100%"
                              }}
                            >
                              <div
                                className="w-css-reset"
                                data-handle="statusBar"
                              />
                              <div
                                className="w-css-reset"
                                data-handle="backgroundFocus"
                              >
                                <button
                                  aria-label="Play Video: Bizgen Dashboard 4.0 Video"
                                  className="w-css-reset w-vulcan-v2-button"
                                  tabIndex={0}
                                  style={{
                                    width: 0,
                                    height: 0,
                                    pointerEvents: "none"
                                  }}
                                />
                              </div>
                              <div
                                className="w-css-reset"
                                data-handle="thumbnail"
                              >
                                <div>
                                  <div
                                    className="w-css-reset"
                                    style={{
                                      filter: "blur(5px)",
                                      height: "100%",
                                      left: 0,
                                      position: "absolute",
                                      top: 0,
                                      width: "100%",
                                      display: "block"
                                    }}
                                  >
                                    <img
                                      className="w-css-reset"
                                      srcSet=""
                                      src="https://fast.wistia.com/embed/medias/ccb85flh3l/swatch"
                                      alt="Video Thumbnail"
                                      aria-hidden="true"
                                      style={{
                                        backgroundColor: "rgb(0, 0, 0)",
                                        height: "100%",
                                        objectFit: "contain",
                                        position: "absolute",
                                        width: "100%",
                                        top: 0,
                                        left: 0,
                                        clip: "auto",
                                        display: "block",
                                        borderRadius: 0
                                      }}
                                    />
                                  </div>
                                  <div
                                    className="w-css-reset"
                                    style={{
                                      height: "100%",
                                      left: 0,
                                      opacity: 1,
                                      position: "absolute",
                                      top: 0,
                                      width: "100%",
                                      display: "block",
                                      transition: "opacity 3s"
                                    }}
                                  >
                                    <img
                                      className="w-css-reset"
                                      srcSet="https://embed-ssl.wistia.com/deliveries/06c4d198b7aaf8e1857ed98ec6588aa1a1330dee.webp?image_crop_resized=640x360 320w, https://embed-ssl.wistia.com/deliveries/06c4d198b7aaf8e1857ed98ec6588aa1a1330dee.webp?image_crop_resized=640x360 640w, https://embed-ssl.wistia.com/deliveries/06c4d198b7aaf8e1857ed98ec6588aa1a1330dee.webp?image_crop_resized=960x540 960w, https://embed-ssl.wistia.com/deliveries/06c4d198b7aaf8e1857ed98ec6588aa1a1330dee.webp?image_crop_resized=1280x720 1280w, https://embed-ssl.wistia.com/deliveries/06c4d198b7aaf8e1857ed98ec6588aa1a1330dee.webp?image_crop_resized=1920x1080 1920w, https://embed-ssl.wistia.com/deliveries/06c4d198b7aaf8e1857ed98ec6588aa1a1330dee.webp?image_crop_resized=1920x1080 3840w"
                                      src="https://embed-ssl.wistia.com/deliveries/06c4d198b7aaf8e1857ed98ec6588aa1a1330dee.webp?image_crop_resized=640x360"
                                      alt="Video Thumbnail"
                                      style={{
                                        backgroundColor: "rgb(0, 0, 0)",
                                        height: "100%",
                                        objectFit: "contain",
                                        position: "absolute",
                                        width: "100%",
                                        top: 0,
                                        left: 0,
                                        clip: "auto",
                                        display: "block",
                                        borderRadius: 0
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              aria-live="polite"
                              className="w-vulcan--aria-live w-css-reset"
                              aria-atomic="true"
                              style={{ position: "absolute", left: "-99999em" }}
                            />
                            <div
                              className="w-vulcan-overlays-table w-css-reset"
                              style={{
                                display: "table",
                                pointerEvents: "none",
                                position: "absolute",
                                width: "100%",
                                height: "calc(100% - 31px)"
                              }}
                            >
                              <div
                                className="w-vulcan-overlays--left w-css-reset"
                                style={{
                                  display: "table-cell",
                                  verticalAlign: "top",
                                  position: "relative",
                                  width: 0
                                }}
                              >
                                <div
                                  className="w-css-reset"
                                  style={{ height: "100%" }}
                                />
                              </div>
                              <div
                                className="w-vulcan-overlays--center w-css-reset"
                                style={{
                                  display: "table-cell",
                                  verticalAlign: "top",
                                  position: "relative",
                                  width: "100%"
                                }}
                              >
                                <div
                                  className="w-css-reset"
                                  style={{ height: "100%" }}
                                >
                                  <div
                                    className="w-css-reset"
                                    data-handle="bigPlayButton"
                                    style={{ pointerEvents: "auto" }}
                                  >
                                    <div
                                      className="w-bpb-wrapper w-css-reset w-css-reset-tree"
                                      style={{
                                        borderRadius: 0,
                                        display: "block",
                                        left: "calc(50%)",
                                        marginLeft: "-56.9434px",
                                        marginTop: "-36.4438px",
                                        overflow: "hidden",
                                        position: "absolute",
                                        top: "calc(50% + 0px)"
                                      }}
                                    >
                                      <button
                                        className="w-big-play-button w-css-reset-button-important w-vulcan-v2-button"
                                        aria-label="Play Video: Bizgen Dashboard 4.0 Video"
                                        tabIndex={0}
                                        type="button"
                                        style={{
                                          cursor: "pointer",
                                          height: "72.8875px",
                                          boxShadow: "none",
                                          width: "113.887px"
                                        }}
                                      >
                                        <div
                                          style={{
                                            background: "rgb(41, 73, 229)",
                                            display: "block",
                                            left: 0,
                                            height: "72.8875px",
                                            mixBlendMode: "darken",
                                            position: "absolute",
                                            top: 0,
                                            width: "113.887px"
                                          }}
                                        />
                                        <div
                                          style={{
                                            backgroundColor:
                                              "rgba(41, 73, 229, 0.7)",
                                            height: "72.8875px",
                                            left: 0,
                                            position: "absolute",
                                            top: 0,
                                            transition:
                                              "background-color 150ms",
                                            width: "113.887px"
                                          }}
                                        />
                                        <svg
                                          x="0px"
                                          y="0px"
                                          viewBox="0 0 125 80"
                                          enableBackground="new 0 0 125 80"
                                          aria-hidden="true"
                                          alt=""
                                          style={{
                                            fill: "rgb(255, 255, 255)",
                                            height: "72.8875px",
                                            left: 0,
                                            strokeWidth: 0,
                                            top: 0,
                                            width: "100%",
                                            position: "absolute"
                                          }}
                                        >
                                          <rect
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            fill="none"
                                            width={125}
                                            height={80}
                                          />
                                          <polygon
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            fill="#FFFFFF"
                                            points="53,22 53,58 79,40"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                  <div
                                    className="w-css-reset"
                                    data-handle="clickForSoundButton"
                                    style={{ pointerEvents: "auto" }}
                                  >
                                    <div
                                      className="w-css-reset w-css-reset-tree"
                                      data-handle="click-for-sound-backdrop"
                                      style={{
                                        display: "none",
                                        height: "100%",
                                        left: 0,
                                        pointerEvents: "auto",
                                        position: "absolute",
                                        top: 0,
                                        width: "100%"
                                      }}
                                    >
                                      <button
                                        aria-label="Click for sound"
                                        className="w-vulcan-v2-button click-for-sound-btn"
                                        style={{
                                          background: "rgba(0, 0, 0, 0.8)",
                                          border: "2px solid transparent",
                                          borderRadius: 60,
                                          cursor: "pointer",
                                          display: "flex",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                          outline: "none",
                                          pointerEvents: "auto",
                                          position: "absolute",
                                          right: "18.4996px",
                                          top: "18.4996px",
                                          maxWidth: "546.101px"
                                        }}
                                      >
                                        <div
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "flex-end",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            maxWidth: 0,
                                            transition: "max-width 200ms"
                                          }}
                                        >
                                          <span
                                            style={{
                                              color: "rgb(255, 255, 255)",
                                              fontFamily:
                                                "WistiaPlayerInter, Helvetica, sans-serif",
                                              fontSize: 15,
                                              fontWeight: 500,
                                              paddingLeft: "1em",
                                              whiteSpace: "nowrap",
                                              overflow: "hidden",
                                              textOverflow: "ellipsis",
                                              maxWidth: "583.1px"
                                            }}
                                          >
                                            Click for sound
                                          </span>
                                        </div>
                                        <svg
                                          viewBox="0 0 237 237"
                                          width="47.832421875"
                                          height="47.832421875"
                                        >
                                          <style
                                            dangerouslySetInnerHTML={{
                                              __html:
                                                "\n  @keyframes VOLUME_SMALL_WAVE_FLASH {\n    0% { opacity: 0; }\n    33% { opacity: 1; }\n    66% { opacity: 1; }\n    100% { opacity: 0; }\n  }\n\n  @keyframes VOLUME_LARGE_WAVE_FLASH {\n    0% { opacity: 0; }\n    33% { opacity: 1; }\n    66% { opacity: 1; }\n    100% { opacity: 0; }\n  }\n\n  .volume__small-wave {\n    animation: VOLUME_SMALL_WAVE_FLASH 2s infinite;\n    opacity: 0;\n  }\n\n  .volume__large-wave {\n    animation: VOLUME_LARGE_WAVE_FLASH 2s infinite .3s;\n    opacity: 0;\n  }\n"
                                            }}
                                          />
                                          <path
                                            fill="#fff"
                                            d="M88 107H65v24h24l23 23V84z"
                                          />
                                          <g
                                            fill="none"
                                            stroke="#fff"
                                            strokeLinecap="round"
                                            strokeWidth={10}
                                          >
                                            <path
                                              d="M142 86c9 21 9 44 0 65"
                                              className="volume__small-wave"
                                            />
                                            <path
                                              d="M165 74c13 23 13 66 0 89"
                                              className="volume__large-wave"
                                            />
                                          </g>
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                  <div
                                    className="w-css-reset"
                                    data-handle="playPauseNotifier"
                                    style={{ pointerEvents: "auto" }}
                                  />
                                  <div
                                    className="w-css-reset"
                                    data-handle="captions"
                                    style={{ pointerEvents: "auto" }}
                                  >
                                    <nothing />
                                  </div>
                                  <div
                                    className="w-css-reset"
                                    data-handle="playPauseLoading"
                                    style={{ pointerEvents: "auto" }}
                                  >
                                    <div
                                      className="w-css-reset w-css-reset-tree"
                                      style={{
                                        height: "100%",
                                        left: 0,
                                        pointerEvents: "none",
                                        position: "absolute",
                                        top: 0,
                                        width: "100%"
                                      }}
                                    >
                                      <button
                                        aria-label="Play Video"
                                        className="w-vulcan-v2-button"
                                        style={{
                                          background: "rgba(0, 0, 0, 0.6)",
                                          border: 0,
                                          borderRadius: "50%",
                                          cursor: "pointer",
                                          display: "none",
                                          height: "127.553px",
                                          left: "50%",
                                          margin: 0,
                                          padding: 0,
                                          pointerEvents: "auto",
                                          position: "absolute",
                                          opacity: 0,
                                          outline: "none",
                                          top: "50%",
                                          transform:
                                            "translate(-50%, -50%) scale(0.8)",
                                          transition:
                                            "opacity 200ms, transform 600ms",
                                          WebkitTapHighlightColor:
                                            "rgba(0, 0, 0, 0)",
                                          width: "127.553px"
                                        }}
                                      >
                                        <div
                                          style={{
                                            boxSizing: "border-box",
                                            height: "100%",
                                            padding:
                                              "43.0492px 43.0492px 43.0492px 52.6157px"
                                          }}
                                        >
                                          <div
                                            style={{
                                              height: "100%",
                                              width: "100%"
                                            }}
                                          >
                                            <div
                                              style={{
                                                display: "none",
                                                height: "100%",
                                                width: "100%"
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 11.556 16"
                                                enableBackground="new 0 0 11.556 16"
                                                aria-hidden="true"
                                                className="w-css-reset w-css-reset-tree"
                                                style={{
                                                  fill: "rgb(255, 255, 255)",
                                                  height: "100%",
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: "100%"
                                                }}
                                              >
                                                <g>
                                                  <rect
                                                    x={0}
                                                    y={0}
                                                    width="3.5"
                                                    height={12}
                                                  />
                                                  <rect
                                                    x="6.5"
                                                    y={0}
                                                    width="3.5"
                                                    height={12}
                                                  />
                                                </g>
                                              </svg>
                                            </div>
                                            <div
                                              style={{
                                                display: "block",
                                                height: "100%",
                                                width: "100%"
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 11.556 16"
                                                enableBackground="new 0 0 11.556 16"
                                                aria-hidden="true"
                                                className="w-css-reset w-css-reset-tree"
                                                style={{
                                                  fill: "rgb(255, 255, 255)",
                                                  height: "100%",
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: "100%"
                                                }}
                                              >
                                                <polygon points="11.556,7.5 0,15 0,0" />
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                      </button>
                                    </div>
                                  </div>
                                  <div
                                    className="w-css-reset"
                                    data-handle="transcript"
                                    style={{ pointerEvents: "auto" }}
                                  >
                                    <div
                                      className="w-css-reset"
                                      style={{ position: "absolute" }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="w-vulcan-overlays--right w-css-reset"
                                style={{
                                  display: "table-cell",
                                  verticalAlign: "top",
                                  position: "relative",
                                  width: 0
                                }}
                              >
                                <div
                                  className="w-css-reset"
                                  style={{ height: "100%" }}
                                />
                              </div>
                            </div>
                            <div
                              className="w-bottom-bar w-css-reset"
                              style={{
                                bottom: 0,
                                borderRadius: 0,
                                borderCollapse: "collapse",
                                display: "table",
                                height: 31,
                                pointerEvents: "none",
                                position: "absolute",
                                paddingLeft: 0,
                                paddingRight: 0,
                                right: 0,
                                tableLayout: "auto",
                                transform: "unset",
                                width: "calc(100% + 0px)"
                              }}
                            >
                              <div
                                className="w-bottom-bar-lower w-css-reset"
                                style={{ position: "relative" }}
                              >
                                <div
                                  style={{
                                    height: "100%",
                                    left: 0,
                                    position: "absolute",
                                    top: 0,
                                    width: "100%"
                                  }}
                                >
                                  <div
                                    style={{
                                      background: "rgb(41, 73, 229)",
                                      display: "none",
                                      height: "100%",
                                      mixBlendMode: "darken",
                                      left: 0,
                                      opacity: 1,
                                      position: "absolute",
                                      top: 0,
                                      transition: "opacity",
                                      width: "100%"
                                    }}
                                  />
                                  <div
                                    style={{
                                      background: "rgba(41, 73, 229, 0.85)",
                                      borderRadius: 0,
                                      height: "100%",
                                      opacity: 1,
                                      left: 0,
                                      position: "absolute",
                                      top: 0,
                                      transition: "opacity",
                                      width: "100%"
                                    }}
                                  />
                                </div>
                                <div style={{ display: "none" }}>
                                  <div
                                    style={{
                                      background: "rgb(41, 73, 229)",
                                      display: "none",
                                      height: "100%",
                                      mixBlendMode: "darken",
                                      left: 0,
                                      opacity: 1,
                                      position: "absolute",
                                      top: 0,
                                      transition: "opacity",
                                      width: "100%"
                                    }}
                                  />
                                  <div
                                    style={{
                                      background: "rgba(41, 73, 229, 0.85)",
                                      borderRadius: 0,
                                      height: "100%",
                                      opacity: 1,
                                      left: 0,
                                      position: "absolute",
                                      top: 0,
                                      transition: "opacity",
                                      width: "100%"
                                    }}
                                  />
                                </div>
                                <div
                                  className="w-bottom-bar-left w-css-reset"
                                  style={{
                                    display: "table-cell",
                                    verticalAlign: "top",
                                    position: "relative",
                                    width: 0,
                                    opacity: 1,
                                    transition: "opacity"
                                  }}
                                >
                                  <div
                                    className="w-bottom-bar-left-inner w-css-reset"
                                    style={{
                                      height: 31,
                                      position: "relative",
                                      pointerEvents: "auto",
                                      whiteSpace: "nowrap"
                                    }}
                                  />
                                </div>
                                <div
                                  className="w-bottom-bar-middle w-css-reset"
                                  style={{
                                    display: "table-cell",
                                    verticalAlign: "top",
                                    position: "relative",
                                    width: "100%",
                                    opacity: 1,
                                    transition: "opacity"
                                  }}
                                >
                                  <div
                                    className="w-bottom-bar-middle-inner w-css-reset"
                                    style={{
                                      height: 31,
                                      position: "relative",
                                      pointerEvents: "auto",
                                      whiteSpace: "nowrap",
                                      opacity: 1,
                                      transform: "translateY(0px)",
                                      transition: "opacity, transform"
                                    }}
                                  >
                                    <div
                                      className="w-css-reset"
                                      data-handle="playbar"
                                      style={{
                                        height: "100%",
                                        position: "relative"
                                      }}
                                    >
                                      <div
                                        className="w-playbar-wrapper w-css-reset w-css-reset-tree"
                                        style={{
                                          display: "flex",
                                          height: "100%",
                                          width: "100%"
                                        }}
                                      >
                                        <div
                                          className="w-playbar__time"
                                          style={{
                                            boxSizing: "content-box",
                                            color: "white",
                                            fontFamily:
                                              "WistiaPlayerInterNumbersSemiBold, Helvetica, sans-serif",
                                            fontSize: "11.8442px",
                                            letterSpacing: "0.455547px",
                                            lineHeight: 31,
                                            paddingLeft: "6.85033px",
                                            pointerEvents: "none",
                                            position: "relative",
                                            textAlign: "center",
                                            width: "25.5106px"
                                          }}
                                        >
                                          2:36
                                        </div>
                                        <div
                                          style={{
                                            width: "100%",
                                            position: "relative"
                                          }}
                                        >
                                          <div
                                            aria-label="Playbar"
                                            aria-orientation="horizontal"
                                            aria-valuemax="156.138"
                                            aria-valuemin={0}
                                            aria-valuenow={0}
                                            aria-valuetext="0 seconds"
                                            role="slider"
                                            tabIndex={0}
                                            style={{
                                              cursor: "pointer",
                                              flex: "1 1 0%",
                                              height: 31,
                                              outline: "none",
                                              marginLeft: "9.11094px",
                                              marginRight: "9.11094px",
                                              position: "relative"
                                            }}
                                          >
                                            <canvas
                                              height="29.0625"
                                              width="482.15184004934207"
                                              style={{
                                                height: 31,
                                                left: "-9.11094px",
                                                position: "absolute",
                                                top: 0,
                                                width: "514.295px"
                                              }}
                                            />
                                            <div
                                              style={{
                                                borderRadius: "50%",
                                                height: "10.2043px",
                                                left: "-5.10213px",
                                                opacity: 0,
                                                position: "absolute",
                                                top: "10.3979px",
                                                width: "10.2043px"
                                              }}
                                            />
                                            <div
                                              className="w-storyboard-anchor"
                                              style={{
                                                height: 0,
                                                left: 0,
                                                position: "absolute",
                                                top: 0,
                                                width: "100%"
                                              }}
                                            >
                                              <div
                                                className="w-storyboard"
                                                style={{
                                                  bottom: 0,
                                                  height: "77.0917px",
                                                  left: 356,
                                                  opacity: 0,
                                                  overflow: "hidden",
                                                  pointerEvents: "none",
                                                  position: "absolute",
                                                  transition:
                                                    "opacity 150ms, transform 1000ms cubic-bezier(0, 0.8, 0, 1)",
                                                  transform: "scale(0.83)",
                                                  transformOrigin:
                                                    "center bottom",
                                                  width: "136.445px"
                                                }}
                                              >
                                                <img
                                                  src="https://embed-ssl.wistia.com/deliveries/4ee29d85d1458b02737960f13e0ad4af80ab53e9.bin"
                                                  className="w-css-reset-max-width-none-important"
                                                  alt=""
                                                  style={{
                                                    height: "1541.83px",
                                                    left: "-136.445px",
                                                    position: "absolute",
                                                    top: "-1310.56px",
                                                    verticalAlign: "top",
                                                    width: "1364.45px"
                                                  }}
                                                />
                                                <div
                                                  className="w-storyboard-time"
                                                  style={{
                                                    bottom: "0.5em",
                                                    color: "rgb(255, 255, 255)",
                                                    display: "inline-block",
                                                    fontFamily:
                                                      "WistiaPlayerInterNumbersSemiBold, Helvetica, sans-serif",
                                                    fontSize: "11.8442px",
                                                    left: 0,
                                                    lineHeight: "30.9772px",
                                                    position: "absolute",
                                                    textAlign: "center",
                                                    width: "100%"
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      background:
                                                        "rgba(0, 0, 0, 0.7)",
                                                      borderRadius: "2.73328px",
                                                      display: "inline-block",
                                                      lineHeight: "1em",
                                                      padding: "5.46656px"
                                                    }}
                                                  >
                                                    2:14
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="w-bottom-bar-right w-css-reset"
                                  style={{
                                    display: "table-cell",
                                    verticalAlign: "top",
                                    position: "relative",
                                    width: 0,
                                    opacity: 1,
                                    transition: "opacity",
                                    whiteSpace: "nowrap"
                                  }}
                                >
                                  <div
                                    className="w-bottom-bar-right-inner-anchor w-css-reset"
                                    style={{
                                      height: 0,
                                      position: "relative",
                                      pointerEvents: "auto",
                                      whiteSpace: "nowrap",
                                      display: "inline-block",
                                      right: 0,
                                      top: 0,
                                      verticalAlign: "top"
                                    }}
                                  >
                                    <div
                                      className="w-bottom-bar-right-inner w-css-reset"
                                      style={{
                                        height: 31,
                                        position: "absolute",
                                        pointerEvents: "none",
                                        whiteSpace: "nowrap",
                                        display: "inline-block",
                                        opacity: 0,
                                        right: 0,
                                        top: 0,
                                        transform: "translateY(25%)",
                                        transition: "opacity, transform",
                                        paddingRight: 0
                                      }}
                                    >
                                      <div
                                        className="w-css-reset"
                                        data-handle="captionsButton"
                                        style={{
                                          display: "inline-block",
                                          verticalAlign: "top"
                                        }}
                                      >
                                        <div
                                          className="w-vulcan-button-wrapper w-css-reset"
                                          style={{
                                            display: "inline-block",
                                            height: 31,
                                            position: "relative",
                                            verticalAlign: "top",
                                            width: "36.4438px"
                                          }}
                                        >
                                          <button
                                            className="w-vulcan-v2-button w-css-reset w-css-reset-tree w-css-reset-button-important"
                                            tabIndex={0}
                                            aria-expanded="false"
                                            aria-label="Show captions menu"
                                            title="Show captions menu"
                                            style={{
                                              backgroundColor:
                                                "rgba(0, 0, 0, 0)",
                                              borderRadius: 0,
                                              boxShadow: "none",
                                              cursor: "pointer",
                                              height: "100%",
                                              position: "relative",
                                              transition:
                                                "background-color 150ms",
                                              width: "calc(100% + 0px)",
                                              paddingRight: 0
                                            }}
                                          >
                                            <div
                                              className="w-vulcan-icon-wrapper"
                                              data-handle="captionsButton_icon_wrapper"
                                              style={{
                                                boxSizing: "border-box",
                                                height: "100%",
                                                position: "relative",
                                                opacity: 1,
                                                transform: "scale(1.001)",
                                                transition: "transform 200ms"
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 40 34"
                                                enableBackground="new 0 0 40 34"
                                                aria-hidden="true"
                                                style={{
                                                  fill: "none",
                                                  height: "100%",
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: "100%"
                                                }}
                                              >
                                                <path
                                                  d="M18.4 18.7C17.9 19.4 17.3 19.9 16.3 19.9C15 19.9 13.9 18.8 13.9 17.1C13.9 15.5 14.9 14.3 16.3 14.3C17.3 14.3 17.9 14.8 18.3 15.5"
                                                  stroke="white"
                                                  strokeWidth="1.8"
                                                  strokeLinecap="round"
                                                />
                                                <path
                                                  d="M25.8 18.7C25.3 19.4 24.7 19.9 23.7 19.9C22.4 19.9 21.3 18.8 21.3 17.1C21.3 15.5 22.3 14.3 23.7 14.3C24.7 14.3 25.3 14.8 25.7 15.5"
                                                  stroke="white"
                                                  strokeWidth="1.8"
                                                  strokeLinecap="round"
                                                />
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M31 21.9811C31 23.5912 29.6 25 28 25H12C10.4 25 9 23.5912 9 21.9811V12.0189C9 10.4088 10.4 9 12 9H28C29.6 9 31 10.4088 31 12.0189V21.9811Z"
                                                  stroke="white"
                                                  strokeWidth={2}
                                                  strokeLinecap="round"
                                                />
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                      <div
                                        className="w-css-reset"
                                        data-handle="volumeButton"
                                        style={{
                                          display: "inline-block",
                                          verticalAlign: "top"
                                        }}
                                      >
                                        <div
                                          className="w-vulcan-button-wrapper w-css-reset"
                                          style={{
                                            display: "inline-block",
                                            height: 31,
                                            position: "relative",
                                            verticalAlign: "top",
                                            width: "36.4438px"
                                          }}
                                        >
                                          <button
                                            className="w-vulcan-v2-button w-css-reset w-css-reset-tree w-css-reset-button-important"
                                            tabIndex={0}
                                            aria-label="Mute"
                                            title="Mute"
                                            style={{
                                              backgroundColor:
                                                "rgba(0, 0, 0, 0)",
                                              borderRadius: 0,
                                              boxShadow: "none",
                                              cursor: "pointer",
                                              height: "100%",
                                              position: "relative",
                                              transition:
                                                "background-color 150ms",
                                              width: "calc(100% + 0px)",
                                              paddingRight: 0
                                            }}
                                          >
                                            <div
                                              className="w-vulcan-icon-wrapper"
                                              data-handle="volumeButton_icon_wrapper"
                                              style={{
                                                boxSizing: "border-box",
                                                height: "100%",
                                                position: "relative",
                                                opacity: 1,
                                                transform: "scale(1.001)",
                                                transition: "transform 200ms"
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 40 34"
                                                enableBackground="new 0 0 40 34"
                                                aria-hidden="true"
                                                style={{
                                                  fill: "rgb(255, 255, 255)",
                                                  height: "100%",
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: "100%"
                                                }}
                                              >
                                                <g
                                                  style={{
                                                    transform:
                                                      "translateX(1.25px)",
                                                    transition:
                                                      "transform 100ms"
                                                  }}
                                                >
                                                  <g>
                                                    <path d="M13.8,14.2c-0.5,0.5-1.4,0.8-2,0.8h-1.6C9.5,15,9,15.5,9,16.2v1.6c0,0.7,0.5,1.2,1.2,1.2h1.6c0.7,0,1.6,0.4,2,0.8l2.3,2.3c0.5,0.5,0.8,0.3,0.8-0.4v-9.6c0-0.7-0.4-0.8-0.8-0.4L13.8,14.2z" />
                                                  </g>
                                                  <g>
                                                    <path
                                                      fill="none"
                                                      stroke="#ffffff"
                                                      stroke-line-cap="round"
                                                      strokeMiterlimit={10}
                                                      strokeWidth={2}
                                                      d="M22,11.7c0,0,1.1,2.5,1.1,5s-1.1,5-1.1,5"
                                                      style={{
                                                        opacity: 1,
                                                        transition:
                                                          "opacity 100ms"
                                                      }}
                                                    />
                                                    <path
                                                      fill="none"
                                                      stroke="#ffffff"
                                                      stroke-line-cap="round"
                                                      strokeMiterlimit={10}
                                                      strokeWidth={2}
                                                      d="M25.8,9.2c0,0,1.7,3.8,1.7,7.5c0,3.7-1.7,7.5-1.7,7.5"
                                                      style={{
                                                        opacity: 1,
                                                        transition:
                                                          "opacity 100ms"
                                                      }}
                                                    />
                                                  </g>
                                                  <g
                                                    style={{
                                                      opacity: 0,
                                                      transition:
                                                        "opacity 100ms"
                                                    }}
                                                  >
                                                    <line
                                                      fill="none"
                                                      stroke="#ffffff"
                                                      stroke-line-cap="round"
                                                      strokeMiterlimit={10}
                                                      strokeWidth="1.8102"
                                                      x1="19.2"
                                                      y1={15}
                                                      x2="23.2"
                                                      y2={19}
                                                    />
                                                    <line
                                                      fill="none"
                                                      stroke="#ffffff"
                                                      stroke-line-cap="round"
                                                      strokeMiterlimit={10}
                                                      strokeWidth="1.8102"
                                                      x1="19.2"
                                                      y1={19}
                                                      x2="23.2"
                                                      y2={15}
                                                    />
                                                  </g>
                                                </g>
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                      <div
                                        className="w-css-reset"
                                        data-handle="settingsButton"
                                        style={{
                                          display: "inline-block",
                                          verticalAlign: "top"
                                        }}
                                      >
                                        <div
                                          className="w-vulcan-button-wrapper w-css-reset"
                                          style={{
                                            display: "inline-block",
                                            height: 31,
                                            position: "relative",
                                            verticalAlign: "top",
                                            width: "36.4438px"
                                          }}
                                        >
                                          <button
                                            className="w-vulcan-v2-button w-css-reset w-css-reset-tree w-css-reset-button-important"
                                            tabIndex={0}
                                            aria-expanded="false"
                                            aria-label="Show settings menu"
                                            title="Show settings menu"
                                            style={{
                                              backgroundColor:
                                                "rgba(0, 0, 0, 0)",
                                              borderRadius: 0,
                                              boxShadow: "none",
                                              cursor: "pointer",
                                              height: "100%",
                                              position: "relative",
                                              transition:
                                                "background-color 150ms",
                                              width: "calc(100% + 0px)",
                                              paddingRight: 0
                                            }}
                                          >
                                            <div
                                              className="w-vulcan-icon-wrapper"
                                              data-handle="settingsButton_icon_wrapper"
                                              style={{
                                                boxSizing: "border-box",
                                                height: "100%",
                                                position: "relative",
                                                opacity: 1,
                                                transform: "scale(1.001)",
                                                transition: "transform 200ms"
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 40 34"
                                                enableBackground="new 0 0 40 34"
                                                aria-hidden="true"
                                                style={{
                                                  fill: "rgb(255, 255, 255)",
                                                  height: "100%",
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: "100%"
                                                }}
                                              >
                                                <g>
                                                  <g>
                                                    <path d="M28.3,16.4h-1.9c-0.4,0-0.8-0.3-0.9-0.7l-0.4-1.1c-0.2-0.3-0.1-0.8,0.2-1.1l1.3-1.3c0.3-0.3,0.3-0.7,0-1l-0.4-0.4c-0.3-0.3-0.7-0.3-1,0l-1.3,1.3c-0.3,0.3-0.8,0.3-1.1,0.1l-1.1-0.5c-0.4-0.1-0.7-0.5-0.7-0.9V9.1c0-0.4-0.3-0.7-0.7-0.7h-0.6c-0.4,0-0.7,0.3-0.7,0.7v1.7c0,0.4-0.3,0.8-0.7,0.9l-1.2,0.5c-0.3,0.2-0.8,0.1-1.1-0.2l-1.2-1.2c-0.3-0.3-0.7-0.3-1,0l-0.4,0.4c-0.3,0.3-0.3,0.7,0,1l1.2,1.2c0.3,0.3,0.3,0.8,0.1,1.1l-0.5,1.2c-0.1,0.4-0.5,0.7-0.9,0.7h-1.6c-0.4,0-0.7,0.3-0.7,0.7v0.6c0,0.4,0.3,0.7,0.7,0.7h1.6c0.4,0,0.8,0.3,0.9,0.7l0.5,1.2c0.2,0.3,0.1,0.8-0.1,1.1l-1.2,1.2c-0.3,0.3-0.3,0.7,0,1l0.4,0.4c0.3,0.3,0.7,0.3,1,0l1.2-1.2c0.3-0.3,0.8-0.3,1.1-0.2l1.2,0.5c0.4,0.1,0.7,0.5,0.7,0.9v1.7c0,0.4,0.3,0.7,0.7,0.7h0.6c0.4,0,0.7-0.3,0.7-0.7V24c0-0.4,0.3-0.8,0.7-0.9l1.1-0.5c0.3-0.2,0.8-0.1,1.1,0.1l1.3,1.3c0.3,0.3,0.7,0.3,1,0l0.4-0.4c0.3-0.3,0.3-0.7,0-1l-1.3-1.3C25,21,25,20.5,25.1,20.2l0.4-1.1c0.1-0.4,0.5-0.7,0.9-0.7h1.9c0.4,0,0.7-0.3,0.7-0.7v-0.6C29,16.7,28.7,16.4,28.3,16.4z M23.8,17.5c0,2.2-1.8,3.9-3.9,3.9c-2.2,0-3.9-1.8-3.9-3.9s1.7-3.9,3.9-3.9C22.1,13.6,23.8,15.3,23.8,17.5z" />
                                                  </g>
                                                </g>
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                      <div
                                        className="w-css-reset"
                                        data-handle="fullscreenControl"
                                        style={{
                                          display: "inline-block",
                                          verticalAlign: "top"
                                        }}
                                      >
                                        <div
                                          className="w-vulcan-button-wrapper w-css-reset"
                                          style={{
                                            display: "inline-block",
                                            height: 31,
                                            position: "relative",
                                            verticalAlign: "top",
                                            width: "36.4438px"
                                          }}
                                        >
                                          <button
                                            className="w-vulcan-v2-button w-css-reset w-css-reset-tree w-css-reset-button-important"
                                            tabIndex={0}
                                            aria-label="Fullscreen"
                                            title="Fullscreen"
                                            style={{
                                              backgroundColor:
                                                "rgba(0, 0, 0, 0)",
                                              borderRadius: 0,
                                              boxShadow: "none",
                                              cursor: "pointer",
                                              height: "100%",
                                              position: "relative",
                                              transition:
                                                "background-color 150ms",
                                              width: "calc(100% + 0px)",
                                              paddingRight: 0
                                            }}
                                          >
                                            <div
                                              className="w-vulcan-icon-wrapper"
                                              data-handle="fullscreenControl_icon_wrapper"
                                              style={{
                                                boxSizing: "border-box",
                                                height: "100%",
                                                position: "relative",
                                                opacity: 1,
                                                transform: "scale(1.001)",
                                                transition: "transform 200ms"
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 40 34"
                                                enableBackground="new 0 0 40 34"
                                                aria-hidden="true"
                                                style={{
                                                  fill: "rgb(255, 255, 255)",
                                                  height: "100%",
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: "100%"
                                                }}
                                              >
                                                <g>
                                                  <g>
                                                    <polyline
                                                      fill="none"
                                                      stroke="#ffffff"
                                                      strokeWidth={2}
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeMiterlimit={10}
                                                      points="31.4,12.6 31.4,8.7 25.8,8.7"
                                                    />
                                                    <polyline
                                                      fill="none"
                                                      stroke="#ffffff"
                                                      strokeWidth={2}
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeMiterlimit={10}
                                                      points="14.7,8.7 9.1,8.7 9.1,12.6"
                                                    />
                                                    <polyline
                                                      fill="none"
                                                      stroke="#ffffff"
                                                      strokeWidth={2}
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeMiterlimit={10}
                                                      points="25.8,24.8 31.4,24.8 31.4,20.9"
                                                    />
                                                    <polyline
                                                      fill="none"
                                                      stroke="#ffffff"
                                                      strokeWidth={2}
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeMiterlimit={10}
                                                      points="9.1,20.9 9.1,24.8 14.7,24.8"
                                                    />
                                                  </g>
                                                  <rect
                                                    x="13.7"
                                                    y="12.3"
                                                    fill="none"
                                                    stroke="#ffffff"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeMiterlimit={10}
                                                    enableBackground="new"
                                                    width="13.3"
                                                    height="8.9"
                                                  />
                                                </g>
                                              </svg>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                      <div
                                        className="w-css-reset"
                                        data-handle="wistiaLogo"
                                        style={{
                                          display: "inline-block",
                                          verticalAlign: "top"
                                        }}
                                      >
                                        <div
                                          className="w-vulcan-button-wrapper w-css-reset"
                                          style={{
                                            display: "inline-block",
                                            height: 31,
                                            position: "relative",
                                            verticalAlign: "top",
                                            width: "109.331px"
                                          }}
                                        >
                                          <a
                                            className="w-vulcan-v2-button w-css-reset w-css-reset-tree w-css-reset-button-important"
                                            tabIndex={0}
                                            href="https://wistia.com/about-wistia?utm_type=player&utm_campaign=wistia-branding&utm_medium=referral&utm_source=wistia&about=1954078"
                                            aria-label="Wistia Logo -- Learn More"
                                            target="_blank"
                                            title="Wistia Logo -- Learn More"
                                            style={{
                                              backgroundColor:
                                                "rgba(0, 0, 0, 0)",
                                              borderRadius: 0,
                                              boxShadow: "none",
                                              cursor: "pointer",
                                              height: "100%",
                                              position: "relative",
                                              transition:
                                                "background-color 150ms",
                                              width: "calc(100% + 0px)",
                                              paddingRight: 0,
                                              display: "block",
                                              outline: "none"
                                            }}
                                          >
                                            <div
                                              className="w-vulcan-icon-wrapper"
                                              data-handle="wistiaLogo_icon_wrapper"
                                              style={{
                                                boxSizing: "border-box",
                                                height: "100%",
                                                position: "relative",
                                                opacity: 1,
                                                transform: "scale(1.001)",
                                                transition: "transform 200ms"
                                              }}
                                            >
                                              <svg
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 103 34"
                                                enableBackground="new 0 0 103 34"
                                                aria-hidden="true"
                                                fill="none"
                                                style={{
                                                  fill: "rgb(255, 255, 255)",
                                                  height: "100%",
                                                  left: 0,
                                                  strokeWidth: 0,
                                                  top: 0,
                                                  width: "100%"
                                                }}
                                              >
                                                <path
                                                  fill="#fff"
                                                  d="M21.642 19.358h-2.406c-.76 0-1.485.196-1.985.77l-3.167 3.642c2.306.12 4.722.12 6.418.12 8.648 0 10.024-5.212 10.079-7.823-.79.94-3.027 3.287-8.944 3.287l.005.005Zm7.853-8.383c-.04.446-.285 2.266-5.457 2.266-4.206 0-5.902 0-10.049-.08l3.107 3.572c.605.695 1.475.965 2.395.98 1.026.015 2.441.03 2.666.03 5.817 0 8.293-2.711 8.293-4.642 0-.97-.325-1.655-.95-2.12l-.005-.005ZM45.19 13.056h3.092v7.308c0 .825-.17 1.51-.505 2.066-.33.55-.78.96-1.346 1.225-.56.265-1.185.4-1.885.4s-1.316-.135-1.886-.4a3.123 3.123 0 0 1-1.346-1.215 2.277 2.277 0 0 1-.1-.19c-.03.065-.065.125-.1.19-.33.545-.78.95-1.345 1.215-.56.265-1.186.4-1.886.4s-1.315-.13-1.86-.385a3.008 3.008 0 0 1-1.3-1.225c-.326-.55-.491-1.246-.496-2.076l-.075-7.308h3.091v6.748c0 .475.11.81.335 1.01.23.2.515.3.85.3.336 0 .64-.1.88-.3.25-.2.376-.535.376-1.01V13.06h3.066v6.748c0 .475.12.81.365 1.01.25.2.55.3.895.3.346 0 .63-.1.85-.3.22-.2.336-.535.336-1.01V13.06l-.005-.005Zm7.514-3.921a1.891 1.891 0 0 0-.86-.195c-.316 0-.606.065-.871.195-.26.13-.465.31-.625.55a1.49 1.49 0 0 0-.225.815c0 .48.16.866.485 1.15.33.28.74.42 1.235.42.315 0 .605-.06.86-.184.266-.13.476-.31.626-.55.15-.236.225-.516.225-.84 0-.326-.075-.58-.225-.816-.15-.235-.36-.42-.626-.55v.005Zm-2.411 14.67h3.09V13.186h-3.09v10.62Zm10.198-4.942a5.58 5.58 0 0 0-.58-.69c-.2-.195-.42-.4-.655-.625-.2-.185-.35-.35-.45-.495a.825.825 0 0 1-.15-.46c0-.286.155-.49.465-.61.31-.13.705-.196 1.195-.196.145 0 .3.005.475.02l-.29-2.816a5.143 5.143 0 0 0-.86-.065c-.765 0-1.485.1-2.15.3-.661.195-1.206.525-1.636 1-.43.476-.646 1.106-.646 1.891 0 .56.105 1.05.31 1.47.216.426.5.821.86 1.196.196.185.386.375.581.57.21.196.36.36.45.506.095.135.14.29.14.46 0 .285-.16.5-.485.645-.315.145-.765.215-1.355.215-.22 0-.4-.015-.54-.045l.4 2.861c.23.045.5.065.82.065.875 0 1.66-.12 2.356-.365.705-.245 1.26-.62 1.68-1.13.416-.516.625-1.156.625-1.926 0-.35-.05-.675-.15-.98-.1-.31-.235-.576-.4-.806l-.01.01Zm5.607 1.946c-.215-.215-.325-.55-.325-1v-3.912h2.241v-2.71h-2.24V10.51l-3.092.89v9.384c0 1.105.225 1.926.68 2.47.46.536 1.146.806 2.056.806.45 0 .885-.03 1.3-.095.416-.065.77-.165 1.066-.3l.55-2.666c-.345.085-.755.13-1.235.13-.45 0-.786-.105-1-.32Zm3.852 2.996h3.09V13.186h-3.09v10.62Zm2.41-14.67a1.891 1.891 0 0 0-.86-.195c-.315 0-.605.065-.87.195-.26.13-.465.31-.625.55a1.49 1.49 0 0 0-.225.815c0 .48.16.866.485 1.15.33.28.74.42 1.235.42.315 0 .606-.06.86-.184.266-.13.476-.31.626-.55.15-.236.225-.516.225-.84 0-.326-.075-.58-.225-.816-.15-.235-.36-.42-.625-.55v.005Zm13.65 4.051v10.62h-3.09v-1.747c-.316.51-.706.936-1.176 1.276-.665.48-1.45.72-2.346.72-.895 0-1.685-.235-2.366-.71-.675-.48-1.2-1.14-1.57-1.976-.375-.845-.56-1.805-.56-2.88 0-1.076.185-2.021.56-2.862.375-.845.895-1.505 1.57-1.976.68-.48 1.47-.72 2.366-.72.895 0 1.68.245 2.346.73.465.336.855.756 1.175 1.266V13.19h3.091v-.005Zm-3.29 6.623c.214-.386.325-.826.325-1.32 0-.496-.11-.936-.326-1.321a2.307 2.307 0 0 0-.86-.906 2.29 2.29 0 0 0-1.205-.335c-.44 0-.84.11-1.206.335a2.34 2.34 0 0 0-.86.916 2.653 2.653 0 0 0-.325 1.31c0 .485.11.93.325 1.32.215.386.5.69.86.916.365.215.765.32 1.206.32.44 0 .84-.105 1.205-.32a2.3 2.3 0 0 0 .86-.915Z"
                                                />
                                              </svg>
                                            </div>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="w-ellipsis w-css-reset"
                                    style={{
                                      height: 31,
                                      position: "relative",
                                      pointerEvents: "auto",
                                      whiteSpace: "nowrap",
                                      display: "inline-block"
                                    }}
                                  >
                                    <div
                                      className="w-css-reset"
                                      data-handle="ellipsisButton"
                                      style={{
                                        display: "inline-block",
                                        verticalAlign: "top"
                                      }}
                                    >
                                      <div
                                        className="w-vulcan-button-wrapper w-css-reset"
                                        style={{
                                          display: "inline-block",
                                          height: 31,
                                          position: "relative",
                                          verticalAlign: "top",
                                          width: "36.4438px"
                                        }}
                                      >
                                        <button
                                          className="w-vulcan-v2-button w-css-reset w-css-reset-tree w-css-reset-button-important"
                                          tabIndex={0}
                                          aria-label="Show more buttons"
                                          title="Show more buttons"
                                          style={{
                                            backgroundColor: "rgba(0, 0, 0, 0)",
                                            borderRadius: 0,
                                            boxShadow: "none",
                                            cursor: "pointer",
                                            height: "100%",
                                            position: "relative",
                                            transition:
                                              "background-color 150ms",
                                            width: "calc(100% + 0px)",
                                            paddingRight: 0
                                          }}
                                        >
                                          <div
                                            className="w-vulcan-icon-wrapper"
                                            data-handle="ellipsisButton_icon_wrapper"
                                            style={{
                                              boxSizing: "border-box",
                                              height: "100%",
                                              position: "relative",
                                              opacity: 1,
                                              transform: "scale(1.001)",
                                              transition: "transform 200ms"
                                            }}
                                          >
                                            <svg
                                              x="0px"
                                              y="0px"
                                              viewBox="0 0 40 34"
                                              enableBackground="new 0 0 40 34"
                                              aria-hidden="true"
                                              style={{
                                                fill: "rgb(255, 255, 255)",
                                                height: "100%",
                                                left: 0,
                                                strokeWidth: 0,
                                                top: 0,
                                                width: "100%"
                                              }}
                                            >
                                              <circle cx={20} cy={17} r={2} />
                                              <circle cx={13} cy={17} r={2} />
                                              <circle cx={27} cy={17} r={2} />
                                            </svg>
                                          </div>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="w-foreground w-css-reset"
                              style={{
                                height: "100%",
                                left: 0,
                                pointerEvents: "none",
                                position: "absolute",
                                top: 0,
                                width: "100%"
                              }}
                            >
                              <div
                                className="w-css-reset"
                                data-handle="contextMenu"
                                style={{ pointerEvents: "auto" }}
                              />
                              <div
                                className="w-css-reset"
                                data-handle="loadingHourglass"
                                style={{ pointerEvents: "auto" }}
                              />
                              <div
                                className="w-css-reset"
                                data-handle="focusOutline"
                                style={{ pointerEvents: "auto" }}
                              >
                                <div
                                  className="w-focus-outline"
                                  style={{
                                    boxShadow:
                                      "rgb(255, 255, 255) 0px 0px 0px 2px inset",
                                    borderRadius: 0,
                                    display: "none",
                                    height: "100%",
                                    left: 0,
                                    pointerEvents: "none",
                                    position: "absolute",
                                    right: 0,
                                    width: "100%"
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <style
                            id="wistia_234_style"
                            type="text/css"
                            className="wistia_injected_style"
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n      #wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset{font-size:14px;}\n#wistia_chrome_222 #wistia_grid_228_wrapper div.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper span.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper ul.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper li.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper label.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper fieldset.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper button.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper img.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper a.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper svg.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper p.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper a.w-css-reset{border:0;}\n#wistia_chrome_222 #wistia_grid_228_wrapper h1.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:2em;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper h2.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:1.5em;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper h3.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:1.17em;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper p.w-css-reset{margin:1.4em 0;}\n#wistia_chrome_222 #wistia_grid_228_wrapper a.w-css-reset{display:inline;}\n#wistia_chrome_222 #wistia_grid_228_wrapper span.w-css-reset{display:inline;}\n#wistia_chrome_222 #wistia_grid_228_wrapper svg.w-css-reset{display:inline;}\n#wistia_chrome_222 #wistia_grid_228_wrapper ul.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased;list-style-type:none}\n#wistia_chrome_222 #wistia_grid_228_wrapper ol.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased;list-style-type:none}\n#wistia_chrome_222 #wistia_grid_228_wrapper li.w-css-reset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased;list-style-type:none}\n#wistia_chrome_222 #wistia_grid_228_wrapper ul:before.w-css-reset{display:none}\n#wistia_chrome_222 #wistia_grid_228_wrapper ol:before.w-css-reset{display:none}\n#wistia_chrome_222 #wistia_grid_228_wrapper li:before.w-css-reset{display:none}\n#wistia_chrome_222 #wistia_grid_228_wrapper ul:after.w-css-reset{display:none}\n#wistia_chrome_222 #wistia_grid_228_wrapper ol:after.w-css-reset{display:none}\n#wistia_chrome_222 #wistia_grid_228_wrapper li:after.w-css-reset{display:none}\n#wistia_chrome_222 #wistia_grid_228_wrapper label.w-css-reset{background-attachment:scroll;background-color:transparent;background-image:none;background-position:0 0;background-repeat:no-repeat;background-size:100% 100%;float:none;outline:none}\n#wistia_chrome_222 #wistia_grid_228_wrapper button.w-css-reset{background-attachment:scroll;background-color:transparent;background-image:none;background-position:0 0;background-repeat:no-repeat;background-size:100% 100%;border:0;border-radius:0;outline:none;position:static}\n#wistia_chrome_222 #wistia_grid_228_wrapper img.w-css-reset{border:0;display:inline-block;vertical-align:top;border-radius:0;outline:none;position:static}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset button::-moz-focus-inner{border: 0;}\n      #wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree {font-size:14px;}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree div{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree span{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree ul{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree li{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree label{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree fieldset{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree button{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree img{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree a{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree svg{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree p{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree a{border:0;}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree h1{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:2em;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree h2{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:1.5em;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree h3{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:1.17em;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree p{margin:1.4em 0;}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree a{display:inline;}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree span{display:inline;}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree svg{display:inline;}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree ul{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased;list-style-type:none}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree ol{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased;list-style-type:none}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree li{box-sizing:inherit;box-shadow:none;color:inherit;display:block;float:none;font:inherit;font-family:inherit;font-style:normal;font-weight:normal;font-size:inherit;letter-spacing:0;line-height:inherit;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;padding:0;position:static;text-decoration:none;text-transform:none;text-shadow:none;transition:none;word-wrap:normal;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-font-smoothing:antialiased;list-style-type:none}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree ul:before{display:none}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree ol:before{display:none}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree li:before{display:none}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree ul:after{display:none}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree ol:after{display:none}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree li:after{display:none}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree label{background-attachment:scroll;background-color:transparent;background-image:none;background-position:0 0;background-repeat:no-repeat;background-size:100% 100%;float:none;outline:none}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree button{background-attachment:scroll;background-color:transparent;background-image:none;background-position:0 0;background-repeat:no-repeat;background-size:100% 100%;border:0;border-radius:0;outline:none;position:static}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree img{border:0;display:inline-block;vertical-align:top;border-radius:0;outline:none;position:static}\n#wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-tree  button::-moz-focus-inner{border: 0;}\n      #wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-max-width-none-important{max-width:none!important}\n      #wistia_chrome_222 #wistia_grid_228_wrapper .w-css-reset-button-important{border-radius:0!important;color:#fff!important;}\n    "
                            }}
                          />
                        </div>
                      </div>
                      <div id="wistia_grid_228_front" />
                      <div id="wistia_grid_228_top_inside">
                        <div id="wistia_grid_228_top" />
                      </div>
                      <div id="wistia_grid_228_bottom_inside">
                        <div id="wistia_grid_228_bottom" />
                      </div>
                      <div id="wistia_grid_228_left_inside">
                        <div id="wistia_grid_228_left" />
                      </div>
                      <div id="wistia_grid_228_right_inside">
                        <div id="wistia_grid_228_right" />
                      </div>
                    </div>
                    <div id="wistia_grid_228_below" />
                    <style
                      id="wistia_229_style"
                      type="text/css"
                      className="wistia_injected_style"
                      dangerouslySetInnerHTML={{
                        __html:
                          "#wistia_grid_228_wrapper{-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;font-family:Arial,sans-serif;font-size:14px;height:100%;position:relative;text-align:left;width:100%;}\n#wistia_grid_228_wrapper *{-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}\n#wistia_grid_228_above{position:relative;}\n#wistia_grid_228_main{display:block;height:100%;position:relative;}\n#wistia_grid_228_behind{height:100%;left:0;position:absolute;top:0;width:100%;}\n#wistia_grid_228_center{height:100%;overflow:hidden;position:relative;width:100%;}\n#wistia_grid_228_front{display:none;height:100%;left:0;position:absolute;top:0;width:100%;}\n#wistia_grid_228_top_inside{position:absolute;left:0;top:0;width:100%;}\n#wistia_grid_228_top{width:100%;position:absolute;bottom:0;left:0;}\n#wistia_grid_228_bottom_inside{position:absolute;left:0;bottom:0;width:100%;}\n#wistia_grid_228_bottom{width:100%;position:absolute;top:0;left:0;}\n#wistia_grid_228_left_inside{height:100%;position:absolute;left:0;top:0;}\n#wistia_grid_228_left{height:100%;position:absolute;right:0;top:0;}\n#wistia_grid_228_right_inside{height:100%;right:0;position:absolute;top:0;}\n#wistia_grid_228_right{height:100%;left:0;position:absolute;top:0;}\n#wistia_grid_228_below{position:relative;}"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-20">
    <h3 className="gradient-text-1 text-h5 xl:text-h4 2xl:text-h3 leading-h5 xl:leading-h4  2xl:leading-h3 font-aeonik font-bold">
      Avatar Selection
    </h3>
    <p className="font-jakarta font-semibold text-md leading-md xl:text-l xl:leading-l 2xl:text-xl 2xl:leading-xl mt-2 text-[#3B3C40]">
      Select the Avatar you would like to create targeted content for here!
    </p>
    <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 2xl:grid-cols-4 mt-7">
      <div className="rounded-[10px] border border-dashed flex items-center justify-center border-dark border-[#000] min-h-[286px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={96}
          height={96}
          viewBox="0 0 96 96"
          fill="none"
        >
          <path
            d="M92.25 44.25H51.75V3.75C51.75 1.67888 50.0711 0 48 0C45.9289 0 44.25 1.67888 44.25 3.75V44.25H3.75C1.67888 44.25 0 45.9289 0 48C0 50.0711 1.67888 51.75 3.75 51.75H44.25V92.25C44.25 94.3211 45.9289 96 48 96C50.0711 96 51.75 94.3211 51.75 92.25V51.75H92.25C94.3211 51.75 96 50.0711 96 48C96 45.9289 94.3211 44.25 92.25 44.25Z"
            fill="#B6B6B8"
          />
        </svg>
      </div>
    </div>
  </div>
  <div className="mt-[120px]">
    <div className="px-3">
      <h5 className="font-aeonik font-bold text-h4 leading-h4">
        Marketing Center
      </h5>
      <div className="mt-12 flex gap-20 ">
        <div className="flex gap-3 flex-wrap">
          <div className="cursor-pointer py-2.5 px-5 rounded-full font-jakarta text-sm leading-sm font-medium bg-[#3D00B7] text-white">
            All Categories
          </div>
          <div className="cursor-pointer py-2.5 px-5 rounded-full font-jakarta text-sm leading-sm font-medium bg-secondary-700 text-black">
            Website
          </div>
          <div className="cursor-pointer py-2.5 px-5 rounded-full font-jakarta text-sm leading-sm font-medium bg-secondary-700 text-black">
            Funnels
          </div>
          <div className="cursor-pointer py-2.5 px-5 rounded-full font-jakarta text-sm leading-sm font-medium bg-secondary-700 text-black">
            Emails
          </div>
          <div className="cursor-pointer py-2.5 px-5 rounded-full font-jakarta text-sm leading-sm font-medium bg-secondary-700 text-black">
            Social
          </div>
          <div className="cursor-pointer py-2.5 px-5 rounded-full font-jakarta text-sm leading-sm font-medium bg-secondary-700 text-black">
            Articles
          </div>
          <div className="cursor-pointer py-2.5 px-5 rounded-full font-jakarta text-sm leading-sm font-medium bg-secondary-700 text-black">
            VA Tools
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[18px] gap-y-[14px] mt-[56px]">
        <div className="py-6 px-10 rounded-[20px] 2xl:rounded-[28px] bg-white shadow-card-1">
          <div className="border-b border-primary-700 flex items-center justify-center">
            <div className="w-[120px] lg:w-[160px] xl:w-[200px] 2xl:w-[230px] aspect-square relative">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                sizes="100vw"
                srcSet="/_next/image?url=%2Fimages%2Fmarketing%2Fblog-post-generator.png&w=640&q=75 640w, /_next/image?url=%2Fimages%2Fmarketing%2Fblog-post-generator.png&w=750&q=75 750w, /_next/image?url=%2Fimages%2Fmarketing%2Fblog-post-generator.png&w=828&q=75 828w, /_next/image?url=%2Fimages%2Fmarketing%2Fblog-post-generator.png&w=1080&q=75 1080w, /_next/image?url=%2Fimages%2Fmarketing%2Fblog-post-generator.png&w=1200&q=75 1200w, /_next/image?url=%2Fimages%2Fmarketing%2Fblog-post-generator.png&w=1920&q=75 1920w, /_next/image?url=%2Fimages%2Fmarketing%2Fblog-post-generator.png&w=2048&q=75 2048w, /_next/image?url=%2Fimages%2Fmarketing%2Fblog-post-generator.png&w=3840&q=75 3840w"
                src="/_next/image?url=%2Fimages%2Fmarketing%2Fblog-post-generator.png&w=3840&q=75"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  objectFit: "cover",
                  color: "transparent"
                }}
              />
            </div>
          </div>
          <h5 className="text-black text-h6 leading-h6 xl:text-h5 xl:leading-h5 font-aeonik font-bold tracking-[-0.72px] mt-[14px]">
            Blog Post
          </h5>
          <p className="font-jakarta text-md xl:text-l leading-md xl:leading-l text-primary-700">
            Generate blogs SEO optimized for you business.
          </p>
          <Link className="inline-block" href="/services/blog_post_full">
            <div className="bg-[#C5E9FF] rounded-md overflow-hidden px-6 py-2.5 font-inter font-semibold mt-[38px]">
              Generate Posts
            </div>
          </Link>
        </div>
        <div className="py-6 px-10 rounded-[20px] 2xl:rounded-[28px] bg-white shadow-card-1">
          <div className="border-b border-primary-700 flex items-center justify-center">
            <div className="w-[120px] lg:w-[160px] xl:w-[200px] 2xl:w-[230px] aspect-square relative">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                sizes="100vw"
                srcSet="/_next/image?url=%2Fimages%2Fmarketing%2Femail-campaigns.png&w=640&q=75 640w, /_next/image?url=%2Fimages%2Fmarketing%2Femail-campaigns.png&w=750&q=75 750w, /_next/image?url=%2Fimages%2Fmarketing%2Femail-campaigns.png&w=828&q=75 828w, /_next/image?url=%2Fimages%2Fmarketing%2Femail-campaigns.png&w=1080&q=75 1080w, /_next/image?url=%2Fimages%2Fmarketing%2Femail-campaigns.png&w=1200&q=75 1200w, /_next/image?url=%2Fimages%2Fmarketing%2Femail-campaigns.png&w=1920&q=75 1920w, /_next/image?url=%2Fimages%2Fmarketing%2Femail-campaigns.png&w=2048&q=75 2048w, /_next/image?url=%2Fimages%2Fmarketing%2Femail-campaigns.png&w=3840&q=75 3840w"
                src="/_next/image?url=%2Fimages%2Fmarketing%2Femail-campaigns.png&w=3840&q=75"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  objectFit: "cover",
                  color: "transparent"
                }}
              />
            </div>
          </div>
          <h5 className="text-black text-h6 leading-h6 xl:text-h5 xl:leading-h5 font-aeonik font-bold tracking-[-0.72px] mt-[14px]">
            Email Campaigns
          </h5>
          <p className="font-jakarta text-md xl:text-l leading-md xl:leading-l text-primary-700">
            Create personalized, engaging, and goal-oriented email content,
            supporting a variety of campaign objectives.
          </p>
          <Link className="inline-block" href="/services/email">
            <div className="bg-[#C5E9FF] rounded-md overflow-hidden px-6 py-2.5 font-inter font-semibold mt-[38px]">
              Start Campaign
            </div>
          </Link>
        </div>
        <div className="py-6 px-10 rounded-[20px] 2xl:rounded-[28px] bg-white shadow-card-1">
          <div className="border-b border-primary-700 flex items-center justify-center">
            <div className="w-[120px] lg:w-[160px] xl:w-[200px] 2xl:w-[230px] aspect-square relative">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                sizes="100vw"
                srcSet="/_next/image?url=%2Fimages%2Fmarketing%2Fyoutube.png&w=640&q=75 640w, /_next/image?url=%2Fimages%2Fmarketing%2Fyoutube.png&w=750&q=75 750w, /_next/image?url=%2Fimages%2Fmarketing%2Fyoutube.png&w=828&q=75 828w, /_next/image?url=%2Fimages%2Fmarketing%2Fyoutube.png&w=1080&q=75 1080w, /_next/image?url=%2Fimages%2Fmarketing%2Fyoutube.png&w=1200&q=75 1200w, /_next/image?url=%2Fimages%2Fmarketing%2Fyoutube.png&w=1920&q=75 1920w, /_next/image?url=%2Fimages%2Fmarketing%2Fyoutube.png&w=2048&q=75 2048w, /_next/image?url=%2Fimages%2Fmarketing%2Fyoutube.png&w=3840&q=75 3840w"
                src="/_next/image?url=%2Fimages%2Fmarketing%2Fyoutube.png&w=3840&q=75"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  objectFit: "cover",
                  color: "transparent"
                }}
              />
            </div>
          </div>
          <h5 className="text-black text-h6 leading-h6 xl:text-h5 xl:leading-h5 font-aeonik font-bold tracking-[-0.72px] mt-[14px]">
            Youtube Script Wizard
          </h5>
          <p className="font-jakarta text-md xl:text-l leading-md xl:leading-l text-primary-700">
            Generate detailed script outlines that align with the users
            business goals and speak directly to their ideal client avatar.
          </p>
          <a className="inline-block" href="/services/youtube_script">
            <div className="bg-[#C5E9FF] rounded-md overflow-hidden px-6 py-2.5 font-inter font-semibold mt-[38px]">
              Generate Script
            </div>
          </a>
        </div>
        <div className="py-6 px-10 rounded-[20px] 2xl:rounded-[28px] bg-white shadow-card-1">
          <div className="border-b border-primary-700 flex items-center justify-center">
            <div className="w-[120px] lg:w-[160px] xl:w-[200px] 2xl:w-[230px] aspect-square relative">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                sizes="100vw"
                srcSet="/_next/image?url=%2Fimages%2Fmarketing%2Ffacebook-organic.png&w=640&q=75 640w, /_next/image?url=%2Fimages%2Fmarketing%2Ffacebook-organic.png&w=750&q=75 750w, /_next/image?url=%2Fimages%2Fmarketing%2Ffacebook-organic.png&w=828&q=75 828w, /_next/image?url=%2Fimages%2Fmarketing%2Ffacebook-organic.png&w=1080&q=75 1080w, /_next/image?url=%2Fimages%2Fmarketing%2Ffacebook-organic.png&w=1200&q=75 1200w, /_next/image?url=%2Fimages%2Fmarketing%2Ffacebook-organic.png&w=1920&q=75 1920w, /_next/image?url=%2Fimages%2Fmarketing%2Ffacebook-organic.png&w=2048&q=75 2048w, /_next/image?url=%2Fimages%2Fmarketing%2Ffacebook-organic.png&w=3840&q=75 3840w"
                src="/_next/image?url=%2Fimages%2Fmarketing%2Ffacebook-organic.png&w=3840&q=75"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  objectFit: "cover",
                  color: "transparent"
                }}
              />
            </div>
          </div>
          <h5 className="text-black text-h6 leading-h6 xl:text-h5 xl:leading-h5 font-aeonik font-bold tracking-[-0.72px] mt-[14px]">
            Facebook Post
          </h5>
          <p className="font-jakarta text-md xl:text-l leading-md xl:leading-l text-primary-700">
            Generate Targeted Facebook posts for your business.{" "}
          </p>
          <a className="inline-block" href="/services/facebook_post">
            <div className="bg-[#C5E9FF] rounded-md overflow-hidden px-6 py-2.5 font-inter font-semibold mt-[38px]">
              Generate Post
            </div>
          </a>
        </div>
        <div className="py-6 px-10 rounded-[20px] 2xl:rounded-[28px] bg-white shadow-card-1">
          <div className="border-b border-primary-700 flex items-center justify-center">
            <div className="w-[120px] lg:w-[160px] xl:w-[200px] 2xl:w-[230px] aspect-square relative">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                sizes="100vw"
                srcSet="/_next/image?url=%2Fimages%2Fmarketing%2Fblog-post-generator.png&w=640&q=75 640w, /_next/image?url=%2Fimages%2Fmarketing%2Fblog-post-generator.png&w=750&q=75 750w, /_next/image?url=%2Fimages%2Fmarketing%2Fblog-post-generator.png&w=828&q=75 828w, /_next/image?url=%2Fimages%2Fmarketing%2Fblog-post-generator.png&w=1080&q=75 1080w, /_next/image?url=%2Fimages%2Fmarketing%2Fblog-post-generator.png&w=1200&q=75 1200w, /_next/image?url=%2Fimages%2Fmarketing%2Fblog-post-generator.png&w=1920&q=75 1920w, /_next/image?url=%2Fimages%2Fmarketing%2Fblog-post-generator.png&w=2048&q=75 2048w, /_next/image?url=%2Fimages%2Fmarketing%2Fblog-post-generator.png&w=3840&q=75 3840w"
                src="/_next/image?url=%2Fimages%2Fmarketing%2Fblog-post-generator.png&w=3840&q=75"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  objectFit: "cover",
                  color: "transparent"
                }}
              />
            </div>
          </div>
          <h5 className="text-black text-h6 leading-h6 xl:text-h5 xl:leading-h5 font-aeonik font-bold tracking-[-0.72px] mt-[14px]">
            Viral Topics Wizard
          </h5>
          <p className="font-jakarta text-md xl:text-l leading-md xl:leading-l text-primary-700">
            Research and generate multiple types of viral topics which can be
            used for generating other content with.
          </p>
          <a className="inline-block" href="/services/viral_topic_generator">
            <div className="bg-[#C5E9FF] rounded-md overflow-hidden px-6 py-2.5 font-inter font-semibold mt-[38px]">
              Start Wizard
            </div>
          </a>
        </div>
        <div className="py-6 px-10 rounded-[20px] 2xl:rounded-[28px] bg-white shadow-card-1">
          <div className="border-b border-primary-700 flex items-center justify-center">
            <div className="w-[120px] lg:w-[160px] xl:w-[200px] 2xl:w-[230px] aspect-square relative">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                sizes="100vw"
                srcSet="/_next/image?url=%2Fimages%2Fmarketing%2Finstagram-organic.png&w=640&q=75 640w, /_next/image?url=%2Fimages%2Fmarketing%2Finstagram-organic.png&w=750&q=75 750w, /_next/image?url=%2Fimages%2Fmarketing%2Finstagram-organic.png&w=828&q=75 828w, /_next/image?url=%2Fimages%2Fmarketing%2Finstagram-organic.png&w=1080&q=75 1080w, /_next/image?url=%2Fimages%2Fmarketing%2Finstagram-organic.png&w=1200&q=75 1200w, /_next/image?url=%2Fimages%2Fmarketing%2Finstagram-organic.png&w=1920&q=75 1920w, /_next/image?url=%2Fimages%2Fmarketing%2Finstagram-organic.png&w=2048&q=75 2048w, /_next/image?url=%2Fimages%2Fmarketing%2Finstagram-organic.png&w=3840&q=75 3840w"
                src="/_next/image?url=%2Fimages%2Fmarketing%2Finstagram-organic.png&w=3840&q=75"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  objectFit: "cover",
                  color: "transparent"
                }}
              />
            </div>
          </div>
          <h5 className="text-black text-h6 leading-h6 xl:text-h5 xl:leading-h5 font-aeonik font-bold tracking-[-0.72px] mt-[14px]">
            Instagram Post
          </h5>
          <p className="font-jakarta text-md xl:text-l leading-md xl:leading-l text-primary-700">
            Generates the captions with relevant hashtags for your business.
          </p>
          <a className="inline-block" href="/services/instagram_post">
            <div className="bg-[#C5E9FF] rounded-md overflow-hidden px-6 py-2.5 font-inter font-semibold mt-[38px]">
              Generate Post
            </div>
          </a>
        </div>
        <div className="py-6 px-10 rounded-[20px] 2xl:rounded-[28px] bg-white shadow-card-1">
          <div className="border-b border-primary-700 flex items-center justify-center">
            <div className="w-[120px] lg:w-[160px] xl:w-[200px] 2xl:w-[230px] aspect-square relative">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                sizes="100vw"
                srcSet="/_next/image?url=%2Fimages%2Fmarketing%2Fpr-releases.png&w=640&q=75 640w, /_next/image?url=%2Fimages%2Fmarketing%2Fpr-releases.png&w=750&q=75 750w, /_next/image?url=%2Fimages%2Fmarketing%2Fpr-releases.png&w=828&q=75 828w, /_next/image?url=%2Fimages%2Fmarketing%2Fpr-releases.png&w=1080&q=75 1080w, /_next/image?url=%2Fimages%2Fmarketing%2Fpr-releases.png&w=1200&q=75 1200w, /_next/image?url=%2Fimages%2Fmarketing%2Fpr-releases.png&w=1920&q=75 1920w, /_next/image?url=%2Fimages%2Fmarketing%2Fpr-releases.png&w=2048&q=75 2048w, /_next/image?url=%2Fimages%2Fmarketing%2Fpr-releases.png&w=3840&q=75 3840w"
                src="/_next/image?url=%2Fimages%2Fmarketing%2Fpr-releases.png&w=3840&q=75"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  objectFit: "cover",
                  color: "transparent"
                }}
              />
            </div>
          </div>
          <h5 className="text-black text-h6 leading-h6 xl:text-h5 xl:leading-h5 font-aeonik font-bold tracking-[-0.72px] mt-[14px]">
            Article Writer Wizard
          </h5>
          <p className="font-jakarta text-md xl:text-l leading-md xl:leading-l text-primary-700">
            Create detailed, informative articles with AI assistance, boosting
            your content marketing efforts.
          </p>
          <a className="inline-block" href="/services/article_content">
            <div className="bg-[#C5E9FF] rounded-md overflow-hidden px-6 py-2.5 font-inter font-semibold mt-[38px]">
              Start Wizard
            </div>
          </a>
        </div>
        <div className="py-6 px-10 rounded-[20px] 2xl:rounded-[28px] bg-white shadow-card-1">
          <div className="border-b border-primary-700 flex items-center justify-center">
            <div className="w-[120px] lg:w-[160px] xl:w-[200px] 2xl:w-[230px] aspect-square relative">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                sizes="100vw"
                srcSet="/_next/image?url=%2Fimages%2Fmarketing%2Ftwitter-post.png&w=640&q=75 640w, /_next/image?url=%2Fimages%2Fmarketing%2Ftwitter-post.png&w=750&q=75 750w, /_next/image?url=%2Fimages%2Fmarketing%2Ftwitter-post.png&w=828&q=75 828w, /_next/image?url=%2Fimages%2Fmarketing%2Ftwitter-post.png&w=1080&q=75 1080w, /_next/image?url=%2Fimages%2Fmarketing%2Ftwitter-post.png&w=1200&q=75 1200w, /_next/image?url=%2Fimages%2Fmarketing%2Ftwitter-post.png&w=1920&q=75 1920w, /_next/image?url=%2Fimages%2Fmarketing%2Ftwitter-post.png&w=2048&q=75 2048w, /_next/image?url=%2Fimages%2Fmarketing%2Ftwitter-post.png&w=3840&q=75 3840w"
                src="/_next/image?url=%2Fimages%2Fmarketing%2Ftwitter-post.png&w=3840&q=75"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  objectFit: "cover",
                  color: "transparent"
                }}
              />
            </div>
          </div>
          <h5 className="text-black text-h6 leading-h6 xl:text-h5 xl:leading-h5 font-aeonik font-bold tracking-[-0.72px] mt-[14px]">
            Tweet (X) Generator
          </h5>
          <p className="font-jakarta text-md xl:text-l leading-md xl:leading-l text-primary-700">
            Generate different types of targeted tweets for your business.
          </p>
          <a className="inline-block" href="/services/twitter">
            <div className="bg-[#C5E9FF] rounded-md overflow-hidden px-6 py-2.5 font-inter font-semibold mt-[38px]">
              Generate Tweet
            </div>
          </a>
        </div>
        <div className="py-6 px-10 rounded-[20px] 2xl:rounded-[28px] bg-white shadow-card-1">
          <div className="border-b border-primary-700 flex items-center justify-center">
            <div className="w-[120px] lg:w-[160px] xl:w-[200px] 2xl:w-[230px] aspect-square relative">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                sizes="100vw"
                srcSet="/_next/image?url=%2Fimages%2Fmarketing%2Flinkedin-post.png&w=640&q=75 640w, /_next/image?url=%2Fimages%2Fmarketing%2Flinkedin-post.png&w=750&q=75 750w, /_next/image?url=%2Fimages%2Fmarketing%2Flinkedin-post.png&w=828&q=75 828w, /_next/image?url=%2Fimages%2Fmarketing%2Flinkedin-post.png&w=1080&q=75 1080w, /_next/image?url=%2Fimages%2Fmarketing%2Flinkedin-post.png&w=1200&q=75 1200w, /_next/image?url=%2Fimages%2Fmarketing%2Flinkedin-post.png&w=1920&q=75 1920w, /_next/image?url=%2Fimages%2Fmarketing%2Flinkedin-post.png&w=2048&q=75 2048w, /_next/image?url=%2Fimages%2Fmarketing%2Flinkedin-post.png&w=3840&q=75 3840w"
                src="/_next/image?url=%2Fimages%2Fmarketing%2Flinkedin-post.png&w=3840&q=75"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  objectFit: "cover",
                  color: "transparent"
                }}
              />
            </div>
          </div>
          <h5 className="text-black text-h6 leading-h6 xl:text-h5 xl:leading-h5 font-aeonik font-bold tracking-[-0.72px] mt-[14px]">
            Linkedin Post
          </h5>
          <p className="font-jakarta text-md xl:text-l leading-md xl:leading-l text-primary-700">
            Generate both long and short form content for your business.{" "}
          </p>
          <a className="inline-block" href="/services/linkedin">
            <div className="bg-[#C5E9FF] rounded-md overflow-hidden px-6 py-2.5 font-inter font-semibold mt-[38px]">
              Generate Post
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>


      <style jsx>{`
        .layout {
  display: flex;
  min-height: 100vh;
}

.py-4.px-6.w-[340px].h-screen {
  width: 340px; /* Ensure the sidebar has a fixed width */
  background: #ffffff; /* Sidebar background color */
  padding: 20px; /* Sidebar padding */
  border-right: 1px solid #ddd; /* Border on the right side of the sidebar */
  position: sticky; /* Keeps the sidebar fixed on scroll */
  top: 0;
  left: 0; /* Ensures the sidebar is aligned to the left */
  overflow-y: auto; /* Allow vertical scrolling */
  flex-shrink: 0; /* Prevent sidebar from shrinking */
}

/* Additional Styling for Specific Elements */
button.w-[30px].h-[30px].rounded-l-lg.overflow-hidden.absolute.right-0.top-[80px] {
  position: absolute;
  right: 0;
  top: 80px;
  /* Ensure the button is positioned within the sidebar */
}

.flex.flex-col.h-full.justify-between {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  /* This will properly distribute content within the sidebar */
}

/* Ensure no extra margin or padding pushes the sidebar */
.py-4.px-6.w-[340px].h-screen {
  margin: 0;
  padding: 0;
}

        

        .logo-section {
          text-align: center;
          margin-bottom: 20px;
        }

        .logo {
          width: 80px;
          margin-bottom: 5px;
        }

        .version {
          font-size: 12px;
          color: #888;
        }

        .navigation {
          margin-bottom: 20px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          padding: 12px 20px;
          margin-bottom: 10px;
          color: #333;
          text-decoration: none;
          font-weight: bold;
          border-radius: 8px;
          transition: background-color 0.3s, color 0.3s;
        }

        .nav-item.active,
        .nav-item:hover {
          background-color: #4b00e0;
          color: #fff;
        }

        .nav-item i {
          margin-right: 10px;
        }

        .social-connect {
          margin-bottom: 20px;
          text-align: center;
        }

        .social-connect span {
          display: block;
          font-size: 14px;
          color: #888;
          margin-bottom: 10px;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 10px;
        }

        .social-icon {
          width: 30px;
          height: 30px;
        }

        .profile-pic {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }

        .user-info {
          margin-top: 10px;
        }

        .user-name {
          display: block;
          font-weight: bold;
        }

        .user-email {
          font-size: 12px;
          color: #888;
        }

        .plan-info {
          text-align: center;
        }

        .plan-details {
          margin-bottom: 10px;
        }

        .plan-bar {
          width: 100%;
          height: 8px;
          background: #e0e0e0;
          border-radius: 4px;
          margin: 5px 0;
          overflow: hidden;
        }

        .plan-bar-fill {
          height: 100%;
          background: #ff4081;
          width: 11%; /* Adjust this based on usage */
        }

        .upgrade-btn {
          background-color: #ff4081;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .support-links {
          text-align: center;
          margin-top: 20px;
        }

        .support-link {
          display: block;
          margin-bottom: 10px;
          color: #888;
          text-decoration: none;
          font-size: 14px;
        }

        .content {
          flex: 1;
          padding: 20px;
          background-color: #f4f5f7;
        }

        .dashboard-header {
          margin-bottom: 20px;
        }

        .highlight {
          color: #0056b3;
        }

        .video-library {
          display: flex;
          justify-content: space-between;
          margin-bottom: 40px;
          background: #1e1e2f;
          padding: 20px;
          border-radius: 10px;
          color: white;
        }

        .video-text {
          flex: 1;
          margin-right: 20px;
        }

        .watch-demo-btn {
          background-color: #007bff;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .avatar-selection {
          margin-bottom: 40px;
        }

        .avatar-box {
          width: 200px;
          height: 150px;
          border: 2px dashed #bbb;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .add-avatar {
          font-size: 48px;
          color: #bbb;
        }

        .marketing-center {
          margin-bottom: 40px;
        }

        .categories {
          display: flex;
          margin-bottom: 20px;
        }

        .category {
          padding: 10px 20px;
          background-color: #f0f0f0;
          border: none;
          border-radius: 20px;
          margin-right: 10px;
          cursor: pointer;
        }

        .category.active {
          background-color: #4b00e0;
          color: #fff;
        }

        .marketing-items {
          display: flex;
          justify-content: space-between;
        }

        .item {
          width: 30%;
          padding: 20px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .item img {
          width: 50px;
          height: 50px;
          margin-bottom: 10px;
        }

        .item button {
          margin-top: 10px;
          background-color: #007bff;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
    </Layout>
  );
};

export default Dashboard;
