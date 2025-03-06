import type { NextPage } from "next";
import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const PracticalLaw: NextPage = () => {
  const router = useRouter();

  const onIconslineararrowLeftClick = useCallback(() => {
    router.push("/CL-2/care-library");
  }, [router]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "1636px",
        textAlign: "center",
        fontSize: "32px",
        color: "#5a5867",
        fontFamily: "Outfit",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "112px",
          left: "calc(50% - 897.5px)",
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
            sx={{ position: "relative", lineHeight: "40px", fontWeight: "600" }}
          >
            Practical Law
          </Box>
        </Box>
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
          top: "174px",
          left: "38px",
          borderRadius: "12px",
          backgroundColor: "#fff",
          borderWidth: "4px",
          borderStyle: "dashed",
          borderColor: "#666",
          boxSizing: "border-box",
          width: "1788px",
          height: "1403px",
          fontSize: "18px",
          color: "#fff",
          fontFamily: "Inter",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "94px",
            left: "70px",
            width: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "16px",
          }}
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
              width: "80px",
              position: "relative",
              height: "80px",
              objectFit: "cover",
              zIndex: "1",
            }}
            width={80}
            height={80}
            alt=""
            src="/CL-2/download1@2x.png"
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
            Legal Issue Identification
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "55px",
            left: "1436px",
            width: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "16px",
          }}
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
              height: "80px",
              objectFit: "cover",
              zIndex: "1",
            }}
            width={80}
            height={80}
            alt=""
            src="/CL-2/6159644-1@2x.png"
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
            Document Preparation
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "812px",
            left: "1448px",
            width: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "16px",
          }}
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
              width: "80px",
              position: "relative",
              height: "80px",
              objectFit: "cover",
              zIndex: "1",
            }}
            width={80}
            height={80}
            alt=""
            src="/CL-2/13338388-1@2x.png"
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
            <Typography variant="inherit" sx={{ margin: 0 }}>
              Court Proceedings
            </Typography>
            <Typography variant="inherit" sx={{ margin: 0 }}>
              (if required)
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "535px",
            left: "70px",
            width: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "16px",
          }}
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
              height: "80px",
              objectFit: "cover",
              zIndex: "1",
            }}
            width={80}
            height={80}
            alt=""
            src="/CL-2/10103208-1@2x.png"
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
            Research and Analysis
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "318px",
            left: "70px",
            width: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "16px",
          }}
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
              height: "80.6px",
              objectFit: "cover",
              zIndex: "1",
            }}
            width={80}
            height={81}
            alt=""
            src="/CL-2/34349209-consultationiconpngtransparentpng-1@2x.png"
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
            Consulation and Advice
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "752px",
            left: "70px",
            width: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "16px",
          }}
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
              height: "80px",
              objectFit: "cover",
              zIndex: "1",
            }}
            width={80}
            height={80}
            alt=""
            src="/CL-2/4838786-1@2x.png"
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
            Strategy Planning
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "976px",
            left: "70px",
            width: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "16px",
          }}
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
              width: "100px",
              position: "relative",
              height: "100px",
              objectFit: "cover",
              zIndex: "1",
            }}
            width={100}
            height={100}
            alt=""
            src="/CL-2/negotiationiconmodernlinesymbolvectorartdesignboldoutlineblackwhitepixelperfectminimalisticisolated337578185-1@2x.png"
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
            Negotiation and Mediation
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "1200px",
            left: "70px",
            width: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "16px",
          }}
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
              8
            </Typography>
          </Box>
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
            src="/CL-2/images-3@2x.png"
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
            Resolution and Compliance
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "56px",
            left: "438px",
            borderRadius: "12px",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#5a5867",
            boxSizing: "border-box",
            width: "860px",
            height: "181px",
            fontSize: "14px",
            color: "#1c3f95",
            fontFamily: "'Red Hat Text'",
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
              src="/CL-2/919793-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "21px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >
              Identify Legal Problems
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
              src="/CL-2/defineproblemmoderniconclipartillustrationvector-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "21px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >
              Define Problems
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
            <Image
              style={{
                width: "80px",
                position: "relative",
                height: "64px",
                objectFit: "cover",
                zIndex: "1",
              }}
              width={80}
              height={64}
              alt=""
              src="/CL-2/istockphoto1386740242612x612-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "21px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >
              Questions
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
          <Box
            sx={{
              position: "absolute",
              top: "76px",
              left: "536px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
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
              OR
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "497px",
            left: "427px",
            borderRadius: "12px",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#5a5867",
            boxSizing: "border-box",
            width: "860px",
            height: "181px",
            fontSize: "14px",
            color: "#1c3f95",
            fontFamily: "'Red Hat Text'",
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
              src="/CL-2/download-741@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "21px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >
              Gather Facts
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
              src="/CL-2/12427403-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "21px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >
              Review Precedents
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
              src="/CL-2/images-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "21px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >
              <Typography
                variant="inherit"
                sx={{ margin: 0 }}
              >{`Analyze Applicable `}</Typography>
              <Typography variant="inherit" sx={{ margin: 0 }}>
                Laws
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
              top: "76px",
              left: "536px",
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
        <Box
          sx={{
            position: "absolute",
            top: "280px",
            left: "438px",
            borderRadius: "12px",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#5a5867",
            boxSizing: "border-box",
            width: "860px",
            height: "181px",
            fontSize: "14px",
            color: "#1c3f95",
            fontFamily: "'Red Hat Text'",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "36px",
              left: "41px",
              width: "175px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "14px",
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
              src="/CL-2/11336538-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "21px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >
              Seek Legal Advice
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "36px",
              left: "546.3px",
              width: "175px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "14px",
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
              src="/CL-2/8123530-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "21px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >
              Consult Relevant Resource
            </Box>
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "87px",
              left: "369px",
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
        <Box
          sx={{
            position: "absolute",
            top: "281px",
            left: "1354px",
            borderRadius: "12px",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#5a5867",
            boxSizing: "border-box",
            width: "397px",
            height: "495px",
            fontSize: "14px",
            color: "#1c3f95",
            fontFamily: "'Red Hat Text'",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50px",
              left: "134px",
              width: "175px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "14px",
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
              src="/CL-2/6744389-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "21px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >
              Draft Necessary Legal Docs
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "336px",
              left: "134px",
              width: "175px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "14px",
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
              src="/CL-2/16901460-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "21px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >
              Review Legal Documents
            </Box>
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "244px",
              left: "184px",
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
        <Box
          sx={{
            position: "absolute",
            top: "1041px",
            left: "1354px",
            borderRadius: "12px",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#5a5867",
            boxSizing: "border-box",
            width: "397px",
            height: "305px",
            fontSize: "14px",
            color: "#1c3f95",
            fontFamily: "'Red Hat Text'",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "107px",
              left: "109px",
              width: "175px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "14px",
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
              src="/CL-2/8990943-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "21px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >
              Draft Necessary Legal Docs
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "714px",
            left: "438px",
            borderRadius: "12px",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#5a5867",
            boxSizing: "border-box",
            width: "860px",
            height: "181px",
            fontSize: "14px",
            color: "#1c3f95",
            fontFamily: "'Red Hat Text'",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "36px",
              left: "41px",
              width: "175px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "14px",
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
              src="/CL-2/8386399-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "21px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >
              Develop Legal Strategy
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "36px",
              left: "546.3px",
              width: "175px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "14px",
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
              src="/CL-2/images-2@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "21px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >
              Action Plan
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "87px",
              left: "369px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
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
              OR
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "938px",
            left: "438px",
            borderRadius: "12px",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#5a5867",
            boxSizing: "border-box",
            width: "860px",
            height: "181px",
            fontSize: "14px",
            color: "#1c3f95",
            fontFamily: "'Red Hat Text'",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "36px",
              left: "41px",
              width: "175px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "14px",
            }}
          >
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
              src="/CL-2/istockphoto1308441968612x612-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "21px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >
              Engage in Discussion
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "36px",
              left: "546.3px",
              width: "175px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "14px",
            }}
          >
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
              src="/CL-2/download-751@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "21px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >
              Resolve Issues
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "87px",
              left: "369px",
              width: "0px",
              height: "40px",
            }}
          />
          <Image
            style={{
              position: "absolute",
              top: "62px",
              left: "369px",
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
        <Box
          sx={{
            position: "absolute",
            top: "1162px",
            left: "438px",
            borderRadius: "12px",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#5a5867",
            boxSizing: "border-box",
            width: "860px",
            height: "181px",
            fontSize: "14px",
            color: "#1c3f95",
            fontFamily: "'Red Hat Text'",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "34px",
              left: "41px",
              width: "175px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "14px",
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
              src="/CL-2/13449922-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "21px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >
              Implement the judgment
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "72px",
              left: "265px",
              fontSize: "32px",
              lineHeight: "40px",
              fontWeight: "600",
              fontFamily: "Outfit",
              color: "#5a5867",
            }}
          >
            OR
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "34px",
              left: "361px",
              width: "175px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "14px",
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
              src="/CL-2/images-41@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "21px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >
              Implement the Agreement
            </Box>
          </Box>
          <Image
            style={{
              position: "absolute",
              top: "79px",
              left: "585px",
              borderRadius: "4px",
              width: "24.3px",
              height: "25px",
            }}
            width={24}
            height={25}
            alt=""
            src="/CL-2/.svg"
          />
          <Box
            sx={{
              position: "absolute",
              top: "31px",
              left: "658px",
              width: "175px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "14px",
            }}
          >
            <Image
              style={{
                width: "80px",
                position: "relative",
                height: "86px",
                objectFit: "cover",
                zIndex: "1",
              }}
              width={80}
              height={86}
              alt=""
              src="/CL-2/regulatorycompliancergbcoloriconvector33782666-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "21px",
                fontWeight: "500",
                zIndex: "0",
              }}
            >
              Ensure Compliance
            </Box>
          </Box>
        </Box>
        <Image
          style={{
            position: "absolute",
            top: "154px",
            left: "301px",
            maxHeight: "100%",
            width: "97px",
          }}
          width={97}
          height={12}
          alt=""
          src="/CL-2/arrow-399.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "595px",
            left: "301px",
            maxHeight: "100%",
            width: "97px",
          }}
          width={97}
          height={12}
          alt=""
          src="/CL-2/arrow-399.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "378px",
            left: "301px",
            maxHeight: "100%",
            width: "97px",
          }}
          width={97}
          height={12}
          alt=""
          src="/CL-2/arrow-399.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "180px",
            left: "1552px",
            width: "0px",
            height: "97px",
            objectFit: "contain",
          }}
          width={1}
          height={97}
          alt=""
          src="/CL-2/arrow-435.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "963px",
            left: "1564px",
            width: "0px",
            height: "71px",
            objectFit: "contain",
          }}
          width={1}
          height={71}
          alt=""
          src="/CL-2/arrow-46.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "812px",
            left: "301px",
            maxHeight: "100%",
            width: "97px",
          }}
          width={97}
          height={12}
          alt=""
          src="/CL-2/arrow-399.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "1036px",
            left: "301px",
            maxHeight: "100%",
            width: "97px",
          }}
          width={97}
          height={12}
          alt=""
          src="/CL-2/arrow-399.svg"
        />
        <Image
          style={{
            position: "absolute",
            top: "1260px",
            left: "301px",
            maxHeight: "100%",
            width: "97px",
          }}
          width={97}
          height={12}
          alt=""
          src="/CL-2/arrow-399.svg"
        />
      </Box>
    </Box>
  );
};

export default PracticalLaw;
