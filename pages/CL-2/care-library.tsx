import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ColorLegendsKey from "../../components/CL-2/color-legends-key";
import PortalPopup from "../../components/CL-2/portal-popup";
import { useRouter } from "next/router";

const CareLibrary: NextPage = () => {
  const [isColorLegendsKeyOpen, setColorLegendsKeyOpen] = useState(false);
  const router = useRouter();

  const openColorLegendsKey = useCallback(() => {
    setColorLegendsKeyOpen(true);
  }, []);

  const closeColorLegendsKey = useCallback(() => {
    setColorLegendsKeyOpen(false);
  }, []);

  const onWdgtContainerClick = useCallback(() => {
    router.push("/CL-2/care-library-existing-features");
  }, [router]);

  const onWdgtContainerClick1 = useCallback(() => {
    router.push("/CL-2/care-library-product-features");
  }, [router]);

  const onWdgtContainerClick2 = useCallback(() => {
    router.push("/CL-2/care-library-product-competito");
  }, [router]);

  const onWdgtContainerClick3 = useCallback(() => {
    router.push("/CL-2/care-library-supporting-docum");
  }, [router]);

  const onWdgtContainerClick4 = useCallback(() => {
    router.push("/CL-2/care-library-third-party-a-p-is");
  }, [router]);

  const onWdgtContainerClick5 = useCallback(() => {
    router.push("/CL-2/consultancy-outfit-tools");
  }, [router]);

  const onWdgtContainerClick6 = useCallback(() => {
    router.push("/CL-2/care-library-social-media-acco");
  }, [router]);

  const onWdgtContainerClick7 = useCallback(() => {
    router.push("/CL-2/care-library-chat-g-p-t4-traini");
  }, [router]);

  const onWdgtContainerClick8 = useCallback(() => {
    router.push("/CL-2/care-library-required-licenses");
  }, [router]);

  const onWdgtContainerClick9 = useCallback(() => {
    router.push("/CL-2/care-library-required-accredit");
  }, [router]);

  const onWdgtContainerClick10 = useCallback(() => {
    router.push("/CL-2/care-library-required-affiliat");
  }, [router]);

  const onWdgtContainerClick11 = useCallback(() => {
    router.push("/CL-2/care-library-required-memberships");
  }, [router]);

  const onWdgtContainerClick12 = useCallback(() => {
    window.open(
      "https://www.figma.com/proto/IMRos4h3lqQqZ00Rc60ZAh/United-Kingdom-Data?page-id=0%3A1&amp%3Bnode-id=3-2&amp%3Bnode-type=FRAME&amp%3Bviewport=627%2C1185%2C0.25&amp%3Bt=ejBgIJEIHA0w2coB-1&amp%3Bscaling=min-zoom&amp%3Bcontent-scaling=fixed&amp%3Bstarting-point-node-id=3%3A18&utm_source=link-unfurl&utm_medium=msft&utm_content=IMRos4h3lqQqZ00Rc60ZAh&utm_product_type=design&type=design&node-id=3-2&starting-point-node-id=3%3A18"
    );
  }, []);

  const onWdgtContainerClick13 = useCallback(() => {
    // Please sync "Counties" to the project
  }, []);

  const onWdgtContainerClick14 = useCallback(() => {
    router.push("/CL-2/care-library-subject-access-re1");
  }, [router]);

  const onWdgtContainerClick15 = useCallback(() => {
    router.push("/CL-2/care-library-c-o-b-i-t-implementat");
  }, [router]);

  const onWdgtContainerClick16 = useCallback(() => {
    router.push("/CL-2/care-library-required-certific");
  }, [router]);

  const onWdgtContainerClick17 = useCallback(() => {
    router.push("/CL-2/care-library-job-roles");
  }, [router]);

  const onWdgtContainerClick18 = useCallback(() => {
    router.push("/CL-2/care-library-modification-date");
  }, [router]);

  const onWdgtContainerClick19 = useCallback(() => {
    router.push("/CL-2/l-a-r-s-courses-classification");
  }, [router]);

  const onWdgtContainerClick20 = useCallback(() => {
    router.push("/CL-2/color-legends-key1");
  }, [router]);

  const onWdgtContainerClick21 = useCallback(() => {
    window.open(
      "https://www.figma.com/proto/7P4P10BdDdV99BnWu6BEla/User?node-id=54-1911&p=f&t=HeFZbyCQ9zLhv35X-0&scaling=min-zoom&content-scaling=fixed&page-id=2%3A19&starting-point-node-id=54%3A1911"
    );
  }, []);

  const onWdgtContainerClick22 = useCallback(() => {
    window.open(
      "https://www.figma.com/proto/VN9IIQLnHtUNj4Hpbz2O8u/Chat-Bot-Design?node-id=546-31463&p=f&viewport=-5383%2C1302%2C0.07&t=oGhQTOOPSN8zbvhe-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=546%3A42379"
    );
  }, []);

  const onWdgtContainerClick23 = useCallback(() => {
    router.push("/CL-2/practical-law");
  }, [router]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          backgroundColor: "#fff",
          height: "3742px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "116px",
          boxSizing: "border-box",
          gap: "69.6px",
          textAlign: "left",
          fontSize: "80px",
          color: "#0246bc",
          fontFamily: "Inter",
        }}
      >
        <Box
          sx={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "46.4px",
          }}
        >
          <Box sx={{ flex: 1, position: "relative", fontWeight: "600" }}>
            Care Library
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              cursor: "pointer",
              textAlign: "right",
              fontSize: "35px",
            }}
          >
            <Box
              sx={{
                position: "relative",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              Color Legends (Key)
            </Box>
            <Image
              style={{
                width: "40px",
                position: "relative",
                height: "40px",
                overflow: "hidden",
                flexShrink: "0",
                objectFit: "cover",
              }}
              width={40}
              height={40}
              alt=""
              src="/CL-2/chevron-12@2x.png"
            />
          </Box>
        </Box>
        <Box
          sx={{
            alignSelf: "stretch",
            height: "3387px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            alignContent: "flex-start",
            gap: "40px 20px",
            textAlign: "center",
            fontSize: "24px",
            color: "#024d9c",
          }}
        >
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick}
          >
            <Image
              style={{
                width: "220px",
                position: "relative",
                height: "220px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={220}
              height={220}
              alt=""
              src="/CL-2/7444241-2@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              <Typography variant="inherit" sx={{ margin: 0 }}>
                Product Features
              </Typography>
              <Typography
                variant="inherit"
                sx={{ margin: 0 }}
              >{`(1st Release) `}</Typography>
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "23.6px",
                right: "24px",
                borderRadius: "5px",
                backgroundColor: "#16853f",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick1}
          >
            <Image
              style={{
                width: "220px",
                position: "relative",
                height: "220px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={220}
              height={220}
              alt=""
              src="/CL-2/4739550-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              <Typography
                variant="inherit"
                sx={{ margin: 0 }}
              >{`Product Features `}</Typography>
              <Typography
                variant="inherit"
                sx={{ margin: 0 }}
              >{`(2nd Release) `}</Typography>
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "23.6px",
                right: "24px",
                borderRadius: "5px",
                backgroundColor: "#1c3f95",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick2}
          >
            <Image
              style={{
                width: "200px",
                position: "relative",
                height: "200px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={200}
              height={200}
              alt=""
              src="/CL-2/16314351-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              <Typography
                variant="inherit"
                sx={{ margin: 0 }}
              >{`Product `}</Typography>
              <Typography variant="inherit" sx={{ margin: 0 }}>
                Competitors List
              </Typography>
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "23.6px",
                right: "24.5px",
                borderRadius: "5px",
                backgroundColor: "#16853f",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick3}
          >
            <Image
              style={{
                width: "200px",
                position: "relative",
                height: "200px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={200}
              height={200}
              alt=""
              src="/CL-2/4133422-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              <Typography
                variant="inherit"
                sx={{ margin: 0 }}
              >{`Supporting Documents/ `}</Typography>
              <Typography variant="inherit" sx={{ margin: 0 }}>
                Guidelines
              </Typography>
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "23.6px",
                right: "23.7px",
                borderRadius: "5px",
                backgroundColor: "#16853f",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick4}
          >
            <Image
              style={{
                width: "180px",
                position: "relative",
                height: "180px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={180}
              height={180}
              alt=""
              src="/CL-2/4180439-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              <Typography
                variant="inherit"
                sx={{ margin: 0 }}
              >{`Third party `}</Typography>
              <Typography variant="inherit" sx={{ margin: 0 }}>
                APIs
              </Typography>
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "23.6px",
                right: "24px",
                borderRadius: "5px",
                backgroundColor: "#16853f",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick5}
          >
            <Image
              style={{
                width: "200px",
                position: "relative",
                height: "200px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={200}
              height={200}
              alt=""
              src="/CL-2/1055683-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              <Typography
                variant="inherit"
                sx={{ margin: 0 }}
              >{`Consultancy Outfit `}</Typography>
              <Typography variant="inherit" sx={{ margin: 0 }}>
                Tools
              </Typography>
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "23.6px",
                right: "24.2px",
                borderRadius: "5px",
                backgroundColor: "#16853f",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick6}
          >
            <Image
              style={{
                width: "200px",
                position: "relative",
                height: "200px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={200}
              height={200}
              alt=""
              src="/CL-2/1968666-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              <Typography
                variant="inherit"
                sx={{ margin: 0 }}
              >{`Social Media `}</Typography>
              <Typography variant="inherit" sx={{ margin: 0 }}>
                Accounts
              </Typography>
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "23.6px",
                right: "24.5px",
                borderRadius: "5px",
                backgroundColor: "#16853f",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick7}
          >
            <Image
              style={{
                width: "196.2px",
                position: "relative",
                height: "200px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={196}
              height={200}
              alt=""
              src="/CL-2/chatgptlogotransparentfreepng-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              <Typography
                variant="inherit"
                sx={{ margin: 0 }}
              >{`Chat GPT 4 `}</Typography>
              <Typography variant="inherit" sx={{ margin: 0 }}>
                Training
              </Typography>
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "23.6px",
                right: "23.7px",
                borderRadius: "5px",
                backgroundColor: "#16853f",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick8}
          >
            <Image
              style={{
                width: "200px",
                position: "relative",
                height: "200px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={200}
              height={200}
              alt=""
              src="/CL-2/1728431-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              <Typography variant="inherit" sx={{ margin: 0 }}>
                Required
              </Typography>
              <Typography variant="inherit" sx={{ margin: 0 }}>
                {" "}
                Licenses
              </Typography>
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "23.6px",
                right: "24px",
                borderRadius: "5px",
                backgroundColor: "#1c3f95",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick9}
          >
            <Image
              style={{
                width: "200px",
                position: "relative",
                height: "200px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={200}
              height={200}
              alt=""
              src="/CL-2/12797129-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              <Typography
                variant="inherit"
                sx={{ margin: 0 }}
              >{`Required `}</Typography>
              <Typography variant="inherit" sx={{ margin: 0 }}>
                Accreditation
              </Typography>
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "23.6px",
                right: "24.2px",
                borderRadius: "5px",
                backgroundColor: "#1c3f95",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick10}
          >
            <Image
              style={{
                width: "200px",
                position: "relative",
                height: "200px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={200}
              height={200}
              alt=""
              src="/CL-2/16977807-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              <Typography
                variant="inherit"
                sx={{ margin: 0 }}
              >{`Required `}</Typography>
              <Typography variant="inherit" sx={{ margin: 0 }}>
                Affiliations
              </Typography>
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "23.6px",
                right: "24.5px",
                borderRadius: "5px",
                backgroundColor: "#1c3f95",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick11}
          >
            <Image
              style={{
                width: "200px",
                position: "relative",
                height: "200px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={200}
              height={200}
              alt=""
              src="/CL-2/7186404-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              <Typography
                variant="inherit"
                sx={{ margin: 0 }}
              >{`Required `}</Typography>
              <Typography variant="inherit" sx={{ margin: 0 }}>
                Memberships
              </Typography>
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "23.6px",
                right: "23.7px",
                borderRadius: "5px",
                backgroundColor: "#1c3f95",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick12}
          >
            <Image
              style={{
                width: "193px",
                position: "relative",
                height: "192px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={193}
              height={192}
              alt=""
              src="/CL-2/laremovebgpreview-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              <Typography
                variant="inherit"
                sx={{ margin: 0 }}
              >{`Local Authorities `}</Typography>
              <Typography variant="inherit" sx={{ margin: 0 }}>
                Data
              </Typography>
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "23.6px",
                right: "24px",
                borderRadius: "5px",
                backgroundColor: "#16853f",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick13}
          >
            <Image
              style={{
                width: "200px",
                position: "relative",
                height: "200px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={200}
              height={200}
              alt=""
              src="/CL-2/8074800-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              <Typography
                variant="inherit"
                sx={{ margin: 0 }}
              >{`University Internships `}</Typography>
              <Typography variant="inherit" sx={{ margin: 0 }}>
                Data
              </Typography>
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "23.6px",
                right: "24.2px",
                borderRadius: "5px",
                backgroundColor: "#a0a5a9",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick14}
          >
            <Image
              style={{
                width: "200px",
                position: "relative",
                height: "154.3px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={200}
              height={154}
              alt=""
              src="/CL-2/clipart2564799-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              <Typography
                variant="inherit"
                sx={{ margin: 0 }}
              >{`Subject Access `}</Typography>
              <Typography variant="inherit" sx={{ margin: 0 }}>
                Request (SAR)
              </Typography>
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "23.6px",
                right: "24.5px",
                borderRadius: "5px",
                backgroundColor: "#1c3f95",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick15}
          >
            <Image
              style={{
                width: "206.5px",
                position: "relative",
                height: "200px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={207}
              height={200}
              alt=""
              src="/CL-2/cobitremovebgpreview-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              <Typography
                variant="inherit"
                sx={{ margin: 0 }}
              >{`COBIT `}</Typography>
              <Typography variant="inherit" sx={{ margin: 0 }}>
                Implementation
              </Typography>
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "23.6px",
                right: "23.7px",
                borderRadius: "5px",
                backgroundColor: "#16853f",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
            }}
          >
            <Image
              style={{
                width: "200px",
                position: "relative",
                height: "200px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={200}
              height={200}
              alt=""
              src="/CL-2/762686-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              Adhoc Tasks
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "23.6px",
                right: "24px",
                borderRadius: "5px",
                backgroundColor: "#e86a10",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
            }}
          >
            <Image
              style={{
                width: "200px",
                position: "relative",
                height: "200px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={200}
              height={200}
              alt=""
              src="/CL-2/4133572-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              Misc. Tasks
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "23.6px",
                right: "24.2px",
                borderRadius: "5px",
                backgroundColor: "#a0a5a9",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick16}
          >
            <Image
              style={{
                width: "200px",
                position: "relative",
                height: "200px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={200}
              height={200}
              alt=""
              src="/CL-2/9948525-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              <Typography variant="inherit" sx={{ margin: 0 }}>
                Required Certifications
              </Typography>
              <Typography
                variant="inherit"
                sx={{ margin: 0 }}
              >{`& Qualifications`}</Typography>
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "23.6px",
                right: "24px",
                borderRadius: "5px",
                backgroundColor: "#1c3f95",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick17}
          >
            <Image
              style={{
                width: "200px",
                position: "relative",
                height: "200px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={200}
              height={200}
              alt=""
              src="/CL-2/12905265-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              Job Roles
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "23.6px",
                right: "23.7px",
                borderRadius: "5px",
                backgroundColor: "#16853f",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick18}
          >
            <Image
              style={{
                width: "176px",
                position: "relative",
                height: "176px",
                objectFit: "cover",
                mixBlendMode: "multiply",
                zIndex: "0",
              }}
              width={176}
              height={176}
              alt=""
              src="/CL-2/oip-28@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              Content Modification Date
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "23.6px",
                right: "24px",
                borderRadius: "5px",
                backgroundColor: "#e86a10",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick19}
          >
            <Image
              style={{
                width: "200px",
                position: "relative",
                height: "200px",
                objectFit: "cover",
                mixBlendMode: "multiply",
                zIndex: "0",
              }}
              width={200}
              height={200}
              alt=""
              src="/CL-2/oip-29@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              E-Learning
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "23.6px",
                right: "24.2px",
                borderRadius: "5px",
                backgroundColor: "#1c3f95",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick20}
          >
            <Image
              style={{
                width: "194px",
                position: "relative",
                height: "151px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={194}
              height={151}
              alt=""
              src="/CL-2/dashboardicon23-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              Product Status
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "23.6px",
                right: "24px",
                borderRadius: "5px",
                backgroundColor: "#16853f",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              position: "relative",
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick21}
          >
            <Box
              sx={{
                position: "absolute",
                top: "80.4px",
                left: "115px",
                backgroundColor: "#510af5",
                width: "176px",
                height: "155px",
              }}
            />
            <Image
              style={{
                position: "absolute",
                top: "144.4px",
                left: "140px",
                width: "126px",
                height: "26px",
                overflow: "hidden",
              }}
              width={126}
              height={26}
              alt=""
              src="/CL-2/frame-1686556815.svg"
            />
            <Box
              sx={{
                position: "absolute",
                top: "270px",
                left: "80px",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                width: "247px",
                height: "76px",
              }}
            >
              Agentic 007
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "23.6px",
                right: "23.7px",
                borderRadius: "5px",
                backgroundColor: "#1c3f95",
                width: "32px",
                height: "32px",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick22}
          >
            <Image
              style={{
                width: "195px",
                position: "relative",
                height: "195px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={195}
              height={195}
              alt=""
              src="/CL-2/6014401-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              ChatBot
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "16.6px",
                right: "77px",
                borderRadius: "5px",
                backgroundColor: "#1c3f95",
                height: "32px",
                zIndex: "2",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "40px",
              backgroundColor: "#e1ecff",
              height: "447px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick23}
          >
            <Image
              style={{
                width: "200px",
                position: "relative",
                height: "200px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={200}
              height={200}
              alt=""
              src="/CL-2/10295688-1@2x.png"
            />
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "76px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              Practical law
            </Box>
            <Box
              sx={{
                width: "32px",
                position: "absolute",
                margin: "0 !important",
                top: "16.6px",
                right: "77px",
                borderRadius: "5px",
                backgroundColor: "#a0a5a9",
                height: "32px",
                zIndex: "2",
              }}
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
          <ColorLegendsKey onClose={closeColorLegendsKey} />
        </PortalPopup>
      )}
    </>
  );
};

export default CareLibrary;
