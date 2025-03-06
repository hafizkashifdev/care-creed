import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ColorLegendsKey2 from "../../components/CL-2/color-legends-key2";
import PortalPopup from "../../components/CL-2/portal-popup";
import { useRouter } from "next/router";

const CareLibraryRequiredCertific: NextPage = () => {
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

  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          backgroundColor: "#fff",
          height: "2353px",
          textAlign: "center",
          fontSize: "32px",
          color: "#1c3f95",
          fontFamily: "Outfit",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "106px",
            left: "calc(50% - 920.5px)",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            color: "#5a5867",
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
                width: "564px",
                position: "relative",
                lineHeight: "40px",
                display: "inline-block",
                flexShrink: "0",
              }}
            >
              Required Certifications/ Qualifications
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
            height: "2148px",
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
            >{`Qualification & Certifications`}</Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "255px",
            left: "70px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#1c3f95",
            boxSizing: "border-box",
            width: "1782px",
            height: "461px",
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
              Carer
            </Box>
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
              width: "529px",
              height: "319px",
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
                Qualifications
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "122px",
                left: "163px",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                fontSize: "16px",
                fontFamily: "'Red Hat Text'",
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
                src="/CL-2/image-164@2x.png"
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
                <Typography
                  variant="inherit"
                  sx={{ margin: 0 }}
                >{`NVQ Level 2 or 3 in `}</Typography>
                <Typography variant="inherit" sx={{ margin: 0 }}>
                  Health and Social Care
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "80px",
              left: "622px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#1c3f95",
              boxSizing: "border-box",
              width: "1127px",
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
                Certifications
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "102px",
                left: "30px",
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
                src="/CL-2/image-172@2x.png"
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
                Care Certificate
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "102px",
                left: "326px",
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
                src="/CL-2/image-174@2x.png"
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
                Manual Handling Training
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "102px",
                left: "630px",
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
                src="/CL-2/image-173@2x.png"
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
                First Aid and CPR Certification
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "102px",
                left: "904px",
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
                src="/CL-2/image-175@2x.png"
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
                <Typography
                  variant="inherit"
                  sx={{ margin: 0 }}
                >{`DBS (Disclosure and `}</Typography>
                <Typography variant="inherit" sx={{ margin: 0 }}>
                  Barring Service) Check
                </Typography>
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "153px",
                left: "261px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-2/1.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "153px",
                left: "557px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-2/1.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "153px",
                left: "861px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-2/1.svg"
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "772px",
            left: "70px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#1c3f95",
            boxSizing: "border-box",
            width: "1782px",
            height: "461px",
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
            >
              Care Coordinator
            </Box>
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
              width: "654px",
              height: "319px",
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
                Qualifications
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "123px",
                left: "29px",
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
                src="/CL-2/image-165@2x.png"
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
                <Typography
                  variant="inherit"
                  sx={{ margin: 0 }}
                >{`NVQ Level 3 in Health and `}</Typography>
                <Typography variant="inherit" sx={{ margin: 0 }}>
                  Social Care or equivalent
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "121px",
                left: "383px",
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
                src="/CL-2/image-166@2x.png"
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
                <Typography
                  variant="inherit"
                  sx={{ margin: 0 }}
                >{`Management or `}</Typography>
                <Typography variant="inherit" sx={{ margin: 0 }}>
                  Supervisory Training
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "80px",
              left: "755px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#1c3f95",
              boxSizing: "border-box",
              width: "984px",
              height: "319px",
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
                Certifications
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "112px",
                left: "50px",
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
                src="/CL-2/image-176@2x.png"
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
                First Aid Certification
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "102px",
                left: "386px",
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
                src="/CL-2/image-172@2x.png"
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
                Care Certificate
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "102px",
                left: "730px",
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
                  height: "73.8px",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                width={80}
                height={74}
                alt=""
                src="/CL-2/image-177@2x.png"
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
                Safeguarding Training
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "153px",
                left: "321px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-2/1.svg"
            />
            <Image
              style={{
                position: "absolute",
                top: "153px",
                left: "637px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-2/1.svg"
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "1281px",
            left: "69px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#1c3f95",
            boxSizing: "border-box",
            width: "1782px",
            height: "461px",
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
            >
              Care Home
            </Box>
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
              width: "786px",
              height: "319px",
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
                Qualifications
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "121px",
                left: "59px",
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
                src="/CL-2/image-162@2x.png"
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
                Registered Manager's Award (RMA)
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "121px",
                left: "483px",
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
                src="/CL-2/image-163@2x.png"
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
                <Typography
                  variant="inherit"
                  sx={{ margin: 0 }}
                >{`NVQ Level 5 in Health and `}</Typography>
                <Typography variant="inherit" sx={{ margin: 0 }}>
                  Social Care Management
                </Typography>
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "154px",
                left: "354px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-2/1.svg"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "80px",
              left: "865px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#1c3f95",
              boxSizing: "border-box",
              width: "889px",
              height: "319px",
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
                Certifications
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "112px",
                left: "98px",
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
                src="/CL-2/image-169@2x.png"
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
                <Typography
                  variant="inherit"
                  sx={{ margin: 0 }}
                >{`Care Quality Commission `}</Typography>
                <Typography variant="inherit" sx={{ margin: 0 }}>
                  (CQC) Registration
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "112px",
                left: "658px",
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
                src="/CL-2/image-171@2x.png"
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
                First Aid Certification
              </Box>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "154px",
                left: "490px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-2/1.svg"
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "1790px",
            left: "70px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#1c3f95",
            boxSizing: "border-box",
            width: "1782px",
            height: "461px",
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
            >
              Instructor
            </Box>
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
              width: "786px",
              height: "319px",
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
                Qualifications
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "121px",
                left: "59px",
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
                src="/CL-2/image-167@2x.png"
              />
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "24px",
                  zIndex: "0",
                  fontWeight: "700",
                }}
              >
                <Typography
                  variant="inherit"
                  sx={{ margin: 0 }}
                >{`PTLLS (Preparing to Teach `}</Typography>
                <Typography variant="inherit" sx={{ margin: 0 }}>
                  in the Lifelong Learning Sector)
                </Typography>
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "121px",
                left: "483px",
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
                src="/CL-2/image-168@2x.png"
              />
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "24px",
                  zIndex: "0",
                  fontWeight: "700",
                }}
              >
                <Typography
                  variant="inherit"
                  sx={{ margin: 0 }}
                >{`Assessor’s Qualification `}</Typography>
                <Typography variant="inherit" sx={{ margin: 0 }}>
                  (A1 or TAQA)
                </Typography>
              </Typography>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "154px",
                left: "354px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-2/1.svg"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "80px",
              left: "865px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              borderWidth: "4px",
              borderStyle: "dashed",
              borderColor: "#1c3f95",
              boxSizing: "border-box",
              width: "889px",
              height: "319px",
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
                Certifications
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "112px",
                left: "98px",
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
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "24px",
                  zIndex: "0",
                  fontWeight: "700",
                }}
              >
                Specialist Certifications
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "112px",
                left: "658px",
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
                src="/CL-2/image-179@2x.png"
              />
              <Typography
                variant="inherit"
                component="b"
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "24px",
                  zIndex: "0",
                  fontWeight: "700",
                }}
              >
                Health Certification
              </Typography>
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "154px",
                left: "490px",
                borderRadius: "4px",
                width: "34px",
                height: "35px",
              }}
              width={34}
              height={35}
              alt=""
              src="/CL-2/1.svg"
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

export default CareLibraryRequiredCertific;
