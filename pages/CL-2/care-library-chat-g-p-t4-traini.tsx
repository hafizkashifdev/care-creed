import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ColorLegendsKey2 from "../../components/CL-2/color-legends-key2";
import PortalPopup from "../../components/CL-2/portal-popup";
import { useRouter } from "next/router";

const CareLibraryChatGPT4Traini: NextPage = () => {
  const [isColorLegendsKeyOpen, setColorLegendsKeyOpen] = useState(false);
  const router = useRouter();

  const openColorLegendsKey = useCallback(() => {
    setColorLegendsKeyOpen(true);
  }, []);

  const closeColorLegendsKey = useCallback(() => {
    setColorLegendsKeyOpen(false);
  }, []);

  const onIconslineararrowLeftClick = useCallback(() => {
    router.push("/CL-2/care-library");
  }, [router]);

  const onWdgtContainerClick = useCallback(() => {
    router.push("/CL-2/care-library-chat-g-p-t4-defin1");
  }, [router]);

  const onWdgtContainerClick1 = useCallback(() => {
    router.push("/CL-2/care-library-chat-g-p-t4-levera");
  }, [router]);

  const onWdgtContainerClick2 = useCallback(() => {
    router.push("/CL-2/care-library-chat-g-p-t4-test-t");
  }, [router]);

  const onWdgtContainerClick3 = useCallback(() => {
    router.push("/CL-2/care-library-chat-g-p-t4-prepa");
  }, [router]);

  const onWdgtContainerClick4 = useCallback(() => {
    router.push("/CL-2/care-library-chat-g-p-t4-create");
  }, [router]);

  const onWdgtContainerClick5 = useCallback(() => {
    router.push("/CL-2/care-library-chat-g-p-t4-deploy");
  }, [router]);

  const onWdgtContainerClick6 = useCallback(() => {
    router.push("/CL-2/care-library-chat-g-p-t4-deploy1");
  }, [router]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          backgroundColor: "#fff",
          height: "1441px",
          textAlign: "center",
          fontSize: "32px",
          color: "#5a5867",
          fontFamily: "Outfit",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "101px",
            left: "calc(50% - 920px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Box
              sx={{
                position: "relative",
                lineHeight: "40px",
                fontWeight: "600",
              }}
            >
              Chat GPT 4 Training
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "101px",
            left: "1552px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{ position: "relative", lineHeight: "40px", fontWeight: "600" }}
          >
            Color Legends (Key)
          </Box>
          <Image
            style={{
              width: "31px",
              position: "relative",
              height: "31px",
              overflow: "hidden",
              flexShrink: "0",
              objectFit: "cover",
            }}
            width={31}
            height={31}
            alt=""
            src="/CL-2/chevron-11@2x.png"
          />
        </Box>
        <Image
          style={{
            position: "absolute",
            top: "40px",
            left: "40px",
            width: "48px",
            height: "48px",
            cursor: "pointer",
          }}
          width={48}
          height={48}
          alt=""
          src="/CL-2/iconslineararrowleft.svg"
          onClick={onIconslineararrowLeftClick}
        />
        <Box
          sx={{
            position: "absolute",
            top: "163px",
            left: "11px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#666",
            boxSizing: "border-box",
            width: "1889px",
            height: "1236px",
            fontSize: "18px",
            color: "#fff",
            fontFamily: "Inter",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "0px",
              left: "0px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 16px",
              fontSize: "32px",
              color: "#5a5867",
              fontFamily: "Outfit",
            }}
          >
            <Box
              sx={{
                position: "relative",
                lineHeight: "40px",
                fontWeight: "600",
              }}
            >
              Steps to Train ChatGPT-4
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "78px",
              left: "14px",
              borderRadius: "12px",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#5a5867",
              boxSizing: "border-box",
              width: "883px",
              height: "227px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "42px",
                left: "5px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  1
                </Typography>
              </Box>
              <Image
                style={{
                  width: "75.6px",
                  position: "relative",
                  borderRadius: "100.4px",
                  height: "80px",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={76}
                height={80}
                alt=""
                src="/CL-2/download-48@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  fontFamily: "'Red Hat Text'",
                  color: "#1c3f95",
                  zIndex: "0",
                }}
              >
                <Typography
                  variant="inherit"
                  sx={{ margin: 0 }}
                >{`Define Objectives/ `}</Typography>
                <Typography variant="inherit" sx={{ margin: 0 }}>
                  Data collection
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "31px",
                left: "185px",
                borderRadius: "12px",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#5a5867",
                boxSizing: "border-box",
                width: "680px",
                height: "166px",
                fontSize: "15.8px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "9px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    1.1
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={70}
                  alt=""
                  src="/CL-2/download-52@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    Identify
                  </Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    {" "}
                    Purpose
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "176px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    1.2
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={70}
                  alt=""
                  src="/CL-2/download@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  Set Goals
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "343px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    1.3
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={70}
                  alt=""
                  src="/CL-2/download-53@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  Data Sources
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "510px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    1.4
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    borderRadius: "76px",
                    height: "68.3px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={68}
                  alt=""
                  src="/CL-2/download-54@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  <Typography
                    variant="inherit"
                    sx={{ margin: 0 }}
                  >{`Data Volume `}</Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    and Type
                  </Typography>
                </Box>
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "59px",
                  left: "152px",
                  borderRadius: "4px",
                  width: "24.3px",
                  height: "25px",
                }}
                width={24}
                height={25}
                alt=""
                src="/CL-2/.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "59px",
                  left: "319px",
                  borderRadius: "4px",
                  width: "24.3px",
                  height: "25px",
                }}
                width={24}
                height={25}
                alt=""
                src="/CL-2/.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "59px",
                  left: "486px",
                  borderRadius: "4px",
                  width: "24.3px",
                  height: "25px",
                }}
                width={24}
                height={25}
                alt=""
                src="/CL-2/.svg"
              />
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "106px",
                left: "143px",
                width: "43px",
                height: "1px",
                objectFit: "contain",
              }}
              width={43}
              height={1}
              alt=""
              src="/CL-2/arrow-39.svg"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "371px",
              left: "14px",
              borderRadius: "12px",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#5a5867",
              boxSizing: "border-box",
              width: "883px",
              height: "227px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "42px",
                left: "5px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick1}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  4
                </Typography>
              </Box>
              <Image
                style={{
                  width: "80px",
                  position: "relative",
                  borderRadius: "42.2px",
                  height: "77.7px",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={78}
                alt=""
                src="/CL-2/download-50@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  fontFamily: "'Red Hat Text'",
                  color: "#1c3f95",
                  zIndex: "0",
                }}
              >
                <Typography
                  variant="inherit"
                  sx={{ margin: 0 }}
                >{`Leverage `}</Typography>
                <Typography
                  variant="inherit"
                  sx={{ margin: 0 }}
                >{`OpenAI’s API `}</Typography>
                <Typography variant="inherit" sx={{ margin: 0 }}>
                  (Fine-Tuning)
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "31px",
                left: "185px",
                borderRadius: "12px",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#5a5867",
                boxSizing: "border-box",
                width: "680px",
                height: "166px",
                fontSize: "15.8px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "9px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    4.1
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "69.6px",
                    position: "relative",
                    borderRadius: "5px",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={70}
                  alt=""
                  src="/CL-2/download-62@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  <Typography
                    variant="inherit"
                    sx={{ margin: 0 }}
                  >{`Connect to `}</Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    API
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "176px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    4.2
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    borderRadius: "10px",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={70}
                  alt=""
                  src="/CL-2/download-63@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  Upload Data
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "343px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    4.3
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={70}
                  alt=""
                  src="/CL-2/download-64@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  <Typography
                    variant="inherit"
                    sx={{ margin: 0 }}
                  >{`Adjust Model `}</Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    Parameters
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "510px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    4.4
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    borderRadius: "14px",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={70}
                  alt=""
                  src="/CL-2/download-65@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    Run Fine-
                  </Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    Tuning
                  </Typography>
                </Box>
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "59px",
                  left: "152px",
                  borderRadius: "4px",
                  width: "24.3px",
                  height: "25px",
                }}
                width={24}
                height={25}
                alt=""
                src="/CL-2/.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "59px",
                  left: "319px",
                  borderRadius: "4px",
                  width: "24.3px",
                  height: "25px",
                }}
                width={24}
                height={25}
                alt=""
                src="/CL-2/.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "59px",
                  left: "486px",
                  borderRadius: "4px",
                  width: "24.3px",
                  height: "25px",
                }}
                width={24}
                height={25}
                alt=""
                src="/CL-2/.svg"
              />
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "106px",
                left: "143px",
                width: "43px",
                height: "1px",
                objectFit: "contain",
              }}
              width={43}
              height={1}
              alt=""
              src="/CL-2/arrow-39.svg"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "664px",
              left: "14px",
              borderRadius: "12px",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#5a5867",
              boxSizing: "border-box",
              width: "883px",
              height: "227px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "42px",
                left: "5px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick2}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  5
                </Typography>
              </Box>
              <Image
                style={{
                  width: "80px",
                  position: "relative",
                  borderRadius: "86.9px",
                  height: "80px",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                alt=""
                src="/CL-2/images-14@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  fontFamily: "'Red Hat Text'",
                  color: "#1c3f95",
                  zIndex: "0",
                }}
              >
                <Typography
                  variant="inherit"
                  sx={{ margin: 0 }}
                >{`Test the `}</Typography>
                <Typography variant="inherit" sx={{ margin: 0 }}>
                  Chatbot
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "31px",
                left: "185px",
                borderRadius: "12px",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#5a5867",
                boxSizing: "border-box",
                width: "680px",
                height: "166px",
                fontSize: "15.8px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "9px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    5.1
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    borderRadius: "8px",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={70}
                  alt=""
                  src="/CL-2/download-66@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  <Typography
                    variant="inherit"
                    sx={{ margin: 0 }}
                  >{`Create Test `}</Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    Cases
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "176px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    5.2
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    borderRadius: "7px",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={70}
                  alt=""
                  src="/CL-2/download-67@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  <Typography
                    variant="inherit"
                    sx={{ margin: 0 }}
                  >{`Simulate Real `}</Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    Conversations
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "343px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    5.3
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "68.7px",
                    position: "relative",
                    borderRadius: "31px",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={69}
                  height={70}
                  alt=""
                  src="/CL-2/download-68@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  <Typography
                    variant="inherit"
                    sx={{ margin: 0 }}
                  >{`Evaluate `}</Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    Performance
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "510px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    5.4
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    borderRadius: "17px",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={70}
                  alt=""
                  src="/CL-2/download-69@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    Make
                  </Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    {" "}
                    Adjustments
                  </Typography>
                </Box>
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "59px",
                  left: "152px",
                  borderRadius: "4px",
                  width: "24.3px",
                  height: "25px",
                }}
                width={24}
                height={25}
                alt=""
                src="/CL-2/.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "59px",
                  left: "319px",
                  borderRadius: "4px",
                  width: "24.3px",
                  height: "25px",
                }}
                width={24}
                height={25}
                alt=""
                src="/CL-2/.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "59px",
                  left: "486px",
                  borderRadius: "4px",
                  width: "24.3px",
                  height: "25px",
                }}
                width={24}
                height={25}
                alt=""
                src="/CL-2/.svg"
              />
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "106px",
                left: "143px",
                width: "43px",
                height: "1px",
                objectFit: "contain",
              }}
              width={43}
              height={1}
              alt=""
              src="/CL-2/arrow-39.svg"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "78px",
              left: "985px",
              borderRadius: "12px",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#5a5867",
              boxSizing: "border-box",
              width: "883px",
              height: "227px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "42px",
                left: "5px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick3}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  2
                </Typography>
              </Box>
              <Image
                style={{
                  width: "80px",
                  position: "relative",
                  borderRadius: "122.2px",
                  height: "80px",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                alt=""
                src="/CL-2/download-49@2x.png"
              />
              <Box
                sx={{
                  width: "158px",
                  position: "relative",
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  fontFamily: "'Red Hat Text'",
                  color: "#1c3f95",
                  display: "inline-block",
                  zIndex: "0",
                }}
              >
                <Typography
                  variant="inherit"
                  sx={{ margin: 0 }}
                >{`Prepare `}</Typography>
                <Typography variant="inherit" sx={{ margin: 0 }}>
                  Data
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "31px",
                left: "185px",
                borderRadius: "12px",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#5a5867",
                boxSizing: "border-box",
                width: "680px",
                height: "166px",
                fontSize: "15.8px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "9px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    2.1
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    borderRadius: "8px",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={70}
                  alt=""
                  src="/CL-2/download-55@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  Data Cleaning
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "176px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    2.2
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    borderRadius: "14px",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={70}
                  alt=""
                  src="/CL-2/download-56@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  <Typography
                    variant="inherit"
                    sx={{ margin: 0 }}
                  >{`Anonymise `}</Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    Data
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "343px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    2.3
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "66px",
                    position: "relative",
                    borderRadius: "8px",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={66}
                  height={70}
                  alt=""
                  src="/CL-2/download-57@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  Label Data
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "510px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    2.4
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    borderRadius: "8px",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={70}
                  alt=""
                  src="/CL-2/download-58@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  <Typography
                    variant="inherit"
                    sx={{ margin: 0 }}
                  >{`Filter for `}</Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    Relevance
                  </Typography>
                </Box>
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "59px",
                  left: "152px",
                  borderRadius: "4px",
                  width: "24.3px",
                  height: "25px",
                }}
                width={24}
                height={25}
                alt=""
                src="/CL-2/.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "59px",
                  left: "319px",
                  borderRadius: "4px",
                  width: "24.3px",
                  height: "25px",
                }}
                width={24}
                height={25}
                alt=""
                src="/CL-2/.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "59px",
                  left: "486px",
                  borderRadius: "4px",
                  width: "24.3px",
                  height: "25px",
                }}
                width={24}
                height={25}
                alt=""
                src="/CL-2/.svg"
              />
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "106px",
                left: "143px",
                width: "43px",
                height: "1px",
                objectFit: "contain",
              }}
              width={43}
              height={1}
              alt=""
              src="/CL-2/arrow-39.svg"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "371px",
              left: "984px",
              borderRadius: "12px",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#5a5867",
              boxSizing: "border-box",
              width: "883px",
              height: "227px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "42px",
                left: "5px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick4}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  3
                </Typography>
              </Box>
              <Image
                style={{
                  width: "80px",
                  position: "relative",
                  borderRadius: "109.7px",
                  height: "78.9px",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={79}
                alt=""
                src="/CL-2/download-491@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  fontFamily: "'Red Hat Text'",
                  color: "#1c3f95",
                  zIndex: "0",
                }}
              >
                <Typography
                  variant="inherit"
                  sx={{ margin: 0 }}
                >{`Create Custom `}</Typography>
                <Typography variant="inherit" sx={{ margin: 0 }}>
                  Prompts
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "31px",
                left: "185px",
                borderRadius: "12px",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#5a5867",
                boxSizing: "border-box",
                width: "680px",
                height: "166px",
                fontSize: "15.8px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "9px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    3.1
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    borderRadius: "51px",
                    height: "67.5px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={68}
                  alt=""
                  src="/CL-2/download-59@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  <Typography
                    variant="inherit"
                    sx={{ margin: 0 }}
                  >{`Design Prompts `}</Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    for Training
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "176px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    3.2
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    borderRadius: "8px",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={70}
                  alt=""
                  src="/CL-2/images-16@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  <Typography
                    variant="inherit"
                    sx={{ margin: 0 }}
                  >{`Define Expected `}</Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    Responses
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "343px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    3.3
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    borderRadius: "112.5px",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={70}
                  alt=""
                  src="/CL-2/download-60@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  <Typography
                    variant="inherit"
                    sx={{ margin: 0 }}
                  >{`Prompt `}</Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    Coverage
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "510px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    3.4
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    borderRadius: "5px",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={70}
                  alt=""
                  src="/CL-2/download-61@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    Review and
                  </Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    {" "}
                    Iterate
                  </Typography>
                </Box>
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "59px",
                  left: "152px",
                  borderRadius: "4px",
                  width: "24.3px",
                  height: "25px",
                }}
                width={24}
                height={25}
                alt=""
                src="/CL-2/.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "59px",
                  left: "319px",
                  borderRadius: "4px",
                  width: "24.3px",
                  height: "25px",
                }}
                width={24}
                height={25}
                alt=""
                src="/CL-2/.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "59px",
                  left: "486px",
                  borderRadius: "4px",
                  width: "24.3px",
                  height: "25px",
                }}
                width={24}
                height={25}
                alt=""
                src="/CL-2/.svg"
              />
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "106px",
                left: "143px",
                width: "43px",
                height: "1px",
                objectFit: "contain",
              }}
              width={43}
              height={1}
              alt=""
              src="/CL-2/arrow-39.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "107px",
                left: "-85px",
                width: "80px",
                height: "0px",
                objectFit: "contain",
              }}
              width={80}
              height={1}
              alt=""
              src="/CL-2/arrow-41.svg"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "664px",
              left: "984px",
              borderRadius: "12px",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#5a5867",
              boxSizing: "border-box",
              width: "883px",
              height: "227px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "42px",
                left: "5px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick5}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  6
                </Typography>
              </Box>
              <Image
                style={{
                  width: "80px",
                  position: "relative",
                  borderRadius: "50px",
                  height: "82.8px",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={83}
                alt=""
                src="/CL-2/images-15@2x.png"
              />
              <Box
                sx={{
                  width: "164px",
                  position: "relative",
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  fontFamily: "'Red Hat Text'",
                  color: "#1c3f95",
                  display: "inline-block",
                  zIndex: "0",
                }}
              >
                Deploy on Sales Platforms
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "31px",
                left: "185px",
                borderRadius: "12px",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#5a5867",
                boxSizing: "border-box",
                width: "680px",
                height: "166px",
                fontSize: "15.8px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "9px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    6.1
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    borderRadius: "4px",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={70}
                  alt=""
                  src="/CL-2/download-70@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  <Typography
                    variant="inherit"
                    sx={{ margin: 0 }}
                  >{`Integration `}</Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    with Platforms
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "176px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    6.2
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "75.3px",
                    position: "relative",
                    borderRadius: "15px",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={75}
                  height={70}
                  alt=""
                  src="/CL-2/download-71@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  <Typography
                    variant="inherit"
                    sx={{ margin: 0 }}
                  >{`Set Up `}</Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    API Calls
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "10px",
                  left: "340px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    6.3
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    borderRadius: "16px",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={70}
                  alt=""
                  src="/CL-2/download-72@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  <Typography
                    variant="inherit"
                    sx={{ margin: 0 }}
                  >{`Customise `}</Typography>
                  <Typography
                    variant="inherit"
                    sx={{ margin: 0 }}
                  >{`for User `}</Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    Experience
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "510px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    6.4
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    borderRadius: "12px",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={70}
                  alt=""
                  src="/CL-2/download-73@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  Beta Testing
                </Box>
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "59px",
                  left: "152px",
                  borderRadius: "4px",
                  width: "24.3px",
                  height: "25px",
                }}
                width={24}
                height={25}
                alt=""
                src="/CL-2/.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "59px",
                  left: "319px",
                  borderRadius: "4px",
                  width: "24.3px",
                  height: "25px",
                }}
                width={24}
                height={25}
                alt=""
                src="/CL-2/.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "59px",
                  left: "486px",
                  borderRadius: "4px",
                  width: "24.3px",
                  height: "25px",
                }}
                width={24}
                height={25}
                alt=""
                src="/CL-2/.svg"
              />
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "106px",
                left: "143px",
                width: "43px",
                height: "1px",
                objectFit: "contain",
              }}
              width={43}
              height={1}
              alt=""
              src="/CL-2/arrow-39.svg"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "957px",
              left: "19px",
              borderRadius: "12px",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#5a5867",
              boxSizing: "border-box",
              width: "1736px",
              height: "227px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "40px",
                left: "65px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                cursor: "pointer",
              }}
              onClick={onWdgtContainerClick6}
            >
              <Box
                sx={{
                  margin: "0 !important",
                  position: "absolute",
                  top: "0px",
                  right: "158px",
                  boxShadow: 1,
                  borderRadius: "33px",
                  backgroundColor: "#456cea",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  zIndex: "2",
                }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "22px",
                    fontWeight: "700",
                  }}
                >
                  7
                </Typography>
              </Box>
              <Image
                style={{
                  width: "75.6px",
                  position: "relative",
                  borderRadius: "100.4px",
                  height: "80px",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={76}
                height={80}
                alt=""
                src="/CL-2/download-481@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  fontFamily: "'Red Hat Text'",
                  color: "#1c3f95",
                  zIndex: "0",
                }}
              >
                Monitor and Update
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "21px",
                left: "581px",
                borderRadius: "12px",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#5a5867",
                boxSizing: "border-box",
                width: "1127px",
                height: "181px",
                fontSize: "15.8px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "29px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    7.1
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    borderRadius: "9px",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={70}
                  alt=""
                  src="/CL-2/download-74@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  <Typography
                    variant="inherit"
                    sx={{ margin: 0 }}
                  >{`Track User `}</Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    Interactions
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "324px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    7.2
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    borderRadius: "15px",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={70}
                  alt=""
                  src="/CL-2/download-75@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  <Typography
                    variant="inherit"
                    sx={{ margin: 0 }}
                  >{`Incorporate `}</Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    Feedback
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "619px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    7.3
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    borderRadius: "9px",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={70}
                  alt=""
                  src="/CL-2/download-76@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  <Typography
                    variant="inherit"
                    sx={{ margin: 0 }}
                  >{`Refine and `}</Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    Retrain
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "26px",
                  left: "914px",
                  width: "175px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "14px",
                }}
              >
                <Box
                  sx={{
                    margin: "0 !important",
                    position: "absolute",
                    top: "0px",
                    right: "138.2px",
                    boxShadow: 1,
                    borderRadius: "28.9px",
                    backgroundColor: "#456cea",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8.8px",
                    zIndex: "2",
                  }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      minWidth: "19.25px",
                      fontWeight: "700",
                    }}
                  >
                    7.4
                  </Typography>
                </Box>
                <Image
                  style={{
                    width: "70px",
                    position: "relative",
                    borderRadius: "15px",
                    height: "70px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={70}
                  height={70}
                  alt=""
                  src="/CL-2/images-17@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "21px",
                    fontWeight: "500",
                    fontFamily: "'Red Hat Text'",
                    color: "#1c3f95",
                    zIndex: "0",
                  }}
                >
                  <Typography
                    variant="inherit"
                    sx={{ margin: 0 }}
                  >{`Expand `}</Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    Capabilities
                  </Typography>
                </Box>
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "77px",
                  left: "252px",
                  borderRadius: "4px",
                  width: "24.3px",
                  height: "25px",
                }}
                width={24}
                height={25}
                alt=""
                src="/CL-2/.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "77px",
                  left: "547px",
                  borderRadius: "4px",
                  width: "24.3px",
                  height: "25px",
                }}
                width={24}
                height={25}
                alt=""
                src="/CL-2/.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "77px",
                  left: "842px",
                  borderRadius: "4px",
                  width: "24.3px",
                  height: "25px",
                }}
                width={24}
                height={25}
                alt=""
                src="/CL-2/.svg"
              />
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "105.5px",
                left: "223px",
                maxHeight: "100%",
                width: "328px",
              }}
              width={328}
              height={12}
              alt=""
              src="/CL-2/arrow-391.svg"
            />
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "309px",
              left: "1434px",
              width: "0px",
              height: "58px",
              objectFit: "contain",
            }}
            width={1}
            height={58}
            alt=""
            src="/CL-2/arrow-40.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "597px",
              left: "462px",
              width: "0px",
              height: "69px",
              objectFit: "contain",
            }}
            width={1}
            height={69}
            alt=""
            src="/CL-2/arrow-42.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "773px",
              left: "901px",
              maxHeight: "100%",
              width: "80px",
            }}
            width={80}
            height={12}
            alt=""
            src="/CL-2/arrow-43.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "892px",
              left: "1695.5px",
              width: "230.5px",
              height: "230.5px",
              objectFit: "contain",
            }}
            width={231}
            height={231}
            alt=""
            src="/CL-2/arrow-44.svg"
          />
          <Image
            style={{
              position: "absolute",
              top: "193px",
              left: "898px",
              maxHeight: "100%",
              width: "80px",
            }}
            width={80}
            height={12}
            alt=""
            src="/CL-2/arrow-43.svg"
          />
        </Box>
      </Box>
      {isColorLegendsKeyOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeColorLegendsKey}
        >
          <ColorLegendsKey2 onClose={closeColorLegendsKey} />
        </PortalPopup>
      )}
    </>
  );
};

export default CareLibraryChatGPT4Traini;
