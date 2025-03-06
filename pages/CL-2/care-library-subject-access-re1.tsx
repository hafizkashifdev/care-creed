import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ColorLegendsKey2 from "../../components/CL-2/color-legends-key2";
import PortalPopup from "../../components/CL-2/portal-popup";
import { useRouter } from "next/router";

const CareLibrarySubjectAccessRe1: NextPage = () => {
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
    router.push("/CL-2/care-library-subject-access-re");
  }, [router]);

  const onWdgtContainerClick1 = useCallback(() => {
    router.push("/CL-2/care-library-subject-access-re2");
  }, [router]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          backgroundColor: "#fff",
          height: "3386px",
          textAlign: "center",
          fontSize: "32px",
          color: "#5a5867",
          fontFamily: "Outfit",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "110px",
            left: "calc(50% - 933px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            textAlign: "left",
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
              Subject Access Request
            </Box>
          </Box>
        </Box>
        <Image
          style={{
            position: "absolute",
            top: "39px",
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
            top: "191.4px",
            left: "14.4px",
            borderRadius: "15.6px",
            borderWidth: "5.2px",
            borderStyle: "dashed",
            borderColor: "#666",
            boxSizing: "border-box",
            width: "1869.2px",
            height: "3158.2px",
            fontSize: "16px",
            color: "#1c3f95",
            fontFamily: "'Red Hat Text'",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "104px",
              left: "337px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#1c3f95",
              boxSizing: "border-box",
              width: "1491px",
              height: "518px",
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
                Definition
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "76px",
                left: "48px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
              }}
            >
              <Image
                style={{
                  width: "80px",
                  position: "relative",
                  height: "80px",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                alt=""
                src="/CL-2/9655162-1@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "24px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Legal Rights
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "296px",
                left: "1257px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
              }}
            >
              <Image
                style={{
                  width: "80px",
                  position: "relative",
                  height: "80px",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                alt=""
                src="/CL-2/governance-and-constitutional-body-colored-icon-in-powerpoint-pptx-png-and-editable-eps-format-slide01-1@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "24px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Public bodies
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "76px",
                left: "625px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
              }}
            >
              <Image
                style={{
                  width: "80px",
                  position: "relative",
                  height: "80px",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                alt=""
                src="/CL-2/images-5@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "24px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Individual
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "76px",
                left: "328px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
              }}
            >
              <Image
                style={{
                  width: "80px",
                  position: "relative",
                  height: "80px",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                alt=""
                src="/CL-2/gdpr3450x281-1@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "24px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                UK GDPR
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "296px",
                left: "964px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
              }}
            >
              <Image
                style={{
                  width: "80px",
                  position: "relative",
                  height: "80px",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                alt=""
                src="/CL-2/images-4@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "24px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Local Authorities
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "76px",
                left: "955px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
              }}
            >
              <Image
                style={{
                  width: "80px",
                  position: "relative",
                  height: "80px",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                alt=""
                src="/CL-2/pngtreerequestsignatureiconcolorflatpngimage-4696191-3@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "24px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                {" "}
                Request
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "76px",
                left: "1254px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
              }}
            >
              <Image
                style={{
                  width: "80px",
                  position: "relative",
                  height: "80px",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={80}
                alt=""
                src="/CL-2/5916410-1@2x.png"
              />
              <Box
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "24px",
                  fontWeight: "500",
                  zIndex: "0",
                }}
              >
                Personal Data
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "138px",
                left: "229px",
                maxHeight: "100%",
                width: "79px",
              }}
              width={79}
              height={15}
              alt=""
              src="/CL-2/arrow-392.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "138px",
                left: "526px",
                maxHeight: "100%",
                width: "79px",
              }}
              width={79}
              height={15}
              alt=""
              src="/CL-2/arrow-392.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "136px",
                left: "825px",
                maxHeight: "100%",
                width: "79px",
              }}
              width={79}
              height={15}
              alt=""
              src="/CL-2/arrow-392.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "134px",
                left: "1124px",
                maxHeight: "100%",
                width: "79px",
              }}
              width={79}
              height={15}
              alt=""
              src="/CL-2/arrow-392.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "356px",
                left: "1120px",
                maxHeight: "100%",
                width: "93px",
                objectFit: "contain",
              }}
              width={93}
              height={15}
              alt=""
              src="/CL-2/arrow-431.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "356px",
                left: "782px",
                maxHeight: "100%",
                width: "136px",
                objectFit: "contain",
              }}
              width={136}
              height={15}
              alt=""
              src="/CL-2/arrow-45.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "205px",
                left: "1361px",
                width: "0px",
                height: "79px",
                objectFit: "contain",
              }}
              width={1}
              height={79}
              alt=""
              src="/CL-2/arrow-441.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "108px",
                left: "236px",
                lineHeight: "24px",
                fontWeight: "500",
                display: "inline-block",
                width: "58px",
                height: "24px",
              }}
            >
              Under
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "108px",
                left: "528px",
                lineHeight: "24px",
                fontWeight: "500",
                display: "inline-block",
                width: "58px",
                height: "24px",
              }}
            >
              Allow
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "108px",
                left: "836px",
                lineHeight: "24px",
                fontWeight: "500",
                display: "inline-block",
                width: "58px",
                height: "24px",
              }}
            >
              To
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "212.2px",
                left: "1385.5px",
                lineHeight: "24px",
                fontWeight: "500",
                display: "inline-block",
                width: "58px",
                height: "24px",
                transform: " rotate(90.4deg)",
                transformOrigin: "0 0",
              }}
            >
              Held by
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "324px",
                left: "1132px",
                lineHeight: "24px",
                fontWeight: "500",
                display: "inline-block",
                width: "74px",
                height: "24px",
              }}
            >
              Including
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "324px",
                left: "772px",
                lineHeight: "24px",
                fontWeight: "500",
                display: "inline-block",
                width: "155px",
                height: "24px",
              }}
            >
              When Submitted
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "271px",
                left: "39px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#666",
                boxSizing: "border-box",
                width: "728px",
                height: "169px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "23px",
                  left: "460px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/images-4@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Local Authorities
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "23px",
                  left: "35px",
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/4252360-1@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Legally
                </Box>
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "83px",
                  left: "246px",
                  maxHeight: "100%",
                  width: "136px",
                  objectFit: "contain",
                }}
                width={136}
                height={15}
                alt=""
                src="/CL-2/arrow-45.svg"
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "54px",
                  left: "236px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "155px",
                  height: "24px",
                }}
              >
                Provide info
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "282px",
              left: "73px",
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
            <Image
              style={{
                width: "80px",
                position: "relative",
                height: "80px",
                objectFit: "cover",
                zIndex: "1",
              }}
              width={80}
              height={80}
              alt=""
              src="/CL-2/subjectaccessrequestsiconthinoutlinesymbolvector22992381-2@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "24px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >
              <Typography variant="inherit" sx={{ margin: 0 }}>
                Subject Access
              </Typography>
              <Typography variant="inherit" sx={{ margin: 0 }}>
                Request
              </Typography>
            </Box>
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "346px",
              left: "237px",
              maxHeight: "100%",
              width: "79px",
            }}
            width={79}
            height={15}
            alt=""
            src="/CL-2/arrow-392.svg"
          />
          <Box
            sx={{
              position: "absolute",
              top: "322px",
              left: "257px",
              lineHeight: "24px",
              fontWeight: "500",
              color: "#5a5867",
              display: "inline-block",
              width: "40px",
            }}
          >
            is a
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "658px",
              left: "53px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#1c3f95",
              boxSizing: "border-box",
              width: "1779px",
              height: "2445px",
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
                SAR Breakdown
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "87px",
                left: "72px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#1c3f95",
                boxSizing: "border-box",
                width: "1639px",
                height: "358px",
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
                  Initiating the Request
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "127px",
                  left: "214px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/74568707emailiconwebsitecontactussymboleps10vectorillustrationonwhitebackground-1@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Send Email
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "126px",
                  left: "17px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                  cursor: "pointer",
                }}
                onClick={onWdgtContainerClick1}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/document04512-1@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Initiating the request
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "127px",
                  left: "409px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/images-5@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Template
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "163px",
                  left: "360px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "63px",
                  height: "24px",
                }}
              >
                As Per
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "187px",
                  left: "175px",
                  maxHeight: "100%",
                  width: "63px",
                }}
                width={63}
                height={15}
                alt=""
                src="/CL-2/arrow-393.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "187px",
                  left: "361px",
                  maxHeight: "100%",
                  width: "62px",
                }}
                width={62}
                height={15}
                alt=""
                src="/CL-2/arrow-401.svg"
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "30px",
                  left: "595px",
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                  borderWidth: "4px",
                  borderStyle: "dashed",
                  borderColor: "#1c3f95",
                  boxSizing: "border-box",
                  width: "1026px",
                  height: "302px",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "98px",
                    left: "535px",
                    width: "158px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "16px",
                  }}
                >
                  <Image
                    style={{
                      width: "80px",
                      position: "relative",
                      height: "80px",
                      objectFit: "cover",
                      zIndex: "1",
                    }}
                    width={80}
                    height={80}
                    alt=""
                    src="/CL-2/2003257-1@2x.png"
                  />
                  <Box
                    sx={{
                      alignSelf: "stretch",
                      position: "relative",
                      lineHeight: "24px",
                      fontWeight: "500",
                      zIndex: "0",
                    }}
                  >
                    <Typography variant="inherit" sx={{ margin: 0 }}>
                      Requested
                    </Typography>
                    <Typography variant="inherit" sx={{ margin: 0 }}>
                      Information
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: "98px",
                    left: "278px",
                    width: "158px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "16px",
                  }}
                >
                  <Image
                    style={{
                      width: "80px",
                      position: "relative",
                      height: "80px",
                      objectFit: "cover",
                      zIndex: "1",
                    }}
                    width={80}
                    height={80}
                    alt=""
                    src="/CL-2/1275265-1@2x.png"
                  />
                  <Box
                    sx={{
                      alignSelf: "stretch",
                      position: "relative",
                      lineHeight: "24px",
                      fontWeight: "500",
                      zIndex: "0",
                    }}
                  >
                    Address
                  </Box>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: "98px",
                    left: "832px",
                    width: "158px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "16px",
                  }}
                >
                  <Image
                    style={{
                      width: "80px",
                      position: "relative",
                      height: "80px",
                      objectFit: "cover",
                      zIndex: "1",
                    }}
                    width={80}
                    height={80}
                    alt=""
                    src="/CL-2/istockphoto1369134714612x612-1@2x.png"
                  />
                  <Box
                    sx={{
                      alignSelf: "stretch",
                      position: "relative",
                      lineHeight: "24px",
                      fontWeight: "500",
                      zIndex: "0",
                    }}
                  >
                    <Typography variant="inherit" sx={{ margin: 0 }}>
                      Proof of
                    </Typography>
                    <Typography variant="inherit" sx={{ margin: 0 }}>
                      Identity
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: "95px",
                    left: "29px",
                    width: "158px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "16px",
                  }}
                >
                  <Image
                    style={{
                      width: "80px",
                      position: "relative",
                      height: "80px",
                      objectFit: "cover",
                      zIndex: "1",
                    }}
                    width={80}
                    height={80}
                    alt=""
                    src="/CL-2/6682701-1@2x.png"
                  />
                  <Box
                    sx={{
                      alignSelf: "stretch",
                      position: "relative",
                      lineHeight: "24px",
                      fontWeight: "500",
                      zIndex: "0",
                    }}
                  >
                    Name
                  </Box>
                </Box>
                <Image
                  style={{
                    position: "absolute",
                    top: "151px",
                    left: "220px",
                    borderRadius: "4px",
                    width: "34px",
                    height: "35px",
                  }}
                  width={34}
                  height={35}
                  alt=""
                  src="/CL-2/10.svg"
                />
                <Image
                  style={{
                    position: "absolute",
                    top: "151px",
                    left: "460px",
                    borderRadius: "4px",
                    width: "34px",
                    height: "35px",
                  }}
                  width={34}
                  height={35}
                  alt=""
                  src="/CL-2/10.svg"
                />
                <Image
                  style={{
                    position: "absolute",
                    top: "151px",
                    left: "746px",
                    borderRadius: "4px",
                    width: "34px",
                    height: "35px",
                  }}
                  width={34}
                  height={35}
                  alt=""
                  src="/CL-2/10.svg"
                />
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "2050px",
                left: "72px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#1c3f95",
                boxSizing: "border-box",
                width: "1639px",
                height: "358px",
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
                  Further Steps
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "141px",
                  left: "214px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/7938341-1@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Satisfied
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "129px",
                  left: "1255px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/subjectaccessrequestsiconthinoutlinesymbolvector22992381-2@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    Subject Access
                  </Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    Request
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "141px",
                  left: "606px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/download-2@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Follow Up
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "136px",
                  left: "17px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/images-5@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Individual
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "141px",
                  left: "1058px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/2464299-1@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Escalate
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "141px",
                  left: "409px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/images-18@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Response
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "150px",
                  left: "1450px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "107px",
                    position: "relative",
                    height: "62px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={107}
                  height={62}
                  alt=""
                  src="/CL-2/information-commissioners-office-logosvg-1@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  ICO
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "141px",
                  left: "801px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/images-4@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Local Authorities
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "163px",
                  left: "360px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "63px",
                  height: "24px",
                }}
              >
                With
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "168px",
                  left: "1401px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "63px",
                  height: "24px",
                }}
              >
                To
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "163px",
                  left: "752px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "63px",
                  height: "24px",
                }}
              >
                With
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "162px",
                  left: "167px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "63px",
                  height: "24px",
                }}
              >
                If Not
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "201px",
                  left: "175px",
                  maxHeight: "100%",
                  width: "63px",
                }}
                width={63}
                height={15}
                alt=""
                src="/CL-2/arrow-393.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "201px",
                  left: "1216px",
                  maxHeight: "100%",
                  width: "63px",
                }}
                width={63}
                height={15}
                alt=""
                src="/CL-2/arrow-393.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "201px",
                  left: "361px",
                  maxHeight: "100%",
                  width: "62px",
                }}
                width={62}
                height={15}
                alt=""
                src="/CL-2/arrow-401.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "201px",
                  left: "1402px",
                  maxHeight: "100%",
                  width: "62px",
                }}
                width={62}
                height={15}
                alt=""
                src="/CL-2/arrow-401.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "201px",
                  left: "753px",
                  maxHeight: "100%",
                  width: "62px",
                }}
                width={62}
                height={15}
                alt=""
                src="/CL-2/arrow-401.svg"
              />
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  position: "absolute",
                  top: "189px",
                  left: "986px",
                  fontSize: "24px",
                  lineHeight: "24px",
                  display: "inline-block",
                  textAlign: "left",
                  width: "52px",
                  fontWeight: "700",
                }}
              >
                OR
              </Typography>
              <Image
                style={{
                  position: "absolute",
                  top: "169px",
                  left: "564px",
                  borderRadius: "4px",
                  width: "34px",
                  height: "35px",
                }}
                width={34}
                height={35}
                alt=""
                src="/CL-2/10.svg"
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "848px",
                left: "72px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#1c3f95",
                boxSizing: "border-box",
                width: "630px",
                height: "358px",
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
                  Identify Verification
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "127px",
                  left: "214px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/6283078-1@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Requester Identity
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "126px",
                  left: "17px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/illustrationseriescuteperson-men600nw2316487885-1@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Not Sure
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "127px",
                  left: "409px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/images-11@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  identity Proof
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "153px",
                  left: "360px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "63px",
                  height: "24px",
                }}
              >
                May Ask
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "152px",
                  left: "170px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "63px",
                  height: "24px",
                }}
              >
                About
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "187px",
                  left: "175px",
                  maxHeight: "100%",
                  width: "63px",
                }}
                width={63}
                height={15}
                alt=""
                src="/CL-2/arrow-393.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "187px",
                  left: "361px",
                  maxHeight: "100%",
                  width: "62px",
                }}
                width={62}
                height={15}
                alt=""
                src="/CL-2/arrow-401.svg"
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "979px",
                left: "711px",
                lineHeight: "24px",
                fontWeight: "500",
                display: "inline-block",
                width: "113px",
                height: "24px",
              }}
            >
              After Confirmation
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "1038px",
                left: "714px",
                maxHeight: "100%",
                width: "113px",
              }}
              width={113}
              height={15}
              alt=""
              src="/CL-2/arrow-402.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "848px",
                left: "835px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#1c3f95",
                boxSizing: "border-box",
                width: "876px",
                height: "358px",
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
                  Locating the Data
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "127px",
                  left: "214px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/8637124-1@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Databases
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "126px",
                  left: "17px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/images-4@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Local Authorities
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "127px",
                  left: "409px",
                  width: "158px",
                  height: "120px",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "152px",
                  left: "170px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "63px",
                  height: "24px",
                }}
              >
                Search
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "187px",
                  left: "175px",
                  maxHeight: "100%",
                  width: "63px",
                }}
                width={63}
                height={15}
                alt=""
                src="/CL-2/arrow-393.svg"
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "1262px",
                left: "75px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#1c3f95",
                boxSizing: "border-box",
                width: "1620px",
                height: "358px",
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
                  Processing the Data
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "127px",
                  left: "414px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/images-18@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Respond
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "126px",
                  left: "57px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/images-4@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Local Authorities
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "155px",
                  left: "288px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "63px",
                  height: "24px",
                }}
              >
                Must
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "151px",
                  left: "894px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "63px",
                  height: "24px",
                }}
              >
                With In
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "187px",
                  left: "226px",
                  maxHeight: "100%",
                  width: "188px",
                }}
                width={188}
                height={15}
                alt=""
                src="/CL-2/arrow-397.svg"
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "126px",
                  left: "696px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/subjectaccessrequestsiconthinoutlinesymbolvector22992381-2@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    Subject Access
                  </Typography>
                  <Typography variant="inherit" sx={{ margin: 0 }}>
                    Request
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "12px",
                  left: "1059px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/images-151@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  One Month
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "217px",
                  left: "1059px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/8596479-1@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Complex Request
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "217px",
                  left: "1399px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/pngtree2monthscalendariconpngimage-8838568-2@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Two Month
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "151px",
                  left: "602px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "63px",
                  height: "24px",
                }}
              >
                To
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "242px",
                  left: "1025px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "63px",
                  height: "24px",
                }}
              >
                Incase
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "242px",
                  left: "1308px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "110px",
                  height: "24px",
                }}
              >
                Required
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "186px",
                  left: "572px",
                  maxHeight: "100%",
                  width: "124px",
                }}
                width={124}
                height={15}
                alt=""
                src="/CL-2/arrow-411.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "47px",
                  left: "826px",
                  width: "287.6px",
                  height: "203.2px",
                  objectFit: "contain",
                }}
                width={288}
                height={203}
                alt=""
                src="/CL-2/arrow-421.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "121.4px",
                  left: "828.3px",
                  width: "278.3px",
                  height: "176.5px",
                  objectFit: "contain",
                }}
                width={278}
                height={177}
                alt=""
                src="/CL-2/arrow-432.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "277px",
                  left: "1217px",
                  maxHeight: "100%",
                  width: "206px",
                }}
                width={206}
                height={15}
                alt=""
                src="/CL-2/arrow-442.svg"
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "1656px",
                left: "78px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#1c3f95",
                boxSizing: "border-box",
                width: "1620px",
                height: "358px",
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
                  Providing the Information
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "127px",
                  left: "414px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/6772402-1@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Personal Data
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "126px",
                  left: "57px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/images-4@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Local Authorities
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "155px",
                  left: "288px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "79px",
                  height: "24px",
                }}
              >
                Provides
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "151px",
                  left: "894px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "63px",
                  height: "24px",
                }}
              >
                Via
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "187px",
                  left: "226px",
                  maxHeight: "100%",
                  width: "188px",
                }}
                width={188}
                height={15}
                alt=""
                src="/CL-2/arrow-397.svg"
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "126px",
                  left: "696px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/2247674-1@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Readable Format
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "12px",
                  left: "1279px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/group@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Email
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "217px",
                  left: "1279px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/6551076-1@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Post
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "151px",
                  left: "602px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "63px",
                  height: "24px",
                }}
              >
                In
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "186px",
                  left: "572px",
                  maxHeight: "100%",
                  width: "124px",
                }}
                width={124}
                height={15}
                alt=""
                src="/CL-2/arrow-411.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "-19.1px",
                  left: "826px",
                  width: "434.1px",
                  height: "269.3px",
                  objectFit: "contain",
                }}
                width={434}
                height={269}
                alt=""
                src="/CL-2/arrow-423.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "121.4px",
                  left: "828.3px",
                  width: "437.6px",
                  height: "236.6px",
                  objectFit: "contain",
                }}
                width={438}
                height={237}
                alt=""
                src="/CL-2/arrow-434.svg"
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "526px",
                left: "69px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#1c3f95",
                boxSizing: "border-box",
                width: "1642px",
                height: "286px",
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
                  Receiving the Request
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "88px",
                  left: "1014px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/images-9@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Acknowledge
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "100px",
                  left: "528px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/images-7@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Receive Request
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "88px",
                  left: "1392px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/images-10@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Process
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "100px",
                  left: "66px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/images-4@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Local Authorities
                </Box>
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "143px",
                  left: "818px",
                  borderRadius: "4px",
                  width: "34px",
                  height: "35px",
                }}
                width={34}
                height={35}
                alt=""
                src="/CL-2/10.svg"
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "136px",
                  left: "1259px",
                  lineHeight: "24px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "63px",
                  height: "24px",
                }}
              >
                Begins
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "160px",
                  left: "239px",
                  maxHeight: "100%",
                  width: "238px",
                }}
                width={238}
                height={15}
                alt=""
                src="/CL-2/arrow-403.svg"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "160px",
                  left: "1181px",
                  maxHeight: "100%",
                  width: "220px",
                }}
                width={220}
                height={15}
                alt=""
                src="/CL-2/arrow-412.svg"
              />
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "453px",
                left: "1631px",
                width: "0px",
                height: "66px",
                objectFit: "contain",
              }}
              width={1}
              height={66}
              alt=""
              src="/CL-2/arrow-398.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "902px",
                left: "1207px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                borderWidth: "4px",
                borderStyle: "dashed",
                borderColor: "#1c3f95",
                boxSizing: "border-box",
                width: "463px",
                height: "242px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "72px",
                  left: "278px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/360-f-507198344-ppzmz0shftohjbpuv7dh0atswkjrpjtr-1@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Records
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "69px",
                  left: "29px",
                  width: "158px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Image
                  style={{
                    width: "80px",
                    position: "relative",
                    height: "80px",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  width={80}
                  height={80}
                  alt=""
                  src="/CL-2/4447248-1@2x.png"
                />
                <Box
                  sx={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "24px",
                    fontWeight: "500",
                    zIndex: "0",
                  }}
                >
                  Files
                </Box>
              </Box>
              <Image
                style={{
                  position: "absolute",
                  top: "125px",
                  left: "220px",
                  borderRadius: "4px",
                  width: "34px",
                  height: "35px",
                }}
                width={34}
                height={35}
                alt=""
                src="/CL-2/10.svg"
              />
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

export default CareLibrarySubjectAccessRe1;
