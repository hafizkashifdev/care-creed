import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import ColorLegendsKey2 from "../../components/CL-2/color-legends-key2";
import PortalPopup from "../../components/CL-2/portal-popup";
import { useRouter } from "next/router";

const CareLibraryRequiredAccredit: NextPage = () => {
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

  const onSecTitleContainerClick = useCallback(() => {
    // Please sync "Care Library Required Accreditation ISO 9001" to the project
  }, []);

  const onSecTitleContainerClick1 = useCallback(() => {
    // Please sync "Care Library Required Accreditation ISO  27001" to the project
  }, []);

  const onSecTitleContainerClick2 = useCallback(() => {
    // Please sync "Care Library Required Accreditation Gold Standards Framework (GSF)" to the project
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          backgroundColor: "#fff",
          height: "2405px",
          textAlign: "center",
          fontSize: "32px",
          color: "#1c3f95",
          fontFamily: "Outfit",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "101px",
            left: "calc(50% - 917.5px)",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            textAlign: "left",
            color: "#5a5867",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "10px",
            }}
          >
            <Typography
              variant="inherit"
              component="b"
              sx={{ position: "relative", display: "none", fontWeight: "700" }}
            >
              1.1
            </Typography>
            <Box
              sx={{
                position: "relative",
                lineHeight: "40px",
                textAlign: "center",
              }}
            >
              Required Accreditations
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
            color: "#5a5867",
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
            top: "167px",
            left: "38px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#1c3f95",
            boxSizing: "border-box",
            width: "1844px",
            height: "2200px",
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
            }}
          >
            <Box
              sx={{
                position: "relative",
                lineHeight: "40px",
                fontWeight: "600",
              }}
            >
              Accreditation
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "262px",
            left: "69px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#1c3f95",
            boxSizing: "border-box",
            width: "1782px",
            height: "1577px",
            fontSize: "16px",
            fontFamily: "'Red Hat Text'",
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
            >{`International `}</Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "80px",
              left: "50px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#1c3f95",
              boxSizing: "border-box",
              width: "1699px",
              height: "684px",
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
                cursor: "pointer",
                fontSize: "32px",
                fontFamily: "Outfit",
              }}
              onClick={onSecTitleContainerClick}
            >
              <Box
                sx={{
                  position: "relative",
                  lineHeight: "40px",
                  fontWeight: "600",
                }}
              >
                ISO 9001 (Quality Management Systems):
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "138px",
                left: "69px",
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
                src="/CL-2/image-185@2x.png"
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
                Understand the Standard
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "452px",
                left: "200px",
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
                src="/CL-2/image-195@2x.png"
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
                Certification
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "138px",
                left: "503px",
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
                src="/CL-2/image-186@2x.png"
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
                Gap Analysis
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "452px",
                left: "756px",
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
                src="/CL-2/image-194@2x.png"
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
                Certification Audit
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "138px",
                left: "937px",
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
                src="/CL-2/image-187@2x.png"
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
                Develop a QMS
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "138px",
                left: "1401px",
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
                src="/CL-2/image-188@2x.png"
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
                Internal Audit
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "452px",
                left: "1302px",
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
                src="/CL-2/image-189@2x.png"
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
                Select a Certification Body
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "198px",
                left: "296px",
                maxHeight: "100%",
                width: "180px",
              }}
              width={180}
              height={15}
              alt=""
              src="/CL-2/arrow-53.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "198px",
                left: "745px",
                maxHeight: "100%",
                width: "180px",
              }}
              width={180}
              height={15}
              alt=""
              src="/CL-2/arrow-53.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "198px",
                left: "1212px",
                maxHeight: "100%",
                width: "180px",
              }}
              width={180}
              height={15}
              alt=""
              src="/CL-2/arrow-53.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "510px",
                left: "400px",
                maxHeight: "100%",
                width: "312px",
                objectFit: "contain",
              }}
              width={312}
              height={15}
              alt=""
              src="/CL-2/arrow-56.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "494px",
                left: "956px",
                maxHeight: "100%",
                width: "312px",
                objectFit: "contain",
              }}
              width={312}
              height={15}
              alt=""
              src="/CL-2/arrow-57.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "269px",
                left: "1454px",
                width: "65px",
                height: "225px",
              }}
              width={65}
              height={225}
              alt=""
              src="/CL-2/vector-1.svg"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "809px",
              left: "50px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#1c3f95",
              boxSizing: "border-box",
              width: "1699px",
              height: "684px",
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
                cursor: "pointer",
                fontSize: "32px",
                fontFamily: "Outfit",
              }}
              onClick={onSecTitleContainerClick1}
            >
              <Box
                sx={{
                  position: "relative",
                  lineHeight: "40px",
                  fontWeight: "600",
                }}
              >
                ISO 27001 (Information Security Management)
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "138px",
                left: "69px",
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
                src="/CL-2/image-185@2x.png"
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
                Understand the Standard
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "442px",
                left: "160px",
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
                src="/CL-2/image-195@2x.png"
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
                Certification
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "138px",
                left: "503px",
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
                src="/CL-2/image-196@2x.png"
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
                Risk Assessment and Gap Analysis
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "442px",
                left: "756px",
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
                src="/CL-2/image-194@2x.png"
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
                Certification Audit
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "138px",
                left: "937px",
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
                src="/CL-2/image-197@2x.png"
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
                Develop a QMS
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "138px",
                left: "1401px",
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
                src="/CL-2/image-188@2x.png"
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
                Internal Audit
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "442px",
                left: "1322px",
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
                src="/CL-2/image-189@2x.png"
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
                Select a Certification Body
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "178px",
                left: "284px",
                maxHeight: "100%",
                width: "180px",
              }}
              width={180}
              height={15}
              alt=""
              src="/CL-2/arrow-53.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "180px",
                left: "698px",
                maxHeight: "100%",
                width: "180px",
              }}
              width={180}
              height={15}
              alt=""
              src="/CL-2/arrow-53.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "198px",
                left: "1174px",
                maxHeight: "100%",
                width: "180px",
              }}
              width={180}
              height={15}
              alt=""
              src="/CL-2/arrow-53.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "484px",
                left: "407px",
                maxHeight: "100%",
                width: "312px",
                objectFit: "contain",
              }}
              width={312}
              height={15}
              alt=""
              src="/CL-2/arrow-57.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "484px",
                left: "983px",
                maxHeight: "100%",
                width: "312px",
                objectFit: "contain",
              }}
              width={312}
              height={15}
              alt=""
              src="/CL-2/arrow-57.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "274px",
                left: "1479.5px",
                width: "41px",
                height: "209.5px",
              }}
              width={41}
              height={210}
              alt=""
              src="/CL-2/vector-11.svg"
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "1885px",
            left: "80px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#1c3f95",
            boxSizing: "border-box",
            width: "1782px",
            height: "443px",
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
            }}
          >
            <Box
              sx={{
                position: "relative",
                lineHeight: "40px",
                fontWeight: "600",
              }}
            >{`National `}</Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "80px",
              left: "50px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#1c3f95",
              boxSizing: "border-box",
              width: "1699px",
              height: "319px",
              fontSize: "16px",
              fontFamily: "'Red Hat Text'",
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
                cursor: "pointer",
                fontSize: "32px",
                fontFamily: "Outfit",
              }}
              onClick={onSecTitleContainerClick2}
            >
              <Box
                sx={{
                  position: "relative",
                  lineHeight: "40px",
                  fontWeight: "600",
                }}
              >
                Gold Standards Framework (GSF)
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "138px",
                left: "69px",
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
                src="/CL-2/image-26@2x.png"
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
                Application and Eligibility
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "138px",
                left: "423px",
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
                src="/CL-2/image-27@2x.png"
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
                Training and Development
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "138px",
                left: "757px",
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
                src="/CL-2/image-28@2x.png"
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
                Quality Assurance
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "138px",
                left: "1091px",
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
                src="/CL-2/image-29@2x.png"
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
                Accreditation Visit
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "138px",
                left: "1435px",
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
                src="/CL-2/image-30@2x.png"
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
                Award of GSF Accreditation
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "201.5px",
                left: "272px",
                maxHeight: "100%",
                width: "96px",
              }}
              width={96}
              height={15}
              alt=""
              src="/CL-2/arrow-58.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "202px",
                left: "615px",
                maxHeight: "100%",
                width: "96px",
              }}
              width={96}
              height={15}
              alt=""
              src="/CL-2/arrow-59.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "202px",
                left: "957px",
                maxHeight: "100%",
                width: "96px",
              }}
              width={96}
              height={15}
              alt=""
              src="/CL-2/arrow-59.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "202px",
                left: "1291px",
                maxHeight: "100%",
                width: "96px",
              }}
              width={96}
              height={15}
              alt=""
              src="/CL-2/arrow-59.svg"
            />
          </Box>
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

export default CareLibraryRequiredAccredit;
