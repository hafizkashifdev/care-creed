import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import ColorLegendsKey2 from "../../components/CL-2/color-legends-key2";
import PortalPopup from "../../components/CL-2/portal-popup";
import { useRouter } from "next/router";

const CareLibraryJobRoles: NextPage = () => {
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
          height: "4416px",
          textAlign: "center",
          fontSize: "16px",
          color: "#00843d",
          fontFamily: "'Red Hat Text'",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "92px",
            left: "calc(50% - 916px)",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            fontSize: "32px",
            color: "#5a5867",
            fontFamily: "Outfit",
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
            <Box sx={{ position: "relative", lineHeight: "40px" }}>
              Job Roles
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "83px",
            left: "1552px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            cursor: "pointer",
            fontSize: "32px",
            color: "#5a5867",
            fontFamily: "Outfit",
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
            top: "137px",
            left: "38px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#00843d",
            boxSizing: "border-box",
            width: "1844px",
            height: "4241px",
            fontSize: "32px",
            fontFamily: "Outfit",
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
              Job Roles
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "215px",
            left: "70px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#00843d",
            boxSizing: "border-box",
            width: "1782px",
            height: "520px",
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
              Social Science
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "54px",
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
              src="/CL-2/image-85@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "24px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >{`Care Team Lead `}</Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "296px",
              left: "54px",
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
              src="/CL-2/image-138@2x.png"
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
              NHS Onboarding Associate
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "422px",
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
              src="/CL-2/image-109@2x.png"
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
              Deputy Director of Care
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "296px",
              left: "422px",
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
              src="/CL-2/image-150@2x.png"
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
              Registered Nurse
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "790px",
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
              src="/CL-2/group-270@2x.png"
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
              Director of Care
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "296px",
              left: "790px",
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
              src="/CL-2/image-158@2x.png"
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
              Support Worker
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "1158px",
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
              src="/CL-2/image-126@2x.png"
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
              Healthcare Professional
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "296px",
              left: "1158px",
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
              src="/CL-2/image-142@2x.png"
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
              Performance Development Coach
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "1526px",
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
              src="/CL-2/image-127@2x.png"
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
              HMR Medical and Nursing Services
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "296px",
              left: "1526px",
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
              src="/CL-2/image-125@2x.png"
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
              Healthcare Coordinator
            </Box>
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "140px",
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
              top: "336px",
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
              top: "140px",
              left: "700px",
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
              top: "336px",
              left: "700px",
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
              top: "140px",
              left: "1074px",
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
              top: "336px",
              left: "1074px",
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
              top: "140px",
              left: "1447px",
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
              top: "336px",
              left: "1447px",
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
            top: "781px",
            left: "70px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#00843d",
            boxSizing: "border-box",
            width: "1782px",
            height: "292px",
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
              Psychology
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "54px",
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
              src="/CL-2/image-99@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "24px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >{`Consultant in Adult Social Care Worker Quality/ L&D`}</Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "545px",
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
              src="/CL-2/image-149@2x.png"
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
              Registered Care Manager
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "1036px",
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
              src="/CL-2/image-99@2x.png"
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
              Social Care Worker
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "1527px",
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
              src="/CL-2/image-153@2x.png"
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
              Senior Healthcare consultant
            </Box>
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "140px",
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
              top: "140px",
              left: "872px",
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
              top: "140px",
              left: "1447px",
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
            top: "3813px",
            left: "70px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#00843d",
            boxSizing: "border-box",
            width: "1782px",
            height: "520px",
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
              Computing
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "54px",
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
              src="/CL-2/image-90@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "24px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >{`Chief Analytics Officer `}</Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "329px",
              left: "303px",
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
              src="/CL-2/image-106@2x.png"
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
              Data Insights Manager
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "545px",
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
              src="/CL-2/image-93@2x.png"
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
              Chief Technology Officer
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "1036px",
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
              src="/CL-2/image-132@2x.png"
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
              Logistic admin assistant
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "329px",
              left: "745px",
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
              src="/CL-2/image-107@2x.png"
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
              Data Scientist
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "1527px",
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
              src="/CL-2/image-105@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "24px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >{`Data Analyst `}</Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "329px",
              left: "1264px",
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
              src="/CL-2/image-130@2x.png"
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
              Insight Analyst
            </Box>
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "140px",
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
              top: "374px",
              left: "588px",
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
              top: "140px",
              left: "872px",
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
              top: "357px",
              left: "1088px",
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
              top: "140px",
              left: "1447px",
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
            top: "1491px",
            left: "70px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#00843d",
            boxSizing: "border-box",
            width: "1782px",
            height: "1046px",
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
            >{`Stratergy & Governance`}</Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "54px",
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
              src="/CL-2/image-81@2x.png"
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
              Accountant Administrator
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "459px",
              left: "54px",
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
              src="/CL-2/image-1321@2x.png"
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
              Research and Understand
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "296px",
              left: "54px",
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
              src="/CL-2/image-92@2x.png"
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
              Chief Executive Officer
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "655px",
              left: "54px",
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
              src="/CL-2/image-156@2x.png"
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
              Social Media Manager
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "422px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              fontSize: "14px",
              fontFamily: "Inter",
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
              src="/CL-2/image-82@2x.png"
            />
            <Box
              sx={{
                width: "172px",
                position: "relative",
                fontWeight: "500",
                display: "inline-block",
                height: "15px",
                flexShrink: "0",
                zIndex: "0",
              }}
            >
              Account Assistant
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "459px",
              left: "422px",
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
              src="/CL-2/image-135@2x.png"
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
              Managing Director
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "296px",
              left: "422px",
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
              src="/CL-2/image-97@2x.png"
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
              Commercial Manager
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "655px",
              left: "422px",
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
              src="/CL-2/image-157@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "24px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >{`Stage Business Development `}</Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "874px",
              left: "482px",
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
              src="/CL-2/image-161@2x.png"
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
              Vice-chairman
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "790px",
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
              src="/CL-2/image-84@2x.png"
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
              Board Observer
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "459px",
              left: "790px",
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
              src="/CL-2/image-140@2x.png"
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
              Non-executive Chair
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "296px",
              left: "790px",
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
              src="/CL-2/image-98@2x.png"
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
              Company Director
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "655px",
              left: "790px",
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
              src="/CL-2/image-1581@2x.png"
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
              Student Leader, Engagement Associate
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "1158px",
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
              src="/CL-2/image-87@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "24px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >{`Chair of the Finance & Performance Committee`}</Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "459px",
              left: "1158px",
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
              src="/CL-2/image-152@2x.png"
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
              Sales and marketing administrator
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "296px",
              left: "1158px",
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
              src="/CL-2/image-101@2x.png"
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
              Credit Controller
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "655px",
              left: "1158px",
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
              src="/CL-2/image-160@2x.png"
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
              Trustee
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "874px",
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
              src="/CL-2/image-1621@2x.png"
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
              Management Accountant
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "1526px",
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
              src="/CL-2/image-89@2x.png"
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
              Chairman
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "459px",
              left: "1526px",
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
              src="/CL-2/image-1531@2x.png"
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
              Senior Credit Controller
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "296px",
              left: "1526px",
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
              src="/CL-2/image-129@2x.png"
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
              Honorary Treasurer
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "655px",
              left: "1526px",
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
              src="/CL-2/image-161@2x.png"
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
              Vice President
            </Box>
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "140px",
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
              top: "499px",
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
              top: "336px",
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
              top: "695px",
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
              top: "140px",
              left: "700px",
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
              top: "499px",
              left: "700px",
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
              top: "336px",
              left: "700px",
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
              top: "695px",
              left: "700px",
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
              top: "914px",
              left: "856px",
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
              top: "140px",
              left: "1074px",
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
              top: "499px",
              left: "1074px",
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
              top: "336px",
              left: "1074px",
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
              top: "695px",
              left: "1074px",
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
              top: "140px",
              left: "1447px",
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
              top: "499px",
              left: "1447px",
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
              top: "336px",
              left: "1447px",
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
              top: "695px",
              left: "1447px",
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
            top: "2583px",
            left: "69px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#00843d",
            boxSizing: "border-box",
            width: "1782px",
            height: "1184px",
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
            >{`Business & Management`}</Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "54px",
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
              src="/CL-2/image-841@2x.png"
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
              Business Development Manager
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "459px",
              left: "54px",
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
              src="/CL-2/image-1011@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "24px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >{`CRM & Automation Manage`}</Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "296px",
              left: "54px",
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
              src="/CL-2/image-94@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "24px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >{`Client Relations Manager `}</Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "655px",
              left: "54px",
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
              src="/CL-2/image-120@2x.png"
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
              Head Of Operations
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "818px",
              left: "54px",
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
              src="/CL-2/image-136@2x.png"
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
              NHS Consultant
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "422px",
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
              src="/CL-2/image-891@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "24px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >{`Chargebacks Advisor `}</Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "459px",
              left: "422px",
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
              src="/CL-2/image-113@2x.png"
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
              Financial Risk Manager
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "296px",
              left: "422px",
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
              src="/CL-2/image-981@2x.png"
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
              Compliance Officer
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "655px",
              left: "422px",
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
              src="/CL-2/image-121@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "24px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >{`Head Of People & Talent`}</Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "818px",
              left: "422px",
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
              src="/CL-2/image-1401@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "24px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >{`Operations Manager `}</Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1024px",
              left: "482px",
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
              src="/CL-2/image-146@2x.png"
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
              Quality Improvement Officer
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "790px",
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
              src="/CL-2/image-102@2x.png"
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
              Customer Engagement Coordinator
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "459px",
              left: "790px",
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
              src="/CL-2/group-2701@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "24px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >{`Global Talent Manager `}</Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "296px",
              left: "790px",
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
              src="/CL-2/image-108@2x.png"
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
              DDPO and Governance Lead
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "655px",
              left: "790px",
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
              src="/CL-2/group-2702@2x.png"
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
              Head of Product
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "818px",
              left: "790px",
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
              src="/CL-2/image-141@2x.png"
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
              People Operations Coordinator
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "1158px",
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
              src="/CL-2/image-103@2x.png"
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
              Customer Service Representative
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "459px",
              left: "1158px",
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
              src="/CL-2/image-115@2x.png"
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
              Head of B2B Marketing
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "296px",
              left: "1158px",
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
              src="/CL-2/image-123@2x.png"
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
              Head Of Quality And Governance
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "655px",
              left: "1158px",
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
              src="/CL-2/image-1351@2x.png"
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
              Membership Sales executive
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "818px",
              left: "1158px",
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
              src="/CL-2/image-144@2x.png"
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
              President
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "1024px",
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
              src="/CL-2/image-147@2x.png"
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
              Regional Manager
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "1526px",
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
              src="/CL-2/image-921@2x.png"
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
              Chief Marketing Officer
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "459px",
              left: "1526px",
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
                maxHeight: "100%",
                objectFit: "cover",
                zIndex: "1",
              }}
              width={80}
              height={80}
              alt=""
              src="/CL-2/image-29338@2x.png"
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
              Head Of Finance
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "296px",
              left: "1526px",
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
              src="/CL-2/image-124@2x.png"
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
              Head of the customer service
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "655px",
              left: "1526px",
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
              src="/CL-2/image-1291@2x.png"
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
              Human resources project manager
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "818px",
              left: "1526px",
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
              src="/CL-2/image-145@2x.png"
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
              Product Manager
            </Box>
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "140px",
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
              top: "499px",
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
              top: "336px",
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
              top: "695px",
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
              top: "858px",
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
              top: "140px",
              left: "700px",
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
              top: "499px",
              left: "700px",
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
              top: "336px",
              left: "700px",
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
              top: "695px",
              left: "700px",
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
              top: "858px",
              left: "700px",
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
              top: "1064px",
              left: "856px",
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
              top: "140px",
              left: "1074px",
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
              top: "499px",
              left: "1074px",
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
              top: "336px",
              left: "1074px",
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
              top: "695px",
              left: "1074px",
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
              top: "858px",
              left: "1074px",
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
              top: "140px",
              left: "1447px",
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
              top: "499px",
              left: "1447px",
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
              top: "336px",
              left: "1447px",
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
              top: "695px",
              left: "1447px",
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
              top: "858px",
              left: "1447px",
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
            top: "1121px",
            left: "70px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#00843d",
            boxSizing: "border-box",
            width: "1782px",
            height: "324px",
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
              People and Resource
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "54px",
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
              src="/CL-2/image-821@2x.png"
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
              Admin Coordinator
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "422px",
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
              src="/CL-2/image-871@2x.png"
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
              Chair of the Staff Governance Committee
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "790px",
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
              src="/CL-2/image-95@2x.png"
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
              Clinical People Development Business Partner
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "1158px",
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
              src="/CL-2/image-104@2x.png"
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
              Customer Success Executive
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "100px",
              left: "1526px",
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
              src="/CL-2/image-112@2x.png"
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
              Director of People
            </Box>
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "140px",
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
              top: "140px",
              left: "700px",
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
              top: "140px",
              left: "1074px",
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
              top: "140px",
              left: "1447px",
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

export default CareLibraryJobRoles;
